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

export const getCurrentTime = () => {
  const today = new Date();
  const dayOfWeek = today.getDay()

  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  console.log(hours, minutes)
  return hours + minutes
}

