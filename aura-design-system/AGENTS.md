# AURA Design System — AI Development Rules

AURA is the project's visual and interaction system. Treat this file as mandatory project-level guidance.

## Mission

Build interfaces that feel precise, calm, unified, premium, and effortless. The goal is not to copy Apple's UI. The goal is to reproduce the underlying design discipline: coherent spacing, typography, hierarchy, optical alignment, restrained surfaces, soft depth, subtle gradients, and purposeful motion.

## Priority order

When making a design decision, prioritize:

1. Alignment
2. Spacing
3. Typography
4. Hierarchy
5. Consistency
6. Optical balance
7. Colour
8. Depth
9. Motion
10. Decoration

Do not solve structural problems with decoration.

## Mandatory rules

- Use the AURA tokens in `src/styles/tokens.css`.
- Use the existing component system before creating a new component.
- Do not introduce arbitrary colours, spacing, radii, shadows, font sizes, or animation timings when an existing token works.
- Use the 4 px spatial grid.
- Prefer multiples of 4 px for spacing.
- Similar components must look and behave consistently.
- Use one coherent icon family throughout the product.
- Use semantic colour tokens rather than hard-coded colours.
- Use restrained gradients. Gradients are accents, not wallpaper.
- Use subtle borders and shadows. Avoid heavy visual effects.
- Use optical alignment when mathematical alignment looks visually incorrect.
- Preserve the same design language across desktop, tablet, and mobile.
- Every interactive element needs appropriate hover, pressed, focus, disabled, and loading states where applicable.
- Respect `prefers-reduced-motion`.
- Maintain accessible contrast and keyboard interaction.
- Do not add animation merely to make a page look impressive.
- Do not create one-off variants when an existing component can be composed or extended.

## Before coding

1. Inspect the existing project structure.
2. Identify the framework and styling system.
3. Find existing tokens/components before adding new ones.
4. Determine the page hierarchy and primary user action.
5. Establish the layout grid and container widths.
6. Then implement components.

## During coding

- Build from primitives upward: tokens → primitives → components → patterns → pages.
- Keep component APIs small and semantic.
- Prefer composition over duplication.
- Keep responsive behaviour intentional.
- Avoid magic numbers.
- If a new value is genuinely necessary, decide whether it should become a reusable token.
- Keep visual density controlled. Empty space is part of the composition.

## Visual implementation standard

A technically correct page is not finished until it is visually correct.

After implementation, perform a visual QA pass at:
- desktop
- tablet
- mobile

Check:
- common alignment axes
- spacing rhythm
- typography hierarchy
- line wrapping
- card proportions
- icon alignment
- surface hierarchy
- gradient intensity
- shadows
- responsive density
- focus/hover/pressed states
- overflow and clipping

Fix inconsistencies and inspect again.

## When given a screenshot or design reference

Do not blindly reproduce every pixel as an isolated value.

Infer:
- container system
- spacing scale
- typography hierarchy
- component structure
- surface hierarchy
- radius system
- colour roles
- responsive behaviour

Then implement those rules consistently.

## Do not

- use random 13/17/19/23 px spacing without a reason
- mix several unrelated icon styles
- use 5+ unrelated corner radii
- use strong black shadows
- use gradients on every card
- use excessive glassmorphism
- make every heading bold
- make every element rounded to the same radius
- create separate desktop and mobile designs when a responsive system is sufficient
- hide focus states
- rely only on colour to communicate state

## Completion criteria

Before saying a UI task is complete:
- functionality works
- responsive layout works
- no obvious overflow exists
- design tokens are used
- repeated components are consistent
- visual QA has been performed
- accessibility basics are satisfied
- no arbitrary styling has been introduced unnecessarily
