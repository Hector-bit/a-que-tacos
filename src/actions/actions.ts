'use server'
import { boolean, string, z } from 'zod';
import { redirect } from 'next/navigation';
import { CloverInstance } from '@/app/axios';
import { NextResponse } from 'next/server';
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

const CreateOrder = CustomerScheme.omit({})

export const fetchCloverLink = async(cartData: OrderItem[], customerData: CustomerInfoType):Promise<ErrorState> => {
  // console.debug('start fetchclover link call')
  let link = 'undefined'

  const validatedFields = CreateOrder.safeParse({
    firstname: customerData.firstName,
    lastname: customerData.lastName,
    email: customerData.email,
    phoneNumber: customerData.phoneNumber,
    cart: cartData.length
  })

  // console.debug('VALIDATED FIELDS:', validatedFields)

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
          "note": item.removeIngredients.length > 0 ? "No: " + item.removeIngredients.map(ing => {
            return `${IngredientDictionary[ing]}`
          }) : null,
          "taxRates": [
            {
              "name": "Whatcom Sales Tax",
              "rate": 880000
            }
          ]
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
  console.log('running on server', formatData)
  console.debug('post info: ', clover_url, merchant_id, hosted_token)
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
    console.error('Error getting checkout link:', error)
      return error
  }) 
  
  redirect(link)
}

export const getOrderId = async (requestUrl: string) => {
  console.debug('STARTING GET REQ: ', requestUrl);
  // await new Promise(resolve => setTimeout(resolve, 2000));
  // console.debug('after delay', requestUrl);

  try {
    const response = await fetch(requestUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${hosted_token}`
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const fetchOrderId = await response.json();
    // console.debug('getting order id', fetchOrderId);

    // console.debug('order id request data: ', fetchOrderId.order.id);

    // REQUEST CLOVER MACHINE TO PRINT RECEIPT
    // requestPrint(fetchOrderId.order.id);

    return fetchOrderId.order.id;
  } catch (err:any) {
    console.debug('error fetching order id', err.essage);
    return NextResponse.json({ error: `could not get order id` }, { status: err instanceof Error ? 500 : err.status });
  }
};

// REQUEST CLOVER MACHINE TO PRINT RECIEPT
export const requestPrint = async (orderId: string) => {
  console.debug("Starting print request", orderId);

  const printBody = {
    orderRef: { id: orderId },
  };

  try {
    const response = await fetch(`${clover_url}/v3/merchants/${merchant_id}/print_event`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Clover-Merchant-ID": `${merchant_id}`,
        "Authorization": `Bearer ${hosted_token}`,
      },
      body: JSON.stringify(printBody),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status});
      }`);
    }

    const data = await response.json();
    console.debug("MADE IT TO THE END", data);

    return NextResponse.json({ message: "Posted print request" }, { status: 200 });
  } catch (err) {
    console.debug("Error printing", err);
    return NextResponse.json({ error: "Could not post print request" }, { status: 500 });
  }
};

export const fetchMyHours = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  try{
    let fetchingHours = fetch(`${baseUrl}/api/clover/business-hours`)
    
  } catch {
    console.error('error fetching if we are open')
  }
}