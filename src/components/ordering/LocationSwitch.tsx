'use client'
import { useState, useContext, useEffect } from "react";
import { CartContext } from "@/context/orderContext";
import { LOCATION_CREDS, location_hours, LOCATIONS, location_address, MerchantLocationsType, MID_TO_SIGNAGE } from "@utils/merchantConstants";
import { getLocationFromMID, getCredentialsFromLocation } from "@/actions/actions";

const LocationSwitch = () => {

  const { location, handleLocation } = useContext(CartContext)
  // const merchant_id = LOCATION_CREDS[location].MID
  // const signage = await getSignFromMid(merchant_id)
  // const testServer = getMIDfromLocation(location)

  // console.log('location:', location, '\nMID: ', merchant_id, '\nsignage:', signage, '\n testing: ', testServer)

  // useEffect(() => {
  //   const getShtuff = async() => {
  //     const merchant_id = LOCATION_CREDS[location].MID
  //     const signage = await getLocationFromMID(merchant_id)
  //     const testServer = await getCredentialsFromLocation(location)
  //     console.log('location:', location, '\nMID: ', merchant_id, '\nsignage:', signage, '\n testing: ', testServer)
  //   }
  //   getShtuff()
  // },[location])


  return (
    <div className="text-2xl font-bold">
      <label className='mr-2'>Location:</label>
      <select 
        id="locations"
        name="locations" 
        className="p-2 font-medium" 
        value={location} 
        onChange={(e) => handleLocation(e.target.value as MerchantLocationsType)}
      >
        {LOCATIONS.map((location, index) => {
          return (
            <option
              key={`${index}-${location}`} 
              className="p-2 font-medium font"
              value={location}
            >
              {location}
            </option>
          )
        })}
      </select>
      <div className=" mb-8">{`Pick up location: ${location_address[location]}`}</div>
    </div>
  )
}

export default LocationSwitch;