import { useState } from "react"
import Image from "next/image"
import { Check, Close } from "../../../utils/icons"

const btn_two = 'drop-shadow-2xl rounded-xl py-3 px-5 text-white'

interface IngredientButtonInterface {
  name: string
  onClickFn: () => void
}

const IngredientButton = ({ name, onClickFn }: IngredientButtonInterface) => {
  const [removeIngredient, setRemoveIngredient] = useState<boolean>(false)

  const handleBtnClick = () => {
    setRemoveIngredient(!removeIngredient)
  } 

  return (
    <button className={`flex flex-row items-center ${btn_two} bg-secondary gap-2`} onClick={handleBtnClick}>
      <span>{name}</span>
      <Check 
        classname={`${removeIngredient?'hidden':''} stroke-white fill-white`} 
        strokeWidth={2}
        width={20} height={20}
      />
      <Close 
        classname={`${removeIngredient?'':'hidden'} stroke-flagRed fill-flagRed`} 
        stroke="#ffffff"
        width={20} height={20}
      />
    </button>
  )
}

export default IngredientButton;