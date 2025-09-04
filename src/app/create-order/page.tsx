'use client'
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/context/orderContext";

import { CartContextType, menuItemType } from "@utils/types";
import { MerchantLocationsType } from "@utils/merchantConstants";
import { menu_items } from "@utils/constants";

import OrderCard from "@/components/ordering/OrderCard";
import ItemModal from "@/components/ordering/ItemModal";
import CheckoutBottomNav from "@/components/ordering/CheckoutBottomNav";
import LocationSwitch from "@/components/ordering/LocationSwitch";


export default function CreateOrderPage() {
  const [menuItem, setMenuItem] = useState<menuItemType>(menu_items[0])
  const [itemModal, setItemModal] = useState<boolean>(false) 
  // const [location, setLocation] = useState<MerchantLocationsType>('EVERSON')
  const [hours, setHours] = useState<string>('')
  // const [isLocationOpen, setIsLocationOpen] = useState<boolean>(true)

  const MyCart = useContext(CartContext)
  // const currDay = getIsOpen()

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
      <main className={`flex flex-col px-3 sm:px-8 gap-x-4 mb-[100px]`}>
        <div className="text-2xl font-bold">{`NOTICE: We don't do delivery, sorry!`}</div>
        <LocationSwitch/>
        <div>
          <h3 className="font-bold text-xl mb-2">ITEMS</h3>
          <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:md:grid-cols-5 gap-3">
            {menu_items.map((item) => {
              return (
                <OrderCard 
                  key={`${item.name}-item`} 
                  menuItem={item} 
                  handleOnClick={() => handleMenuCardClick(item)}
                />
              )
            })}
          </div>
        </div>
      </main>
      <CheckoutBottomNav/>
    </>
  );
}
