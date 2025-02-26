

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch(`${process.env.CLOVER_BASE_URL}/invoicingcheckoutservice/v1/checkouts`, {
      method: "POST",
      headers: { 
        'X-Clover-Merchant-ID': `${process.env.MERCHANT_ID}`, 
        'Authorization':`${process.env.API_KEY}`
      },
      body: JSON.stringify({

        "shoppingCart": {
        "lineItems": [
            {
            "name": "Taco",
            "unitQty": 4,
            "price": 200
            },
            {
            "name": "Orange",
            "unitQty": 2,
            "price": 75
            }
        ]
        },
        "customer": {
        "email": "email@example.com",
        "firstName" : "Example",
        "lastName": "Customer",
        "phoneNumber": "223-555-0002"
        }
    }),
    });

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: "Failed to fetch" }, { status: 500 });
  }
}