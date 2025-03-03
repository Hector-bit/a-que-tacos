import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { getOrderId, requestPrint } from "@/actions/actions";

const WEBHOOK = process.env.WEBHOOK || "";
const clover_url = process.env.CLOVER_BASE_URL || ""
const merchant_id = process.env.MERCHANT_ID || ""
const hosted_token = process.env.API_KEY || ""

export async function POST(req: NextRequest) {
  console.debug('PRINTORDER IS RUNNING')
  const body = await req.json()
  console.debug(body)

  let customerOrderId = await getOrderId(body.url)

  await requestPrint(customerOrderId)

  NextResponse.json({ message: 'print call successfull'}, { status: 200 })
}


