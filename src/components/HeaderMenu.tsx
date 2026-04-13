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
    <nav>
      <a href="#" className="nav-logo">
        <div className="flag-icon"><span className="flag-green"></span><span className="flag-white"></span><span className="flag-red"></span></div>
        A Que Tacos
      </a>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/menu">Menu</a></li>
        {/* <li><a href="#" className="nav-cta">Order Now</a></li> */}
      </ul>
    </nav>
  )
}

export default HeaderMenu;