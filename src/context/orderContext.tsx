'use client'
import React, { createContext, useContext, ReactNode, useState, useEffect, useReducer } from 'react'
import { OrderItem } from '../../utils/types'
import { CartContextType, CustomerInfoType, OrderErrorAction, OrderErrorState } from '../../utils/types'
import { error } from 'console'
import { stat } from 'fs'
import { MerchantLocationsType } from '@utils/merchantConstants'

let initialErrorMsgs:OrderErrorState = { errors: [] }

export const CartContext = createContext<CartContextType>({
  location: 'SELECT',
  handleLocation: () => console.log('location handler'),
  onlineOrdering: false,
  handleOnlineOrdering: () => console.log('handler for setting bool'),
  orderTotal: 0,
  cart: [],
  addToCart: (item) => console.log('add to cart fn missing'),
  removeFromCart: () => console.log('remove from cart fn missing'),
  clearCart: () => console.log('clear cart fn missing'),
  saveCustomerInfo: () => console.log('saving customer info'),
  customerInfo: { firstName: '', lastName: '',email: '', phoneNumber: '' },
  OrderErrorState: initialErrorMsgs,
  OrderErrorDispatch: undefined
})

const orderErrorReducer = ( state:OrderErrorState, action: OrderErrorAction) => {
  switch(action.type){
    case 'ADD_ERROR_MSG':{
      return { errors: [...state.errors, action.payload] }
    }
    case 'REMOVE_ERROR_MSG':{
      return { errors: state.errors.filter(msg => msg.msgType === action.payload) }
    }
    case 'CLEAR_ERROR_MSGS': {
      return initialErrorMsgs
    }
  }
}

export const CartProvider = ({ children }:any) => {
  // let initialCartValue:OrderItem[] = []
  let initialCustomerInfo:CustomerInfoType = { firstName: '', lastName: '',email: '', phoneNumber: '' }
  // if(typeof window !== 'undefined'){
  //   // RETRIVE CUSTOMER ORDER 
  //   let retrivedOrderCart = localStorage.getItem('CLIENT_ORDER')
  //   initialCartValue = retrivedOrderCart ? JSON.parse(retrivedOrderCart) : initialCartValue

  //   //RETRIEVE CUSTOMER INFO
  //   let retrievedCustomerInfo = localStorage.getItem('CLIENT_CUSTOMER_INFO')
  //   //todo figure out how to clean this up, how to deal with nulls and such
  //   if(retrievedCustomerInfo){
  //     initialCustomerInfo = retrivedOrderCart ? JSON.parse(retrievedCustomerInfo) : initialCustomerInfo
  //   }
  // }

  // ORDER CONTEXT 
  const [location, setLocation] = useState<MerchantLocationsType>('SELECT')
  const [onlineOrdering, setOnlineOrdering] = useState<boolean>(false)
  const [orderTotal, setOrderTotal] = useState<number>(0)
  const [cart, setCart] = useState<OrderItem[]>([])
  const [customerInfo, setCustomerInfo] = useState<CustomerInfoType>(initialCustomerInfo)
  const [OrderErrorState, OrderErrorDispatch] = useReducer(orderErrorReducer, initialErrorMsgs)

  // LOCATION FUNCTIONS
  const handleLocation = (location: MerchantLocationsType) => {
    setLocation(location)
  }

  // CART FUNCTIONS 
  const addToCart = (item:OrderItem) => {
    setCart([...cart, item])
    localStorage.setItem('CLIENT_ORDER', JSON.stringify([...cart, item]))
    console.log('updated cart[add]:', [...cart, item])
  }

  const removeFromCart = (orderIndex:number) => {
    let cartRemovedItem = cart.filter((item:any, index:number) => index !== orderIndex)
    // console.log('filtered cart state: ', cartRemovedItem)
    setCart(cartRemovedItem);
    let localCart = localStorage.setItem('CLIENT_ORDER', JSON.stringify(cartRemovedItem))
    // console.log('cart from storage: ', localCart)
    // console.log('updated cart[remove]:', [...cart, item])
  };
  
  const clearCart = () => {
    setCart([]);
  };
  
  const handleOnlineOrdering = (onlineOrderingBool: boolean) => {
    setOnlineOrdering(onlineOrderingBool)
  }

  const saveCustomerInfo = (customerInfo:CustomerInfoType) => {
    // console.log('updating customer info: ', customerInfo)
    localStorage.setItem('CLIENT_CUSTOMER_INFO', JSON.stringify(customerInfo))
  }

  // DOES MATH TO SHOW TOTAL
  useEffect(() => {
    let tempTotal = 0
    cart.forEach((order) => {
      tempTotal += order.price
    })
    let withTax = tempTotal + (tempTotal * 0.088)
    setOrderTotal(withTax)
  },[cart])
  
  // USING LOCAL STORAGE WE WILL SAVE THE USERS ORDER 
  useEffect(() => {
    let retrivedOrderCart = localStorage.getItem('CLIENT_ORDER')
    retrivedOrderCart ? setCart(JSON.parse(retrivedOrderCart)) : null
  },[])



  return (
    <div>
    <CartContext.Provider 
      value={{ 
        location, 
        handleLocation,
        onlineOrdering, 
        handleOnlineOrdering, 
        orderTotal, 
        cart, 
        addToCart, 
        removeFromCart, 
        clearCart, 
        saveCustomerInfo, 
        customerInfo, 
        OrderErrorState, 
        OrderErrorDispatch 
      }}
    >
      {children}
    </CartContext.Provider>
    </div>
  );
}

