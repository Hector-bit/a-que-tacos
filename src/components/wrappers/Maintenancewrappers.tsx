import React, { ReactNode } from "react"
import { getMerchantIsClosed } from "@/actions/helperFunctions"

type MaintenanceWrapperInterface = {
  children: ReactNode,
}


const MaintenanceWrapper = ({ children }:MaintenanceWrapperInterface) => {

  const onlineOrderingFeature = process.env.NEXT_PUBLIC_ONLINE_ORDERING_FEAT

  // console.log('IS MAINTENANCE: ', isMaintenance, typeof(isMaintenance), (isMaintenance === 'true'))

  return (
    onlineOrderingFeature == 'true' ?
    <>{children}</>
    :
    <div>
      Sorry online ordering is under maintnence 
    </div>
  )
}

export default MaintenanceWrapper