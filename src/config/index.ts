import { GoogleIcon, OpenAIIcon } from '@/assets/icons'
import { ProviderProps } from '@/types'

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

export const providersConfig: ProviderProps[] = [
  {
    name: 'OpenAI',
    Icon: OpenAIIcon,
    value: 'openai',
    setup: {
      description:
        'The OpenAI provider contains language model support for the OpenAI chat and completion APIs and embedding model support for the OpenAI embeddings API.',
      code: '@ai-sdk/openai',
    },
  },
  {
    name: 'Gemini',
    Icon: GoogleIcon,
    value: 'gemini',
    setup: {
      description:
        'The Google Generative AI provider contains language and embedding model support for the Google Generative AI APIs.',
      code: '@ai-sdk/google',
    },
  },
]
