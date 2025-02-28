import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";

const WEBHOOK = process.env.WEBHOOK || "";

export async function POST(req: NextRequest) {
  console.debug('ROUTE IS RUNNING')
  try {
    const body = await req.text();
    console.debug('body ', body)
    const signature = req.headers.get("clover-signature") || "";

    // ✅ Verify HMAC signature
    const expectedSignature = crypto.createHmac("sha256", WEBHOOK).update(body).digest("hex");
    if (signature !== expectedSignature) {
      return NextResponse.json({ error: "Invalid Signature" }, { status: 401 });
    }

    console.debug("Verified Webhook:", JSON.parse(body));

    return NextResponse.json({ message: "Webhook processed" }, { status: 200 });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}


