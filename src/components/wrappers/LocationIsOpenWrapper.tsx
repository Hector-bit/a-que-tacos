import React, { ReactNode } from "react"
import { isBusinessOpen, isBetween11And6 } from "@/actions/helperFunctions"

type LocationIsOpenWrapperInterface = {
  children: ReactNode
}


const LocationIsOpenWrapper = async({ children }:LocationIsOpenWrapperInterface) => {

  const currDate = new Date()
  const isOpen = isBetween11And6(currDate)
  // const isOpen = false

  console.debug('check var: ', isOpen)

  return (
    isOpen?
    <>{children}</>
    :
    <div className="flex justify-center">
      <div className="text-2xl my-4 text-center">
        {`Sorry online ordering is closed for the day come back tomorrow!`}
        <br/>
        {`Online ordering closes a bit earlier while we're testing`}
      </div>
    </div>
  )
}

export default LocationIsOpenWrapper