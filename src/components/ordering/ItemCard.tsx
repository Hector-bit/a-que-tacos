'use client'
import Image from "next/image"
import { useState } from "react"

interface ItemCardInterface {
    img: string
    name: string
    description: string
}

const ItemCard = ({ img, name, description }: ItemCardInterface) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className="cursor-pointer rounded-[20px] border border-black" onClick={() => setIsOpen(!isOpen)}>
      <Image className="rounded-t-[20px]" src={img} alt={`${name}`} width={999} height={999}/>
      <div className="flex flex-row justify-between items-center px-3 pb-2 pt-1">
        <div className="text-center font-semibold">{name}</div>
        <div 
          className={`duration-150 ${isOpen?'rotate-180':'rotate-0'}`}
        >
          <Image src="/assets/ui/addition.svg" alt={"drop down arrow"} width={20} height={20}/>
        </div>
      </div>
      {/* <div
        className={`p-3 overflow-hidden duration-300 ${isOpen?'h-auto':'h-0'}`}
      >
        {description}
      </div> */}
    </div>        
  )
}

export default ItemCard;