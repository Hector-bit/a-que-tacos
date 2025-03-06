'use client'
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/context/orderContext";

import { CartContextType, menuItemType } from "@utils/types";
import { MerchantLocations } from "@utils/mercchantTypes";
import { menu_items, daysOfWeek } from "@utils/constants";
// import { getIsOpen } from "@/actions/helperFunctions";

import OrderCard from "@/components/ordering/OrderCard";
import ItemModal from "@/components/ordering/ItemModal";
import BottomNav from "@/components/ordering/BottomNav";
import MaintenanceWrapper from "@/components/wrappers/Maintenancewrappers";
import { getCurrentTime } from "@/actions/helperFunctions";
import { NextResponse } from "next/server";
import LocatoinIsOpenWrapper from "@/components/wrappers/LocationIsOpenWrapper";


export default function CreateOrderPage() {
  const onlineOrderingMaintence = process.env.NEXT_PUBLIC_ONLINE_ORDERING_FEAT
  const [menuItem, setMenuItem] = useState<menuItemType>(menu_items[0])
  const [itemModal, setItemModal] = useState<boolean>(false) 
  const [location, setLocation] = useState<MerchantLocations>('EVERSON')
  const [hours, setHours] = useState<string>('')
  const [isLocationOpen, setIsLocationOpen] = useState<boolean>(true)

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


  useEffect(() => {
    const currDay = new Date().getDay();
    const currTimeTemp = getCurrentTime()
    const currTime = Number(currTimeTemp)
    console.log('current time: ', currTime)
    
    const fetchBusinessHours = async() => {
      try{
        const res = await fetch('/api/clover/business-hours')
        let businessHours = await res.json()
        // setHours(info.toString())
        // console.log(businessHours)
        let currHours = businessHours[daysOfWeek[currDay]].elements[0]
        console.log(currHours, 'current hours')
        const startTime = Number(currHours.start) + 15 //15 minute padding for parents to open
        const endTime = Number(currHours.end) - 250 //2.5 hr padding bc they close early
        console.log('start time: ', startTime, ' end time: ', endTime)
        if(startTime < currTime && currTime < endTime){
          setIsLocationOpen(true)
        } else {
          setIsLocationOpen(false)
        }
      }
      catch(err){
        console.error('error fetch data: ', err)
      }
    }
    fetchBusinessHours()
  },[])

  return (
    <MaintenanceWrapper>
      <LocatoinIsOpenWrapper isLocationOpen={isLocationOpen}>
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
      </LocatoinIsOpenWrapper>
      <BottomNav/>
    </MaintenanceWrapper>
  );
}
