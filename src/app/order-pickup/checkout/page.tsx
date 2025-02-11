'use client'
import Link from "next/link"
import Image from "next/image"
import { useContext } from "react"
import { CartContext } from "@/context/orderContext"
import { CartContextType } from "../../../../utils/types"

export default function() {
  const { cart } = useContext<CartContextType>(CartContext)

  return (
    <div className="flex flex-col p-3">
      <Link href={"/order-pickup"}>
        <Image className="" src={"/assets/ui/returnArrow.svg"} alt={"return to ordering"} height={40} width={40}/>
      </Link>
      <h2 className="text-xl mb-4">Review Order:</h2>
      {cart.length < 1 && 
        <div className="text-center text-xl mx-auto my-12">You have no orders in your cart.</div>
      }
      {cart.map((order => {
        return (
          <div key={`${order.orderItem}-${order.order_id}-order`}>
            <h2 className="text-xl">{order.orderItem}</h2>
            <div>Remove: {order.removeIngredients.map((ingre) => {
              return (<span className="ml-2">{ingre}</span>)
            })}</div>
          </div>
        )
      }))}
    </div>
  )
}