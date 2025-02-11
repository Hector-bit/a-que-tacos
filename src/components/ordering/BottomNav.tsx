import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { CartContext } from "@/context/orderContext";

const BottomNav = () => {
  const { cart, orderTotal } = useContext(CartContext)


  return (
    <div className="fixed bottom-0 flex flex-row justify-between items-center h-[80px] rounded-t-[20px] px-4 p-2 bg-primary border-2 border-black w-full">
      <div className="flex flex-row">
        TOTAL: {orderTotal.toFixed(2)}
      </div>
      <div>
        <Link href={"/order-pickup/checkout"} className="rounded-full brightness-">
          <Image src="/assets/ui/shoppingCart.svg" alt={"shopping cart"} width={40} height={40}/>
        </Link>
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

export default BottomNav;