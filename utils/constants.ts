import { menuItemType, ingredientsType } from "./types"

const imgBase = '/assets/menuImages'

export const menu_items:menuItemType[] = [
  { 
    menu_id: 1,
    img: `${imgBase}/burritoFishFinal.jpg`,
    name: 'Fish Burrito', 
    price: 12.00,
    description: 'Tilapia fish, beans, rice, lettuce, cheese, sourcream, pico de gallo',
    ingredients: ['BEANS', 'RICE', 'LETTUCE', 'CHEESE', 'SOURCREAM', 'PICO_DE_GALLO'],
    choiceOfMeat: false,
    sideOption: false
  },
  { 
    menu_id: 4,
    img: `${imgBase}/supremeBurrito1Final.jpg`,
    name: 'Supreme Burrito', 
    price: 12.00,
    description: 'Beans, rice, lettuce, tomato, onions, cilantro, sourcream, cheese,',
    ingredients: ['BEANS', 'RICE', 'LETTUCE', 'TOMATO', 'ONIONS', 'CILANTRO', 'CHEESE', 'SOURCREAM'],
    choiceOfMeat: true,
    sideOption: false
  },
  { 
    menu_id: 3,
    img: `${imgBase}/burritoVeggie4Final.jpg`,
    name: 'Supreme Veggie Burrito', 
    price: 12.00,
    description: 'Beans, rice, tomato, lettuce, onions, cilantro, avocado, cheese, sourcream',
    ingredients: ['BEANS', 'RICE', 'LETTUCE', 'TOMATO', 'ONIONS', 'CILANTRO', 'AVOCADO', 'CHEESE', 'SOURCREAM'],
    choiceOfMeat: false,
    sideOption: false
  },
  { 
    menu_id: 2,
    img: `${imgBase}/burritoRegularFinal.jpg`,
    name: 'Regular Burrito', 
    price: 9.00,
    description: 'Choice of meat, beans, rice, onion, cilantro',
    ingredients: ['BEANS', 'RICE', 'ONIONS', 'CILANTRO'],
    choiceOfMeat: true,
    sideOption: false
  },
  { 
    menu_id: 16,
    img: `${imgBase}/kidsburrito.jpg`,
    name: 'Kids Burrito', 
    price: 7.00,
    description: 'Rice, beans & cheese',
    ingredients: ['BEANS', 'RICE', 'CHEESE'],
    choiceOfMeat: false,
    sideOption: false
  },
  { 
    menu_id: 14,
    img: `${imgBase}/tortaFinal.jpg`,
    name: 'Torta', 
    price: 9.00,
    description: 'Choice of meat, beans, avocado, tomato, onions, cilantro',
    ingredients: ['BEANS', 'TOMATO','ONIONS', 'CILANTRO', 'AVOCADO'],
    choiceOfMeat: true,
    sideOption: false
  },
  { 
    menu_id: 9,
    img: `${imgBase}/quesadillaFinal.jpg`,
    name: 'Quesadilla', 
    price: 10.00,
    description: 'Choice of meat, sourcream, lettuce, pico de gallo',
    ingredients: ['LETTUCE', 'SOURCREAM', 'PICO_DE_GALLO'],
    choiceOfMeat: true,
    sideOption: false
  },
  { 
    menu_id: 18,
    img: `${imgBase}/plateTamale3Final.jpg`,
    name: 'Tamale Plate', 
    price: 14.00,
    description: 'Tamales, rice & beans',
    ingredients: ['RICE', 'BEANS'],
    choiceOfMeat: false,
    sideOption: false
  },
  { 
    menu_id: 6,
    img: `${imgBase}/platefish1Final.jpg`,
    name: 'Fish Plate', 
    price: 14.00,
    description: 'Beans, rice, lettuce, cheese, pico de gallo, -choice of chips or tortilla-',
    ingredients: ['BEANS', 'RICE', 'LETTUCE', 'PICO_DE_GALLO', 'CHEESE'],
    choiceOfMeat: false,
    sideOption: true
  },
  { 
    menu_id: 7,
    img: `${imgBase}/comboPlate.jpg`,
    name: 'Combo Plate', 
    price: 10,
    description: 'Choice of meat, beans, rice, onions, cilantro',
    ingredients: ['BEANS', 'RICE','ONIONS', 'CILANTRO'],
    choiceOfMeat: true,
    sideOption: false
  },
  { 
    menu_id: 8,
    img: `${imgBase}/plateVeggie1Final.jpg`,
    name: 'Veggie Combo Plate', 
    price: 10.00,
    description: 'Beans, rice, onions, cilantro, avocado, tomato, lettuce',
    ingredients: ['BEANS', 'RICE', 'LETTUCE', 'TOMATO', 'ONIONS', 'CILANTRO', 'AVOCADO'],
    choiceOfMeat: false,
    sideOption: false
  },
  { 
    menu_id: 10,
    img: `${imgBase}/salad3Final.jpg`,
    name: 'Salad', 
    price: 13.00,
    description: 'Choice of meat, rice, beans, lettuce, pico de gallo, -choice of chips or tortilla-',
    ingredients: ['BEANS', 'RICE', 'LETTUCE', 'PICO_DE_GALLO'],
    choiceOfMeat: true,
    sideOption: true
  },
  { 
    menu_id: 5,
    img: `${imgBase}/nacho3Final.jpg`,
    name: 'Nachos', 
    price: 14.00,
    description: 'Choice of meat, cheese, sourcream, pico de gallo, jalepenos',
    ingredients: ['JALAPENOS', 'PICO_DE_GALLO', 'CHEESE', 'SOURCREAM'],
    choiceOfMeat: true,
    sideOption: false
  },
  { 
    menu_id: 11,
    img: `${imgBase}/taco1Final.jpg`,
    name: 'Taco', 
    price: 2.00,
    description: 'Choice of meat, onions, cilantro',
    ingredients: ['ONIONS', 'CILANTRO'],
    choiceOfMeat: false,
    sideOption: false
  },
  { 
    menu_id: 13,
    img: `${imgBase}/tacoVeggie1Final.jpg`,
    name: 'Veggie Taco', 
    price: 2.50,
    description: 'Beans, rice, onions, cilantro, tomato, avocado',
    ingredients: ['BEANS', 'RICE', 'LETTUCE', 'TOMATO', 'ONIONS', 'CILANTRO', 'AVOCADO'],
    choiceOfMeat: false,
    sideOption: false
  },
  { 
    menu_id: 12,
    img: `${imgBase}/tacoFish2Final.jpg`,
    name: 'Fish Taco', 
    price: 3.00,
    description: 'Tilapia fish, sourcream, lettuce, pico de gallo',
    ingredients: ['LETTUCE','PICO_DE_GALLO','SOURCREAM'],
    choiceOfMeat: false,
    sideOption: false
  },
  { 
    menu_id: 15,
    img: `${imgBase}/ricebeans.jpg`,
    name: 'Rice & Beans', 
    price: 7.00,
    description: 'Rice & Beans',
    ingredients: ['RICE', 'BEANS'],
    choiceOfMeat: false,
    sideOption: false
  },
  { 
    menu_id: 17,
    img: `${imgBase}/chipsypico.jpg`,
    name: 'Chips & Pico', 
    price: 7.00,
    description: 'Chips & Pico de gallo',
    ingredients: [],
    choiceOfMeat: false,
    sideOption: false
  },
]

