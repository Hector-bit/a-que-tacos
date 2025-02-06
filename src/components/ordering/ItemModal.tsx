import { menuItemType } from "../../../utils/types";
import Image from "next/image";

interface ItemModalProps {
  isOpen: boolean
  closeFn: () => void
  foodItem: menuItemType
}

const ItemModal = ({isOpen, foodItem, closeFn}:ItemModalProps) => {

  return (
    isOpen && (
      <div className="fixed inset-0 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[90%] max-w-[420px] border border-black bg-primary rounded-3xl flex-col p-3 pt-8">
        <Image 
          className="absolute cursor-pointer top-4 right-2" 
          src='/assets/ui/close.svg' 
          onClick={closeFn}
          width={30} height={30} alt='close'
        />
        <div className="text-2xl font-extrabold">{foodItem.name}</div>
        <Image src={foodItem.img} alt={`${foodItem.name}`} width={400} height={400}/>
        <div>hello</div>
      </div>
    )
  )
}

export default ItemModal;