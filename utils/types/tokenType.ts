export type CardType = {
  "number": string,
  "exp_month": string,
  "exp_year": string,
  "cvv": string,
  "name": string
}

// not using this yet as the createCardToken fn is just returning the token id for now
export type CreateCardTokenResponse = {
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