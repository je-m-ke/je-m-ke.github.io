# Page brief: profile-home v1

One page. Mobile first. Personal profile site. Not related to any company.

## Hard rules (never break)

1. No personal information. Never add: email, phone, location, photo, social links, school names, dates, employer names, client names, product names.
2. Use only the copy in this file. Do not invent, extend or reword it.
3. Use only existing tokens in docs/tokens.md. If none fits, propose a new token (name, value, role, reason) and wait for my yes.
4. No hard-coded colours, fonts or sizes in components.
5. No new npm packages. No analytics. No contact form. No routing.
6. Red never sits directly on black, except bright red used as a large decorative shape.
7. Text on bright red must be white (text-surface).
8. Oxygen weights allowed: font-light, font-normal, font-bold only.
9. Corners are sharp. No rounded classes.

## Audience

Hiring managers and design leaders looking for someone who understands AI-era products.
They scan fast, often on a phone.

## Page title and description

Title: Je-m-ke · Principal UX Architect
Description: Principal UX Architect. I design how people and AI work together.

## Blocks, in order

### 1. Hero (black block)

- Name (the one h1): Je-m-ke
- Title: Principal UX Architect
- Line: I design how people and AI work together.
- A large decorative bright-red shape (bg-brand-bright). It is not text. Hide it from screen readers.
- Text on the black block is white or grey (text-surface, or surface-alt for the quieter line).

### 2. Current role (light block)

I lead UX and UI, end to end, for an AI-powered, low-code and no-code website builder. It helps small business owners build and launch a site from their phone.

### 3. Domain experience (grey block)

Lead line:
I have designed products in software testing, health management, e-commerce, CRM and consumer platforms. From small apps to enterprise systems.

Six tiles (title and one line each):

1. Software testing platform: UI testing, performance testing and autonomous testing. The autonomous product was designed with AI in mind, early.
2. Health management information system (HMIS): Software that runs day-to-day health service work.
3. E-commerce: Online shopping experiences.
4. CRM: Customer relationship tools for sales and service teams.
5. Offers marketplace (B2C app): A platform where shoppers see offers around them and sellers post them.
6. iDetailing: iPad sales presentation UI that pharma sales teams use to explain new drugs to physicians. Built for major pharma companies.

Layout: 1 column on phone, 2 on tablet, 3 on desktop.

### 4. Skills (light block)

Each skill has a level label. Show the label as a small tag on each row.

Core:
- UX architecture: From research and journeys to flows, information architecture, prototypes and usability testing.
- Design systems: Tokens, components and style guides, so designers and developers share one source of truth.
- Low-code and no-code product design: UX and systems for builder-style products where non-technical people create things.

Practising:
- AI product UX: AI helpers people can trust: suggestions, edits, approvals, and recovery when the AI is wrong.
- AI-assisted design-to-code: Moving designs into code with Claude Code and Figma MCP. I direct and review. AI writes.

### 5. Footer (black block)

Full profile coming soon.

## Visual rules

- Fonts: Oxygen only (font-sans, the default).
- Colours: tokens only. Page background surface. Cards surface-alt. Text ink. Accent brand on light blocks, brand-bright on black blocks.
- Layout: one centred column, max width around 64rem, generous spacing from Tailwind's default scale.
- Hover and focus states: visible. Focus ring must have 3:1 contrast on its background.

## Likely new token

- ink-muted for secondary text on light blocks. Suggested value #555555.
  Contrast: 7.1 on #FAFAFA, 6.3 on #EBEBEB.
- On black blocks, reuse surface-alt for quieter text (contrast 15.8). No new token needed.

## Accessibility

- Semantic tags: header, main, section, footer. One h1. Headings in order.
- html lang="en".
- Tap targets at least 44px if anything is interactive.
- Check at 375px width, 768px and 1280px.

## Done when

- The page shows exactly the copy above, and nothing more.
- npm run build passes.
- No hard-coded colours or fonts. Only tokens.
- docs/tokens.md is updated for any new token.
- A search for "googleapis", "@", "http" in the page content finds nothing personal.