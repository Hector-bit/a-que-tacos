 
 export interface CloverOrder {
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
  "createdTime": number,
  "clientCreatedTime": number,
  "modifiedTime": number
}