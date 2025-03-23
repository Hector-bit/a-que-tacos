import { MerchantLocationsType, locationHours } from "@utils/merchantConstants";
import { daysOfWeek } from "@utils/constants";
import { NextResponse } from "next/server";
import { LOCATION_CREDS, MID_TO_SIGNAGE } from "@utils/merchantConstants";


export const getCurrentTime = () => {
  const today = new Date();
  const dayOfWeek = today.getDay()

  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  console.debug(hours, minutes)
  return hours + minutes
}

export function isBetween11And6(date: Date, location: MerchantLocationsType): boolean {
  const openingTime = locationHours[location].opening
  const closingTime = locationHours[location].closing
  console.log('opening: ', openingTime, ' closing: ', closingTime)
  console.log(openingTime >= 18, closingTime < 1)
  //11am is 18 in utc
  //6pm is 1 in utc
  const currDate = new Date(date.toUTCString())
  const hours = currDate.getUTCHours();
  return openingTime >= 18 && closingTime < 1
}