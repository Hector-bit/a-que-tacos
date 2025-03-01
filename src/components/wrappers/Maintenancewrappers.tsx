import React, { ReactNode } from "react"

type MaintenanceWrapperInterface = {
  children: ReactNode,
}


const MaintenanceWrapper = ({ children }:MaintenanceWrapperInterface) => {

  const isMaintenance = process.env.NEXT_PUBLIC_ONLINE_ORDERING_FEAT

  console.log('IS MAINTENANCE: ', isMaintenance, typeof(isMaintenance), (isMaintenance === 'true'))

  return (
    isMaintenance == 'true' ?
    <div>
      Sorry online ordering is under maintnence 
    </div>
    :
    <>{children}</>
  )
}

export default MaintenanceWrapper