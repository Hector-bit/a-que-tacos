import { Dispatch } from "react"

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
  'JALAPENOS'

export type ChoiceOfMeatType = 
  'BEEF' | 
  'CHICKEN' |
  'PORK' |
  'NOT_APPLICABLE'


export type menuItemType = {
  menu_id: number
  img: string;
  name: orderItemType
  price: number
  description: string
  ingredients: ingredientsType[]
  sideOption: boolean
  choiceOfMeat: boolean
  chooseAmount: boolean
  // meatOptions?: string //TODO LATER 
}

// TYPES WHEN ORDERING 
export type orderItemType = 
  'FISH_BURRITO' |
  'REGULAR_BURRITO' |
  'SUPREME_BURRITO' |
  'SUPREME_VEGGIE_BURRITO' |
  'REGULAR_BURRITO' |
  'KIDS_BURRITO' |
  'TORTA' |
  'QUESADILLA' |
  'TAMALE_PLATE' |
  'FISH_PLATE' |
  'COMBO_PLATE' |
  'VEGGIE_COMBO_PLATE' |
  'SALAD' |
  'NACHOS' |
  'TACO' |
  'VEGGIE_TACO' |
  'FISH_TACO' |
  'RICE_BEAN_PLATE' |
  'CHIPS_Y_PICO' |
  'HORCHATA' |
  'JARRITO'


export type OrderItem = {
  // order_id: number
  price: number
  orderItem: orderItemType
  removeIngredients: ingredientsType[]
  amount: number
  meatChoice: ChoiceOfMeatType
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
  isDevelopment: boolean
}