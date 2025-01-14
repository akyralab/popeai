'use client'

import { providersConfig } from '@/config'
import { ProviderProps, ProviderValueProps } from '@/types'
import { createContext, useContext, useState } from 'react'

type PopeAIContextProps = {
  provider: ProviderProps
  setProviderConfig: (value: ProviderValueProps) => void
}

const PopeAIContext = createContext<PopeAIContextProps | undefined>(undefined)

export function PopeAIProvider({ children }: { children: React.ReactNode }) {
  const [provider, setProvider] = useState<ProviderProps>(providersConfig[0])

  const setProviderConfig = (value: ProviderValueProps) => {
    const newProvider = providersConfig.find(
      (provider) => provider.value === value,
    )

    setProvider(newProvider as ProviderProps)
  }

  return (
    <PopeAIContext.Provider value={{ provider, setProviderConfig }}>
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
