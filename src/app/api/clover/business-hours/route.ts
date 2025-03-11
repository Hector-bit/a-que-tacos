import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { getOrderId, requestPrint } from "@/actions/actions";
import { isBetween11And6 } from "@/actions/helperFunctions";

const WEBHOOK = process.env.WEBHOOK || "";
const clover_url = process.env.CLOVER_BASE_URL || ""
const merchant_id = process.env.MERCHANT_ID || ""
const hosted_token = process.env.API_KEY || ""

export async function GET():Promise<NextResponse> {
  const requestUrl = `${clover_url}/v3/merchants/${merchant_id}/opening_hours`
  console.debug('HOURS IS RUNNING')

  try {
    const newDate = new Date()
    console.log('date from server: ', newDate)
    const checkIfTrue = isBetween11And6(newDate)
    console.log('is it true?/', checkIfTrue)
    return NextResponse.json(newDate)
  }
  catch(error){
    console.error("error fetching business hours:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}


