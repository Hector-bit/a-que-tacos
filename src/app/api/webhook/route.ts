import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const WEBHOOK = process.env.WEBHOOK || "";
const clover_url = process.env.CLOVER_BASE_URL || ""
const merchant_id = process.env.MERCHANT_ID || ""
const hosted_token = process.env.API_KEY || ""

const getTimeFromSig = (str: string):{timeStamp: string, signature: string } => {
  const sliced = str.slice(2)
  const spliced = sliced.split(',')
  return { timeStamp: spliced[0], signature: spliced[1].slice(3)}
}

const getOrderId = async(requestUrl: string) => {
  console.debug('STARTING DELAY')
  // await new Promise(resolve => setTimeout(resolve, 9000));
  console.debug('after delay', requestUrl)
  let fetchOrderId = await axios.get(
    requestUrl,
    {
      headers: {
        'Authorization': `Bearer ${hosted_token}`
      }
    }
  ) .then((res) => {
    console.debug('getting order id', res.data)
    return res.data
  })
    .catch((err) => {
      console.debug('error fetching order id', err)
      return NextResponse.json({ error: `could not get order id`}, { status: err.status });
  })

  console.debug('order id request data: ', fetchOrderId.data)

  // REQUEST CLOVER MACHINE TO PRINT RECIEPT
  requestPrint(fetchOrderId.data.order.id)

  return fetchOrderId.data.order.id
} 

// REQUEST CLOVER MACHINE TO PRINT RECIEPT
const requestPrint = async(orderId: string) => {
  const printBody = {
    "orderRef": {
      "id": orderId
    }
  }

  await axios.post(
    `${clover_url}/v3/merchants/${merchant_id}/print_event`,
    JSON.stringify(printBody),
    {
      headers: {
        'Content-Type': 'application/json',
        'X-Clover-Merchant-ID': merchant_id, 
        'Authorization': `Bearer ${hosted_token}`
      }
    }
  ) .then((res) => {
    console.debug('MADE IT TO THE END')
    return NextResponse.json({ message: 'posted print request'}, {status: 200})
  })
    .catch((err) => {
      console.debug('error printing', err)
      return NextResponse.json({ error: `could not post print request`}, { status: 500 });
  })
}

export async function POST(req: NextRequest) {
  console.debug('ROUTE IS RUNNING')
  try {
    // Data from webhook 
    const body = await req.text();
    const parsedBody = JSON.parse(body)
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
      console.debug('id', parsedBody.id)

      const requestUrl = `${clover_url}/v3/merchants/${merchant_id}/payments/${parsedBody.id}`
      console.debug('request url:', requestUrl)

      getOrderId(requestUrl)
      // console.log('what is this', orderId)

    }


    return NextResponse.json({ message: "Webhook processed" }, { status: 200 });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}


