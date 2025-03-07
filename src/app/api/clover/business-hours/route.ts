import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { getOrderId, requestPrint } from "@/actions/actions";

const WEBHOOK = process.env.WEBHOOK || "";
const clover_url = process.env.CLOVER_BASE_URL || ""
const merchant_id = process.env.MERCHANT_ID || ""
const hosted_token = process.env.API_KEY || ""

export async function GET() {
  const requestUrl = `${clover_url}/v3/merchants/${merchant_id}/opening_hours`
  // console.debug('HOURS IS RUNNING')

  try {

    let response:Response = await fetch(requestUrl, {
      headers: {
        "content-type": 'application/json',
        "Authorization": `Bearer ${hosted_token}`
      }
    })

    const data = await response.json()
    // console.log('response data from hours: ', data)
    return NextResponse.json(data.elements[0])
  }
  catch(error){
    console.error("error fetching business hours:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}


