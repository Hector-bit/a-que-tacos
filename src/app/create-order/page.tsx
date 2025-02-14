'use client'
import { menu_items } from "../../../utils/constants";
import ItemCard from "@/components/ordering/ItemCard";
import BottomNav from "@/components/ordering/BottomNav";
import { useContext, useState } from "react";
import { menuItemType } from "../../../utils/types";
import ItemModal from "@/components/ordering/ItemModal";

export default function CreateOrderPage() {
  const [menuItem, setMenuItem] = useState<menuItemType>(menu_items[0])
  const [itemModal, setItemModal] = useState<boolean>(false) 

  const handleMenuCardClick = (menuItem:menuItemType) => {
    // console.log('menu click: ', whatever)
    setMenuItem(menuItem)
    setItemModal(true)
  }
  
  const handleItemModal = () => {
    setItemModal(!itemModal)
  }

  return (
    <>
      <ItemModal isOpen={itemModal} foodItem={menuItem} closeFn={handleItemModal} />
      <main className="flex flex-col px-3 sm:px-8 gap-x-4 mb-[100px]">
        <div>{`NOTICE: We don't do delivery, sorry!`}</div>
        <div className="mb-8">Online ordering available in Everson only at this moment.</div>

        <div>
          <h3>ITEMS</h3>
          <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:md:grid-cols-5 gap-3">
            {menu_items.map((item) => {
              return (
                <ItemCard 
                  key={`${item.name}-item`} 
                  menuItem={item} 
                  handleOnClick={() => handleMenuCardClick(item)}
                />
              )
            })}
          </div>
        </div>
      </main>
      <BottomNav/>
    </>
  );
}
