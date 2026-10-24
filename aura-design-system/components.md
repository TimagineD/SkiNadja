# AURA Component Specification

## Component API philosophy

Components should expose semantic variants, not arbitrary styling knobs.

Prefer:

`<Button variant="primary" size="md">`

over:

`<Button color="#..." radius="17" padding="13px">`

---

## Button

Variants:
- primary
- secondary
- tertiary
- destructive

Sizes:
- sm
- md
- lg

States:
- default
- hover
- pressed
- focus
- disabled
- loading

---

## IconButton

Use for compact icon-only actions.

Rules:
- accessible label required
- minimum comfortable target around 44 px
- use consistent icon size
- visible focus state

---

## Card

Slots:
- header
- content
- footer

Variants:
- default
- elevated
- interactive
- gradient

Do not create separate card components merely because content differs.

---

## ActionTile

Variants:
- blue
- purple
- pink
- orange
- green
- cyan
- neutral

Structure:
- icon
- title
- description
- optional action

Use a translucent icon container on gradient variants.

---

## Input

States:
- default
- focus
- error
- disabled
- success where appropriate

Never use colour alone to communicate errors.

---

## Badge

Variants:
- neutral
- blue
- green
- orange
- red
- purple

Keep badges compact and avoid overusing them.

---

## Modal

Desktop:
centred.

Mobile:
bottom sheet where appropriate.

Use:
- overlay
- surface
- title
- content
- actions

---

## Navigation

Keep navigation quiet.

Use active state rather than heavy visual separators.

---

## Component creation rule

Before creating a component, ask:

1. Does an existing component already solve this?
2. Can an existing component accept a semantic variant?
3. Can composition solve this?
4. Is the new component reusable?

Only create a new component if the answer is genuinely yes.
