'use client'

import { ProviderProps } from '@/types'
import { createContext, useContext, useState } from 'react'

type PopeAIContextProps = {
  provider: ProviderProps | null
  setProvider: (provider: ProviderProps | null) => void
}

const PopeAIContext = createContext<PopeAIContextProps | undefined>(undefined)

export function PopeAIProvider({ children }: { children: React.ReactNode }) {
  const [provider, setProvider] = useState<ProviderProps | null>(null)

  return (
    <PopeAIContext.Provider value={{ provider, setProvider }}>
      {children}
    </PopeAIContext.Provider>
  )
}

export function usePopeAI() {
  const context = useContext(PopeAIContext)

  if (!context) {
    throw new Error('usePopeAI must be used within a PopeAIProvider')
  }

  return context
}
