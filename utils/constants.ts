import { tree } from "next/dist/build/templates/app-page"
import { menuItemType, ingredientsType } from "./types"

export const daysOfWeek = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
]

const imgBase = '/assets/menuImages'

export const menu_items:menuItemType[] = [
  { 
    menu_id: 1,
    img: `${imgBase}/burritoFishFinal.webp`,
    name: 'FISH_BURRITO', 
    description: 'Tilapia fish, beans, rice, lettuce, cheese, sourcream, pico de gallo',
    ingredients: ['BEANS', 'RICE', 'LETTUCE', 'CHEESE', 'SOURCREAM', 'PICO_DE_GALLO'],
    choiceOfMeat: false,
    sideOption: false,
    chooseAmount: false
  },
  { 
    menu_id: 4,
    img: `${imgBase}/supremeBurrito1Final.webp`,
    name: 'SUPREME_BURRITO', 
    description: 'Beans, rice, lettuce, tomato, onions, cilantro, sourcream, cheese,',
    ingredients: ['BEANS', 'RICE', 'LETTUCE', 'TOMATO', 'ONIONS', 'CILANTRO', 'CHEESE', 'SOURCREAM'],
    choiceOfMeat: true,
    sideOption: false,
    chooseAmount: false
  },
  { 
    menu_id: 3,
    img: `${imgBase}/burritoVeggie4Final.webp`,
    name: 'SUPREME_VEGGIE_BURRITO', 
    description: 'Beans, rice, tomato, lettuce, onions, cilantro, avocado, cheese, sourcream',
    ingredients: ['BEANS', 'RICE', 'LETTUCE', 'TOMATO', 'ONIONS', 'CILANTRO', 'AVOCADO', 'CHEESE', 'SOURCREAM'],
    choiceOfMeat: false,
    sideOption: false,
    chooseAmount: false
  },
  { 
    menu_id: 2,
    img: `${imgBase}/burritoRegularFinal.webp`,
    name: 'REGULAR_BURRITO', 
    description: 'Choice of meat, beans, rice, onion, cilantro',
    ingredients: ['BEANS', 'RICE', 'ONIONS', 'CILANTRO'],
    choiceOfMeat: true,
    sideOption: false,
    chooseAmount: false
  },
  { 
    menu_id: 16,
    img: `${imgBase}/kidsburrito.webp`,
    name: 'KIDS_BURRITO', 
    description: 'Rice, beans & cheese',
    ingredients: ['BEANS', 'RICE', 'CHEESE'],
    choiceOfMeat: false,
    sideOption: false,
    chooseAmount: false
  },
  { 
    menu_id: 14,
    img: `${imgBase}/tortaFinal.webp`,
    name: 'TORTA', 
    description: 'Choice of meat, beans, avocado, tomato, onions, cilantro',
    ingredients: ['BEANS', 'TOMATO','ONIONS', 'CILANTRO', 'AVOCADO'],
    choiceOfMeat: true,
    sideOption: false,
    chooseAmount: false
  },
  { 
    menu_id: 9,
    img: `${imgBase}/quesadillaFinal.webp`,
    name: 'QUESADILLA', 
    description: 'Choice of meat, sourcream, lettuce, pico de gallo',
    ingredients: ['LETTUCE', 'SOURCREAM', 'PICO_DE_GALLO'],
    choiceOfMeat: true,
    sideOption: false,
    chooseAmount: false
  },
  { 
    menu_id: 18,
    img: `${imgBase}/plateTamale3Final.webp`,
    name: 'TAMALE_PLATE', 
    description: 'Tamales, rice & beans',
    ingredients: ['RICE', 'BEANS'],
    choiceOfMeat: false,
    sideOption: false,
    chooseAmount: false
  },
  { 
    menu_id: 30,
    img: `${imgBase}/asada_plate.jpg`,
    name: 'ASADA_PLATE', 
    description: 'Choice of meat, rice, beans, onions, cilantro, tortilla',
    ingredients: ['RICE', 'BEANS', 'ONIONS', 'CILANTRO', 'TORTILLA'],
    choiceOfMeat: true,
    sideOption: false,
    chooseAmount: false
  },
  { 
    menu_id: 6,
    img: `${imgBase}/platefish1Final.webp`,
    name: 'FISH_PLATE', 
    description: 'Beans, rice, lettuce, cheese, pico de gallo, -choice of chips or tortilla-',
    ingredients: ['BEANS', 'RICE', 'LETTUCE', 'PICO_DE_GALLO', 'CHEESE'],
    choiceOfMeat: false,
    sideOption: true,
    chooseAmount: false
  },
  { 
    menu_id: 7,
    img: `${imgBase}/comboPlate.webp`,
    name: 'COMBO_PLATE', 
    description: 'Choice of meat, beans, rice, onions, cilantro',
    ingredients: ['BEANS', 'RICE','ONIONS', 'CILANTRO'],
    choiceOfMeat: true,
    sideOption: false,
    chooseAmount: false
  },
  { 
    menu_id: 8,
    img: `${imgBase}/plateVeggie1Final.webp`,
    name: 'VEGGIE_COMBO_PLATE', 
    description: 'Beans, rice, onions, cilantro, avocado, tomato, lettuce',
    ingredients: ['BEANS', 'RICE', 'LETTUCE', 'TOMATO', 'ONIONS', 'CILANTRO', 'AVOCADO'],
    choiceOfMeat: false,
    sideOption: false,
    chooseAmount: false
  },
  { 
    menu_id: 10,
    img: `${imgBase}/salad3Final.webp`,
    name: 'SALAD', 
    description: 'Choice of meat, rice, beans, lettuce, pico de gallo, -choice of chips or tortilla-',
    ingredients: ['BEANS', 'RICE', 'LETTUCE', 'PICO_DE_GALLO'],
    choiceOfMeat: true,
    sideOption: true,
    chooseAmount: false
  },
  { 
    menu_id: 5,
    img: `${imgBase}/nacho3Final.webp`,
    name: 'NACHOS', 
    description: 'Choice of meat, cheese, sourcream, pico de gallo, jalapenos',
    ingredients: ['JALAPENOS', 'PICO_DE_GALLO', 'CHEESE', 'SOURCREAM'],
    choiceOfMeat: true,
    sideOption: false,
    chooseAmount: false
  },
  // { 
  //   menu_id: 11,
  //   img: `${imgBase}/taco1Final.webp`,
  //   name: 'TACO', 
  //   price: 2.00,
  //   description: 'Choice of meat, onions, cilantro',
  //   ingredients: ['ONIONS', 'CILANTRO'],
  //   choiceOfMeat: true,
  //   sideOption: false,
  //   chooseAmount: true
  // },
  // { 
  //   menu_id: 13,
  //   img: `${imgBase}/tacoVeggie1Final.webp`,
  //   name: 'VEGGIE_TACO', 
  //   price: 2.50,
  //   description: 'Beans, rice, onions, cilantro, tomato, avocado',
  //   ingredients: ['BEANS', 'RICE', 'LETTUCE', 'TOMATO', 'ONIONS', 'CILANTRO', 'AVOCADO'],
  //   choiceOfMeat: false,
  //   sideOption: false,
  //   chooseAmount: true
  // },
  // { 
  //   menu_id: 12,
  //   img: `${imgBase}/tacoFish2Final.webp`,
  //   name: 'FISH_TACO', 
  //   price: 3.00,
  //   description: 'Tilapia fish, sourcream, lettuce, pico de gallo',
  //   ingredients: ['LETTUCE','PICO_DE_GALLO','SOURCREAM'],
  //   choiceOfMeat: false,
  //   sideOption: false,
  //   chooseAmount: true
  // },
  { 
    menu_id: 15,
    img: `${imgBase}/ricebeans.webp`,
    name: 'RICE_BEAN_PLATE', 
    description: 'Rice & Beans',
    ingredients: ['RICE', 'BEANS'],
    choiceOfMeat: false,
    sideOption: false,
    chooseAmount: false
  },
  { 
    menu_id: 17,
    img: `${imgBase}/chipsypico.webp`,
    name: 'CHIPS_Y_PICO', 
    description: 'Chips & Pico de gallo',
    ingredients: [],
    choiceOfMeat: false,
    sideOption: false,
    chooseAmount: false
  },
]

