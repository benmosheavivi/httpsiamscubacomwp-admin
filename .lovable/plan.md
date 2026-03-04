

## Plan: 5 Updates to Siam Scuba Website

### 1. "Book a Dive" button scrolls to Fun Diving section
**Edit** `src/components/HeroSection.tsx` — Change the "Book a Dive" button from a WhatsApp link to an `onClick` that smooth-scrolls to `#fun-diving`. Remove the `asChild` + `<a>` wrapper, use a regular button instead.

### 2. Floating Instagram button
**Create** `src/components/FloatingInstagram.tsx` — A fixed-position button on the right side of the screen with the Instagram icon (Lucide `Instagram`). Uses Framer Motion to subtly bob up/down. Links to `https://www.instagram.com/siamscuba`. Positioned `fixed right-4 bottom-20 z-40`.

**Edit** `src/pages/Index.tsx` — Import and render `FloatingInstagram`.

### 3. Siam Scuba logo in Navbar
**Copy** `user-uploads://instgram_hiligthcover.png` → `src/assets/siam-logo.png`

**Edit** `src/components/Navbar.tsx` — Replace the `<Waves>` icon + text with the uploaded logo image (`<img>` with ~36px height). Keep the scroll-to-top click behavior.

### 4. PADI logo in key trust locations
**Copy** `user-uploads://Logo_of_PADI.svg.png` → `src/assets/padi-logo.png`

Place the PADI logo in three high-impact spots:
- **Hero section** — Small PADI badge below the subtitle text (e.g. "PADI 5-Star Dive Center" with logo)
- **Courses section header** — Next to the "PADI Courses" heading
- **Footer** — In the brand column, below the Siam Scuba name

### 5. Hero photo recommendation
For a dive shop hero image, the current whale shark photo is strong. Here are options to consider:

- **Keep current whale shark image** — Whale sharks are Koh Tao's #1 draw. Dramatic, aspirational, immediately communicates the location.
- **Diver silhouette with sunbeams** — Classic, universally appealing, works for both beginners and certified divers.
- **Group of divers on the boat** — Shows the social/fun aspect and the custom boats, builds trust by showing real people.
- **Split-shot (half above/below water)** — Eye-catching and unique, shows both the tropical island and underwater world.

My recommendation: The **whale shark photo is excellent** as a primary hero — it's the signature Koh Tao experience and immediately differentiates from generic dive shops. If you want to swap it, a **diver silhouette with sunbeams** would be the strongest alternative for broad appeal.

### Files Summary
1. **Copy** logo + PADI images to `src/assets/`
2. **Edit** `HeroSection.tsx` — Button behavior + PADI badge
3. **Edit** `Navbar.tsx` — Replace icon with logo image
4. **Create** `FloatingInstagram.tsx` — Floating IG button
5. **Edit** `Index.tsx` — Add FloatingInstagram
6. **Edit** `CoursesSection.tsx` — PADI logo near heading
7. **Edit** `Footer.tsx` — PADI logo in brand column

