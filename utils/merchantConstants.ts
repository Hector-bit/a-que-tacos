export type MerchantLocationsType = 'SELECT' | 'EVERSON' | 'BLAINE' | 'BELLINGHAM' | 'TEST1' | 'TEST2'

export const locations:MerchantLocationsType[] = ['SELECT', 'BELLINGHAM', 'BLAINE', 'EVERSON']
export const locationsTest:MerchantLocationsType[] = ['SELECT', 'TEST1', 'TEST2', 'BELLINGHAM', 'BLAINE', 'EVERSON']

const testMID = process.env.TEST_MERCHANT_ID!;
const bellinghamMID = process.env.BELLINGHAM_MERCHANT_ID!;
const eversonMID = process.env.EVERSON_MERCHANT_ID!;
const blaineMID = process.env.BLAINE_MERCHANT_ID!;

export const LOCATION_CREDS: Record<MerchantLocationsType, { APIROUTE: string, MID: string, HOSTED_TOKEN: string, SIGNATURE: string, 
  EMPLOYEE: string }> = {
  'SELECT': {
    APIROUTE: process.env.CLOVER_BASE_URL_SANDBOX as string,
    MID: 'select',
    HOSTED_TOKEN:'select',
    SIGNATURE: 'select',
    EMPLOYEE: 'select'
  },
  'TEST1': {
    APIROUTE: process.env.CLOVER_BASE_URL_SANDBOX as string,
    MID: process.env.TEST_MERCHANT_ID as string,
    HOSTED_TOKEN: process.env.TEST_API_KEY as string,
    SIGNATURE: process.env.TEST_WEBHOOK as string,
    EMPLOYEE: process.env.EMPLOYEE_TEST as string
  },
  'TEST2': {
    APIROUTE: process.env.CLOVER_BASE_URL_SANDBOX as string,
    MID: process.env.TEST_MERCHANT_ID as string,
    HOSTED_TOKEN: process.env.TEST_API_KEY as string,
    SIGNATURE: process.env.TEST_WEBHOOK as string,
    EMPLOYEE: process.env.EMPLOYEE_TEST as string
  },
  'BELLINGHAM': {
    APIROUTE: process.env.CLOVER_BASE_URL as string,
    MID: process.env.BELLINGHAM_MERCHANT_ID as string,
    HOSTED_TOKEN: process.env.BELLINGHAM_API_KEY as string,
    SIGNATURE: process.env.BELLINGHAM_WEBHOOK as string,
    EMPLOYEE: process.env.EMPLOYEE as string
  },
  'EVERSON': {
    APIROUTE: process.env.CLOVER_BASE_URL as string,
    MID: process.env.EVERSON_MERCHANT_ID as string,
    HOSTED_TOKEN: process.env.EVERSON_API_KEY as string,
    SIGNATURE: process.env.EVERSON_WEBHOOK as string,
    EMPLOYEE: process.env.EMPLOYEE as string
  },
  'BLAINE': {
    APIROUTE: process.env.CLOVER_BASE_URL as string,
    MID: process.env.BLAINE_MERCHANT_ID as string,
    HOSTED_TOKEN: process.env.BLAINE_API_KEY as string,
    SIGNATURE: process.env.BLAINE_WEBHOOK as string,
    EMPLOYEE: process.env.EMPLOYEE as string
  }
}

export const MID_TO_LOCATION: Record<string, MerchantLocationsType> = {
  [testMID]: 'TEST1',
  [bellinghamMID]: 'BELLINGHAM',
  [eversonMID]: 'EVERSON',
  [blaineMID]: 'BLAINE'
}


export const MID_TO_SIGNAGE = {
  [testMID]: 'hcp_6c0606b209b26b499dc474ece677ada7',
  [bellinghamMID]: 'hcp_395f957a367d0b359cd58ba37faadcc9',
  [eversonMID]: 'hcp_379287c7e9050611aafccca5e24477e7',
  [blaineMID]: 'hcp_1e32e112cc70c0b093e5bcd7e20af1af',
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

export const operatingDays: Record<MerchantLocationsType, number[]> = {
  // 0 for Sunday, 1 for Monday, 2 for Tuesday
  'SELECT': [0,1,2,3,4,5,6],
  'TEST1': [0,1,2,3,4,5,6],
  'TEST2': [0,1,2,3,4,5,6],
  'BELLINGHAM': [0,1,2,3,4,5,6],
  'EVERSON': [1,2,3,4,5,6],
  'BLAINE': [1,2,3,4,5,6]
}

// TIMES ARE IN UTC/Z TIME
export const locationOperatingTime: Record<MerchantLocationsType, { closed: boolean, opening: number, closing: number }> = {
  //11pm is 18 or 1080 min in utc
  //6pm is 1 or 60 min in utc
  'SELECT': {
    closed: false,
    opening: 1440,
    closing: 0
  },
  'TEST1': {
    closed: false,
    opening: 1380,
    closing: 1260
  },
  'TEST2': {
    closed: false,
    opening: 1080,
    closing: 180
  },
  'BELLINGHAM': {
    closed: false,
    opening: 1095,
    closing: 150
  },
  'EVERSON': {
    closed: true,
    opening: 1095,
    closing: 60
  },
  'BLAINE': {
    closed: false,
    opening: 1095,
    closing: 150
  }
}

export const location_address = {
  'SELECT': 'Please select a location',
  'TEST1': 'no location for test',
  'TEST2': 'no location for test',
  'BELLINGHAM': '2620 Northwest Ave, Bellingham, WA 98225',
  'EVERSON': '117 W Main St, Everson, WA 98247',
  'BLAINE': '8101 Blaine Rd, Blaine, WA 98230'
}