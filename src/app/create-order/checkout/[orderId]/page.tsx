'use client';
import React, { useContext } from "react";
import { CartContext } from "@/context/orderContext";
import { CartContextType } from "@utils/types";
import { getOrderById } from "@/actions/orderActions";

const PayOrderPage = async(props: { parmas: Promise<{orderId:string}>}) => {
  const { location } = useContext<CartContextType>(CartContext)
  const { orderId } = await props.parmas;
  const orderInfo = await getOrderById(orderId, location);

  console.log('Order Info:', orderInfo);

  return (
    <div>
      <h1>Pay Order Page</h1>
      <p>This is the page where users can pay for their orders.</p>
    </div>
  );
}


export default PayOrderPage;