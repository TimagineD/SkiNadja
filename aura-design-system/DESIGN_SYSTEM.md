# AURA Design System

Version: 1.0

AURA is a calm, precise, Apple-inspired design language for modern web and application products.

It is inspired by principles of high-quality product UI, not a visual copy of any proprietary Apple interface.

---

## 1. Design character

AURA should feel:

- precise
- quiet
- premium
- coherent
- friendly
- modern
- spacious
- tactile
- intentional

Avoid visual noise.

The interface should feel like one product designed by one team.

---

## 2. Spatial system

Base unit: 4 px.

Preferred spacing:
4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128 px.

Use the smallest value that provides sufficient separation.

### Typical usage

| Purpose | Value |
|---|---:|
| icon/text gap | 8 |
| compact gap | 8–12 |
| control padding | 12–16 |
| component padding | 20–24 |
| card gap | 16–24 |
| subsection gap | 32 |
| section gap | 64–96 |
| hero/major section | 96–128 |

Do not fill space simply because it is available.

---

## 3. Containers

Default application content:

- mobile: viewport minus 16 px margins
- tablet: viewport minus 24 px margins
- desktop: max-width 1200–1280 px
- wide editorial/marketing: max-width 1280–1440 px
- reading content: 680–760 px

Major content blocks should share common left and right alignment axes.

---

## 4. Grid

Desktop:
- 12 columns
- 24 px gutters

Tablet:
- 8 columns
- 20 px gutters

Mobile:
- 4 columns
- 16 px gutters

Use CSS Grid for macro layouts and Flexbox for component-level alignment.

---

## 5. Typography

Preferred stack:

`-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", Inter, system-ui, sans-serif`

Never depend on proprietary font availability.

### Scale

| Token | Size / line height | Weight |
|---|---|---:|
| display-xl | 64 / 68 | 600 |
| display-lg | 52 / 58 | 600 |
| display-md | 44 / 50 | 600 |
| h1 | 36 / 42 | 600 |
| h2 | 30 / 36 | 600 |
| h3 | 24 / 30 | 600 |
| title | 20 / 26 | 600 |
| body-lg | 18 / 28 | 400 |
| body | 16 / 24 | 400 |
| body-sm | 14 / 20 | 400 |
| caption | 12 / 16 | 500 |

Use weight to establish hierarchy, not decoration.

Avoid excessive all-bold interfaces.

---

## 6. Colour

### Neutral hierarchy

Background:
`#F5F5F7`

Primary surface:
`#FFFFFF`

Secondary surface:
`#F2F2F7`

Primary text:
`#1D1D1F`

Secondary text:
`#6E6E73`

Tertiary text:
`#86868B`

Border:
`rgba(0,0,0,.08)`

### Semantic accents

Blue:
`#007AFF`

Green:
`#34C759`

Orange:
`#FF9500`

Red:
`#FF3B30`

Purple:
`#AF52DE`

Pink:
`#FF2D55`

Indigo:
`#5856D6`

Teal:
`#5AC8FA`

Yellow:
`#FFCC00`

Use semantic names in code.

---

## 7. Gradient language

AURA gradients are soft, dimensional and restrained.

Default direction:
135 degrees.

### Blue
`#64D8FF → #4F7CFF`

### Purple
`#C084FC → #7C5CFC`

### Pink
`#FF8FB3 → #FF5C8A`

### Orange
`#FFD080 → #FF8A4C`

### Green
`#8BE3A7 → #35C978`

### Cyan
`#7DE7E7 → #32B5D8`

Use gradients for:
- action tiles
- feature cards
- hero accents
- selected states
- illustrations
- high-priority calls to action

Do not make every component colourful.

---

## 8. Radius

Use:

6, 10, 14, 18, 24, 32, 999 px.

Guideline:

- small control: 10–14
- button/input: 12–14
- small card: 14–18
- normal card: 18–24
- modal/hero: 24–32
- pill: 999

Larger objects generally receive larger radii.

---

## 9. Elevation

### Level 0
Flat background.

### Level 1
Surface with no or extremely subtle shadow.

### Level 2
Elevated card.

### Level 3
Floating/popover/modal.

Use shadows to communicate depth.

Avoid hard black shadows.

---

## 10. Shadows

Small:
`0 1px 2px rgba(0,0,0,.04), 0 2px 8px rgba(0,0,0,.04)`

Medium:
`0 4px 16px rgba(0,0,0,.06), 0 12px 32px rgba(0,0,0,.06)`

Large:
`0 12px 40px rgba(0,0,0,.10), 0 24px 64px rgba(0,0,0,.08)`

---

## 11. Borders

Default:
`1px solid rgba(0,0,0,.08)`

Borders are separators, not decoration.

