import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { PoeItemTooltip } from "./PoeItemTooltip"
import {
  rareEsHelmet,
  cosyrisMalice,
  sixLinkBodyArmour,
  fireball,
  chaosOrb,
} from "../examples/items"

describe("PoeItemTooltip", () => {
  it("renders rare helmet with name and base", () => {
    render(<PoeItemTooltip item={rareEsHelmet} />)
    expect(screen.getByText("Mind Cage")).toBeInTheDocument()
    expect(screen.getByText("Hubris Circlet")).toBeInTheDocument()
  })

  it("renders unique weapon with flavour text", () => {
    render(<PoeItemTooltip item={cosyrisMalice} />)
    expect(screen.getByText("Cospri's Malice")).toBeInTheDocument()
    expect(
      screen.getByText(/Let not a moment's warmth/)
    ).toBeInTheDocument()
  })

  it("renders corrupted text when item is corrupted", () => {
    const corruptedItem = { ...rareEsHelmet, corrupted: true }
    render(<PoeItemTooltip item={corruptedItem} />)
    expect(screen.getByText("Corrupted")).toBeInTheDocument()
  })

  it("renders currency item with stack size", () => {
    render(<PoeItemTooltip item={chaosOrb} />)
    expect(screen.getByText("Chaos Orb")).toBeInTheDocument()
    expect(screen.getByText("42/20")).toBeInTheDocument()
  })

  it("renders gem with level and experience", () => {
    render(<PoeItemTooltip item={fireball} />)
    expect(screen.getByText("20")).toBeInTheDocument()
  })

  it("renders 6-link body armour", () => {
    render(<PoeItemTooltip item={sixLinkBodyArmour} />)
    expect(screen.getByText("Vortex Shell")).toBeInTheDocument()
  })

  it("marks unmet requirements in red", () => {
    const { container } = render(
      <PoeItemTooltip item={rareEsHelmet} unmetRequirements={["level"]} />
    )
    const unmet = container.querySelector('[class*="unmet"]')
    expect(unmet).not.toBeNull()
  })
})
