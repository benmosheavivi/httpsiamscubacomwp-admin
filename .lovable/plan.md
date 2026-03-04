

## Fun Dive Booking Form — Individual Diver

When a diver selects a date + slot on the calendar, a dialog opens with a form for a **single diver** (no "number of divers" field — each person fills their own form).

### Form Fields

1. **Full Name** — text, required
2. **Email** — email, required, validated
3. **WhatsApp Number** — tel, required
4. **Certification Level** — select dropdown (Open Water, Advanced Open Water, Rescue Diver, Divemaster, Instructor)
5. **Diving License Photo** — file upload (image, max 5MB), with preview thumbnail
6. **Last Dive Record (Logbook)** — file upload (image, max 5MB), with preview thumbnail

### UX Flow

- Selecting a slot opens a **Dialog** (modal)
- Dialog header shows the selected date and session (e.g. "Wednesday, March 11 — Morning (07:30)")
- Validated with **zod + react-hook-form**
- Submit button: "Send Booking Request"
- On submit (no backend yet): success toast, dialog closes, selection resets
- Scrollable on mobile

### Files

1. **Create** `src/components/FunDiveBookingForm.tsx` — form with zod validation, file uploads with preview, certification dropdown
2. **Edit** `src/components/FunDiveCalendar.tsx` — when slot is selected, open a Dialog containing the form; pass date + slot info as props

