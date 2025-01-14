import { GoogleIcon, OpenAiIcon } from '@/assets/icons'
import { ProviderProps } from '@/types'
import { FC } from 'react'

export const siteConfig = {
  name: 'PopeAI',
  url: '',
  ogImage: '',
  description:
    'A practical guide for implementing a chatbot using Next.js and Vercel AI SDK.',
  links: {
    github: 'https://github.com/akyralab/popeai',
  },
}

export const providers: {
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: FC<any>
  value: ProviderProps
}[] = [
  {
    name: 'OpenAI',
    Icon: OpenAiIcon,
    value: 'openai',
  },
  {
    name: 'Gemini',
    Icon: GoogleIcon,
    value: 'gemini',
  },
]
