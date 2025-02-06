import { useState } from "react";
import { menuItemType } from "../../../utils/types";
import Image from "next/image";

const btn_one = 'drop-shadow rounded-[20px] py-3 px-5 text-white'
const btn_two = 'drop-shadow rounded-xl py-3 px-5 text-white'

interface ItemModalProps {
  isOpen: boolean
  closeFn: () => void
  foodItem: menuItemType
}

const ItemModal = ({isOpen, foodItem, closeFn}:ItemModalProps) => {
  const [ingredients, setIngredients] = useState<any>()

  return (
    isOpen && (
      <div className="fixed inset-0 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[90%] max-w-[420px] border-2 border-black bg-primary rounded-3xl flex-col p-3">
        <div className="flex justify-between">
          <div className="text-2xl font-extrabold">{foodItem.name}</div>
          <Image 
            className="cursor-pointer" 
            src='/assets/ui/close.svg' 
            onClick={closeFn}
            width={30} height={30} alt='close'
          />
        </div>
        {/* ACTUALLY ORDERING STUFF GOES HERE */}
        <div className="flex flex-row mt-2 ">
          <Image className="rounded-[20px]" src={foodItem.img} alt={`${foodItem.name}`} width={120} height={120}/>
          <div className="grow flex flex-col gap-2 justify-end items-end">
            <div className={`${btn_one} bg-flagRed`}>${foodItem.price}</div>
            <button className={`${btn_one} bg-flagGreen`}>ADD TO ORDER</button>
          </div>
        </div>
        <div className="flex flex-row flex-wrap mt-2 gap-2">
          {foodItem.ingredients.map((ingredient) => {
            return (
              <div className={`${btn_one} bg-secondary`}>
                <span>{ingredient}</span>
                <Image src={""} alt={""}/>
              </div>
            )
          })}
        </div>
      </div>
    )
  )
}

export default ItemModal;