import React, { useContext } from "react";
import { CartContext } from "@/context/orderContext";
import { CartContextType } from "@utils/types";
import { getOrderById } from "@/actions/orderActions";
import { MerchantLocationsType } from "@utils/merchantConstants";

const PayOrderPage = async(props: { params: Promise<{orderId:string}>, searchParams: { location: MerchantLocationsType}}) => {
  // const { location } = useContext<CartContextType>(CartContext)
  const { orderId } = await props.params;
  const orderInfo = await getOrderById(orderId, props.searchParams.location);

  console.log('Order Info:', orderInfo);

  return (
    <div>
      <h1>Pay Order Page</h1>
      <p>This is the page where users can pay for their orders.</p>
    </div>
  );
}


export default PayOrderPage;