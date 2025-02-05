import Image from "next/image";
import Link from "next/link";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 flex flex-row h-[80px] rounded-t-[20px] p-2 bg-primary border-2 border-black w-full">
      <Link href={"/order-pickup/checkout"}>
        <Image src="/assets/ui/shoppingCart.svg" alt={"shopping cart"} width={20} height={20}/>
      </Link>
    </div>
  )
}

export default BottomNav;