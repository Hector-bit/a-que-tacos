"use client"
import React, { useEffect, useState } from "react";
import { motion, useAnimationControls, Variants } from "framer-motion";
import Link from "next/link";

const AsideMenuVariants: Variants = {
  'closed': {
    x: '100%',
    transition: {
      ease: 'easeOut',
      duration: 0.3
    }
  },
  'open': {
    x: '0%',
    transition: {
      ease: 'easeOut',
      duration: 0.3
    }
  }
}

interface AsideMenuProps {
  // isOpen: any
  // closeFn: any
}
const AsideMenu = ({}:AsideMenuProps) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false)
  const AsideMenuControls = useAnimationControls();

  useEffect(() => {
    if(isOpen){
      AsideMenuControls.start('open')
    } else {
      AsideMenuControls.start('closed')
    }
  },[isOpen])

  return (
    <>
      <div className="fixed top-0 flex flex-row justify-between items-center p-6 w-full">
        <div className="">
          <img src='assets/flag.png' className="max-h-28"/>
        </div>
        <div className="text-black text-5xl uppercase font-bold">a que tacos</div>
        <div 
          id='_menuOpenButton' 
          className="cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <img src='assets/menuButton.svg' />
        </div>
      </div>
      {/* ASIDE MENU */}
      <motion.div
        id='_menuBackgroundOverlay'
        initial={'closed'}
        className="flex w-full h-full backdrop-blur-sm flex flex-row justify-end inset-0 fixed border-2 border-fuchsia-500"
        variants={AsideMenuVariants}
        animate={AsideMenuControls}
        onClick={() => setIsOpen(false)}
      >
        <div id='_menuContainer' className="top-0 left-0 bg-primary max-w-[90%] p-8">
          <div 
            id='_menuCloseButton' 
            className="cursor-pointer w-auto"
            onClick={() => setIsOpen(false)}
          >
            <img src='assets/menuButton.svg' />
          </div>
          <div
            id='_menuListItems'
            className="flex flex-col gap-6 mt-8 text-black text-5xl uppercase font-bold"
          >
            <Link className="hover:underline " href={"/"}>Home</Link>
            <Link className="hover:underline " href={"/menu"}>Menu</Link>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default AsideMenu;