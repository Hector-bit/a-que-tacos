'use server'
import { boolean, string, z } from 'zod';
import { redirect } from 'next/navigation';
import { CloverInstance } from '@/app/axios';
import { NextResponse } from 'next/server';
import axios, { AxiosResponse } from 'axios';
import { AtomicCheckoutResponse } from '@utils/types/atomicTypes';
import { CustomerInfoType, OrderItem } from '../../utils/types';
import { MenuNameDictionary, IngredientDictionary, itemToPriceObj, ChoiceOfMeatEspanolDictionary } from '@utils/constants';
import { LOCATION_CREDS, MID_TO_SIGNAGE, MID_TO_LOCATION, MerchantLocationsType } from '@utils/merchantConstants';

import { ItemIdList, ItemModifierType } from '@utils/types/itemsTypes';
import { CloverOrder } from '@utils/types/orderTypes';
import { CloverOrderLineItem } from '@utils/types/lineItems';
import { ResponseWrapper } from '@utils/types/typeHelpers';
import { PayOrder } from '@utils/types/payOrderTypes';
import { CardType, CreateCardTokenResponse } from '@utils/types/tokenType';

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

const PayOrderSchema = z.object({
  cardNumber: z.string({
    invalid_type_error: 'Please enter a card number'
  }).min(16, 'Card number must be at least 16 digits'),
  exp_month: z.string({
    invalid_type_error: 'Please enter an expiration month'
  }).min(1, 'Expiration month must be at least 1 digit'),
  exp_year: z.string({
    invalid_type_error: 'Please enter an expiration year'
  }).min(2, 'Expiration year must be at least 2 digits'),
  cvv: z.string({
    invalid_type_error: 'Please enter a CVV'
  }).min(3, 'CVV must be at least 3 digits'),
  name: z.string({
    invalid_type_error: 'Please enter a name'
  }).min(2, 'Name must be at least 2 characters'),

  orderId: z.string({
    invalid_type_error: 'Please enter an order ID' 
  }).min(1, 'Order ID must be at least 1 digit'),
  location: z.string({
    invalid_type_error: 'Please select a location'
  })
});

export type PayOrderFormState = {
  errors?: { 
    //these 5 vars are used to validate the card form
    cardNumber?: string[];
    exp_month?: string[];
    exp_year?: string[];
    cvv?: string[];
    name?: string[];

    orderId?: string[];
    location?: string[];
  };
  message?: string | null;

}

const CreateOrder = CustomerScheme.omit({})

