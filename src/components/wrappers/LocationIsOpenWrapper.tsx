"use client"
import React, { ReactNode, useContext, useEffect, useState } from "react"
import { isBetween11And6 } from "@/actions/helperFunctions"
import { CartContext } from "@/context/orderContext"
import { CartContextType } from "@utils/types"
import Image from "next/image"

type LocationIsOpenWrapperInterface = {
  children: ReactNode
}


const LocationIsOpenWrapper = ({ children }:LocationIsOpenWrapperInterface) => {
  // const [onlineOrdering, setOnlineOrdering] = useState<boolean>(true)
  const { onlineOrdering, handleOnlineOrdering } = useContext<CartContextType>(CartContext)

  // sets closed or open UI if within business hours
  useEffect(() => {
    const currDate = new Date
    const currDay = currDate.getDay()

    console.log('curr day: ', currDay)
    if(currDay !== 0){
      //check if within hours
      const isOpen = isBetween11And6(currDate)
      handleOnlineOrdering(isOpen)
  
      const interval = setInterval(() => {
        const now = new Date();
        const isOpen = isBetween11And6(now)
        // handleOnlineOrdering(true)
        handleOnlineOrdering(isOpen)
      }, 60 * 1000);
  
      return () => clearInterval(interval);

    } else {
      // its sunday
      handleOnlineOrdering(false)
    }

  }, []);
  

  return (

    onlineOrdering
    ?
    <>{children}</>
    :
    <>
      <div className="flex flex-col items-center justify-center pb-12">
        <div className="text-2xl">Online ordering for Everson available from 11:15pm to 6pm</div>
        <Image 
          src={"/assets/ui/sign-close.svg"} 
          alt={"closed"}
          width={200}
          height={200}
        />
      </div>
      {children}
    </>
  )
}

export default LocationIsOpenWrapper