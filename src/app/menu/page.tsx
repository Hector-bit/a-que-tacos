'use client'
import { motion } from "framer-motion";
import MenuCard from "@/components/MenuCard";

export default function Menu() {
  const imgBase = 'assets/menuImages'
  
  const menu_items = [
    { 
      img: `${imgBase}/burritoFishFinal.jpg`,
      name: 'Fish Burrito', 
      price: 9,
      description: 'Tilapia fish, beans, rice, lettuce, cheese, sourcream, pico de gallo'
    },
    { 
      img: `${imgBase}/burritoRegularFinal.jpg`,
      name: 'Regular Burrito', 
      price: 8,
      description: 'Choice of meat, beans, rice, onion, cilantro'
    },
    { 
      img: `${imgBase}/burritoVeggie4Final.jpg`,
      name: 'Veggie Burrito', 
      price: 9,
      description: 'Beans, rice, tomato, onions, cilantro, avocado'
    },
    { 
      img: `${imgBase}/supremeBurrito1Final.jpg`,
      name: 'Supreme Burrito', 
      price: 2.75,
      description: 'Beans, rice, sourcream, cheese, tomato, onions, cilantro, avocado'
    },
    { 
      img: `${imgBase}/nacho3Final.jpg`,
      name: 'Nachos', 
      price: 2.75,
      description: 'Choice of meat, cheese, sourcream, pico de gallo, jalepenos'
    },
    { 
      img: `${imgBase}/platefish1Final.jpg`,
      name: 'Fish Plate', 
      price: 2.75,
      description: 'Beans, rice, lettuce, cheese, pico de gallo, -choice of chips or tortilla-'
    },
    // { 
    //   img: `${imgBase}/plateTamale3Final.jpg`,
    //   name: 'Tamale Plate', 
    //   price: 2.75,
    //   description: ''
    // },
    { 
      img: `${imgBase}/plateVeggie1Final.jpg`,
      name: 'Veggie Plate', 
      price: 2.75,
      description: 'Beans, rice, onions, cilantro, avocado, tomato, lettuce'
    },
    { 
      img: `${imgBase}/quesadillaFinal.jpg`,
      name: 'Quesadilla', 
      price: 2.75,
      description: 'Choice of meat, sourcream, lettuce, pico de gallo'
    },
    { 
      img: `${imgBase}/salad3Final.jpg`,
      name: 'Salad', 
      price: 2.75,
      description: 'Choice of meat, rice, beans, lettuce, pico de gallo, -choice of chips or tortilla-'
    },
    { 
      img: `${imgBase}/taco1Final.jpg`,
      name: 'Taco', 
      price: 2.75,
      description: 'Choice of meat, onions, cilantro'
    },
    { 
      img: `${imgBase}/tacoFish2Final.jpg`,
      name: 'Fish Taco', 
      price: 2.75,
      description: 'Tilapia fish, sourcream, lettuce, pico de gallo'
    },
    { 
      img: `${imgBase}/tacoVeggie1Final.jpg`,
      name: 'Veggie Taco', 
      price: 2.75,
      description: 'Beans, rice, onions, cilantro, tomato, avocado'
    },
    { 
      img: `${imgBase}/tortaFinal.jpg`,
      name: 'Torta', 
      price: 2.75,
      description: 'Choice of meat, beans, avocado, tomato, onions, cilantro'
    },
    // { 
    //   img: `${imgBase}/jarritosFinal.jpg`,
    //   name: 'Jarritos', 
    //   price: 2.75,
    //   description: ''
    // },
    // { 
    //   img: `${imgBase}/horchataOneFinal.jpg`,
    //   name: 'Horchata', 
    //   price: 2.75,
    //   description: ''
    // },
  ]

  return (
    <main className="flex flex-col items-center justify-between p-2 sm:p-6 bg-primary">
      <div className="my-3 text-2xl sm:text-3xl font-bold text-center">Availability may vary by location</div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {menu_items.map((item) => (
          <MenuCard 
            img={item.img} 
            name={item.name} 
            description={item.description}
          />
          // <div className="">
          //   <img className="rounded-lg" src={item.img} alt={`item ${item.name}`} />
          //   <div className="flex flex-row justify-between w-full">
          //     <div className="text-center">{item.name}</div>
          //     <motion.div>
          //       <img src="/assets/ui/dropdown.png" alt={"drop down arrow"} width={20} height={20}/>
          //     </motion.div>
          //   </div>
          // </div>
        ))}
      </div>
    </main>
  );
}
