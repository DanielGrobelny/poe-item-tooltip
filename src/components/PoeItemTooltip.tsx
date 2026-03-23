import React from "react"
import styles from "./PoeItemTooltip.module.css"
import type { PoeItem } from "../types"

interface Props {
  item: PoeItem
  /** Optional: mark requirements as unmet (by stat name) */
  unmetRequirements?: ("level" | "str" | "dex" | "int")[]
}

export function PoeItemTooltip({ item, unmetRequirements = [] }: Props) {
  const rarityClass = styles[`rarity_${item.rarity}`]

  const hasDefences =
    item.armour !== undefined ||
    item.evasion !== undefined ||
    item.energyShield !== undefined

  const hasWeaponStats =
    item.physicalDamage !== undefined ||
    (item.elementalDamage && item.elementalDamage.length > 0) ||
    item.chaosDamage !== undefined ||
    item.critChance !== undefined ||
    item.attacksPerSecond !== undefined

  const hasProperties =
    hasDefences ||
    hasWeaponStats ||
    item.quality !== undefined ||
    item.gemLevel !== undefined ||
    item.stackSize !== undefined ||
    item.gemExperience !== undefined

  const hasRequirements =
    item.requirements &&
    (item.requirements.level !== undefined ||
      item.requirements.str !== undefined ||
      item.requirements.dex !== undefined ||
      item.requirements.int !== undefined)

  const hasSockets = item.sockets !== undefined && item.sockets.length > 0

  const hasImplicit = item.implicitMods && item.implicitMods.length > 0
  const hasExplicit = item.explicitMods && item.explicitMods.length > 0
  const hasCrafted = item.craftedMods && item.craftedMods.length > 0
  const hasEnchant = item.enchantMods && item.enchantMods.length > 0
  const hasFlavour = item.flavourText !== undefined
  const hasCorrupted = item.corrupted === true

  function renderElementalDamage() {
    if (!item.elementalDamage) return null
    return item.elementalDamage.map((ed, i) => (
      <span key={i} className={styles[`elemental_${ed.type}`]}>
        {ed.min}–{ed.max}
        {i < (item.elementalDamage?.length ?? 0) - 1 && (
          <span className={styles.separator_inline}>, </span>
        )}
      </span>
    ))
  }

  function renderSockets() {
    if (!item.sockets) return null
    const groups = item.sockets.split(" ")
    return (
      <div className={styles.sockets_container}>
        {groups.map((group, gi) => {
          const sockets = group.split("-")
          return (
            <div key={gi} className={styles.socket_group}>
              {sockets.map((s, si) => (
                <React.Fragment key={si}>
                  <span
                    className={`${styles.socket} ${styles[`socket_${s.toUpperCase()}`]}`}
                  />
                  {si < sockets.length - 1 && (
                    <span className={styles.socket_link} />
                  )}
                </React.Fragment>
              ))}
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className={`${styles.tooltip} ${rarityClass}`}>
      {/* HEADER */}
      <div className={`${styles.header} ${rarityClass}`}>
        {item.influences && item.influences.length > 0 && (
          <div className={styles.influences}>
            {item.influences.map((inf) => (
              <span key={inf} className={`${styles.influence} ${styles[`influence_${inf}`]}`} title={inf} />
            ))}
          </div>
        )}
        {item.name && (
          <div className={`${styles.item_name} ${rarityClass}`}>{item.name}</div>
        )}
        <div className={`${styles.item_base} ${item.name ? styles.item_base_sub : ""} ${rarityClass}`}>
          {item.base}
        </div>
      </div>

      {/* ITEM LEVEL */}
      {item.itemLevel !== undefined && (
        <>
          <hr className={styles.separator} />
          <div className={styles.property_line}>
            <span className={styles.property_name}>Item Level: </span>
            <span className={styles.property_value}>{item.itemLevel}</span>
          </div>
        </>
      )}

      {/* PROPERTIES */}
      {hasProperties && (
        <>
          <hr className={styles.separator} />
          {item.quality !== undefined && (
            <div className={styles.property_line}>
              <span className={styles.property_name}>Quality: </span>
              <span className={styles.augmented}>+{item.quality}%</span>
            </div>
          )}
          {item.gemLevel !== undefined && (
            <div className={styles.property_line}>
              <span className={styles.property_name}>Level: </span>
              <span className={styles.property_value}>{item.gemLevel}</span>
            </div>
          )}
          {item.stackSize !== undefined && (
            <div className={styles.property_line}>
              <span className={styles.property_name}>Stack Size: </span>
              <span className={styles.property_value}>
                {item.stackSize.current}/{item.stackSize.max}
              </span>
            </div>
          )}
          {item.gemExperience !== undefined && (
            <div className={styles.property_line}>
              <span className={styles.property_name}>Experience: </span>
              <span className={styles.property_value}>{item.gemExperience}</span>
            </div>
          )}
          {hasDefences && (
            <>
              {item.armour !== undefined && (
                <div className={styles.property_line}>
                  <span className={styles.property_name}>Armour: </span>
                  <span className={item.quality ? styles.augmented : styles.property_value}>
                    {item.armour}
                  </span>
                </div>
              )}
              {item.evasion !== undefined && (
                <div className={styles.property_line}>
                  <span className={styles.property_name}>Evasion Rating: </span>
                  <span className={item.quality ? styles.augmented : styles.property_value}>
                    {item.evasion}
                  </span>
                </div>
              )}
              {item.energyShield !== undefined && (
                <div className={styles.property_line}>
                  <span className={styles.property_name}>Energy Shield: </span>
                  <span className={item.quality ? styles.augmented : styles.property_value}>
                    {item.energyShield}
                  </span>
                </div>
              )}
            </>
          )}
          {hasWeaponStats && (
            <>
              {item.physicalDamage !== undefined && (
                <div className={styles.property_line}>
                  <span className={styles.property_name}>Physical Damage: </span>
                  <span className={item.quality ? styles.augmented : styles.property_value}>
                    {item.physicalDamage}
                  </span>
                </div>
              )}
              {item.elementalDamage && item.elementalDamage.length > 0 && (
                <div className={styles.property_line}>
                  <span className={styles.property_name}>Elemental Damage: </span>
                  {renderElementalDamage()}
                </div>
              )}
              {item.chaosDamage !== undefined && (
                <div className={styles.property_line}>
                  <span className={styles.property_name}>Chaos Damage: </span>
                  <span className={styles.chaos}>{item.chaosDamage}</span>
                </div>
              )}
              {item.critChance !== undefined && (
                <div className={styles.property_line}>
                  <span className={styles.property_name}>Critical Strike Chance: </span>
                  <span className={styles.property_value}>{item.critChance}%</span>
                </div>
              )}
              {item.attacksPerSecond !== undefined && (
                <div className={styles.property_line}>
                  <span className={styles.property_name}>Attacks per Second: </span>
                  <span className={styles.property_value}>{item.attacksPerSecond}</span>
                </div>
              )}
            </>
          )}
        </>
      )}

      {/* REQUIREMENTS */}
      {hasRequirements && (
        <>
          <hr className={styles.separator} />
          <div className={styles.property_line}>
            <span className={styles.property_name}>Requires </span>
            {item.requirements?.level !== undefined && (
              <span
                className={
                  unmetRequirements.includes("level")
                    ? styles.unmet
                    : styles.property_value
                }
              >
                Level {item.requirements.level}
                {(item.requirements.str !== undefined ||
                  item.requirements.dex !== undefined ||
                  item.requirements.int !== undefined) && ", "}
              </span>
            )}
            {item.requirements?.str !== undefined && (
              <span
                className={
                  unmetRequirements.includes("str")
                    ? styles.unmet
                    : styles.property_value
                }
              >
                <span className={styles.property_name}>Str </span>
                {item.requirements.str}
                {(item.requirements.dex !== undefined ||
                  item.requirements.int !== undefined) && ", "}
              </span>
            )}
            {item.requirements?.dex !== undefined && (
              <span
                className={
                  unmetRequirements.includes("dex")
                    ? styles.unmet
                    : styles.property_value
                }
              >
                <span className={styles.property_name}>Dex </span>
                {item.requirements.dex}
                {item.requirements.int !== undefined && ", "}
              </span>
            )}
            {item.requirements?.int !== undefined && (
              <span
                className={
                  unmetRequirements.includes("int")
                    ? styles.unmet
                    : styles.property_value
                }
              >
                <span className={styles.property_name}>Int </span>
                {item.requirements.int}
              </span>
            )}
          </div>
        </>
      )}

      {/* SOCKETS */}
      {hasSockets && (
        <>
          <hr className={styles.separator} />
          {renderSockets()}
        </>
      )}

      {/* ENCHANT MODS */}
      {hasEnchant && (
        <>
          <hr className={styles.separator} />
          {item.enchantMods!.map((mod, i) => (
            <div key={i} className={styles.mod_enchant}>{mod}</div>
          ))}
        </>
      )}

      {/* IMPLICIT MODS */}
      {hasImplicit && (
        <>
          <hr className={styles.separator} />
          {item.implicitMods!.map((mod, i) => (
            <div key={i} className={styles.mod_implicit}>{mod}</div>
          ))}
        </>
      )}

      {/* EXPLICIT + CRAFTED MODS */}
      {(hasExplicit || hasCrafted) && (
        <>
          <hr className={styles.separator} />
          {item.explicitMods?.map((mod, i) => (
            <div key={i} className={styles.mod_explicit}>{mod}</div>
          ))}
          {item.craftedMods?.map((mod, i) => (
            <div key={i} className={styles.mod_crafted}>{mod}</div>
          ))}
        </>
      )}

      {/* FLAVOUR TEXT */}
      {hasFlavour && (
        <>
          <hr className={styles.separator} />
          <div className={styles.flavour_text}>{item.flavourText}</div>
        </>
      )}

      {/* CORRUPTED */}
      {hasCorrupted && (
        <>
          <hr className={styles.separator} />
          <div className={styles.corrupted}>Corrupted</div>
        </>
      )}
    </div>
  )
}
