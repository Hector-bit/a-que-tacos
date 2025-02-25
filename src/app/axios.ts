import axios from "axios";

export const CloverInstance = axios.create({
  baseURL: 'https://sandbox.dev.clover.com',
  timeout: 3000,
  headers: { 
    'X-Clover-Merchant-ID': process.env.MERCHANT_ID, 
    'Authorization': process.env.API_KEY
  }
})


