

export type MerchantLocationsTestType = 'EVERSON' | 'BLAINE' | 'BELLINGHAM' | 'TEST' | 'SELECT'
export type MerchantLocationsType = 'EVERSON' | 'BLAINE' | 'BELLINGHAM' | 'TEST' | 'SELECT'

export const LOCATIONS:MerchantLocationsType[] = ['SELECT', 'TEST', 'BELLINGHAM', 'BLAINE', 'EVERSON']

export const LOCATION_CREDS: Record<MerchantLocationsType, { APIROUTE: string, MID: string, HOSTED_TOKEN: string }> = {
  'SELECT': {
    APIROUTE: process.env.CLOVER_BASE_URL_SANDBOX as string,
    MID: process.env.TEST_MERCHANT_ID as string,
    HOSTED_TOKEN: process.env.TEST_API_KEY as string
  },
  'TEST': {
    APIROUTE: process.env.CLOVER_BASE_URL_SANDBOX as string,
    MID: process.env.TEST_MERCHANT_ID as string,
    HOSTED_TOKEN: process.env.TEST_API_KEY as string
  },
  'BELLINGHAM': {
    APIROUTE: process.env.CLOVER_BASE_URL as string,
    MID: process.env.BELLINGHAM_MERCHANT_ID as string,
    HOSTED_TOKEN: process.env.BELLINGHAM_API_KEY as string
  },
  'EVERSON': {
    APIROUTE: process.env.CLOVER_BASE_URL as string,
    MID: process.env.EVERSON_MERCHANT_ID as string,
    HOSTED_TOKEN: process.env.EVERSON_API_KEY as string
  },
  'BLAINE': {
    APIROUTE: process.env.CLOVER_BASE_URL as string,
    MID: process.env.BLAINE_MERCHANT_ID as string,
    HOSTED_TOKEN: process.env.BLAINE_API_KEY as string
  }
}

// TIMES ARE IN UTC/Z TIME
export const location_hours: Record<MerchantLocationsType, { opening: number, closing: number }> = {
  //11pm is 18 in utc
  //6pm is 1 in utc
  'SELECT': {
    opening: 18,
    closing: 1
  },
  'TEST': {
    opening: 18,
    closing: 5
  },
  'BELLINGHAM': {
    opening: 18,
    closing: 2
  },
  'EVERSON': {
    opening: 18,
    closing: 1
  },
  'BLAINE': {
    opening: 18,
    closing: 2
  }
}

export const location_address = {
  'SELECT': 'Please select a location',
  'TEST': 'no location for test',
  'BELLINGHAM': '1315 W Connecticut St, Bellingham, WA 98225',
  'EVERSON': '117 W Main St, Everson, WA 98247',
  'BLAINE': '8101 Blaine Rd, Blaine, WA 98230'
}