export interface PoeItem {
  name?: string
  base: string
  rarity: "normal" | "magic" | "rare" | "unique" | "gem" | "currency"
  itemLevel?: number
  requirements?: {
    level?: number
    str?: number
    dex?: number
    int?: number
  }
  implicitMods?: string[]
  explicitMods?: string[]
  craftedMods?: string[]
  enchantMods?: string[]
  corrupted?: boolean
  influences?: (
    | "shaper"
    | "elder"
    | "crusader"
    | "hunter"
    | "redeemer"
    | "warlord"
  )[]
  armour?: number
  evasion?: number
  energyShield?: number
  physicalDamage?: string
  elementalDamage?: {
    type: "fire" | "cold" | "lightning"
    min: number
    max: number
  }[]
  chaosDamage?: string
  critChance?: number
  attacksPerSecond?: number
  sockets?: string
  quality?: number
  stackSize?: { current: number; max: number }
  gemLevel?: number
  gemExperience?: string
  flavourText?: string
}
