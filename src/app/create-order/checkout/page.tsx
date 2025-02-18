'use client'
import Link from "next/link"
import Image from "next/image"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "@/context/orderContext"
import { CartContextType, CustomerInfoType } from "../../../../utils/types"
import { MenuNameDictionary, IngredientDictionary, ChoiceOfMeatEspanolDictionary, ChoiceOfMeatEnglishDictionary } from "../../../../utils/constants"
import axios from "axios"

let validator = require('validator')

const btnCheckout = 'rounded-[20px] duration-300 brightness-90 hover:brightness-100 text-white'

export default function CheckoutPage() {
  const { cart, orderTotal, removeFromCart, clearCart, saveCustomerInfo, customerInfo, OrderErrorState, OrderErrorDispatch } = useContext<CartContextType>(CartContext)
  const AuthKey = process.env.API_KEY
  const MID = process.env.MERCHANT_ID
  
  const [customerState, setCustomerState] = useState<CustomerInfoType>(customerInfo)
  const [errorMessages, setErrorMessages] = useState<any>([])

  const checkoutNow = async() => {
    //check cart
    if(cart.length > 1){

    }

    console.log('CHECKING OUT for: ', customerInfo)
    // axios.post('', {
    // })
  }

  return (
    <div className="flex flex-col p-3">
      <Link href={"/create-order"}>
        <Image className="" src={"/assets/ui/returnArrow.svg"} alt={"return to ordering"} height={40} width={40}/>
      </Link>
      <div className="flex flex-row justify-between mb-4">
        <h2 className="text-3xl font-extrabold">Pick up at 117 W Main St Everson</h2>
        {/* <button className={`bg-flagRed py-2 px-3 ${btnCheckout}`} onClick={clearCart}>Clear Cart</button> */}
      </div>
      <div className="flex flex-row justify-between mb-4">
        <h2 className="text-3xl font-extrabold">Review Order:</h2>
        <button className={`bg-flagRed py-2 px-3 ${btnCheckout}`} onClick={clearCart}>Clear Cart</button>
      </div>
      {cart.length < 1 && 
        <div className="text-center text-xl mx-auto my-12">You have no orders in your cart.</div>
      }
      <div className="flex flex-col gap-3">
        {cart.map(((order, index) => {
          return (
            <div key={`order-${order.orderItem}-${index}`} className="flex flex-row justify-between items-center">
              <div className="flex flex-col">
                {/* BASIC ORDER INFORMATION  */}
                <h2 className="flex flex-row text-xl gap-2">
                  {order.meatChoice !== 'NOT_APPLICABLE' && <span>{ChoiceOfMeatEspanolDictionary[order.meatChoice]}</span>}
                  <span>{MenuNameDictionary[order.orderItem]}</span>
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
        <form className="flex flex-col max-w-[400px]">
          <label>First Name:</label>
          <input 
            type="text" name="first name" 
            onChange={(e) => setCustomerState({...customerState, firstName: e.target.value })}
            value={customerState.firstName}
          />
          <label>Last Name:</label>
          <input 
            type="text" name="last name" 
            onChange={(e) => setCustomerState({...customerState, lastName: e.target.value })}
            value={customerState.lastName}
          />
          <label>Email:</label>
          <input 
            type="text" name="email" 
            onChange={(e) => setCustomerState({...customerState, email: e.target.value })}
            value={customerState.email}
          />
          <label>Phone Number:</label>
          <input 
            type="tel" name="phone number" 
            onChange={(e) => setCustomerState({...customerState, phoneNumber: e.target.value })}
            value={customerState.phoneNumber}
          />
        </form>
      </div>
      {/* TOTAL & BUTTONS  */}
      <div className="flex flex-row justify-between items-center mt-4">
        <div className="font-bold text-lg">Total: ${orderTotal.toFixed(2)}</div>
        <button className={`text-lg bg-flagGreen py-2 px-5  ${btnCheckout}`} onClick={checkoutNow}>Checkout</button>
      </div>
    </div>
  )
}