export const checkoutAtomicOrder = async(location: MerchantLocationsType, cartData: OrderItem[]):Promise<AtomicCheckoutResponse | undefined> => {
  // console.debug('start fetchclover link call')
  const LOCATION = LOCATION_CREDS[location]


  const formatData: { orderCart: { lineItems: { item: any, unitQty: number, modifications: any}[] } } = {
    "orderCart": {
      "lineItems": cartData.map((item) => {

        const meatModifier = item.meatChoice !== 'NOT_APPLICABLE' ? `${ItemModifierType[item.meatChoice]}` : ''

        return {
          "item": {
            "id": ItemIdList[item.orderItem],
          },
          "unitQty": item.amount * 1000,

          "modifications": [
          item.meatChoice !== 'NOT_APPLICABLE' ? (
            {
              "id": meatModifier,
            }
          ) : null],
        }
      })
      },
  }

  
  console.log('formatData from order actions: ', formatData, formatData.orderCart, formatData.orderCart.lineItems, formatData.orderCart.lineItems[0].modifications, LOCATION.HOSTED_TOKEN)

  const response = await fetch(`${LOCATION.APIROUTE}/v3/merchants/${LOCATION.MID}/atomic_order/orders`,
    {
      method: 'POST',
      body: JSON.stringify(formatData),
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${LOCATION.HOSTED_TOKEN}`,
      } 
    }
  )

  // return error if response is not ok
  if (!response.ok) {
    console.error('Error creating order:', response.statusText);
    throw new Error('Failed to create order');
  }


  const data:AtomicCheckoutResponse = await response.json();
  console.log('Order created successfully:', data);

  return data

  //save order id to local storage
  // localStorage.setItem('ORDER_ID', JSON.stringify(data.))

  // return data;
  // redirect(`/create-order/checkout/${data.id}?location=${location}`); // Redirect to the checkout page with the order ID
}

export const getOrderById = async (orderId: string, location: MerchantLocationsType):Promise<CloverOrder | undefined> => {
  const LOCATION = LOCATION_CREDS[location];

  try {
    const response = await fetch(`${LOCATION.APIROUTE}/v3/merchants/${LOCATION.MID}/orders/${orderId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${LOCATION.HOSTED_TOKEN}`,
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch order');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching order:', error);
    throw error;
  }
}

export const getOrderLineItems = async (orderId: string, location: MerchantLocationsType):Promise<ResponseWrapper<CloverOrderLineItem[]> | undefined> => {
  const LOCATION = LOCATION_CREDS[location];

  try {
    const response = await fetch(`${LOCATION.APIROUTE}/v3/merchants/${LOCATION.MID}/orders/${orderId}/line_items`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${LOCATION.HOSTED_TOKEN}`,
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch order line items');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching order line items:', error);
    throw error;
  }
}

export const createCardToken = async (orderId: string, location: MerchantLocationsType, card: CardType):Promise<string | undefined> => {
  // Function to create a card token for payment processing
  // step 1: Fetch apiKey from Clover API
  // step 2: Use the apiKey to create a card token
  const LOCATION = LOCATION_CREDS[location];
  try {
    const response = await fetch(`${LOCATION.APIROUTE}/v1/tokens`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "apiKey": `Bearer ${LOCATION.HOSTED_TOKEN}`,
      }
    });

    if (!response.ok) {
      throw new Error('Failed to create card token');
    }

    const data = await response.json();
    return data.id; // Assuming the token ID is returned in the response
  } catch (error) {
    console.error('Error creating card token:', error);
    throw error;
  }
}

export const PostPayOrder = async (prevState: PayOrderFormState, formData: FormData) => {

  const validatedData = PayOrderSchema.safeParse({
    cardNumber: formData.get('cardNumber')?.toString(),
    exp_month: formData.get('exp_month')?.toString(), 
    exp_year: formData.get('exp_year')?.toString(), 
    cvv: formData.get('cvv')?.toString(),
    name: formData.get('name')?.toString(),

    orderId: formData.get('orderId')?.toString(),
    location: formData.get('location')?.toString()
  });

  if (!validatedData.success) {
    console.error('Validation failed:', validatedData.error);
    throw new Error('Invalid card details');
  }

  const { cardNumber, exp_month, exp_year, cvv, name, orderId, location } = validatedData.data;

  const LOCATION = LOCATION_CREDS[location as MerchantLocationsType];

  const cardToken = await createCardToken(
    orderId, 
    location as MerchantLocationsType,
    {
      number: validatedData.data.cardNumber,
      exp_month: validatedData.data.exp_month,
      exp_year: validatedData.data.exp_year,
      cvv: validatedData.data.cvv,
      name: validatedData.data.name
    } as CardType
  );

  if (!cardToken) {
    console.error('Failed to create card token');
    throw new Error('Card token creation failed');
  } else {
    console.log('Card token created successfully:', cardToken);
  }

  try {
    const response = await fetch(`${LOCATION.APIROUTE}/v3/merchants/${LOCATION.MID}/orders/${orderId}/pay`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${LOCATION.HOSTED_TOKEN}`,
      }
    });

    if (!response.ok) {
      throw new Error('Failed to pay order');
    }

    const data = await response.json();
    console.log('Order paid successfully:', data);
    return data;
  } catch (error) { 
    console.error('Error paying order:', error);
    throw error;
  }
}
