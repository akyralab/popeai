'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { providersConfig } from '@/config'
import { usePopeAI } from '@/contexts/popeai'
import { ProviderValueProps } from '@/types'

export function SelectProvider() {
  const { provider, setProviderConfig } = usePopeAI()

  return (
    <Select
      onValueChange={(value) => setProviderConfig(value as ProviderValueProps)}
      defaultValue={provider.value}
    >
      <SelectTrigger className="w-[240px] shadow-none">
        <SelectValue placeholder="Select your AI model" />
      </SelectTrigger>
      <SelectContent>
        {providersConfig.map((provider) => (
          <SelectItem value={provider.value} key={provider.value}>
            <div className="flex items-center gap-2">
              <provider.Icon size={16} />
              <span>{provider.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
