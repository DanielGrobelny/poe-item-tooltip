# poe-item-tooltip

React component library for rendering Path of Exile item tooltips, pixel-perfect to the in-game style.

**[Live Demo](https://danielgrobelny.github.io/poe-item-tooltip/)**

## Installation

```bash
npm install @danielgrobelny/poe-item-tooltip
```

## Usage

```tsx
import { PoeItemTooltip } from "@danielgrobelny/poe-item-tooltip"
import "@danielgrobelny/poe-item-tooltip/styles"

function App() {
  return (
    <PoeItemTooltip
      item={{
        name: "Mind Cage",
        base: "Hubris Circlet",
        rarity: "rare",
        itemLevel: 84,
        energyShield: 312,
        explicitMods: ["+97 to maximum Energy Shield"],
      }}
    />
  )
}
```

## License

MIT
