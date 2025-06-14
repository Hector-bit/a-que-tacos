import React, { useContext } from "react";
import { CartContext } from "@/context/orderContext";
import { CartContextType } from "@utils/types";
import { getOrderById, getOrderLineItems } from "@/actions/orderActions";
import { MerchantLocationsType } from "@utils/merchantConstants";
import { CloverOrder } from "@utils/types/orderTypes";
import { CloverOrderLineItem } from "@utils/types/lineItems";
import { PostPayOrder } from "@/actions/orderActions";

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

    <button 
      className={`text-lg bg-flagGreen py-2 px-5  
        ${btnCheckout}
      `} 
      onClick={async() => {
        // console.log('my cart: ', cart)
        let testing = await PostPayOrder(orderId, location);
      }}
    >
      Checkout
    </button>
    </div>
  );
}

export default PayOrderPage;