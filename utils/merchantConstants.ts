

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

export const MID_TO_LOCATION: Record<string, MerchantLocationsType> = {
  [process.env.TEST_WEBHOOK as string]: 'TEST',
  [process.env.BELLINGHAM_WEBHOOK as string]: 'BELLINGHAM',
  [process.env.EVERSON_WEBHOOK as string]: 'EVERSON',
  [process.env.BLAINE_WEBHOOK as string]: 'BLAINE'
}


export const MID_TO_SIGNAGE = {
  [process.env.TEST_WEBHOOK as string]: 'hcp_6c0606b209b26b499dc474ece677ada7',
  [process.env.BELLINGHAM_WEBHOOK as string]: 'hcp_395f957a367d0b359cd58ba37faadcc9',
  [process.env.EVERSON_WEBHOOK as string]: 'hcp_379287c7e9050611aafccca5e24477e7',
  [process.env.BLAINE_WEBHOOK as string]: 'hcp_1e32e112cc70c0b093e5bcd7e20af1af'
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
    closing: 17
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