export const itemToPriceObj = {
  FISH_BURRITO: 1200,
  SUPREME_BURRITO: 1000,
  SUPREME_VEGGIE_BURRITO: 1000,
  REGULAR_BURRITO: 900,
  KIDS_BURRITO: 700,
  TORTA: 900,
  QUESADILLA: 1000,
  TAMALE_PLATE: 1400,
  ASADA_PLATE: 1000,
  FISH_PLATE: 1400,
  COMBO_PLATE: 1000,
  VEGGIE_COMBO_PLATE: 1200,
  SALAD: 1300,
  NACHOS: 1400,
  TACO: 200,
  VEGGIE_TACO: 250,
  FISH_TACO: 300,
  RICE_BEAN_PLATE: 700,
  CHIPS_Y_PICO: 700,

}

// todo: add drinks 
const drinks = [

]

export const order_items:any = {
  1: menu_items[0],
  2: menu_items[1],
  3: menu_items[2],
  4: menu_items[3],
  5: menu_items[4],
  6: menu_items[5],
  7: menu_items[6],
  8: menu_items[7],
  9: menu_items[8],
  10: menu_items[9],
  11: menu_items[10],
  12: menu_items[11],
  13: menu_items[12],
  14: menu_items[13],
  15: menu_items[14],
  16: menu_items[15],
  17: menu_items[16],
}

