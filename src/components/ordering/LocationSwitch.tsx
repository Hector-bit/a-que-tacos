'use client'
import { useState, useContext } from "react";
import { CartContext } from "@/context/orderContext";
import { LOCATION_CREDS, location_hours, LOCATIONS, location_address, MerchantLocationsType, MID_TO_SIGNAGE } from "@utils/merchantConstants";

const LocationSwitch = () => {

  const { location, handleLocation } = useContext(CartContext)

  // console.log('Creds?', console.log('signage', LOCATION_CREDS[location], MID_TO_SIGNAGE[LOCATION_CREDS[location].MID]))


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