If elevation already communicates separation, do not automatically add a border.

---

## 12. Iconography

Use one icon family throughout a product.

Recommended web default:
Lucide.

Alternative:
Phosphor.

Native Apple-platform applications:
SF Symbols.

Sizes:
12, 16, 20, 24, 28–32, 40–48 px.

Icons should be optically centred.

---

## 13. Buttons

### Primary
- height 44–48 px
- radius 12–14
- strong semantic accent
- clear contrast

### Secondary
- neutral surface
- dark primary text
- subtle border if required

### Tertiary
- transparent
- accent text

### Destructive
Use red only for genuinely destructive actions.

States:
default, hover, pressed, focus, disabled, loading.

Pressed interaction should usually use a subtle scale around 0.98 rather than dramatic movement.

---

## 14. Inputs

Default:
- height 44–48 px
- padding 12–16 px
- radius 12–14
- subtle border

Focus:
- accent border
- visible focus ring

Never remove keyboard focus indication.

---

## 15. Cards

Default:
- white surface
- 18–24 px radius
- 20–24 px padding
- subtle border or shadow

Cards should have clear hierarchy.

Do not combine heavy border + heavy shadow + loud gradient.

---

## 16. Signature Action Tile

Action tiles are AURA's colourful shortcut-style component.

Structure:

icon → title → supporting text → optional action

Recommended:
- 20–24 px radius
- 20–24 px padding
- soft gradient
- white foreground
- translucent icon container
- subtle hover lift

Icon container:
- 40–48 px
- 12–14 px radius
- translucent white surface

Example:

```html
<article class="action-tile action-tile--blue">
  <div class="action-tile__icon">...</div>
  <h3>Create project</h3>
  <p>Start something new.</p>
</article>
```

---

## 17. Navigation

Desktop:
64–72 px height.

Mobile:
56–64 px depending on product requirements.

Navigation should remain visually quiet.

Active state:
- subtle surface
- semantic accent
- clear contrast

---

## 18. Modal / Sheet

Desktop:
centred modal.

Mobile:
bottom sheet where appropriate.

Overlay:
`rgba(0,0,0,.25)`

Surface:
`rgba(255,255,255,.96)`

Radius:
24 px.

---

## 19. Glass

Use glass only where it improves hierarchy.

```css
background: rgba(255,255,255,.72);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
```

Good uses:
- floating navigation
- toolbars
- overlays
- contextual controls

Do not turn the entire UI into glass.

---

## 20. Motion

Motion should communicate cause and effect.

Fast:
100–180 ms

Normal:
180–300 ms

Major:
350–600 ms

Default easing:
`cubic-bezier(.2,.8,.2,1)`

Emphasized:
`cubic-bezier(.16,1,.3,1)`

Avoid excessive bounce, elastic motion, rotation, and decorative movement.

---

## 21. Responsive behaviour

Do not create unrelated mobile and desktop designs.

Preserve:
- hierarchy
- component identity
- colour roles
- spacing logic
- interaction semantics

Adapt:
- columns
- density
- navigation
- typography size
- card stacking

---

## 22. Accessibility

Minimum:
- WCAG AA contrast where applicable
- keyboard support
- visible focus
- semantic HTML
- minimum comfortable touch target around 44 px
- reduced motion support
- labels for controls
- do not rely solely on colour

---

## 23. Optical alignment

Visual correctness takes precedence over mathematical symmetry.

If an icon is mathematically centred but looks too low, adjust it.

If text appears optically heavier on one side, correct the composition.

The final test is what the human eye perceives.

---

## 24. Component architecture

Recommended hierarchy:

Foundation:
- tokens
- typography
- icons
- motion

Primitives:
- Button
- Input
- Badge
- Avatar
- Divider
- IconButton

Components:
- Card
- ActionTile
- Search
- FormField
- Tabs
- Dropdown
- Tooltip

Patterns:
- Header
- Sidebar
- Hero
- FeatureGrid
- Dashboard
- SettingsPanel

Pages:
- Home
- Dashboard
- Detail
- Settings
- etc.

Prefer composition over duplicate components.

---

## 25. Design decision rule

When uncertain, choose the solution that:
- uses fewer visual elements
- uses existing tokens
- creates clearer hierarchy
- improves alignment
- reduces visual noise
- is easier to reuse
- remains accessible
- remains responsive

---

## 26. The AURA test

Ask:

1. Do the major elements align?
2. Does spacing follow the grid?
3. Is hierarchy immediately understandable?
4. Are similar components visually related?
5. Are colours semantic?
6. Are gradients restrained?
7. Does depth feel natural?
8. Does the interface breathe?
9. Does mobile preserve the same system?
10. Does it look intentional at first glance?

If the answer is no, refine before adding decoration.
