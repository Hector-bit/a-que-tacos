import { useState } from "react"
import Image from "next/image"
import { Check, Close } from "../../../utils/icons"
import { ingredientsType } from "../../../utils/types"

const btn_two = 'drop-shadow-2xl rounded-xl py-3 px-5 text-white'

interface IngredientButtonInterface {
  ingredientName: string
  ingredient: ingredientsType
  removeFromListFn: (arg:ingredientsType) => void
  addToListFn: (arg:ingredientsType) => void
}

const IngredientButton = ({ ingredientName, ingredient, removeFromListFn, addToListFn }: IngredientButtonInterface) => {
  const [checked, setChecked] = useState<boolean>(false)

  const handleBtnClick = () => {
    if(!checked){
      addToListFn(ingredient)
    } else {
      removeFromListFn(ingredient)
    }
    setChecked(!checked)
  } 

  return (
    <button 
      className={`flex flex-row items-center ${btn_two} bg-secondary gap-2`} 
      onClick={handleBtnClick}
    >
      <span>{ingredient}</span>
      <Check 
        classname={`${checked?'hidden':''} stroke-white fill-white`} 
        strokeWidth={2}
        width={20} height={20}
      />
      <Close 
        classname={`${checked?'':'hidden'} stroke-flagRed fill-flagRed`} 
        stroke="#ffffff"
        width={20} height={20}
      />
    </button>
  )
}

export default IngredientButton;