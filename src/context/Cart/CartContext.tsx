import { ReactNode, createContext, useState } from 'react'

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const Context = createContext({} as any)

  const [state, setState] = useState(0)

  return (
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  )
}
