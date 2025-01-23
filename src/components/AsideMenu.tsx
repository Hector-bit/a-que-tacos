"use client"
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, useAnimationControls, Variants } from "framer-motion";

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

const BlurBgVariants: Variants = {
  'closed': {
    x: '100%',
    opacity: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.1
    }
  },
  'open': {
    x: [0, 0],
    opacity: [0, 1],
    transition: {
      ease: 'easeOut',
      duration: 0.1
    }
  }
}

interface AsideMenuProps {
  // isOpen: boolean
}

const AsideMenu = ({  }:AsideMenuProps) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false)
  const AsideMenuControls = useAnimationControls();

  useEffect(() => {
    if(isOpen){
      AsideMenuControls.start('open')
    } else {
      AsideMenuControls.start('closed')
    }
  },[isOpen, AsideMenuControls])

  return (
    <>
      <motion.div 
        className="fixed backdrop-blur-sm z-[2] w-full h-full"
        initial={'closed'}
        variants={BlurBgVariants} 
        animate={AsideMenuControls} 
      />
      <div className="bg-primary top-0 flex flex-row justify-between items-center p-3 sm:p-6 w-full">
        <div className="">
          <Image className="max-h-12 sm:max-h-28 w-auto" src='/assets/flag.png' alt="mexico flag" width={999} height={999}/>
        </div>
        <div className="text-black text-xl sm:text-5xl uppercase font-bold">a que tacos</div>
        <div id="nav-icon3" className={`z-[4] ${isOpen?'open':''}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {/* ASIDE MENU */}
      <motion.div
        id='_menuOverlay'
        initial={'closed'}
        className="z-[3] w-full h-full flex flex-row justify-end inset-0 fixed"
        variants={AsideMenuVariants}
        animate={AsideMenuControls}
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
      </motion.div>
    </>
  )
}

export default AsideMenu;