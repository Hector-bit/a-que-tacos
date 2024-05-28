"use client"
import React, { useEffect, useState } from "react";
import { motion, useAnimationControls, Variants } from "framer-motion";

const AsideMenuVariants: Variants = {
  'closed': {
    x: '100%',
  },
  'open': {
    x: '0%'
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
    <div className="h-full w-full fixed top-0 h-40">
      <div className="flex flex-row justify-between items-center p-6 w-full">
        <div className="">
          <img src='assets/flag.png' className="max-h-28"/>
        </div>
        <div className="text-black text-5xl uppercase font-bold">a que tacos</div>
        <div 
          id='menu_button' 
          className="cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <img src='assets/menuButton.svg' />
        </div>        
      </div>
      {/* ASIDE MENU */}
      <motion.div
        initial={'closed'}
        className="w-screen h-screen inset-0 fixed border-2 border-fuchsia-500"
        variants={AsideMenuVariants}
        animate={AsideMenuControls}
      >
        hello
      </motion.div>
    </div>
  )
}

export default AsideMenu;