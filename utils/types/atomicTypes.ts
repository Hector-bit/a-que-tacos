// ATOMIC ORDER TYPES
export type AtomicCheckoutType = {
  "href": string,
  "id": string,
  "currency": string,
  "employee": {
      "id": string
  },
  "total": number,
  "paymentState": string,
  "taxRemoved": boolean,
  "isVat": boolean,
  "state": string,
  "manualTransaction": boolean,
  "groupLineItems": boolean,
  "testMode": boolean,
  "payType": string,
  "createdTime": number,
  "clientCreatedTime": number,
  "modifiedTime": number
}