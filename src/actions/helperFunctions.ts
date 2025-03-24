import { MerchantLocationsType, locationOperatingTime } from "@utils/merchantConstants";
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

export function isWitinOperatingTime(date: Date, location: MerchantLocationsType): boolean {
  const openingTime = locationOperatingTime[location].opening
  const closingTime = locationOperatingTime[location].closing
  const now = date
  const hours = now.getUTCHours();
  const minutes = now.getUTCMinutes();

  // Convert current UTC time to minutes since midnight
  const currentTime = hours * 60 + minutes;

  //need to check if opening time is less than closing when crossing midnight
  if (openingTime < closingTime) {
    return currentTime >= openingTime && currentTime < closingTime;
  } else {
    return currentTime >= openingTime || currentTime < closingTime;
  }
}

export const minutesToHoursReadable = (minutes: number): string => { 
  // utc time is 7 hours ahead 
  let hours = Math.abs(24 + Math.floor(minutes / 60) - 7) % 24;
  const remainingMinutes = minutes % 60;

  if(hours > 12){
    hours = hours-12
  }

  if(remainingMinutes !== 0){
    return `${hours}:${remainingMinutes}`
  } else {
    return `${hours}`
  }
}