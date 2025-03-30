'use server'
import { boolean, string, z } from 'zod';
import { redirect } from 'next/navigation';
import { CloverInstance } from '@/app/axios';
import { NextResponse } from 'next/server';
import axios, { AxiosResponse } from 'axios';
import { CustomerInfoType, OrderItem } from '../../utils/types';
import { MenuNameDictionary, IngredientDictionary, itemToPriceObj, ChoiceOfMeatEspanolDictionary } from '@utils/constants';
import { LOCATION_CREDS, MID_TO_SIGNAGE, MID_TO_LOCATION, MerchantLocationsType } from '@utils/merchantConstants';

// const clover_url = process.env.CLOVER_BASE_URL
// const merchant_id = process.env.MERCHANT_ID
// const hosted_token = process.env.API_KEY

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

export const fetchCloverLink = async(location: MerchantLocationsType, cartData: OrderItem[], customerData: CustomerInfoType):Promise<ErrorState> => {
  // console.debug('start fetchclover link call')
  const LOCATION = LOCATION_CREDS[location]
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
  // console.log('running on server', formatData)
  // console.debug('post info: ', clover_url, LOCATION.MID, LOCATION.HOSTED_TOKEN)
  await axios.post(
    `${LOCATION.APIROUTE}/invoicingcheckoutservice/v1/checkouts`,
    JSON.stringify(formatData),
    {
      headers: {
        'Content-Type': 'application/json',
        'X-Clover-Merchant-ID': `${LOCATION.MID}`, 
        'Authorization': `Bearer ${LOCATION.HOSTED_TOKEN}`
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

export const getOrderId = async (merchant_id:string, requestUrl: string) => {
  const LOCATION = LOCATION_CREDS[MID_TO_LOCATION[merchant_id]] 
  console.debug('STARTING GET REQ: ', requestUrl, LOCATION);
  // await new Promise(resolve => setTimeout(resolve, 2000));
  // console.debug('after delay', requestUrl);

  try {
    const response = await fetch(requestUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${LOCATION.HOSTED_TOKEN}`
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
    console.debug('error fetching order id', err);
    return NextResponse.json({ error: `could not get order id` }, { status: err instanceof Error ? 500 : err.status });
  }
};

// REQUEST CLOVER MACHINE TO PRINT RECIEPT
export const requestPrint = async ( MID: string, orderId: string) => {
  const LOCATION = LOCATION_CREDS[MID_TO_LOCATION[MID]] 
  console.debug("Starting print request", orderId, LOCATION);

  const printBody = {
    orderRef: { id: orderId },
  };

  try {
    const response = await fetch(`${LOCATION.APIROUTE}/v3/merchants/${LOCATION.MID}/print_event`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${LOCATION.HOSTED_TOKEN}`,
      },
      body: JSON.stringify(printBody),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status});}`);
    }

    const data = await response.json();
    console.debug("MADE IT TO THE END", data);

    return NextResponse.json({ message: "Posted print request" }, { status: 200 });
  } catch (err) {
    console.debug("Error printing", err);
    return NextResponse.json({ error: "Could not post print request" }, { status: 500 });
  }
};

export const getLocationFromMID = async(MID: string) => {
  const localLocation = MID_TO_LOCATION[MID]
  // console.log('SERVER HERE: ','\nlocalLocation: ', localLocation, '\nMID: ', MID, '\n mid object: ', MID_TO_LOCATION)
  return localLocation
}

export const getCredentialsFromLocation = async(location: MerchantLocationsType) => {
  const localCreds = LOCATION_CREDS[location]
  // console.log('plesase what is this: ', localCreds)
  return localCreds
}

export const updateOrderEmployee = async(MID: string, orderId: string) => {
  const LOCATION = LOCATION_CREDS[MID_TO_LOCATION[MID]] 

  const requestUrl = `${LOCATION.APIROUTE}/v3/merchants/${LOCATION.MID}/orders/${orderId}`

  try {
    const response = await fetch(requestUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${LOCATION.HOSTED_TOKEN}`,
      },
      body: JSON.stringify( { employee: { id: LOCATION.EMPLOYEE }} ),
    })

    const data = await response.json()
    console.log('employee res: ', data)

    return NextResponse.json({ message: "Posted employee id" }, { status: 200 });
  } catch(error) {
    console.error('error posting employee id: ', error)
    return NextResponse.json({ error: "Could not post print request" }, { status: 500 });
  }
}