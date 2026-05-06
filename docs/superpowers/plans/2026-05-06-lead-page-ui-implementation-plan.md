# Lead Page UI Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update `/lead` with an editorial header + responsive form-card layout that works cleanly from 320px mobile through desktop.

**Architecture:** Keep `src/app/lead/page.tsx` focused on page layout/copy. Implement the card, responsive grid, and status alert inside `LeadCaptureForm` while preserving existing submission behavior.

**Tech Stack:** Next.js App Router, React, Tailwind CSS, existing CSS variables/utilities (`focus-ring`, tokens in `globals.css`).

---

## File Map

- Modify: `D:\portfolio\src\app\lead\page.tsx` (page layout, max width, copy spacing)
- Modify: `D:\portfolio\src\components\forms\LeadCaptureForm.tsx` (card wrapper, responsive grid, status alert, submit row)

## Task 1: Update Lead Page Layout

**Files:**
- Modify: `D:\portfolio\src\app\lead\page.tsx`

- [ ] **Step 1: Adjust container width + padding**
  - Update `main` to a slightly wider `max-w` (~960px) and ensure mobile padding is comfortable.

- [ ] **Step 2: Refine the hero copy spacing**
  - Keep eyebrow + title.
  - Make supporting text a stable, readable size on small screens.

- [ ] **Step 3: Verify no layout regressions**
  - Ensure header/footer remain unchanged.
  - Ensure `LeadCaptureForm` still renders once within the section.

## Task 2: Rebuild Lead Form UI as Responsive Card

**Files:**
- Modify: `D:\portfolio\src\components\forms\LeadCaptureForm.tsx`

- [ ] **Step 1: Add a card container**
  - Wrap form content in a bordered, elevated panel (`bg-[var(--background-elevated)]`, `border-[color:var(--border-subtle)]`, `rounded-xl`).

- [ ] **Step 2: Convert fields to a responsive grid**
  - Use a single-column grid on mobile and two-column grid on `sm+`.
  - Ensure `Budget` and `Message` span full width on `sm+`.

- [ ] **Step 3: Improve status feedback**
  - Render a stable alert-style block near the top of the card.
  - Use `role="status"` for success and `role="alert"` for errors (or equivalent `aria-live`).

- [ ] **Step 4: Make submit row responsive**
  - Mobile: full-width button.
  - `sm+`: button aligns left with comfortable spacing.

- [ ] **Step 5: Preserve behavior**
  - Keep current POST to `/api/lead`, disabled state, and form reset on success.

## Task 3: Quick Verification

**Files:**
- No new files required

- [ ] **Step 1: Typecheck / lint (best-effort)**
  - Run: `npm.cmd run lint` (or `npm.cmd run typecheck` if present).
  - If blocked by environment constraints, at minimum ensure TS/JS syntax is valid and imports compile.

- [ ] **Step 2: Visual spot-check (if dev server available)**
  - Run: `npm.cmd run dev -- --hostname 127.0.0.1 --port 4173`
  - Check `/lead` at 360px, 390px, and desktop widths.

