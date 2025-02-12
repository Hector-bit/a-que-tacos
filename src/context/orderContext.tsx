'use client'
import React, { createContext, useContext, useReducer, ReactNode, useState, useEffect} from 'react'
import { OrderItem } from '../../utils/types'
import { CartContextType } from '../../utils/types'

export const CartContext = createContext<CartContextType>({
  orderTotal: 0,
  cart: [],
  addToCart: (item) => console.log('add to cart fn missing'),
  removeFromCart: () => console.log('remove from cart fn missing'),
  clearCart: () => console.log('clear cart fn missing')
})

export const CartProvider = ({ children }:any) => {
  let retrivedOrderCart = localStorage.getItem('CLIENT_ORDER')
  let initialCartValue = retrivedOrderCart ? JSON.parse(retrivedOrderCart) : []
  const [orderTotal, setOrderTotal] = useState<number>(0)
  const [cart, setCart] = useState<OrderItem[]>(initialCartValue)

  const addToCart = (item:OrderItem) => {
    // setCart((prevCart:OrderItem[]) => {
    //   const existingItem = prevCart.find((i:any) => i.id === item.id)
    // })
    setCart([...cart, item])
  }

  const removeFromCart = (orderIndex:number) => {
    // let tempremove = cart.filter((item:any) => item.orderIndex !== orderIndex)
    // console.log('new list after remove:', tempremove)
    setCart((prevCart:any) => prevCart.filter((item:any, index:number) => index !== orderIndex));
  };

  // Clear the cart
  const clearCart = () => {
    setCart([]);
  };

  // USING LOCAL STORAGE WE WILL SAVE THE USERS ORDER 
  useEffect(() => {
    console.log('updated cart:', cart)
    localStorage.setItem('CLIENT_ORDER', JSON.stringify(cart))

    // SUMS UP ORDER TOTAL 
    let tempTotal = 0
    cart.forEach((order) => {
      tempTotal += order.price
    })
    setOrderTotal(tempTotal)
  },[cart])


  return (
    <div>
    <CartContext.Provider value={{ orderTotal, cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
    </div>
  );
}

