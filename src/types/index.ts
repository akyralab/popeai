import { FC } from 'react'

export type ProviderValueProps = 'openai' | 'gemini'

export type ProviderProps = {
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: FC<any>
  value: ProviderValueProps
  setup: {
    description: string
    code: string
  }
}
