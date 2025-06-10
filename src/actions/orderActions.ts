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

  //save order id to local storage
  // localStorage.setItem('ORDER_ID', JSON.stringify(data.))

  // return data;
  redirect(`/create-order/checkout/${data.id}?location=${location}`); // Redirect to the checkout page with the order ID
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

