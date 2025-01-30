'use client'
import { createContext, useReducer, useState } from "react";

// type ThemeContextType = "light" | "dark"

interface UIState {
  isAsideOpen: boolean,
  error: string | null
}

interface UIAction {
  type: 'toggle' | 'toggleTrue' | 'toggleFalse';
}

const UIContext = createContext({})

const reducerFn = (state:UIState, action:UIAction) => {
  const { type } = action;

  switch(type){
    case 'toggle': {
      return {...state, isAsideOpen: !state.isAsideOpen}
    }
    case 'toggleFalse': {
      return {...state, isAsideOpen: false}
    }
    case 'toggleTrue': {
      return {...state, isAsideOpen: true}
    }
    default:
      return state;
  }
}

const UIProvider = ({ children }:any) => {
  // const [asideIsOpen, setAsideIsOpen] = useState<boolean>({asideIsOpen: false})
  const [UIState, dispatch] = useReducer(reducerFn, { isAsideOpen: false, error: null })

  // let UI = {
  //   aside: [asideIsOpen, setAsideIsOpen]
  // }

  return (
    <UIContext.Provider value={UIState}>
      {children}
    </UIContext.Provider>
  )
}

export default UIProvider;