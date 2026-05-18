# Lead Page UI Refresh (Responsive Card Layout)

Date: 2026-05-06  
Owner: Codex (with user approval)  
Scope: `src/app/lead/page.tsx`, `src/components/forms/LeadCaptureForm.tsx` (and small global utility styles only if needed)

## Goal

Modernize the `/lead` page UI and resolve responsiveness issues across mobile (320–430px), tablet, and desktop by moving to a clean editorial header + single form-card layout with consistent spacing, accessible controls, and a responsive grid.

## Non-Goals

- Reworking global header/footer navigation behavior.
- Changing lead submission behavior, endpoint, or validation rules beyond basic UX improvements.
- Adding multi-step wizard flows.

## Success Criteria

- No horizontal scroll at common device widths (320px, 360px, 375px, 390px, 414px).
- Form controls remain readable and tappable (>= 44px-ish touch target; implemented via existing `min-h-11` pattern).
- Clear hierarchy: eyebrow → title → short explanatory copy → form card.
- Responsive layout:
  - Mobile: single column form, full-width submit button.
  - `sm+`: 2-column grid for paired fields; message/budget span full width.
  - Desktop: centered card with comfortable padding and a max width.
- Status feedback is visually distinct (alert-style) and does not cause layout shift.

## Design Direction (Approved)

### Page Layout

- Keep existing `Header` and `Footer`.
- Keep `main` centered, but increase max width slightly (target ~960px) and ensure safe-area padding.
- Add top section copy:
  - Eyebrow: “Project Inquiry”
  - H1: “Tell Us About Your Project”
  - Supporting text: short promise about response time.

### Form Card

- Wrap form content in a card container:
  - Background: `var(--background-elevated)`
  - Border: `var(--border-subtle)`
  - Radius: `rounded-xl`
  - Padding: responsive (e.g. `p-5 sm:p-6 md:p-8`)
- Put the status alert inside the card, near the top of the form, so it’s noticeable and stable.

### Form Layout + Fields

- Switch from a single vertical stack to a responsive grid:
  - Container: `grid gap-4 sm:grid-cols-2`
  - `Name`, `Phone`: one row (2 cols on `sm+`)
  - `Email`, `Service`: one row (2 cols on `sm+`)
  - `Budget`: full width (`sm:col-span-2`)
  - `Message`: full width (`sm:col-span-2`)
- Inputs/select/textarea:
  - `w-full`
  - `min-h-11`
  - Keep `focus-ring` utility.
  - Ensure consistent padding and font size for legibility.
- Labels:
  - Keep existing uppercase micro-label styling.
  - Improve spacing consistency (`gap-2`).

### Submit Row

- Layout:
  - Mobile: button `w-full`, status below in its own block.
  - `sm+`: inline row with button and status side-by-side.
- Disable state: keep existing `disabled` styling.

## Accessibility

- Keep native `<label>` wrapping and `required` attributes.
- Ensure status message uses `role="status"` for success and `role="alert"` for errors (or a single `aria-live="polite"` container).
- Maintain keyboard focus visibility (`focus-ring`).

## Implementation Notes

- Prefer Tailwind utility classes already used across the repo (match existing patterns).
- Avoid introducing new design tokens unless required for fixing overflow or spacing.
- Keep component boundaries:
  - Page handles layout and copy.
  - `LeadCaptureForm` owns card, grid, and status UI.

## Risks / Open Questions

- If global typography utilities (`text-display-lg`) produce unexpected wraps on 320px widths, adjust only the lead page copy (e.g., `text-display-sm` on small screens) rather than changing global tokens.
- If textarea rows cause excessive height on short screens, consider `rows={3}` on mobile via CSS only if necessary.

