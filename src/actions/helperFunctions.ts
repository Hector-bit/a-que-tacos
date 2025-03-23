import { MerchantLocationsType, locationHours, locationOperatingTime } from "@utils/merchantConstants";
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

  if (openingTime < closingTime) {
    return currentTime >= openingTime && currentTime < closingTime;
  } else {
    return currentTime >= openingTime || currentTime < closingTime;
  }
}