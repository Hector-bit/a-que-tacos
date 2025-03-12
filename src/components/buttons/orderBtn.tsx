'use client'
import { fetchCloverLink } from "@/actions/actions"
const btnCheckout = 'rounded-[20px] duration-300 brightness-90 hover:brightness-100 text-white'

const OrderBtn = () => {

  

  return (
    <button 
      className={`text-lg bg-flagGreen py-2 px-5  ${btnCheckout}`} 
      // onClick={async() => {
      //   let testing = await fetchCloverLink(cart, customerState);
      //   console.log('testing thingy: ', typeof(testing), testing)
      //   if(testing){
      //     setErrorMessages(testing)
      //   }
      // }}
    >
        Checkout
    </button>
  )
}

