'use client';
import React, { useContext, useActionState } from "react";
import { CartContext } from "@/context/orderContext";
import { CartContextType } from "@utils/types";
import { getOrderById, getOrderLineItems } from "@/actions/orderActions";
import { MerchantLocationsType } from "@utils/merchantConstants";
import { CloverOrder } from "@utils/types/orderTypes";
import { CloverOrderLineItem } from "@utils/types/lineItems";
import { PostPayOrder, PayOrderFormState } from "@/actions/orderActions";
// import CardFormComponent from "@/components/payment/CardForm";


const btnCheckout = 'rounded-[20px] duration-300 brightness-90 hover:brightness-100 text-white'

const LineItemInformationCard = (props: { CloverOrder: CloverOrder, OrderLineItems:CloverOrderLineItem[],  }) => {
  const { CloverOrder, OrderLineItems } = props;

  return (
    <div className="flex flex-col p-3 text-lg">
      <h2 className="text-xl font-extrabold">Order {CloverOrder.id}</h2>
      <p className="">Total: {CloverOrder.total / 100} {CloverOrder.currency}</p>
      {OrderLineItems.map((lineItem) => {
        return (
          <div key={lineItem.id}>{lineItem.name} x{lineItem.unitQty/1000}</div>
        )
      })
      }
    </div>
  );
}

const PayOrderPage = async(props: { params: Promise<{orderId:string}>, searchParams: { location: MerchantLocationsType}}) => {
  // const { location } = useContext<CartContextType>(CartContext)
  const { orderId } = await props.params;
  const { location } = props.searchParams;
  const orderInfo = await getOrderById(orderId, location);
  const orderLineItems = await getOrderLineItems(orderId, location);

  // Initialize the form state and actions
  const initialState: PayOrderFormState = { message: null, errors: {} };
  const [state, formAction] = useActionState(PostPayOrder, initialState);

  console.log('Order Info:', orderInfo);
  console.log('Order Line Items:', orderLineItems);

  return (
    <div className="flex flex-col p-3">
      <div>
        {orderInfo && orderLineItems ? (
          <LineItemInformationCard CloverOrder={orderInfo} OrderLineItems={orderLineItems.elements}/>
        ) : (
          <div className="flex flex-col p-3">
            <p>Order not found or no order information available.</p>
          </div>
        )}
      </div>
      <form action={formAction}>
        <h2>Card Form</h2>
        {/* Add your card form implementation here */}
        <input type="text" id='orderId' name="orderId" value={orderId} readOnly />
        <input type="hidden" id='location' name="location" value={location} />
        <label>
          name:
          <input type="text" id='name' name="name" required />
        </label>
        <label>
          Card Number:
          <input type="text" id='cardNumber' name="cardNumber" required />
        </label>
        <br />
        <label>
          Expiration Month:
          <input type="text" id='exp_month' name="exp_month" required />
        </label>
        <label>
          Expiration Year:
          <input type="text" id='exp_year' name="exp_year" required />
        </label>
        <br />
        <label>
          CVV:
          <input type="text" id='cvv' name="cvv" required />
        </label>
        <br />
      </form>
    </div>
  );
}

export default PayOrderPage;