export const order_items:any = {
  1: {foodItem: menu_items[0]},
  2: {foodItem: menu_items[1]},
  3: {foodItem: menu_items[2]},
  4: {foodItem: menu_items[3]},
  5: {foodItem: menu_items[4]},
  6: {foodItem: menu_items[5]},
  7: {foodItem: menu_items[6]},
  8: {foodItem: menu_items[7]},
  9: {foodItem: menu_items[8]},
  10: {foodItem: menu_items[9]},
  11: {foodItem: menu_items[10]},
  12: {foodItem: menu_items[11]},
  13: {foodItem: menu_items[12]},
  14: {foodItem: menu_items[13]},
  15: {foodItem: menu_items[14]},
  16: {foodItem: menu_items[15]},
  17: {foodItem: menu_items[16]},
}

export const ingredientDictionary:{ [index:string]:string } = {
  'LETTUCE' : "Lettuce",
  'TOMATO' : "Tomato",
  'RICE' : "Rice",
  'BEANS' : "Beans",
  'SOURCREAM' : "Sourcream",
  'CHEESE' : "Cheese",
  'AVOCADO' : "Avocado",
  'PICO_DE_GALLO' : "Pico de gallo",
  'CILANTRO' : "Cilantro",
  'ONIONS' : "Onions",
}

export const ChoiceOfMeatDictionary = {
  'ASADA' : "Carne Asade | Beef",
  'CHICKEN' : "Pollo | Chicken",
  'AL_PASTOR' : "Al Pastor | Pork",
  'BEANS' : "Beans",
  'SOURCREAM' : "Sourcream",
  'CHEESE' : "Cheese",
  'AVOCADO' : "Avocado",
  'PICO_DE_GALLO' : "Pico de gallo",
  'CILANTRO' : "Cilantro",
  'ONIONS' : "Onions",
}