

## Fun Dive Weekly Schedule — Plan

Build a weekly calendar (not monthly) showing 7 days at a time with navigation to go forward/back by week.

### New Page: `/fun-dive-booking`

**`src/pages/FunDiveBookingPage.tsx`** — Page wrapper with ocean theme, back-to-home link, contains the weekly calendar component.

### New Component: `src/components/FunDiveCalendar.tsx`

- **Weekly view:** Shows 7 days in a row (Mon–Sun or starting from today). Each day is a column.
- **Three rows per day:** Morning (07:30), Afternoon (13:00), Night (18:30) — displayed as selectable slot cards in a grid.
- **Week navigation:** Left/right arrows to go to previous/next week. Cannot navigate to past weeks.
- **Cutoff rule:** Past dates disabled. Tomorrow disabled if current time ≥ 16:00.
- **Selection:** Clicking a slot highlights it. For now, just visual selection — the registration form comes later.
- **Mobile:** On small screens, stack days vertically or use horizontal scroll.

### Edits

1. **Create** `src/components/FunDiveCalendar.tsx`
2. **Create** `src/pages/FunDiveBookingPage.tsx`
3. **Edit** `src/App.tsx` — add `/fun-dive-booking` route
4. **Edit** `src/components/FunDivingSection.tsx` — change CTA button from WhatsApp link to `/fun-dive-booking`

