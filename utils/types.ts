type sideOptionType = 'TORTILLA' | 'CHIPS'
type ingredientsType = ''

export type menuItemType = {
  menu_id: number
  img: string;
  name: string
  price: number
  description: string
  ingredients: string[]
  sideOption?: sideOptionType
}

// TYPES WHEN ORDERING 
type orderItemType = 
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


export type orderItem = {
  menu_id: number
  orderItem: orderItemType
  removeIngrdients: []
}