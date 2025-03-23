'use client'
import { useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CartContext } from "@/context/orderContext";
import { useRouter } from "next/navigation";

const CheckoutBottomNav = () => {
  const router = useRouter()
  const { cart, orderTotal, onlineOrdering } = useContext(CartContext)
  const btnCheckout = 'bg-flagGreen duration-300 brightness-90 hover:brightness-100'
  const btnCheckoutClosed = 'bg-flagRed brightness-[0.85]'

  const handleBtnClick = (bool: boolean) => {
    if(bool){
      router.push('/create-order/checkout')
      return 
    } else {
      return () => null
    }
  }

  useEffect(() => {
    console.log('from checkout: ', onlineOrdering)
  },[])


  return (
    <div className="fixed max-w-[1400px] bottom-0 flex flex-row justify-between items-center h-[80px] rounded-t-[20px] px-4 p-2 bg-primary border-2 border-black w-full">
      <div className="flex flex-row font-bold text-xl">
        TOTAL: ${orderTotal.toFixed(2)}
      </div>
      <div className="flex flex-row items-center gap-2">
        {/* Button for continuing to checkout page  */}
        <button onClick={() => handleBtnClick(onlineOrdering)}>
          <span 
            className={`rounded-[20px] text-white px-4 py-2 
              ${onlineOrdering? btnCheckout : btnCheckoutClosed}`
            }
          >
            {onlineOrdering? 'Cart' : 'Closed'}
          </span>
        </button>

        {/* UI for customer order */}
        <Image src="/assets/ui/shoppingCart.svg" alt={"shopping cart"} width={32} height={32}/>
        <div 
          className={
            `text-xl text-black font-extrabold
              ${cart.length>0?'':'hidden'}
            `}
        >
          (<span className="px-1">{cart.length}</span>)
        </div>
      </div>
    </div>
  )
}

export default CheckoutBottomNav;