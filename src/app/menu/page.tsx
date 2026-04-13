'use client'
import MenuCard from "@/components/MenuCard";
import MenuCardV2 from "@/components/MenuCardV2";
import { menu_items, MenuNameDictionary } from "../../../utils/constants";

export default function Menu() {

  return (
    <main className="flex flex-col items-center justify-between p-2 sm:p-6 bg-primary">
      <div className="text-xl sm:text-3xl text-left w-full font-bold">Disclaimers:</div>
      <div className="text-lg sm:text-xl text-left w-full">Availability may vary by location</div>
      <div className="text-lg sm:text-xl text-left w-full">All rice is cooked with chicken broth</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-3">
        {menu_items.map((item) => (
          <MenuCardV2 
            key={`${item.name}-food`}
            title={MenuNameDictionary[item.name]}
            description={item.description}
            price={item.price}
            category={item.category}
            imageSrc={item.img}
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
