import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { CartContext } from "@/context/orderContext";

const BottomNav = () => {
  const { cart, orderTotal } = useContext(CartContext)


  return (
    <div className="fixed max-w-[1400px] bottom-0 flex flex-row justify-between items-center h-[80px] rounded-t-[20px] px-4 p-2 bg-primary border-2 border-black w-full">
      <div className="flex flex-row font-bold text-xl">
        TOTAL: ${orderTotal.toFixed(2)}
      </div>
        <Link href={"/order-pickup/checkout"} className="flex flex-row items-center gap-2">
          <Image src="/assets/ui/shoppingCart.svg" alt={"shopping cart"} width={32} height={32}/>
          <div 
            className={
              `text-xl text-black font-extrabold
                ${cart.length>0?'':'hidden'}
              `}
          >
            (<span className="px-1">{cart.length}</span>)
          </div>
        </Link>
    </div>
  )
}

export default BottomNav;