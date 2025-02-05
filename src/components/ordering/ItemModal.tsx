import { menuItemType } from "../../../utils/types";

interface ItemModalProps {
  isOpen: boolean
  foodItem: menuItemType
}

const ItemModal = ({isOpen, foodItem}:ItemModalProps) => {

  return (
    isOpen && (
      <div className="fixed inset-0 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[90%] max-w-[420px] border border-black bg-primary rounded-3xl">
        <div>hello</div>

      </div>
    )
  )
}

export default ItemModal;