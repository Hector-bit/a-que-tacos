'use server'
import { boolean, string, z } from 'zod';
import { redirect } from 'next/navigation';
import { CloverInstance } from '@/app/axios';
import { NextResponse } from 'next/server';
import axios, { AxiosResponse } from 'axios';
import { CustomerInfoType, OrderItem } from '../../utils/types';
import { LOCATION_CREDS, MID_TO_SIGNAGE, MID_TO_LOCATION, MerchantLocationsType } from '@utils/merchantConstants';

export const checkoutAtomicOrder = async(location: MerchantLocationsType, cartData: OrderItem[], customerData: CustomerInfoType) => {
  const LOCATION = LOCATION_CREDS[location]

  const response = await fetch(`${LOCATION.APIROUTE}/v3/merchants/${LOCATION.MID}/atomic_order/checkouts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${LOCATION.HOSTED_TOKEN}`,
    }
  })

  if (!response.ok) {
    throw new Error('Failed to create order');
  }


  const data = await response.json();
  console.log('Order created successfully:', data);

  //save order id to local storage
  // localStorage.setItem('ORDER_ID', JSON.stringify(data.))

  // return data;
  redirect(`/create-order/checkout/${data.id}`); // Redirect to the checkout page with the order ID
}

export const getOrderById = async (orderId: string, location: MerchantLocationsType) => {
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


