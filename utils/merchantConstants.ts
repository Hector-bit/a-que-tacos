export type MerchantLocationsTestType = 'EVERSON' | 'BLAINE' | 'BELLINGHAM' | 'TEST' | 'SELECT'
export type MerchantLocationsType = 'EVERSON' | 'BLAINE' | 'BELLINGHAM' | 'TEST' | 'SELECT'

export const LOCATIONS:MerchantLocationsType[] = ['SELECT', 'TEST', 'BELLINGHAM', 'BLAINE', 'EVERSON']

const testWebhook = process.env.TEST_WEBHOOK!;
const bellinghamWebhook = process.env.BELLINGHAM_WEBHOOK!;
const eversonWebhook = process.env.EVERSON_WEBHOOK!;
const blaineWebhook = process.env.BLAINE_WEBHOOK!;

export const LOCATION_CREDS: Record<MerchantLocationsType, { APIROUTE: string, MID: string, HOSTED_TOKEN: string, SIGNATURE: string }> = {
  'SELECT': {
    APIROUTE: process.env.CLOVER_BASE_URL_SANDBOX as string,
    MID: 'select',
    HOSTED_TOKEN:'select',
    SIGNATURE: 'select'
  },
  'TEST': {
    APIROUTE: process.env.CLOVER_BASE_URL_SANDBOX as string,
    MID: process.env.TEST_MERCHANT_ID as string,
    HOSTED_TOKEN: process.env.TEST_API_KEY as string,
    SIGNATURE: process.env.TEST_WEBHOOK as string
  },
  'BELLINGHAM': {
    APIROUTE: process.env.CLOVER_BASE_URL as string,
    MID: process.env.BELLINGHAM_MERCHANT_ID as string,
    HOSTED_TOKEN: process.env.BELLINGHAM_API_KEY as string,
    SIGNATURE: process.env.BELLINGHAM_WEBHOOK as string
  },
  'EVERSON': {
    APIROUTE: process.env.CLOVER_BASE_URL as string,
    MID: process.env.EVERSON_MERCHANT_ID as string,
    HOSTED_TOKEN: process.env.EVERSON_API_KEY as string,
    SIGNATURE: process.env.EVERSON_WEBHOOK as string
  },
  'BLAINE': {
    APIROUTE: process.env.CLOVER_BASE_URL as string,
    MID: process.env.BLAINE_MERCHANT_ID as string,
    HOSTED_TOKEN: process.env.BLAINE_API_KEY as string,
    SIGNATURE: process.env.BLAINE_WEBHOOK as string
  }
}

export const MID_TO_LOCATION: Record<string, MerchantLocationsType> = {
  [testWebhook]: 'TEST',
  [bellinghamWebhook]: 'BELLINGHAM',
  [eversonWebhook]: 'EVERSON',
  [blaineWebhook]: 'BLAINE'
}


export const MID_TO_SIGNAGE = {
  [testWebhook]: 'hcp_6c0606b209b26b499dc474ece677ada7',
  [bellinghamWebhook]: 'hcp_395f957a367d0b359cd58ba37faadcc9',
  [eversonWebhook]: 'hcp_379287c7e9050611aafccca5e24477e7',
  [blaineWebhook]: 'hcp_1e32e112cc70c0b093e5bcd7e20af1af',
}

// export const getMIDFromLocation = (MID: string) => {
//   const localMID = LOCATION_CREDS[MID_TO_LOCATION[MID]]
//   console.log('======================\ncurr local: ', localMID.MID, localMID, '\n======================')
//   return localMID
// }

// export const getSignFromMid = async(MID: string) => {
//   const localMID = MID_TO_SIGNAGE[MID]
//   console.log('SERVER HERE:  \n','localMID: ', localMID, '\nMID: ', MID)
//   return localMID
// }

// export const getMIDfromLocation = async(location: MerchantLocationsType) => {
//   const localCreds = LOCATION_CREDS[location]
//   console.log('plesase what is this: ', localCreds)
//   return localCreds
// }

// TIMES ARE IN UTC/Z TIME
export const location_hours: Record<MerchantLocationsType, { opening: number, closing: number }> = {
  //11pm is 18 in utc
  //6pm is 1 in utc
  'SELECT': {
    opening: 23,
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