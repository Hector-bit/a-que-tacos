import React, { ReactNode } from "react"
import { getCurrentTime } from "@/actions/helperFunctions"

type LocationIsOpenWrapperInterface = {
  children: ReactNode
}


const LocationIsOpenWrapper = ({ children }:LocationIsOpenWrapperInterface) => {
  const currTimeTemp = getCurrentTime()
  const currTime = Number(currTimeTemp)
  const startTime = 1115 //15 minute padding for parents to open
  const endTime = 1745 //2.5 hr padding bc they close early
  // console.debug('start time: ', startTime, ' curr time: ', currTime, ' end time: ', endTime)

  const isOpen = startTime <= currTime && currTime <= endTime
  // const isOpen = false

  // console.debug('check vars: ', isOpen)

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