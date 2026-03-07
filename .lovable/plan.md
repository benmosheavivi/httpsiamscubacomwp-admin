

# Content Strategy Implementation Plan

## Overview
Implement the full content strategy from the document: add Sail Rock as a featured experience, update all course detail modals with new SEO-optimized content, and add a homepage Sail Rock banner.

## Changes

### 1. Homepage Sail Rock Banner (New Component)
Create a `SailRockBanner.tsx` component -- a bold, eye-catching horizontal banner between the Courses and Fun Diving sections (or just above Fun Diving).
- Text: "We go to Sail Rock every 3 days!"
- Button links to the Fun Dive Booking page
- Styled as a high-contrast accent strip

### 2. Sail Rock Card on Fun Diving Section
Add a prominent "Sail Rock (Hin Bai)" card in `FunDivingSection.tsx` above or alongside the existing content, with:
- Title: "Sail Rock (Hin Bai) -- The Best Dive in the Gulf"
- Short blurb about the Chimney and Whale Sharks
- "More Details" button opening a Sail Rock detail modal

### 3. Sail Rock Detail Modal
Add Sail Rock entry to `CourseDetailDialog.tsx` (or create a separate dialog) with full content:
- The Chimney, Whale Shark Hotspot, Cloud of Fish highlights
- Trip details: departs every 3 days at 07:30, returns 16:30, 3 dives, meals included
- Requirements: OW cert (18m), AOW for full 40m
- Price: 3,800 THB

### 4. Update All Course Detail Content
Update `CourseDetailDialog.tsx` with the new optimized copy:

**DSD**: New header "Your First Breath Underwater: One-Day Experience", updated schedule (10:30, 12:30 boat departure instead of 11:30, 16:00 return), updated included text, same price.

**Open Water**: New header "Get Your Lifetime Certification", updated itinerary text (adds "graduation party" on Day 3), new "Small Groups: Max 6 students" perk, updated included description.

**Advanced Open Water**: New header "Explore Further: Depth & Adventure", slightly updated dive descriptions, same perks and price.

**Rescue Diver**: New header "Serious Fun: Become a Hero Underwater", updated skills list, **price changed from 10,000 to 12,000 THB**, **EFR add-on changed from 4,500 to 4,000 THB**.

### 5. Update Course Card Price (CoursesSection.tsx)
Update Rescue Diver price from "10,000" to "12,000" in the courses array.

### 6. Wire Up Index Page
Add `SailRockBanner` to `Index.tsx` between CoursesSection and FunDivingSection.

## Files to Create/Modify
- **Create**: `src/components/SailRockBanner.tsx`
- **Modify**: `src/components/CourseDetailDialog.tsx` (update all course content + add Sail Rock)
- **Modify**: `src/components/CoursesSection.tsx` (update Rescue Diver price)
- **Modify**: `src/components/FunDivingSection.tsx` (add Sail Rock highlight card with More Details)
- **Modify**: `src/pages/Index.tsx` (add SailRockBanner)

