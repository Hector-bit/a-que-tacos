'use client'
import Link from "next/link"
import Image from "next/image"
import { useContext, useState, useEffect } from "react"
import { CartContext } from "@/context/orderContext"
import { CartContextType, CustomerInfoType, OrderItem } from "../../../../utils/types"
// import { OrderItem } from "../../../../utils/types"
import { MenuNameDictionary, IngredientDictionary, ChoiceOfMeatEspanolDictionary, ChoiceOfMeatEnglishDictionary } from "../../../../utils/constants"
import { MerchantLocationsType } from "@utils/merchantConstants"
import LocationSwitch from "@/components/ordering/LocationSwitch"
import { useRouter } from "next/navigation"

//new code for atomic checkout
import { checkoutAtomicOrder } from "@/actions/orderActions"

const btnCheckout = 'rounded-[20px] duration-300 brightness-90 hover:brightness-100 text-white'


export default function CheckoutPage() {
  const { location, cart, orderTotal, removeFromCart, clearCart, onlineOrdering, customerInfo } = useContext<CartContextType>(CartContext)
  
  const router = useRouter()
  // const [customerState, setCustomerState] = useState<CustomerInfoType>(customerInfo)
  const [errorMessages, setErrorMessages] = useState<string>()
  
  // console.log('locatoin', location)
  
  const handleCheckoutBtnClick = async (location:  MerchantLocationsType, cart: OrderItem[]) => {
    console.log('handleCheckoutBtnClick call with location:', location, 'and cart:', cart);
    // console.log('handleCheckoutBtnClick called with location:', location, 'and cart:', cart);
    if (cart.length > 0) {
      try {
        const response = await checkoutAtomicOrder(location, cart);
        if (response) {
          console.log('API create order response:', response);
          router.push(`/create-order/checkout/${response.id}?location=${location}`)
        } else {
          console.error('No response from atomic checkout');
        }
      }
      catch (error:any) {
        setErrorMessages(`Failed to create order - ${error.toString()}`);
      }
    }
  }
  
  return (
    <div className="flex flex-col p-3">
      <Link href={"/create-order"}>
        <Image className="" src={"/assets/ui/returnArrow.svg"} alt={"return to ordering"} height={40} width={40}/>
      </Link>
      <LocationSwitch/>
      <div className="flex flex-row justify-between mb-4">
        <h2 className="text-3xl font-extrabold">Review Order:</h2>
        <button className={`bg-flagRed py-2 px-3 ${btnCheckout}`} onClick={clearCart}>Clear Cart</button>
      </div>
      {cart.length < 1 && 
        <div className="text-center text-xl mx-auto my-12">
          <span>You have no orders in your cart.</span>
          <div id="customer-error" aria-live="polite" aria-atomic="true">

                  <p className="mt-2 text-sm text-red-500">
                    No Items in Cart.
                  </p>

            </div>
        </div>
      }
      <div className="flex flex-col gap-3">
        {cart.map(((order, index) => {
          const meatChoice = order.meatChoice !== 'NOT_APPLICABLE' ? `(${ChoiceOfMeatEspanolDictionary[order.meatChoice]})` : ''


          return (
            <div key={`order-${order.orderItem}-${index}`} className="flex flex-row justify-between items-center">
              <div className="flex flex-col">
                {/* BASIC ORDER INFORMATION  */}
                <h2 className="flex flex-row text-xl gap-2">
                  {/* {order.meatChoice !== 'NOT_APPLICABLE' && <span>{ChoiceOfMeatEspanolDictionary[order.meatChoice]}</span>} */}
                  <span>{`${MenuNameDictionary[order.orderItem]} ${meatChoice}`}</span>
                  {order.amount > 1 && <span>(x{order.amount})</span>}
                  <span>| ${order.price.toFixed(2)}</span>
                </h2>
                {order.meatChoice !== 'NOT_APPLICABLE' && <div>
                  Choice of meat: {ChoiceOfMeatEnglishDictionary[order.meatChoice]}
                </div>}
                {/* INGREDIENTS TO REMOVE  */}
                <div className="flex flex-row">
                  {order.removeIngredients.length > 0 &&
                    <div>Remove: </div>
                  }
                  {order.removeIngredients.map((ingre) => {
                    return (
                      <span 
                        key={`remove-${ingre}-${index}`} 
                        className="ml-2">
                          {IngredientDictionary[ingre]}
                      </span>
                    )
                  })}
                </div>  
              </div>
              {/* BUTTON FOR REMOVING ORDER */}
              <div>
                <button 
                  className={`${btnCheckout} bg-flagRed py-2 px-3`}
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          )
        }))}
      </div>
      {/* CUSTOMER INFORMATION */}
      <div className="flex flex-col justify-between mb-4 mt-8 gap-3">
        <div className="flex flex-row justify-between">
          <h2 className="text-3xl font-extrabold">Customer Information</h2>
          {/* <button className={`bg-flagGreen py-2 px-3 ${btnCheckout}`} onClick={() => saveCustomerInfo(customerState)}>Save Info</button> */}
        </div>

        <div className="flex flex-row justify-between mt-4">
          <div className="font-bold text-lg">Total: ${orderTotal.toFixed(2)}</div>
          <div className="flex flex-col items-end">
            <button 
              className={`text-lg w-min bg-flagGreen py-2 px-5  
                ${btnCheckout}
              `} 
              onClick={async() => {
                await handleCheckoutBtnClick(location, cart);
              }}
            >
              Checkout
            </button>
            {errorMessages && 
              <div className="text-red-500 font-bold my-4">
                {errorMessages}
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}