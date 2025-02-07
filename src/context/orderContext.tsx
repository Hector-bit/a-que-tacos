'use client'
import React, { createContext, useContext, useReducer, ReactNode, useState} from 'react'

const CartContext = createContext<any>({})

export const CartProvider = ({ children }:any) => {
  const [cart, setCart] = useState<any>([])

  const addToCart = (item:any) => {
    setCart((prevCart:any) => {
      const existingItem = prevCart.find((i:any) => i.id === item.id)
    })
  }

  const removeFromCart = (id:number) => {
    setCart((prevCart:any) => prevCart.filter((item:any) => item.id !== id));
  };

  // Clear the cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <div>
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
    </div>
  );
}

