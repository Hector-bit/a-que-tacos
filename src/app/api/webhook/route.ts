import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const WEBHOOK = process.env.WEBHOOK || "";
const clover_url = process.env.CLOVER_BASE_URL || ""
const merchant_id = process.env.MERCHANT_ID || ""
const hosted_token = process.env.API_KEY || ""

const getTimeFromSig = (str: string){
  const sliced = str.slice(2)
  const spliced = sliced.split(',')
  console.debug('TIMESTAMP: ', spliced[0], spliced)
  return spliced[0]
}

export async function POST(req: NextRequest) {
  console.debug('ROUTE IS RUNNING')
  try {
    const body = await req.text();
    console.debug('body ', body, req)
    const signature = req.headers.get("clover-signature") || "";

    const parsedBody =JSON.parse(body)

    const timeStamp = getTimeFromSig(signature)

    const dateAndBody = `${timeStamp}.${body}`;

    // ✅ Verify HMAC signature
    const expectedSignature = crypto.createHmac("sha256", WEBHOOK).update(dateAndBody).digest("hex");
    console.debug('expected:', expectedSignature, '\n', 'recieved: ', signature)
    if (signature !== expectedSignature) {
      console.debug('WRONG SIGNING KEY')
      return NextResponse.json({ error: "Invalid Signature" }, { status: 401 });
    }

    console.debug("Verified Webhook:", JSON.parse(body));

    if(parsedBody.type === 'PAYMENT' && parsedBody.status === 'APPROVED'){
      console.debug('parsed: ', parsedBody)
      const printBody = {
        "orderRef": {
          "id": parsedBody.id
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
        return NextResponse.json({ message: 'posted print request'}, {status: 200})
      })
        .catch((err) => {
          return NextResponse.json({ error: "could not post print request" }, { status: 500 });
        })
      // try {
        
      // } catch {
      //   //todo: have a fallback like a message to me or something
      //   return NextResponse.json({ error: "Could not submit print request" }, { status: 500 });
      // }

    }


    return NextResponse.json({ message: "Webhook processed" }, { status: 200 });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}


