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
  const [orderTotal, setOrderTotal] = useState<number>(0)
  const [cart, setCart] = useState<OrderItem[]>([])

  const addToCart = (item:OrderItem) => {
    // setCart((prevCart:OrderItem[]) => {
    //   const existingItem = prevCart.find((i:any) => i.id === item.id)
    // })
    setCart([...cart, item])
  }

  const removeFromCart = (id:number) => {
    setCart((prevCart:any) => prevCart.filter((item:any) => item.id !== id));
  };

  // Clear the cart
  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    console.log('updated cart:', cart)
    let tempTotal = 0
    cart.forEach((order) => {
      tempTotal += order.price
    })
  },[cart])

  return (
    <div>
    <CartContext.Provider value={{ orderTotal, cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
    </div>
  );
}

