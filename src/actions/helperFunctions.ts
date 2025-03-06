import { MerchantLocations } from "@utils/mercchantTypes";
import { resolveNaptr } from "dns";
import { NextResponse } from "next/server";

const isProduction = process.env.NEXT_PUBLIC_IS_PRODUCTION
const api_clover = process.env.CLOVER_BASE_URL
const api_test = process.env.CLOVER_BASE_URL_TEST

const testMID = process.env.MERCHANT_ID_TEST  
const eversonMID = process.env.MERCHANT_ID_EVERSON
const blaineMID = process.env.MERCHANT_ID_EVERSON
const bellinghamMID = process.env.MERCHANT_ID_EVERSON

const testToken = process.env.API_KEY
const eversonToken = process.env.API_KEY_EVERSON
const blaineToken = process.env.API_KEY_EVERSON
const bellinghamToken = process.env.API_KEY_EVERSON

// const configApiRoute = {

// }

const configVariables = {
  'TEST': {
    MID: testMID,
    API_Token: testToken
  },
  'EVERSON': {
    MID: testMID,
    API_Token: testToken
  },
  'BLAINE': {
    MID: testMID,
    API_Token: testToken
  },
  'BELLINGHAM': {
    MID: testMID,
    API_Token: testToken
  },
}

export const getBaseAPI = () => {
  if(isProduction){
    return api_clover
  } else {
    return api_test
  }
}

export const getIsOpen = async() => {
  const today = new Date();
  const dayOfWeek = today.getDay()

  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  console.log(hours, minutes)
  return hours + minutes
}

export const getAPIToken = (location: MerchantLocations) => {
  let locationMID = null

  if(location === 'EVERSON'){
    locationMID = eversonToken
  } else if (location === 'BLAINE'){
    locationMID = blaineToken
  } else if (location === 'BELLINGHAM'){
    locationMID = bellinghamToken
  } else if (location === 'TEST'){
    locationMID = testToken
  }

  return locationMID
} 

export const getMerchantID = (location: MerchantLocations) => {
  let locationMID = null

  if(location === 'EVERSON'){
    locationMID = eversonMID
  } else if (location === 'BLAINE'){
    locationMID = blaineMID
  } else if (location === 'BELLINGHAM'){
    locationMID = bellinghamMID
  } else if (location === 'TEST'){
    locationMID = testMID
  }


  return locationMID
} 

export const getMerchantIsClosed = async(location: MerchantLocations):Promise<any> => {

  let locationMID = getMerchantID(location)
  let locationToken = getAPIToken(location)

  const fetchHoursUrl = `${api_clover}/v3/merchants/${locationMID}/opening_hours`

  try {
    let response = await fetch(fetchHoursUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${locationToken}`
      }
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json()

    console.log('data from merchanis closed', data)
    return true

  } 
  catch(err){
    console.error(`error fetching hours: ${err}`)
    return false
  }
}