'use client'
import React, { useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { CartContext } from "@/context/orderContext";
import { CartContextType } from "../../utils/types";
import clsx from "clsx";

interface HeaderMenuProps {
  // isOpen: boolean
}

const title = process.env.NEXT_PUBLIC_IS_PRODUCTION === 'true'? 'A Que Tacos': "Devlopment"

const HeaderMenu = ({  }:HeaderMenuProps) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false)
  // const { isDevelopment } = useContext<CartContextType>(CartContext)

  const handleAside = () => {
    // console.log('HANDLEASIDE FN')
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="mx-auto max-w-[1400px] sticky z-[1] h-[90px] sm:h-[140px] bg-primary top-0 flex flex-row justify-between items-center p-3 sm:p-6 w-full">
        <div className="">
          <Image className="max-h-16 sm:max-h-28 w-auto" src='/assets/flag.png' alt="mexico flag" width={999} height={999}/>
        </div>
        <div className="text-black text-xl sm:text-5xl uppercase font-bold">{title}</div>
        <div id="nav-icon3" className={`z-[3] ${isOpen?'open':''}`} onClick={handleAside}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* <div 
          className={`fixed z-[2] duration-150 w-full h-full ${isOpen?'z-[1] backdrop-blur-sm block':'backdrop-blur-none hidden z-[-1]'}`}
          onClick={() => setIsOpen(false)}
        /> */}
        <div
          id='_menuOverlay'
          className={`mx-auto max-w-[1400px] z-[2] flex flex-row justify-end inset-0 fixed duration-300 ${isOpen?'translate-x-0':'translate-x-full'}`}
        >
          <div 
            className={`grow z-[2] ${isOpen?'z-[1] backdrop-blur-sm block':'backdrop-blur-none z-[-1]'}`}
            onClick={handleAside}
          />
          <div id='_menuContainer' className="flex flex-col items-center top-0 right-0 bg-primary w-[60%] max-w-[70%] h-ful p-4 sm:p-8">
            <div
              id='_menuListItems'
              className="flex flex-col gap-6 mt-20 text-black text-2xl sm:text-5xl uppercase font-bold text-center"
            >
              <Link className="hover:underline " href={"/"} onClick={handleAside}>Home</Link>
              <Link className="hover:underline " href={"/menu"} onClick={handleAside}>Menu</Link>
              <Link className="hover:underline " href={"/create-order"} onClick={handleAside}>Order</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderMenu;