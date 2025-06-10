
export type CloverOrderLineItem = {
  "id": string,
  "orderRef": {
    "id": string
  },
  "item": {
    "id": string
  },
  "name": string,
  "price": number,
  "unitQty": number,
  "unitName": "Taco",
  "printed": boolean,
  "createdTime": number,
  "orderClientCreatedTime": number,
  "exchanged": boolean,
  "refunded": boolean,
  "isRevenue": boolean,
  "isOrderFee": boolean
}