'use client'
import Image from "next/image"
import { menuItemType } from "../../../utils/types"
import { MenuNameDictionary } from "../../../utils/constants"

interface ItemCardInterface {
  menuItem: menuItemType
  handleOnClick: () => void
}

const ItemCard = ({ menuItem, handleOnClick }: ItemCardInterface) => {

  return (
    <div className="cursor-pointer rounded-[20px] border border-black" onClick={handleOnClick}>
      <Image className="rounded-t-[20px]" src={menuItem.img} alt={`${menuItem.name}`} width={999} height={999}/>
      <div className="flex flex-row justify-between items-center px-3 pb-2 pt-1">
        <div className="text-center font-semibold">{MenuNameDictionary[menuItem.name]}</div>
        <Image src="/assets/ui/addition.svg" alt={"drop down arrow"} width={20} height={20}/>
      </div>
    </div>        
  )
}

export default ItemCard;