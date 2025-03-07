import { MerchantLocations } from "@utils/mercchantTypes";
import { daysOfWeek } from "@utils/constants";
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

  console.debug(hours, minutes)
  return hours + minutes
}

export const isBusinessOpen = async():Promise<boolean> => {
  const currDay = new Date().getDay();
  const currTimeTemp = getCurrentTime()
  const currTime = Number(currTimeTemp)
  // console.log('current time: ', currTime)

    // let res:Response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/clover/business-hours`)
    // const businessHours = await res.json()
    // setHours(info.toString())
    // console.log(businessHours)
    // let currHours = businessHours[daysOfWeek[currDay]].elements[0]
    // console.log(currHours, 'current hours')
    // const startTime = Number(currHours.start) + 15 //15 minute padding for parents to open
    // const endTime = Number(currHours.end) - 250 //2.5 hr padding bc they close early
  const startTime = 1115 //15 minute padding for parents to open
  const endTime = 1745 //2.5 hr padding bc they close early
  console.log('start time: ', startTime, ' curr time: ', currTime, ' end time: ', endTime)
  if(startTime <= currTime && currTime <= endTime){
    return true
  } else {
    return false
  }

}
