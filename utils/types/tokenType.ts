export type TokenType = {
  "id": string,
  "object": string,
  "card": {
      "exp_month": string,
      "exp_year": string,
      "first6": string,
      "last4": string,
      "brand": string
  }
}