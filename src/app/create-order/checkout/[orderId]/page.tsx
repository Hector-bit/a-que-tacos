import React, { useContext } from "react";
import { CartContext } from "@/context/orderContext";
import { CartContextType } from "@utils/types";
import { getOrderById, getOrderLineItems } from "@/actions/orderActions";
import { MerchantLocationsType } from "@utils/merchantConstants";
import { CloverOrder } from "@utils/types/orderTypes";
import { CloverOrderLineItem } from "@utils/types/lineItems";

const LineItemInformationCard = (props: {CloverOrder: CloverOrder, OrderLineItems:CloverOrderLineItem[]}) => {
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
  const orderInfo = await getOrderById(orderId, props.searchParams.location);
  const orderLineItems = await getOrderLineItems(orderId, props.searchParams.location);

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
    </div>
  );
}


export default PayOrderPage;