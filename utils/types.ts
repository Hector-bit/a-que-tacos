import { Dispatch } from "react"
import { MerchantLocationsType } from "./merchantConstants"
import { ItemModifierType } from "./types/itemsTypes"

export type SideOptionType = 'TORTILLA' | 'CHIPS'

export type ingredientsType = 
  'LETTUCE' |
  'TOMATO' |
  'RICE' |
  'BEANS' |
  'SOURCREAM' |
  'CHEESE' |
  'AVOCADO' |
  'PICO_DE_GALLO' |
  'CILANTRO' |
  'ONIONS' | 
  'JALAPENOS' |
  'TORTILLA'

export type ChoiceOfMeatType = 
  'BEEF' | 
  'CHICKEN' |
  'PORK' |
  'CARNITAS' |
  'NOT_APPLICABLE'


export type menuItemType = {
  menu_id: number
  img: string;
  name: orderItemType
  // price: number
  description: string
  ingredients: ingredientsType[]
  sideOption: boolean
  choiceOfMeat: boolean
  chooseAmount: boolean
  itemId?: number
  // meatOptions?: string //TODO LATER 
}

// TYPES WHEN ORDERING 
export type orderItemType = 
  'FISH_BURRITO' |
  'REGULAR_BURRITO' |
  'SUPREME_BURRITO' |
  'SUPREME_VEGGIE_BURRITO' |
  'KIDS_BURRITO' |
  'TORTA' |
  'QUESADILLA' |
  'TAMALE_PLATE' |
  'ASADA_PLATE' |
  'FISH_PLATE' |
  'COMBO_PLATE' |
  'VEGGIE_COMBO_PLATE' |
  'SALAD' |
  'NACHOS' |
  'TACO' |
  'VEGGIE_TACO' |
  'FISH_TACO' |
  'RICE_BEAN_PLATE' |
  'CHIPS_Y_PICO'


export type OrderItem = {
  // order_id: number
  price: number
  orderItem: orderItemType
  removeIngredients: ingredientsType[]
  amount: number
  //this var is for modification for clover api
  meatChoice: keyof typeof ItemModifierType | 'NOT_APPLICABLE'
}

export type IconType = {
  classname?: string
  viewBox?: string
  width?: number
  height?: number
  fill?: string
  stroke?: string
  strokeWidth?: number
}

export type CustomerInfoType = {
  firstName: string | undefined
  lastName: string | undefined
  phoneNumber: string | undefined
  email: string | undefined
}

type errorMsgType = 'phone' | 'email'

export type OrderErrorType = {
  msgType: errorMsgType
  errorMsg: string
}

export type OrderErrorState = {
  errors: OrderErrorType[]
}

export type OrderErrorAction = 
  | {type: 'ADD_ERROR_MSG'; payload: OrderErrorType }
  | {type: 'REMOVE_ERROR_MSG'; payload: errorMsgType }
  | {type: 'CLEAR_ERROR_MSGS' }


// CONTEXT TYPES 
export type CartContextType = {
  location: MerchantLocationsType
  handleLocation: (location: MerchantLocationsType) => void
  onlineOrdering: boolean
  handleOnlineOrdering: (onlineOrderingBool:boolean) => void
  orderTotal: number
  cart: OrderItem[]
  addToCart: (item:OrderItem) => void
  removeFromCart: (id:number) => void
  clearCart: () => void
  //customer related things
  customerInfo: CustomerInfoType
  saveCustomerInfo: (customerInfo:CustomerInfoType) => void
  //other
  OrderErrorState: OrderErrorState
  OrderErrorDispatch: Dispatch<OrderErrorAction> | undefined
}