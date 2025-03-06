'use client'
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/context/orderContext";

import { CartContextType, menuItemType } from "@utils/types";
import { MerchantLocations } from "@utils/mercchantTypes";
import { menu_items } from "../../../utils/constants";
// import { getIsOpen } from "@/actions/helperFunctions";

import OrderCard from "@/components/ordering/OrderCard";
import ItemModal from "@/components/ordering/ItemModal";
import BottomNav from "@/components/ordering/BottomNav";
import MaintenanceWrapper from "@/components/wrappers/Maintenancewrappers";
import { getMerchantID, getAPIToken, getBaseAPI } from "@/actions/helperFunctions";


export default function CreateOrderPage() {
  const onlineOrderingMaintence = process.env.NEXT_PUBLIC_ONLINE_ORDERING_FEAT
  const [menuItem, setMenuItem] = useState<menuItemType>(menu_items[0])
  const [itemModal, setItemModal] = useState<boolean>(false) 
  const [location, setLocation] = useState<MerchantLocations>('EVERSON')

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
  // const getMerchantIsClosed = async(location: MerchantLocations):Promise<any> => {

  // let locationMID = getMerchantID(location)
  // let locationToken = getAPIToken(location)
  // let baseAPI = process.env.CLOVER_BASE_URL

  // const fetchHoursUrl = `${baseAPI}/v3/merchants/${locationMID}/opening_hours`
  // console.log('fetching fromo this url: ', fetchHoursUrl)

  // try {
  //     let response = await fetch(fetchHoursUrl, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${locationToken}`
  //       }
  //     })

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }

  //     const data = await response.json()

  //     console.log('data from merchanis closed', data)
  //     return true

  //   } 
  //   catch(err){
  //     console.error(`error fetching hours: ${err}`)
  //     return false
  //   }
  // }

  // getMerchantIsClosed('EVERSON')

  // },[])

  return (
    <MaintenanceWrapper>
        <ItemModal isOpen={itemModal} foodItem={menuItem} closeFn={handleItemModal} />
        <main className={`flex flex-col px-3 sm:px-8 gap-x-4 mb-[100px]`}>
        <div className="text-2xl font-bold">{`NOTICE: We don't do delivery, sorry!`}</div>
        <div className="text-2xl font-bold mb-4">{`Online ordering available in Everson only at this moment. (pickup only)`}</div>
        <div className="text-2xl font-bold mb-8">{`Pick up location: 117 W Main St, Everson, WA 98247`}</div>

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
      <BottomNav/>
    </MaintenanceWrapper>
  );
}
