'use client'
import Image from "next/image"
import { useState } from "react"
import { motion, Variants, AnimatePresence } from "framer-motion"

const ArrowVariants: Variants = {
  'closed': {
    x: '100%',
    transition: {
      ease: 'easeOut',
      duration: 0.1
    }
  },
  'open': {
    x: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.1
    }
  }
}


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
        <motion.div 
          animate={{ rotate: isOpen?180:0}}
          transition={{ ease: 'linear', duration: 0.15 }}
        >
          <Image src="/assets/ui/dropdown.png" alt={"drop down arrow"} width={20} height={20}/>
        </motion.div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen &&
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0}}
            transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
            className="overflow-hidden"
          >
            {description}
          </motion.div>
        }
      </AnimatePresence>
    </div>        
  )
}

export default MenuCard;