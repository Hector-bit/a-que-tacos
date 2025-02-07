import { menuItemType, ingredientsType } from "./types"

const imgBase = '/assets/menuImages'

export const menu_items:menuItemType[] = [
  { 
    menu_id: 1,
    img: `${imgBase}/burritoFishFinal.jpg`,
    name: 'Fish Burrito', 
    price: 9,
    description: 'Tilapia fish, beans, rice, lettuce, cheese, sourcream, pico de gallo',
    ingredients: ['BEANS', 'RICE', 'LETTUCE', 'CHEESE', 'SOURCREAM', 'PICO_DE_GALLO']
  },
  { 
    menu_id: 2,
    img: `${imgBase}/burritoRegularFinal.jpg`,
    name: 'Regular Burrito', 
    price: 8,
    description: 'Choice of meat, beans, rice, onion, cilantro',
    ingredients: ['BEANS', 'RICE', 'LETTUCE', 'CHEESE', 'SOURCREAM', 'PICO_DE_GALLO']
  },
  { 
    menu_id: 3,
    img: `${imgBase}/burritoVeggie4Final.jpg`,
    name: 'Veggie Burrito', 
    price: 9,
    description: 'Beans, rice, tomato, onions, cilantro, avocado',
    ingredients: ['BEANS', 'RICE', 'LETTUCE', 'CHEESE', 'SOURCREAM', 'PICO_DE_GALLO']
  },
  { 
    menu_id: 4,
    img: `${imgBase}/supremeBurrito1Final.jpg`,
    name: 'Supreme Burrito', 
    price: 2.75,
    description: 'Beans, rice, sourcream, cheese, tomato, onions, cilantro, avocado',
    ingredients: ['BEANS', 'RICE', 'LETTUCE', 'CHEESE', 'SOURCREAM', 'PICO_DE_GALLO']
  },
  { 
    menu_id: 5,
    img: `${imgBase}/nacho3Final.jpg`,
    name: 'Nachos', 
    price: 2.75,
    description: 'Choice of meat, cheese, sourcream, pico de gallo, jalepenos',
    ingredients: ['BEANS', 'RICE', 'LETTUCE', 'CHEESE', 'SOURCREAM', 'PICO_DE_GALLO']
  },
  { 
    menu_id: 6,
    img: `${imgBase}/platefish1Final.jpg`,
    name: 'Fish Plate', 
    price: 2.75,
    description: 'Beans, rice, lettuce, cheese, pico de gallo, -choice of chips or tortilla-',
    ingredients: ['BEANS', 'RICE', 'LETTUCE', 'CHEESE', 'SOURCREAM', 'PICO_DE_GALLO']
  },
  { 
    menu_id: 7,
    img: `${imgBase}/comboPlate.jpg`,
    name: 'Combo Plate', 
    price: 2.75,
    description: 'Choice of meat, beans, rice, onions, cilantro',
    ingredients: ['BEANS', 'RICE', 'LETTUCE', 'CHEESE', 'SOURCREAM', 'PICO_DE_GALLO']
  },
  { 
    menu_id: 8,
    img: `${imgBase}/plateVeggie1Final.jpg`,
    name: 'Veggie Combo Plate', 
    price: 2.75,
    description: 'Beans, rice, onions, cilantro, avocado, tomato, lettuce',
    ingredients: ['BEANS', 'RICE', 'LETTUCE', 'CHEESE', 'SOURCREAM', 'PICO_DE_GALLO']
  },
  { 
    menu_id: 9,
    img: `${imgBase}/quesadillaFinal.jpg`,
    name: 'Quesadilla', 
    price: 2.75,
    description: 'Choice of meat, sourcream, lettuce, pico de gallo',
    ingredients: ['BEANS', 'RICE', 'LETTUCE', 'CHEESE', 'SOURCREAM', 'PICO_DE_GALLO']
  },
  { 
    menu_id: 10,
    img: `${imgBase}/salad3Final.jpg`,
    name: 'Salad', 
    price: 2.75,
    description: 'Choice of meat, rice, beans, lettuce, pico de gallo, -choice of chips or tortilla-',
    ingredients: ['BEANS', 'RICE', 'LETTUCE', 'CHEESE', 'SOURCREAM', 'PICO_DE_GALLO']
  },
  { 
    menu_id: 11,
    img: `${imgBase}/taco1Final.jpg`,
    name: 'Taco', 
    price: 2.75,
    description: 'Choice of meat, onions, cilantro',
    ingredients: ['BEANS', 'RICE', 'LETTUCE', 'CHEESE', 'SOURCREAM', 'PICO_DE_GALLO']
  },
  { 
    menu_id: 12,
    img: `${imgBase}/tacoFish2Final.jpg`,
    name: 'Fish Taco', 
    price: 2.75,
    description: 'Tilapia fish, sourcream, lettuce, pico de gallo',
    ingredients: ['BEANS', 'RICE', 'LETTUCE', 'CHEESE', 'SOURCREAM', 'PICO_DE_GALLO']
  },
  { 
    menu_id: 13,
    img: `${imgBase}/tacoVeggie1Final.jpg`,
    name: 'Veggie Taco', 
    price: 2.75,
    description: 'Beans, rice, onions, cilantro, tomato, avocado',
    ingredients: ['BEANS', 'RICE', 'LETTUCE', 'CHEESE', 'SOURCREAM', 'PICO_DE_GALLO']
  },
  { 
    menu_id: 14,
    img: `${imgBase}/tortaFinal.jpg`,
    name: 'Torta', 
    price: 2.75,
    description: 'Choice of meat, beans, avocado, tomato, onions, cilantro',
    ingredients: ['BEANS', 'RICE', 'LETTUCE', 'CHEESE', 'SOURCREAM', 'PICO_DE_GALLO']
  },
  { 
    menu_id: 15,
    img: `${imgBase}/ricebeans.jpg`,
    name: 'Rice & Beans', 
    price: 2.75,
    description: 'Rice & Beans',
    ingredients: ['BEANS', 'RICE', 'LETTUCE', 'CHEESE', 'SOURCREAM', 'PICO_DE_GALLO']
  },
  { 
    menu_id: 16,
    img: `${imgBase}/kidsburrito.jpg`,
    name: 'Kids Burrito', 
    price: 2.75,
    description: 'Rice, beans & cheese',
    ingredients: ['BEANS', 'RICE', 'LETTUCE', 'CHEESE', 'SOURCREAM', 'PICO_DE_GALLO']
  },
  { 
    menu_id: 17,
    img: `${imgBase}/chipsypico.jpg`,
    name: 'Chips & Pico', 
    price: 2.75,
    description: 'Chips & Pico de gallo',
    ingredients: ['BEANS', 'RICE', 'LETTUCE', 'CHEESE', 'SOURCREAM', 'PICO_DE_GALLO']
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

export const ingredientDictionary = {
  'LETTUCE' : "Lettuce",
  'TOMATO' : "Tomato",
  'RICE' : "Rice",
  'BEANS' : "Beans",
  'SOURCREAM' : "Sourcream",
  'CHEESE' : "Cheese",
  'AVOCADO' : "Avocado",
  'PICO_DE_GALLO' : "Pico de gallo",
}