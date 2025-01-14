'use client'

import { CodeBlock } from '@/components/ui/code-block'
import { usePopeAI } from '@/contexts/popeai'

export function Setup() {
  const { provider } = usePopeAI()

  return (
    <section className="flex flex-col gap-3">
      <h2>Setup</h2>
      <p className="text-sm text-muted-foreground">
        {provider.setup.description}
      </p>

      <CodeBlock
        language="bash"
        tabs={[
          {
            name: 'pnpm',
            code: `pnpm add ${provider.setup.code}`,
          },
          {
            name: 'npm',
            code: `npm install ${provider.setup.code}`,
          },
          {
            name: 'yarn',
            code: `yarn add ${provider.setup.code}`,
          },
        ]}
      />
    </section>
  )
}