export const IngredientDictionary:{ [index:string]:string } = {
  'LETTUCE' : "Lettuce",
  'TOMATO' : "Tomato",
  'TORTILLA' : "Tortilla",
  'RICE' : "Rice",
  'BEANS' : "Beans",
  'SOURCREAM' : "Sourcream",
  'CHEESE' : "Cheese",
  'AVOCADO' : "Avocado",
  'PICO_DE_GALLO' : "Pico de gallo",
  'CILANTRO' : "Cilantro",
  'ONIONS' : "Onions",
  'JALAPENOS': 'Jalapenos'
}

export const meatOptions = [
  'BEEF',
  'PORK',
  'CHICKEN',
  'CARNITAS',
  'BUCHE',
  'CHORIZO',
  'CABEZA'
]

export const ChoiceOfMeatEspanolDictionary:{ [index:string]:string } = {
  'BEEF' : "Asada",
  'CHICKEN' : "Pollo",
  'PORK' : "Al Pastor",
  'CARNITAS': 'Carnitas',
  'BUCHE': 'Buche',
  'CHORIZO': 'Chorizo',
  'CABEZA': 'Cabeza'
}

export const ChoiceOfMeatEnglishDictionary:{ [index:string]:string } = {
  'BEEF' : "Beef",
  'CHICKEN' : "Chicken",
  'PORK' : "Pork",
  'CARNITAS': 'Shredded pork',
  'BUCHE': 'Pork Stomache',
  'CHORIZO': 'Chorizo',
  'CABEZA': 'Cheek',
}

export const MenuNameDictionary:{ [index:string]:string } = {
  'FISH_BURRITO' : "Fish Burrito",
  'SUPREME_BURRITO' : "Supreme Burrito",
  'SUPREME_VEGGIE_BURRITO' : "Supreme Veggie Burrito",
  'REGULAR_BURRITO' : "Regular Burrito",
  'KIDS_BURRITO' : "Kids Burrito",

  'TORTA' : "Torta",
  'QUESADILLA' : "Quesadilla",
  'TAMALE_PLATE' : "Tamale Plate",
  'ASADA_PLATE' : "Asada Plate",
  'FISH_PLATE' : "Fish Plate",
  'COMBO_PLATE' : "Combo Plate",
  'VEGGIE_COMBO_PLATE' : "Veggie Combo Plate",
  'SALAD' : "Salad",
  'NACHOS' : "Nachos",

  'TACO' : "Taco",
  'VEGGIE_TACO' : "Veggie Taco",
  'FISH_TACO' : "Fish Taco",
  'RICE_BEAN_PLATE' : "Rice & Bean plate",
  'CHIPS_Y_PICO' : "Chips & Pico"
} 