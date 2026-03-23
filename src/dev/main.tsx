import React from "react"
import ReactDOM from "react-dom/client"
import { PoeItemTooltip } from "../components/PoeItemTooltip"
import {
  rareEsHelmet,
  cosyrisMalice,
  sixLinkBodyArmour,
  fireball,
  chaosOrb,
} from "../examples/items"

const items = [rareEsHelmet, cosyrisMalice, sixLinkBodyArmour, fireball, chaosOrb]

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div
      style={{
        background: "#1a1a1a",
        minHeight: "100vh",
        padding: "40px",
        display: "flex",
        flexWrap: "wrap",
        gap: "24px",
        alignItems: "flex-start",
      }}
    >
      {items.map((item, i) => (
        <PoeItemTooltip key={i} item={item} />
      ))}
    </div>
  </React.StrictMode>
)
