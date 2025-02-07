'use client'
import React, { createContext, useContext, useReducer, ReactNode, useState, useEffect} from 'react'
import { OrderItem } from '../../utils/types'

export const CartContext = createContext<any>({})

export const CartProvider = ({ children }:any) => {
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
  },[cart])

  return (
    <div>
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
    </div>
  );
}

