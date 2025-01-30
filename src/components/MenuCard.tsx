'use client'
import Image from "next/image"
import { useState } from "react"

interface MenuCardInterface {
    img: string
    name: string
    description: string
}

const MenuCard = ({ img, name, description }: MenuCardInterface) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      <Image className="rounded-lg" src={img} alt={`item ${name}`} width={999} height={999}/>
      <div className="flex flex-row justify-between items-center w-full">
        <div className="text-center font-semibold">{name}</div>
        <div 
          className={`duration-150 ${isOpen?'rotate-180':'rotate-0'}`}
        >
          <Image src="/assets/ui/dropdown.png" alt={"drop down arrow"} width={20} height={20}/>
        </div>
      </div>
        {isOpen &&
          <div
            className={`overflow-hidden duration-300 ${isOpen?'h-auto':'h-0'}`}
          >
            {description}
          </div>
        }
    </div>        
  )
}

export default MenuCard;