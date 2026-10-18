# Design tokens: profile-home

Personal design system for my profile site. Not related to company work.
All tokens live in `src/index.css` inside `@theme`.

## Rules

1. Reuse an existing token first.
2. If none fits, propose a new token: name, value, role, reason. Wait for approval.
3. Never hard-code a colour, font or size in a component.
4. Add every new token to the ledger below in the same commit.
5. Wine red (`brand`) goes on light surfaces only. Never place it on black (contrast 1.7).
6. On black, use `brand-bright` for big shapes and decoration only. Text on top is white. No red text, thin red lines or small red icons on black (contrast 2.7).
7. One red per surface. Never mix `brand` and `brand-bright` side by side.
8. Changing a master value is a decision for the owner. Page-level exceptions are labelled in this file.
9. Oxygen has only three weights. Use `font-light` (300), `font-normal` (400) and `font-bold` (700). Do not use `font-medium` or `font-semibold`. The browser would fake them.


## Master values (set by owner)

| Name | Value |
|---|---|
| Red | #76171E |
| Red, bright (for use on black) | #B7000A |
| Black | #111111 |
| White | #FAFAFA |
| Grey | #EBEBEB |
| Font | Oxygen (Google Fonts, SIL Open Font Licence) |

## Ledger

| Token | Value | Role | Classes | First used | Why added |
|---|---|---|---|---|---|
| --color-surface | #FAFAFA | Page background | bg-surface, text-surface | Seed | Master white |
| --color-surface-alt | #EBEBEB | Cards and bands | bg-surface-alt | Seed | Master grey |
| --color-ink | #111111 | Text, black blocks | text-ink, bg-ink | Seed | Master black |
| --color-brand | #76171E | Accent, buttons | bg-brand, text-brand | Seed | Master red |
| --color-brand-bright | #B7000A | Red shapes on black surfaces | bg-brand-bright | Added Oct 2026 | Owner's second red for use over black. Wine red fails on black. |
| --font-sans | "Oxygen", ui-sans-serif, system-ui, sans-serif | Default font for all text | font-sans (default) | Oct 2026 | Master font was listed but never wired into `@theme` |

Note: `--color-brand-bright` is currently unused. Its only use, the decorative shape in the hero, was removed in Oct 2026. The token stays defined in `src/index.css`.

## Contrast notes

| Pair | Ratio | OK for text? |
|---|---|---|
| Red (wine) on white | 10.5 | Yes |
| Red (wine) on grey | 9.2 | Yes |
| White on red (wine) | 10.5 | Yes |
| Black on white | 18.1 | Yes |
| White on black | 18.1 | Yes |
| Red (wine) on black | 1.7 | No. Never. |
| Bright red on black | 2.7 | No for text. Large shapes only. |
| White on bright red | 6.7 | Yes |
| Bright red on white | 6.7 | Yes, but use wine red there instead |