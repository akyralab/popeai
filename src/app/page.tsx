import { SelectProvider } from '@/components/select-provider'
import { badgeVariants } from '@/components/ui/badge'
import { siteConfig } from '@/config'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className="mx-auto my-16 flex max-w-prose flex-col items-center justify-center gap-4 text-center">
        <Link href={siteConfig.links.github} className={badgeVariants()}>
          Star on Github ⭐
        </Link>
        <h1>Build Your Chatbot with Ease</h1>
        <p className="leading-7 text-muted-foreground">
          {siteConfig.description}
        </p>

        <SelectProvider />
      </section>

      <section className="flex flex-col gap-2">
        <h2>Setup</h2>
        <p className="text-sm text-muted-foreground">
          The OpenAI provider contains language model support for the OpenAI
          chat and completion APIs and embedding model support for the OpenAI
          embeddings API.
        </p>
      </section>
    </>
  )
}
