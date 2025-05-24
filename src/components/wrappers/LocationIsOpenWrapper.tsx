"use client"
import React, { ReactNode, useContext, useEffect, useState } from "react"
import { isWitinOperatingTime } from "@/actions/helperFunctions"
import { CartContext } from "@/context/orderContext"
import { CartContextType } from "@utils/types"
import { locationOperatingTime, operatingDays } from "@utils/merchantConstants"
import { minutesToHoursReadable } from "@/actions/helperFunctions"
import Image from "next/image"

type LocationIsOpenWrapperInterface = {
  children: ReactNode
}


const LocationIsOpenWrapper = ({ children }:LocationIsOpenWrapperInterface) => {
  // const [onlineOrdering, setOnlineOrdering] = useState<boolean>(true)
  const { location, onlineOrdering, handleOnlineOrdering } = useContext<CartContextType>(CartContext)
  const [operatingHours, setOperatingHours] = useState<{opening:string, closing: string}>({ opening: '0', closing: '0'})


  // sets closed or open UI if within business hours
  useEffect(() => {
    const locationTime = locationOperatingTime[location]
    const operatingDay = operatingDays[location]
    const locationClosing = minutesToHoursReadable(locationTime.closing)
    const locationOpening = minutesToHoursReadable(locationTime.opening)
    setOperatingHours({ opening: locationOpening, closing: locationClosing })
    // console.log('set hours', locationClosing, locationOpening)

    const currDate = new Date
    const currDay = currDate.getDay()

    console.log('curr day: ', currDay)
    if(operatingDay.includes(currDay) && !locationTime.closed) {
      //check if within hours
      const isOpen = isWitinOperatingTime(currDate, location)
      // console.log('WE OPEN??: ', isOpen, ' location: ', location)
      handleOnlineOrdering(isOpen)
  
      const interval = setInterval(() => {
        const now = new Date();
        const isOpen = isWitinOperatingTime(now, location)
        // handleOnlineOrdering(true)
        handleOnlineOrdering(isOpen)
      }, 60 * 1000);
  
      return () => clearInterval(interval);

    } else {

      handleOnlineOrdering(false)
    }

  }, [location]);
  

  return (
    onlineOrdering
    ?
    <>{children}</>
    :
    <>
      {location !== 'SELECT' && <div className="flex flex-col items-center justify-center pb-12">
        <div className="text-2xl p-4">Online ordering for {location} available from {operatingHours.opening}am to {operatingHours.closing}pm</div>
        <Image 
          src={"/assets/ui/sign-close.svg"} 
          alt={"closed"}
          width={200}
          height={200}
        />
      </div>}
      {children}
    </>
  )
}

export default LocationIsOpenWrapper