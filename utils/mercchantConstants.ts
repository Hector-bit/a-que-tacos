

export type MerchantLocationsTestType = 'EVERSON' | 'BLAINE' | 'BELLINGHAM' | 'TEST' | 'SELECT'
export type MerchantLocationsType = 'EVERSON' | 'BLAINE' | 'BELLINGHAM' | 'TEST' | 'SELECT'

export const LOCATIONS:MerchantLocationsType[] = ['SELECT', 'TEST', 'BELLINGHAM', 'BLAINE', 'EVERSON']

export const LOCATION_CREDS: Record<MerchantLocationsType, { MID: string, HOSTED_TOKEN: string }> = {
  'SELECT': {
    MID: process.env.TEST_MERCHANT_ID as string,
    HOSTED_TOKEN: process.env.TEST_API_KEY as string
  },
  'TEST': {
    MID: process.env.TEST_MERCHANT_ID as string,
    HOSTED_TOKEN: process.env.TEST_API_KEY as string
  },
  'BELLINGHAM': {
    MID: process.env.BELLINGHAM_MERCHANT_ID as string,
    HOSTED_TOKEN: process.env.BELLINGHAM_API_KEY as string
  },
  'EVERSON': {
    MID: process.env.EVERSON_MERCHANT_ID as string,
    HOSTED_TOKEN: process.env.EVERSON_API_KEY as string
  },
  'BLAINE': {
    MID: process.env.BLAINE_MERCHANT_ID as string,
    HOSTED_TOKEN: process.env.BLAINE_API_KEY as string
  }
}

// TIMES ARE IN UTC/Z TIME
export const LOCATION_HOURS: Record<MerchantLocationsType, { opening: number, closing: number }> = {
  'SELECT': {
    opening: 11,
    closing: 6
  },
  'TEST': {
    opening: 11,
    closing: 6
  },
  'BELLINGHAM': {
    opening: 11,
    closing: 7
  },
  'EVERSON': {
    opening: 11,
    closing: 7
  },
  'BLAINE': {
    opening: 11,
    closing: 6
  }
}

export const location_address = {
  'SELECT': 'Please selected a location',
  'TEST': 'no location for test',
  'BELLINGHAM': '1315 W Connecticut St, Bellingham, WA 98225',
  'EVERSON': '117 W Main St, Everson, WA 98247',
  'BLAINE': '8101 Blaine Rd, Blaine, WA 98230'
}