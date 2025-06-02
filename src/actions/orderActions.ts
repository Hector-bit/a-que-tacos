'use server'
import { boolean, string, z } from 'zod';
import { redirect } from 'next/navigation';
import { CloverInstance } from '@/app/axios';
import { NextResponse } from 'next/server';
import axios, { AxiosResponse } from 'axios';
import { CustomerInfoType, OrderItem } from '../../utils/types';
import { MenuNameDictionary, IngredientDictionary, itemToPriceObj, ChoiceOfMeatEspanolDictionary } from '@utils/constants';
import { LOCATION_CREDS, MID_TO_SIGNAGE, MID_TO_LOCATION, MerchantLocationsType } from '@utils/merchantConstants';

const createAtomicOrder = async(location: MerchantLocationsType, cartData: OrderItem[], customerData: CustomerInfoType) => {
  const LOCATION = LOCATION_CREDS[location]


  const response = await fetch(`${LOCATION.APIROUTE}/v3/merchants/${LOCATION.MID}/atomic_order/orders`, {
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
  return data;
}


