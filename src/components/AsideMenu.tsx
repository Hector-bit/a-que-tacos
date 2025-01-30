'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface AsideMenuProps {
  // isOpen: boolean
}

const AsideMenu = ({  }:AsideMenuProps) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false)



  return (
    <>
      />
      <div className="z-[1] bg-primary top-0 flex flex-row justify-between items-center p-3 sm:p-6 w-full">
        <div className="">
          <Image className="max-h-12 sm:max-h-28 w-auto" src='/assets/flag.png' alt="mexico flag" width={999} height={999}/>
        </div>
      {/* ASIDE MENU */}
      <div
        id='_menuOverlay'
        className={`z-[3] w-full h-full flex flex-row justify-end inset-0 fixed duration-300 ${isOpen?'translate-x-0':'translate-x-full'}`}
        onClick={() => setIsOpen(false)}
      >
        <div id='_menuContainer' className="flex flex-col items-center top-0 right-0 bg-primary w-[50%] max-w-[90%] p-4 sm:p-8">
          <div
            id='_menuListItems'
          >
            <Link className="hover:underline text-center" href={"/"}>Home</Link>
            <Link className="hover:underline text-center" href={"/menu"}>Menu</Link>
            <Link className="hover:underline text-center" href={"/order-pickup"}>Order Pickup</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default AsideMenu;