import { useState, useContext, useEffect } from "react";
import Image from "next/image";
import { ingredientsType, menuItemType, ChoiceOfMeatType } from "../../../utils/types";
import { ingredientDictionary, MenuNameDictionary } from "../../../utils/constants";
import IngredientButton from "./IngredientButton";
import { CartContext } from "@/context/orderContext";

const btn_one = 'drop-shadow-2xl rounded-[20px] py-3 px-5 text-white'

interface ItemModalProps {
  isOpen: boolean
  closeFn: () => void
  foodItem: menuItemType
}

const ItemModal = ({isOpen, foodItem, closeFn}:ItemModalProps) => {
  // const [ingredients, setIngredients] = useState<ingredientsType[]>(foodItem.ingredients)
  const [chooseAmount, setChooseAmount] = useState<number>(1)
  const [carne, setCarne] = useState<ChoiceOfMeatType>('ASADA')
  const [removeIngredients, setRemoveIngredients] = useState<ingredientsType[]>([])
  const [item, setItem] = useState<any>({})
  const { cart, addToCart } = useContext(CartContext)

  useEffect(() => {
    setRemoveIngredients([])
  },[foodItem])


  const addIngredientToYuckyList = (ingredient: ingredientsType) => {
    setRemoveIngredients([...removeIngredients, ingredient])
  }

  const removeIngredientFromYuckyList = (ingredient: ingredientsType) => {
    const tempList = removeIngredients.filter((el) => el !== ingredient)
    setRemoveIngredients(tempList)
  }

  return (
    isOpen && (
      <div className="fixed inset-0 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] h-fit w-[92%] max-w-[420px] border-2 border-black bg-primary rounded-3xl flex-col p-3">
        <div className="flex justify-between">
          <div className="text-2xl font-extrabold">{MenuNameDictionary[foodItem.name]}</div>
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
            <div className={`flex flex-row gap-2 align-center ${btn_one} bg-flagRed`}>
              {/* <Image 
                className="cursor-pointer" 
                src='/assets/ui/dollar.svg' 
                onClick={closeFn}
                width={20} height={20} alt='price'
              /> */}
              <div>${foodItem.price.toFixed(2)}</div>
            </div>
            <button 
              className={`${btn_one} bg-flagGreen`} 
              onClick={() => addToCart({ 
                order_id: cart.length+1, 
                orderItem: foodItem.name, 
                price: foodItem.price,
                removeIngredients: removeIngredients,
                amount: chooseAmount
              })}
            >
              ADD TO ORDER
            </button>
          </div>
        </div>
        <div className="mt-4">
          {foodItem.choiceOfMeat && 
            <select className="p-2 rounded-xl" name="meat choice">
              <option onChange={() => setCarne('ASADA')} value="ASADA">Asada</option>
              <option onChange={() => setCarne('CHICKEN')} value="CHICKEN">Chicken</option>
              <option onChange={() => setCarne('AL_PASTOR')} value="AL_PASTOR">Al Pastor</option>
            </select>
          }
          {foodItem.chooseAmount && 
            <select className="p-2 rounded-xl" name="meat choice">
              <option onChange={() => setCarne('ASADA')} value="ASADA">Asada</option>
              <option onChange={() => setCarne('CHICKEN')} value="CHICKEN">Chicken</option>
              <option onChange={() => setCarne('AL_PASTOR')} value="AL_PASTOR">Al Pastor</option>
            </select>
          }
        </div>
        {foodItem.ingredients.length > 0 && <h3 className="mt-4 mb-2">Ingredient(s): click to remove ingredient</h3>}
        <div className="flex flex-row flex-wrap gap-2">
          {foodItem.ingredients.map((ingredient) => {
            return (
              // <button className={`${btn_two} bg-secondary `}>
              //   <span>{ingredientDictionary[ingredient]}</span>
              //   <Image src={"/assets/ui/addition.svg"} alt={"add ingredient"}/>
              // </button>
              <IngredientButton 
                key={`${ingredient}-ingredient`}
                ingredientName={ingredientDictionary[ingredient]} 
                ingredient={ingredient}
                addToListFn={addIngredientToYuckyList}
                removeFromListFn={removeIngredientFromYuckyList}
              />
            )
          })}
        </div>
      </div>
    )
  )
}

export default ItemModal;