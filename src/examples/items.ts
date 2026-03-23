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

export const magicBoots: PoeItem = {
  name: "Fleet Wool Shoes of the Ranger",
  base: "Wool Shoes",
  rarity: "magic",
  itemLevel: 24,
  evasion: 47,
  requirements: { level: 23 },
  explicitMods: [
    "15% increased Movement Speed",
    "+28 to Dexterity",
  ],
}

export const normalBase: PoeItem = {
  base: "Prophecy Wand",
  rarity: "normal",
  itemLevel: 60,
  physicalDamage: "26–48",
  critChance: 7.0,
  attacksPerSecond: 1.4,
  requirements: { level: 56, int: 143 },
}

export const shavronnesWrappings: PoeItem = {
  name: "Shavronne's Wrappings",
  base: "Occultist's Vestment",
  rarity: "unique",
  itemLevel: 77,
  quality: 20,
  energyShield: 520,
  requirements: { level: 62, int: 138 },
  sockets: "B-B-B B-B-B",
  explicitMods: [
    "100% reduced Energy Shield Recharge Rate",
    "+520 to maximum Energy Shield",
    "Life Regeneration has no effect on you",
    "Chaos Damage does not bypass Energy Shield",
    "Reflects 10 Physical Damage to Melee Attackers",
  ],
  flavourText: "The price you pay for unbridled power.",
  corrupted: true,
}

export const shaperElderRing: PoeItem = {
  name: "Woe Band",
  base: "Two-Stone Ring",
  rarity: "rare",
  itemLevel: 86,
  requirements: { level: 52 },
  implicitMods: ["+12% to Fire and Cold Resistances"],
  explicitMods: [
    "+87 to maximum Life",
    "+42 to maximum Mana",
    "+41% to Fire Resistance",
    "+38% to Cold Resistance",
    "12% increased Cast Speed",
    "Gain 8 Mana per Enemy Killed",
  ],
  craftedMods: ["+35 to Intelligence"],
  influences: ["shaper", "elder"],
}

export const rareWand: PoeItem = {
  name: "Plague Gnarl",
  base: "Imbued Wand",
  rarity: "rare",
  itemLevel: 83,
  quality: 20,
  physicalDamage: "38–70",
  elementalDamage: [
    { type: "fire", min: 14, max: 27 },
    { type: "lightning", min: 5, max: 98 },
    { type: "cold", min: 18, max: 35 },
  ],
  critChance: 8.5,
  attacksPerSecond: 1.5,
  requirements: { level: 59, int: 188 },
  explicitMods: [
    "30% increased Spell Damage",
    "+1 to Level of all Lightning Spell Gems",
    "18% increased Cast Speed",
    "Adds 14 to 27 Fire Damage to Spells",
    "Adds 5 to 98 Lightning Damage to Spells",
    "Adds 18 to 35 Cold Damage to Spells",
  ],
}

export const magicFlask: PoeItem = {
  name: "Bubbling Divine Life Flask of Staunching",
  base: "Divine Life Flask",
  rarity: "magic",
  itemLevel: 50,
  quality: 20,
  implicitMods: [
    "Recovers 2400 Life over 3.50 Seconds",
    "Consumes 10 of 10 Charges on use",
  ],
  explicitMods: [
    "40% increased Amount Recovered",
    "Immunity to Bleeding and Corrupted Blood during Flask effect",
  ],
}

export const abyssJewel: PoeItem = {
  name: "Hypnotic Eye Jewel",
  base: "Searching Eye Jewel",
  rarity: "rare",
  itemLevel: 83,
  explicitMods: [
    "+42 to maximum Life",
    "Adds 8 to 14 Physical Damage to Attacks",
    "+35% to Lightning Resistance",
    "4% chance to Blind Enemies on Hit with Attacks",
  ],
}
