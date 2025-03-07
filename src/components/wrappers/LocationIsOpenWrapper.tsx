import React, { ReactNode } from "react"
import { isBusinessOpen } from "@/actions/helperFunctions"

type LocationIsOpenWrapperInterface = {
  children: ReactNode
}


const LocationIsOpenWrapper = async({ children }:LocationIsOpenWrapperInterface) => {

  const isOpen = await isBusinessOpen()
  // const isOpen = false

  // console.log('IS MAINTENANCE: ', isMaintenance, typeof(isMaintenance), (isMaintenance === 'true'))

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