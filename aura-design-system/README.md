# AURA Design System

A reusable AI-first design system for web and application projects.

## Package

```text
aura-design-system/
├── AGENTS.md
├── DESIGN_SYSTEM.md
├── README.md
├── components.md
├── visual-qa.md
├── tailwind.config.js
└── src/
    └── styles/
        └── tokens.css
```

## Installation

Copy the files into the root of a new project.

Recommended:

```text
project/
├── AGENTS.md
├── DESIGN_SYSTEM.md
├── components.md
├── visual-qa.md
├── tailwind.config.js
├── src/
│   └── styles/
│       └── tokens.css
└── ...
```

If the project already has an `AGENTS.md`, merge the AURA rules into the existing file rather than overwriting project-specific instructions.

## Codex

Codex should read `AGENTS.md` as project-level instructions.

Use:

```text
Build the requested interface following the AURA design system.
```

The agent should then apply:
- AURA tokens
- component rules
- responsive rules
- accessibility rules
- visual QA

## Claude Code

Keep `AGENTS.md` in the project root. If your Claude Code setup uses another project instruction file, copy the AURA rules into that file as well.

## Tailwind

If the project uses Tailwind, merge `tailwind.config.js` into the project's existing configuration.

Do not replace an existing configuration blindly.

## CSS

Import:

```css
@import "./styles/tokens.css";
```

or the appropriate relative path for the project.

## Framework agnostic

AURA works with:
- plain HTML/CSS/JS
- React
- Next.js
- Vite
- Vue
- Svelte
- other modern UI stacks

The tokens and principles are framework independent.

## Important

AURA is a design system, not a page template.

The agent should use the system to make project-specific design decisions while preserving the same underlying visual language.
