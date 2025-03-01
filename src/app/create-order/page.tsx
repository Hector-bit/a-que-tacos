'use client'
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/context/orderContext";

import { CartContextType, menuItemType } from "../../../utils/types";
import { menu_items } from "../../../utils/constants";
// import { getIsOpen } from "@/actions/helperFunctions";

import OrderCard from "@/components/ordering/OrderCard";
import ItemModal from "@/components/ordering/ItemModal";
import BottomNav from "@/components/ordering/BottomNav";
import MaintenanceWrapper from "@/components/wrappers/Maintenancewrappers";


export default function CreateOrderPage() {
  const onlineOrderingMaintence = process.env.NEXT_PUBLIC_ONLINE_ORDERING_FEAT
  const [menuItem, setMenuItem] = useState<menuItemType>(menu_items[0])
  const [itemModal, setItemModal] = useState<boolean>(false) 

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

  // useEffect(() => {
  //   console.log('stuff', currDay, typeof(currDay))
  // },[])

  return (
    <MaintenanceWrapper>
      <ItemModal isOpen={itemModal} foodItem={menuItem} closeFn={handleItemModal} />
      {onlineOrderingMaintence === 'true' ? 
        
        <main className={`flex flex-col px-3 sm:px-8 gap-x-4 mb-[100px]`}>
        <div className="text-lg">{`NOTICE: We don't do delivery, sorry!`}</div>
        <div className="text-lg mb-8">Online ordering available in Everson only at this moment.</div>

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
      
      : 
      (<div>
        Sorry online ordering is under maintnence 
      </div>)
      }
      <BottomNav/>
    </MaintenanceWrapper>
  );
}
