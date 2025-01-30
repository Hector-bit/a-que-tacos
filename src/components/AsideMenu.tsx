"use client"
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

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
  let header = (process.env.NEXT_PUBLIC_IS_PRODUCTION === 'true'?'A QUE TACOS 34':'DEVELOPMENT')

  useEffect(() => {
    if(isOpen){
      AsideMenuControls.start('open')
    } else {
      AsideMenuControls.start('closed')
    }
  },[isOpen, AsideMenuControls])



  return (
    <>
      {/* HEADER STUFF  */}
      <motion.div 
        className="fixed backdrop-blur-sm z-[2] w-full h-full"
        initial={'closed'}
        variants={BlurBgVariants} 
        animate={AsideMenuControls} 
      />
      <div className="sticky z-[1] bg-primary top-0 flex flex-row justify-between items-center p-3 sm:p-6 w-full">
        <div className="">
          <Image className="max-h-12 sm:max-h-28 w-auto" src='/assets/flag.png' alt="mexico flag" width={999} height={999}/>
        </div>
        <div className="text-black text-xl sm:text-5xl uppercase font-bold">{header}</div>
        <div 
          id='_menuOpenButton' 
          className="cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <Image className="max-h-12 sm:max-h-28 w-auto z-[3]" src='/assets/menuButton.svg' alt="menu button" width={999} height={999}/>
        </div>
      </div>
      {/* END OF HEADER STUFF  */}
      {/* ASIDE MENU */}
      <motion.div
        id='_menuBackgroundOverlay'
        initial={'closed'}
        className="z-[3] w-full h-full flex flex-row justify-end inset-0 fixed"
        variants={AsideMenuVariants}
        animate={AsideMenuControls}
        onClick={() => setIsOpen(false)}
      >
        <div id='_menuContainer' className="flex flex-col items-center top-0 right-0 bg-primary w-[50%] max-w-[90%] p-4 sm:p-8">
          <div 
            id='_menuCloseButton' 
            className="cursor-pointer self-end"
            onClick={() => setIsOpen(false)}
          >
            <Image className="max-h-12 sm:max-h-28 w-auto" src='assets/menuButton.svg' alt="menu button" width={999} height={999}/>
          </div>
          <div
            id='_menuListItems'
            className="flex flex-col gap-y-12 mt-8 text-black text-2xl sm:text-5xl uppercase font-bold"
          >
            <Link className="hover:underline text-center" href={"/"}>Home</Link>
            <Link className="hover:underline text-center" href={"/menu"}>Menu</Link>
            <Link className="hover:underline text-center" href={"/order-pickup"}>Order Pickup</Link>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default AsideMenu;