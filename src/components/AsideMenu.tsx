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
      <div 
        className={`fixed duration-150  ${isOpen?'z-[2] backdrop-blur-sm':'backdrop-blur-none z-[-1]'} w-full h-full`}
      />
      <div className="z-[1] bg-primary top-0 flex flex-row justify-between items-center p-3 sm:p-6 w-full">
        <div className="">
          <Image className="max-h-12 sm:max-h-28 w-auto" src='/assets/flag.png' alt="mexico flag" width={999} height={999}/>
        </div>
        <div className="text-black text-xl sm:text-5xl uppercase font-bold">a que tacos</div>
        <div id="nav-icon3" className={`${isOpen?'open':''}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
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
            className="flex flex-col gap-6 mt-20 text-black text-2xl sm:text-5xl uppercase font-bold"
          >
            <Link className="hover:underline " href={"/"}>Home</Link>
            <Link className="hover:underline " href={"/menu"}>Menu</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default AsideMenu;