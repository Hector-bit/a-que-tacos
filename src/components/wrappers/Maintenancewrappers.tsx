import React, { ReactNode } from "react"

type MaintenanceWrapperInterface = {
  children: ReactNode,
  //because env vars come back as strings
}


const MaintenanceWrapper = ({ children }:MaintenanceWrapperInterface) => {

  const isMaintenance = process.env.NEXT_PUBLIC_ONLINE_ORDERING_FEAT

  return (
    isMaintenance === 'true'?
    <div>
      Sorry online ordering is under maintnence 
    </div>
    :
    <>{children}</>
  )
}

export default MaintenanceWrapper