'use client'
import { useState, useContext } from "react";
import { CartContext } from "@/context/orderContext";
import { LOCATION_CREDS, LOCATION_HOURS, LOCATIONS, location_address } from "@utils/mercchantConstants";

const LocationSwitch = () => {

  const { location, handleLocation } = useContext(CartContext)

  // console.log('Creds?', )


  return (
    <div className="text-2xl font-bold">
      <label className='mr-2'>Location:</label>
      <select className="p-2 font-medium" name="locations" id="locations">
        {LOCATIONS.map((location, index) => {
          return (
            <option
              className="p-2 font-medium font"
              key={`${index}-${location}`} 
              value={location}
              onClick={() => handleLocation(location)}
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