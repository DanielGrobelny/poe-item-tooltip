import type { PoeItem } from "../types"

export const rareEsHelmet: PoeItem = {
  name: "Mind Cage",
  base: "Hubris Circlet",
  rarity: "rare",
  itemLevel: 84,
  quality: 20,
  energyShield: 312,
  requirements: { level: 69, int: 154 },
  implicitMods: [],
  explicitMods: [
    "+97 to maximum Energy Shield",
    "+73 to maximum Life",
    "+41% to Cold Resistance",
    "+35% to Lightning Resistance",
    "Regenerate 5.3 Life per second",
  ],
  craftedMods: ["+24% increased Energy Shield"],
  influences: ["elder"],
}

export const cosyrisMalice: PoeItem = {
  name: "Cospri's Malice",
  base: "Imperial Sword",
  rarity: "unique",
  itemLevel: 78,
  quality: 20,
  physicalDamage: "51–190",
  elementalDamage: [{ type: "cold", min: 170, max: 255 }],
  critChance: 9.5,
  attacksPerSecond: 1.6,
  requirements: { level: 68, dex: 212 },
  sockets: "R-B-B R-B-B",
  implicitMods: ["Trigger a Socketed Spell when you Crit with this Weapon"],
  explicitMods: [
    "Socketed Gems are supported by Level 20 Hypothermia",
    "+10% to Critical Strike Multiplier",
    "No Instability",
    "50% increased Effect of Cold Ailments",
    "Attacks with this Weapon always Freeze",
  ],
  flavourText: "Let not a moment's warmth comfort those who have wronged you.",
}

export const sixLinkBodyArmour: PoeItem = {
  name: "Vortex Shell",
  base: "Astral Plate",
  rarity: "rare",
  itemLevel: 86,
  quality: 20,
  armour: 1421,
  requirements: { level: 72, str: 163 },
  sockets: "R-R-R-R-R-R",
  explicitMods: [
    "+92 to maximum Life",
    "+62 to maximum Energy Shield",
    "+41% to Fire Resistance",
    "+38% to Cold Resistance",
    "12% increased maximum Life",
    "You cannot be Stunned if you have not been Stunned Recently",
  ],
}

export const fireball: PoeItem = {
  name: "Fireball",
  base: "Fireball",
  rarity: "gem",
  gemLevel: 20,
  gemExperience: "1,580,606,144/1,580,606,144",
  quality: 20,
  requirements: { level: 28, int: 67 },
  explicitMods: [
    "Projectile Speed: 1040",
    "Deals 951.4 to 1427 Fire Damage",
    "26% chance to Ignite enemies",
    "Base radius is 0.9 metres, and 1.8 metres after the explosion",
  ],
}

export const chaosOrb: PoeItem = {
  base: "Chaos Orb",
  rarity: "currency",
  stackSize: { current: 42, max: 20 },
  explicitMods: ["Reforges a rare item with new random modifiers."],
}
