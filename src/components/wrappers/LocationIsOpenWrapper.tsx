import React, { ReactNode } from "react"

type LocatoinIsOpenWrapperInterface = {
  isLocationOpen: boolean,
  children: ReactNode
}


const LocatoinIsOpenWrapper = ({ isLocationOpen, children }:LocatoinIsOpenWrapperInterface) => {

  // console.log('IS MAINTENANCE: ', isMaintenance, typeof(isMaintenance), (isMaintenance === 'true'))

  return (
    isLocationOpen === true ?
    <>{children}</>
    :
    <div className="flex justify-center">
      <div className="text-2xl my-4 text-center">
        {`Sorry online ordering is closed for the day come back tomorrow!`}
        <br/>
        {`Online ordering closes earlier while we're testing`}
      </div>
    </div>
  )
}

export default LocatoinIsOpenWrapper