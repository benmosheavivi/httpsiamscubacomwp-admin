

# Koh Tao Guide Blog — Implementation Plan

## Overview
Add a blog section with 6 pre-written articles about Koh Tao (restaurants, beaches, activities, nightlife). Includes a listing page, individual article pages, homepage preview, and navbar link.

## Files to Create

### 1. `src/data/blogPosts.ts`
Static data file with 6 articles, each containing: slug, title, category, excerpt, coverImage (using Unsplash URLs), date, and content sections (heading + paragraphs + optional image). Categories: Food, Beaches, Activities, Nightlife.

Articles:
- "Best Restaurants on Koh Tao" (Food)
- "Where to Eat After Diving" (Food)
- "Top Beaches & Viewpoints" (Beaches)
- "Best Snorkeling Spots for Non-Divers" (Beaches)
- "Things to Do Besides Diving" (Activities)
- "Koh Tao Nightlife Guide" (Nightlife)

### 2. `src/components/BlogCard.tsx`
Reusable card with cover image, category badge, title, excerpt, and "Read More" link. Uses existing Card component and Badge.

### 3. `src/components/BlogPreview.tsx`
Homepage section showing 3 featured posts in a grid with "Explore Koh Tao Guide" heading and "View All" link to `/blog`. Placed above Footer in Index.tsx.

### 4. `src/pages/BlogPage.tsx`
Listing page at `/blog` with category filter chips and grid of BlogCards. Includes Navbar and Footer.

### 5. `src/pages/BlogPostPage.tsx`
Individual article page at `/blog/:slug`. Hero image, title, category badge, rich content sections, and a "Book a Dive" CTA banner linking to WhatsApp.

## Files to Modify

### 6. `src/App.tsx`
Add routes: `/blog` and `/blog/:slug`.

### 7. `src/components/Navbar.tsx`
Add "Koh Tao Guide" as a nav link that uses React Router `Link` to navigate to `/blog` (instead of smooth scroll). Needs to handle both hash links and route links.

### 8. `src/pages/Index.tsx`
Add `BlogPreview` component above `BookingCTA`.

## Design Notes
- Match existing ocean/coral color palette and font system (Playfair Display headings, DM Sans body)
- Use framer-motion for scroll animations consistent with other sections
- Each blog post includes a subtle "Book a Dive with Siam Scuba" CTA to convert readers into customers
- Category filter uses the accent/primary colors from the existing theme

