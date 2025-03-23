import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { getOrderId, requestPrint } from "@/actions/actions";

const WEBHOOK = process.env.WEBHOOK || "";
const clover_url = process.env.CLOVER_BASE_URL || ""
const merchant_id = process.env.MERCHANT_ID || ""
const hosted_token = process.env.API_KEY || ""

// export async function GET(req: NextRequest):Promise<NextResponse<any>> {
//   const requestUrl = `${clover_url}/v3/merchants/${merchant_id}/opening_hours`
//   console.debug('HOURS IS RUNNING: ', req)

//   try {
//     const newDate = new Date()
//     console.log('date from server: ', newDate)
//     console.log('is it true?/', checkIfTrue)
//     return NextResponse.json({ body: checkIfTrue })
//   }
//   catch(error){
//     console.error("error fetching business hours:", error);
//     return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//   }
// }


