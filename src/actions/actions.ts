'use server'
import { boolean, string, z } from 'zod';
import { redirect } from 'next/navigation';
import { CloverInstance } from '@/app/axios';
import axios, { AxiosResponse } from 'axios';
import { CustomerInfoType, OrderItem } from '../../utils/types';
import { MenuNameDictionary, IngredientDictionary, itemToPriceObj, ChoiceOfMeatEspanolDictionary } from '@utils/constants';

const clover_url = process.env.CLOVER_BASE_URL
const merchant_id = process.env.MERCHANT_ID
const hosted_token = process.env.API_KEY

export type CustomerState = {
  errors?: {
    firstname?: string[];
    lastname?: string[];
    email?: string[];
    phoneNumber?: string[];
  };
  message?: string | null
};

type ErrorState =  {
  firstname?: string[];
  lastname?: string[];
  email?: string[];
  phoneNumber?: string[];
  cart?: string[]
};

const CustomerScheme = z.object({
  firstname: z.string({
    invalid_type_error: 'Please enter a first name'
  }).min(2),
  lastname: z.string({
    invalid_type_error: 'Please enter a last name'
  }).min(2),
  email: z.string({
    invalid_type_error: 'Please enter an email'
  }).email("Invalid email"),
  phoneNumber: z.string({
    invalid_type_error: 'Please enter a phone number'
  }).min(10, 'Phone number must be at least 10 digits'),
  cart: z.number({
    invalid_type_error: 'Please add orders to your cart'
  }).gt(0)
});

const dummyData =  {
  "shoppingCart": {
  "lineItems": [
      {
      "name": "Taco",
      "unitQty": 4,
      "price": 200
      },
      {
      "name": "Orange",
      "unitQty": 2,
      "price": 75
      }
  ]
  },
  "customer": {
  "email": "email@example.com",
  "firstName" : "Example",
  "lastName": "Customer",
  "phoneNumber": "223-555-0002"
  }
}

const CreateOrder = CustomerScheme.omit({})

export const fetchCloverLink = async(cartData: OrderItem[], customerData: CustomerInfoType):Promise<ErrorState> => {
  console.debug('start fetchclover link call')
  let link = 'undefined'

  const validatedFields = CreateOrder.safeParse({
    firstname: customerData.firstName,
    lastname: customerData.lastName,
    email: customerData.email,
    phoneNumber: customerData.phoneNumber,
    cart: cartData.length
  })

  console.debug('VALIDATED FIELDS:', validatedFields)

  if(!validatedFields.success){
    // console.log('ERRORS', validatedFields.error)
    return validatedFields.error.flatten().fieldErrors
  }
  // console.log('testing note')


  const formatData = {
    "shoppingCart": {
      "lineItems": cartData.map((item) => {

        const meatChoice = item.meatChoice !== 'NOT_APPLICABLE' ? ` (${ChoiceOfMeatEspanolDictionary[item.meatChoice]})` : ''

        return {
          "name": `${MenuNameDictionary[item.orderItem]}${meatChoice}`,
          "unitQty": item.amount,
          "price": itemToPriceObj[item.orderItem],
          "note": "No: " + item.removeIngredients.map(ing => {
            return `${IngredientDictionary[ing]}`
          })
        }
      })
      },
      "customer": {
      "email": customerData.email,
      "firstName" : customerData.firstName,
      "lastName": customerData.lastName,
      "phoneNumber": customerData.phoneNumber
      }
  }

  // console.log('LINE ITEMS', formatData.shoppingCart.lineItems)
  // console.log('running on server', formatData)
  // return formatData
  await axios.post(
    `${clover_url}/invoicingcheckoutservice/v1/checkouts`,
    JSON.stringify(formatData),
    {
      headers: {
        'Content-Type': 'application/json',
        'X-Clover-Merchant-ID': merchant_id, 
        'Authorization': `Bearer ${hosted_token}`
      }
    }
    ).then ((res) => {
      // console.log('thennnnn', typeof(res.data))
    // const parsed = JSON.parse(res.data)
    // console.log(res.data.href, 'should not run on the client', res.data)
      link = res.data.href
      return link
  }).catch((error) => {
    // console.error('MY_ERROR_P:', error)
      return error
  }) 
  
  redirect(link)
}

export const getIsOpen = async():Promise<boolean> => {
  const res = await axios.get(
    `${clover_url}/invoicingcheckoutservice/v1/checkouts`,
    // JSON.stringify(formatData),
    {
      headers: {
        'Content-Type': 'application/json',
        'X-Clover-Merchant-ID': merchant_id, 
        'Authorization': `Bearer ${hosted_token}`
      }
    }
  )
  return false
}