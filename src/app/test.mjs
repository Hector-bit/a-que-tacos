// import crypto from "crypto";
import { NextResponse } from "next/server.js";
import axios from "axios";

// const nextResponse = require('NextResponse')
// const aaxios = require('axios')

const WEBHOOK = process.env.WEBHOOK || "";
const clover_url = 'https://apisandbox.dev.clover.com'
const merchant_id = 'XNZX5N3BWHS91'
const hosted_token = 'bc2e63a3-2677-2e2c-3790-4e169ab46183'

console.log('build url vars: ', clover_url, merchant_id, hosted_token)


const getOrderId = async() => {
  const requestUrl = `${clover_url}/v3/merchants/${merchant_id}/payments/AS294Z19MPQWJ`
  console.debug('STARTING DELAY')
  // await new Promise(resolve => setTimeout(resolve, 5000));
  console.debug('after delay', requestUrl)
  let fetchOrderId = await axios.get(
    requestUrl,
    {
      headers: {
        'Authorization': `Bearer ${hosted_token}`
      }
    }
  ).then((res) => {
    console.debug('getting order id', res.data)
    return res.data
  })
  .catch((err) => {
    console.debug('error fetching order id', err)
    return NextResponse.json({ error: `could not get order id`}, { status: err.status });
  })

  console.debug('order id request data: ', fetchOrderId.order.id)

  // REQUEST CLOVER MACHINE TO PRINT RECIEPT
  // requestPrint(fetchOrderId.data.order.id)

  return fetchOrderId.order.id
} 

getOrderId();


