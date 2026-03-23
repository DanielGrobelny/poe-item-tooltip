import React from "react"
import ReactDOM from "react-dom/client"
import { PoeItemTooltip } from "../components/PoeItemTooltip"
import {
  rareEsHelmet,
  cosyrisMalice,
  sixLinkBodyArmour,
  fireball,
  chaosOrb,
  magicBoots,
  normalBase,
  shavronnesWrappings,
  shaperElderRing,
  rareWand,
  magicFlask,
  abyssJewel,
} from "../examples/items"
import type { PoeItem } from "../types"

interface ItemGroup {
  label: string
  items: { item: PoeItem; label: string }[]
}

const groups: ItemGroup[] = [
  {
    label: "Normal",
    items: [{ item: normalBase, label: "Prophecy Wand" }],
  },
  {
    label: "Magic",
    items: [
      { item: magicBoots, label: "Fleet Wool Shoes of the Ranger" },
      { item: magicFlask, label: "Bubbling Divine Life Flask of Staunching" },
    ],
  },
  {
    label: "Rare",
    items: [
      { item: rareEsHelmet, label: "Mind Cage" },
      { item: sixLinkBodyArmour, label: "Vortex Shell" },
      { item: shaperElderRing, label: "Woe Band (Shaper + Elder)" },
      { item: rareWand, label: "Plague Gnarl" },
      { item: abyssJewel, label: "Hypnotic Eye Jewel" },
    ],
  },
  {
    label: "Unique",
    items: [
      { item: cosyrisMalice, label: "Cospri's Malice" },
      { item: shavronnesWrappings, label: "Shavronne's Wrappings (Corrupted)" },
    ],
  },
  {
    label: "Gem",
    items: [{ item: fireball, label: "Fireball" }],
  },
  {
    label: "Currency",
    items: [{ item: chaosOrb, label: "Chaos Orb" }],
  },
]

const groupHeaderStyle: React.CSSProperties = {
  width: "100%",
  color: "#888",
  fontSize: "11px",
  textTransform: "uppercase",
  letterSpacing: "2px",
  borderBottom: "1px solid #333",
  paddingBottom: "6px",
  marginBottom: "4px",
}

const itemLabelStyle: React.CSSProperties = {
  color: "#666",
  fontSize: "11px",
  textAlign: "center",
  marginTop: "6px",
  fontFamily: "monospace",
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div
      style={{
        background: "#0d0d0d",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ marginBottom: "40px" }}>
        <h1
          style={{
            color: "#af6025",
            fontSize: "22px",
            fontWeight: "normal",
            margin: "0 0 8px",
            letterSpacing: "1px",
          }}
        >
          PoE Item Tooltip — Component Showcase
        </h1>
        <a
          href="https://github.com/DanielGrobelny/poe-item-tooltip"
          style={{ color: "#5a9fd4", fontSize: "13px", textDecoration: "none" }}
          target="_blank"
          rel="noreferrer"
        >
          github.com/DanielGrobelny/poe-item-tooltip
        </a>
      </div>

      {groups.map((group) => (
        <div key={group.label} style={{ marginBottom: "40px" }}>
          <div style={groupHeaderStyle}>{group.label}</div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "24px",
              alignItems: "flex-start",
              paddingTop: "12px",
            }}
          >
            {group.items.map(({ item, label }) => (
              <div
                key={label}
                style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
              >
                <PoeItemTooltip item={item} />
                <div style={itemLabelStyle}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </React.StrictMode>
)
