import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { getOrderId, requestPrint } from "@/actions/actions";

const WEBHOOK = process.env.WEBHOOK || "";
const clover_url = process.env.CLOVER_BASE_URL || ""
const merchant_id = process.env.MERCHANT_ID || ""
const hosted_token = process.env.API_KEY || ""

const getTimeFromSig = (str: string):{timeStamp: string, signature: string } => {
  console.log(str, 'LOOK HERE')
  const sliced = str.slice(2)
  const spliced = sliced.split(',')
  return { timeStamp: spliced[0], signature: spliced[1].slice(3)}
}

export async function POST(req: NextRequest) {
  console.debug('ROUTE IS RUNNING')
  try {
    // Data from webhook 
    const body = await req.text();
    const parsedBody = JSON.parse(body)
    console.log('PARSED BODY; ', parsedBody)
    const signatureData = req.headers.get("clover-signature") || "";
    const { timeStamp, signature } = getTimeFromSig(signatureData)

    const dateAndBody = `${timeStamp}.${body}`;

    const expectedSignature = crypto.createHmac("sha256", WEBHOOK).update(dateAndBody).digest("hex");
    // console.debug('expected:', expectedSignature, '\n', 'recieved: ', signature)

    if (signature !== expectedSignature) {
      console.debug('WRONG SIGNING KEY')
      return NextResponse.json({ error: "Invalid Signature" }, { status: 401 });
    }

    NextResponse.json({ message: "Processing in background" }, { status: 200 });
    // PAYMENT IS APPROVED GET TO PRINTING THE RECIEPT ON THE CLOVER MAHCINE
    if(parsedBody.type === 'PAYMENT' && parsedBody.status === 'APPROVED'){
      console.debug('parsed', parsedBody)
      console.debug('payment id', parsedBody.id)

      const requestUrl = `${clover_url}/v3/merchants/${merchant_id}/payments/${parsedBody.id}`
      // console.debug('request url:', requestUrl)

      let clientOrderId = await getOrderId(requestUrl)
      // console.log('what is this', orderId)
      console.debug('client order id', clientOrderId)
      requestPrint(clientOrderId)

    }


    return NextResponse.json({ message: "Webhook processed" }, { status: 200 });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}


