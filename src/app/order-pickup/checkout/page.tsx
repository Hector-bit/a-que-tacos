'use client'
import Link from "next/link"
import Image from "next/image"
import { useContext } from "react"
import { CartContext } from "@/context/orderContext"
import { CartContextType } from "../../../../utils/types"
import { MenuNameDictionary, IngredientDictionary, ChoiceOfMeatEspanolDictionary } from "../../../../utils/constants"

export default function() {
  const { cart, removeFromCart } = useContext<CartContextType>(CartContext)

  return (
    <div className="flex flex-col p-3">
      <Link href={"/order-pickup"}>
        <Image className="" src={"/assets/ui/returnArrow.svg"} alt={"return to ordering"} height={40} width={40}/>
      </Link>
      <h2 className="text-3xl font-extrabold mb-4">Review Order:</h2>
      {cart.length < 1 && 
        <div className="text-center text-xl mx-auto my-12">You have no orders in your cart.</div>
      }
      <div className="flex flex-col gap-3">
        {cart.map(((order, index) => {
          return (
            <div key={`order-${order.orderItem}-${index}`} className="border-2 flex flex-row justify-between items-center">
              <div className="flex flex-col">
                {/* BASIC ORDER INFORMATION  */}
                <h2 className="flex flex-row text-xl gap-2">
                  {order.meatChoice !== 'NOT_APPLICABLE' && <span>{ChoiceOfMeatEspanolDictionary[order.meatChoice]}</span>}
                  <span>{MenuNameDictionary[order.orderItem]}</span>
                  {order.amount > 1 && <span>(x{order.amount})</span>}
                </h2>
                {/* INGREDIENTS TO REMOVE  */}
                <div className="flex flex-row">
                  {order.removeIngredients.length > 0 &&
                    <div>Remove: </div>
                  }
                  {order.removeIngredients.map((ingre) => {
                    return (
                      <span 
                        key={`remove-${ingre}-${index}`} 
                        className="mx-2">
                          {IngredientDictionary[ingre]}
                      </span>
                    )
                  })}
                </div>  
              </div>
              {/* BUTTON FOR REMOVING ORDER */}
              <div>
                <button 
                  className=""
                  onClick={() => removeFromCart(index)}
                >
                  REMOVE
                </button>
              </div>
            </div>
          )
        }))}

      </div>
    </div>
  )
}