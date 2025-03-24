'use client'
import Link from "next/link"
import Image from "next/image"
import { useContext, useState, useEffect } from "react"
import { CartContext } from "@/context/orderContext"
import { CartContextType, CustomerInfoType } from "../../../../utils/types"
import { MenuNameDictionary, IngredientDictionary, ChoiceOfMeatEspanolDictionary, ChoiceOfMeatEnglishDictionary } from "../../../../utils/constants"
import { fetchCloverLink } from "@/actions/actions"
import { location_address } from "@utils/merchantConstants"
import LocationSwitch from "@/components/ordering/LocationSwitch"


const btnCheckout = 'rounded-[20px] duration-300 brightness-90 hover:brightness-100 text-white'

export default function CheckoutPage() {
  const { location, cart, orderTotal, removeFromCart, clearCart, onlineOrdering, customerInfo } = useContext<CartContextType>(CartContext)
  
  const [customerState, setCustomerState] = useState<CustomerInfoType>(customerInfo)
  const [errorMessages, setErrorMessages] = useState<any>([])

  // console.log('locatoin', location)


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
              {errorMessages?.cart &&
                errorMessages.cart.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
              ))}
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
        <form className="flex flex-col ">
          <div className="max-w-[450px] flex flex-col">
            <label>First Name:</label>
            <input 
              // id="firstname"
              // name="formFirstname"
              className="peer"
              aria-describedby="customer-error"
              type="text"
              onChange={(e) => setCustomerState({...customerState, firstName: e.target.value })}
              value={customerState.firstName}
              placeholder=" first name"
            />
            <div id="customer-error" aria-live="polite" aria-atomic="true">
              {errorMessages?.firstname &&
                errorMessages.firstname.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
              ))}
            </div>
            <label htmlFor="lastname">Last Name:</label>
            <input 
              // id="lastname"
              // name="formLastname" 
              className="peer"
              aria-describedby="customer-error"
              type="text"
              onChange={(e) => setCustomerState({...customerState, lastName: e.target.value })}
              value={customerState.lastName}
              placeholder=" last name"
            />
            <div id="customer-error" aria-live="polite" aria-atomic="true">
              {errorMessages?.lastname &&
                errorMessages.lastname.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
              ))}
            </div>
            <label>Email:</label>
            <input 
              // id="email"
              // name="formEmail" 
              className="peer"
              aria-describedby="customer-error"
              type="text"
              onChange={(e) => setCustomerState({...customerState, email: e.target.value })}
              value={customerState.email}
              placeholder=" email"
            />
            <div id="customer-error" aria-live="polite" aria-atomic="true">
              {errorMessages?.email &&
                errorMessages.email.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
              ))}
            </div>
            <label htmlFor="phone number">Phone Number:</label>
            <input 
              // id='phone_number'
              // name="formPhone" 
              className="peer"
              type="tel"
              aria-describedby="customer-error"
              onChange={(e) => setCustomerState({...customerState, phoneNumber: e.target.value })}
              value={customerState.phoneNumber}
              placeholder=" phone number"
            />
            <div id="customer-error" aria-live="polite" aria-atomic="true">
              {errorMessages?.phoneNumber &&
                errorMessages.phoneNumber.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>

          </div>
          {/* TOTAL & BUTTONS  */}
        </form>
        <div className="flex flex-row justify-between items-center mt-4">
          <div className="font-bold text-lg">Total: ${orderTotal.toFixed(2)}</div>
          <button 
            className={`text-lg bg-flagGreen py-2 px-5  
              ${btnCheckout}
            `} 
            onClick={async() => {
              // console.log('my cart: ', cart)
              let testing = await fetchCloverLink(location, cart, customerState);
              // console.log('testing thingy: ', typeof(testing), testing)
              if(testing){
                setErrorMessages(testing)
              }
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}