import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { getOrderId, requestPrint, getCredentialsFromLocation, getLocationFromMID, updateOrderEmployee } from "@/actions/actions";
import { MID_TO_SIGNAGE } from "@utils/merchantConstants";

const getTimeFromSig = (str: string):{timeStamp: string, signature: string } => {
  // console.log(str, 'LOOK HERE')
  const sliced = str.slice(2)
  const spliced = sliced.split(',')
  return { timeStamp: spliced[0], signature: spliced[1].slice(3)}
}

export async function POST(req: NextRequest) {
  console.debug('ROUTE IS RUNNING')
  try {
    // Data from webhook 
    const body = await req.text();
    const parsedBody = await JSON.parse(body)
    const merchantId = parsedBody.merchantId
    const signatureData = req.headers.get("clover-signature") || "";
    const { timeStamp, signature } = getTimeFromSig(signatureData)
    console.log('PARSED BODY; ', parsedBody, '\n merchantId: ', merchantId, typeof(merchantId), "\n signage:", MID_TO_SIGNAGE[merchantId], '\nMID STORE VAL', MID_TO_SIGNAGE)
    const location = await getLocationFromMID(merchantId)
    const localCredentials = await getCredentialsFromLocation(location)

    console.log(`Credientials for ${location}: ${localCredentials}`)

    const dateAndBody = `${timeStamp}.${body}`;

    const expectedSignature = crypto.createHmac("sha256", localCredentials.SIGNATURE).update(dateAndBody).digest("hex");
    console.debug('expected:', expectedSignature, '\n', 'recieved: ', signature)

    if (signature !== expectedSignature) {
      // console.debug('WRONG SIGNING KEY')
      return NextResponse.json({ error: "Invalid Signature" }, { status: 401 });
    }

    // NextResponse.json({ message: "Processing in background" }, { status: 200 });
    // PAYMENT IS APPROVED GET TO PRINTING THE RECIEPT ON THE CLOVER MAHCINE
    if(parsedBody.type === 'PAYMENT' && parsedBody.status === 'APPROVED'){
      // console.debug('parsed', parsedBody)
      console.debug('payment id', parsedBody.id)

      const requestUrl = `${localCredentials.APIROUTE}/v3/merchants/${merchantId}/payments/${parsedBody.id}`
      console.debug('request url:', requestUrl)

      await new Promise(resolve => setTimeout(resolve, 15000));

      // waitToRunNextRoute(requestUrl)

      const clientOrderId = await getOrderId(merchantId, requestUrl)
      const tempres = await updateOrderEmployee(merchantId, clientOrderId)
      console.debug('client order id', clientOrderId)

      await requestPrint(merchantId, clientOrderId)
    }


    return NextResponse.json({ message: "Webhook processed" }, { status: 200 });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}


