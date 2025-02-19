/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY: process.env.API_KEY,
    MERCHANT_ID: process.env.MERCHANT_ID
  }
};

export default nextConfig;
