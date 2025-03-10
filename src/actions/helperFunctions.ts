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
  // const now = new Date();
  // const laHour = new Intl.DateTimeFormat("en-US", {
  //   timeZone: "America/Los_Angeles",
  //   hour: "numeric",
  //   hour12: false, // 24-hour format
  // }).format(now);


  const currDay = new Date().getDay();
  const currTimeTemp = getCurrentTime()
  const currTime = Number(currTimeTemp)

  const startTime = 1412 //15 minute padding for parents to open
  const endTime = 1745 //2.5 hr padding bc they close early
  console.log('start time: ', startTime, ' curr time: ', currTime, ' end time: ', endTime)
  if(startTime <= currTime && currTime <= endTime){
    return true
  } else {
    return false
  }

}

export function sum(a:number, b:number) {
  return a + b;
}

export function isBetween11And6(date: Date): boolean {
  //11pm is 18 in utc
  //6pm is 1 in utc
  const currDate = new Date(date.toUTCString())
  const hours = currDate.getUTCHours();
  const localHour = currDate.getHours();
  console.log('hours: ', hours, ' local hour: ', localHour)
  console.log('curr date: ', date.toUTCString(), ' other: ', date)
  return hours >= 18 || hours < 1
}