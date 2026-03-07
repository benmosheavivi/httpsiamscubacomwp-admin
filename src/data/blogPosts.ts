export interface BlogSection {
  heading?: string;
  paragraphs: string[];
  image?: string;
  mapLink?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: "Food" | "Beaches" | "Activities" | "Nightlife";
  excerpt: string;
  coverImage: string;
  date: string;
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "best-restaurants-koh-tao",
    title: "Best Restaurants on Koh Tao",
    category: "Food",
    excerpt: "From beachfront Thai cuisine to international fusion — our hand-picked guide to the best places to eat on the island.",
    coverImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    date: "2026-02-15",
    sections: [
      {
        heading: "Thaita — Italian Restaurant",
        paragraphs: [
          "Craving authentic Italian on a tropical island? Thaita delivers with wood-fired pizzas, handmade pastas, and a wine list that rivals restaurants back in Europe. The setting is intimate and romantic — perfect for a date night.",
          "Their truffle pasta and margherita pizza are crowd favourites. Prices are higher than Thai food but absolutely worth it for the quality. Expect to spend around 300–500 THB per dish.",
        ],
      },
      {
        heading: "Café del Sol",
        paragraphs: [
          "A beloved Koh Tao institution, Café del Sol serves excellent brunch, fresh juices, and hearty meals that keep divers and travellers coming back every day. The vibe is relaxed and welcoming.",
          "Their smoothie bowls, avocado toast, and strong espresso are the perfect way to start or end a day on the island. Great for a leisurely breakfast or a post-dive refuel.",
        ],
      },
      {
        heading: "Blue Chair",
        paragraphs: [
          "Blue Chair is one of those places you stumble upon and instantly fall in love with. Cozy atmosphere, friendly staff, and a menu that blends Thai and international flavours beautifully.",
          "Whether you're after a fresh seafood dish, a perfectly grilled steak, or a creative cocktail — Blue Chair delivers every time. A must-visit on any Koh Tao trip.",
        ],
      },
      {
        heading: "Best Khao Soi on Koh Tao",
        paragraphs: [
          "If you're a fan of northern Thai cuisine, this spot serves the best khao soi on the island — rich, coconut-based curry broth with egg noodles, tender chicken, and crispy noodle topping.",
          "It's a simple, no-frills place where the food speaks for itself. Budget-friendly at around 80–150 THB per bowl. A hidden gem that the locals love.",
        ],
      },
      {
        heading: "Best Burger at the Viewpoint",
        paragraphs: [
          "Imagine biting into a juicy cheeseburger while overlooking one of the most stunning panoramic views on Koh Tao. This hilltop spot serves the best hamburgers and cheeseburgers on the island.",
          "The combination of amazing food and a breathtaking viewpoint makes this a truly unique dining experience. Worth the ride up the hill — make sure to go before sunset for the full experience.",
        ],
      },
    ],
  },
  {
    slug: "best-dishes-koh-tao",
    title: "The Tastiest Dishes on Koh Tao",
    category: "Food",
    excerpt: "From the best chocolate chip cookie to the most authentic khao soi — our guide to the single best version of each dish on the island.",
    coverImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    date: "2026-02-20",
    sections: [
      {
        heading: "Best Chocolate Chip Cookie on the Island",
        paragraphs: [
          "If you have a sweet tooth, this is a mandatory stop. Warm, gooey, perfectly baked — this chocolate chip cookie is the stuff of legend on Koh Tao. Crispy on the edges, soft in the middle, and loaded with real chocolate chips.",
          "Pair it with an iced latte and you've got the perfect afternoon treat. Once you try it, you'll be coming back every day.",
        ],
        mapLink: "https://maps.app.goo.gl/C1zqGfUyxWhU2Ckz9?g_st=ic",
      },
      {
        heading: "Best Smoothie on the Island",
        paragraphs: [
          "Thick, fresh, and bursting with tropical fruit — this place serves the best smoothie on Koh Tao. Made with real fruit, no added sugar, and blended to perfection.",
          "Whether you go for mango, passion fruit, or a mixed tropical blend — every sip tastes like paradise. The perfect way to cool down after a day of diving or exploring.",
        ],
        mapLink: "https://maps.app.goo.gl/XZN9bSzHdYYNXrDa8?g_st=ic",
      },
      {
        heading: "Best Massaman Chicken Curry on the Island",
        paragraphs: [
          "Rich, aromatic, and packed with flavour — this massaman curry is the real deal. Tender chicken, creamy coconut sauce, roasted peanuts, and soft potatoes, all simmered together in a fragrant blend of spices.",
          "It's the kind of dish that makes you close your eyes and savour every bite. Served with fluffy jasmine rice, it's comfort food at its finest. A must-try for anyone who loves Thai cuisine.",
        ],
        mapLink: "https://maps.app.goo.gl/6sj7H41kWYnofDVK7?g_st=ic",
      },
      {
        heading: "Best Khao Soi on the Island",
        paragraphs: [
          "The king of northern Thai cuisine, done to perfection on Koh Tao. Rich coconut curry broth, tender egg noodles, fall-apart chicken, topped with crispy fried noodles and a squeeze of lime.",
          "It's a simple, no-frills place where the food speaks for itself. Budget-friendly at around 80–150 THB per bowl. A hidden gem that the locals love.",
        ],
        mapLink: "https://maps.app.goo.gl/DDbiYNQXd7z5kLpv5?g_st=ic",
      },
    ],
  },
  {
    slug: "top-beaches-viewpoints-koh-tao",
    title: "Top Beaches & Viewpoints on Koh Tao",
    category: "Beaches",
    excerpt: "Crystal-clear bays, dramatic cliff viewpoints, and hidden coves — discover Koh Tao's most beautiful spots above water.",
    coverImage: "https://images.unsplash.com/photo-1537956965359-7573183d1f57?w=800&q=80",
    date: "2026-03-01",
    sections: [
      {
        heading: "Tanote Bay",
        paragraphs: [
          "On the east coast of the island, Tanote Bay is a gorgeous crescent of sand flanked by giant boulders. The snorkeling right off the beach is excellent — you'll spot parrotfish, triggerfish, and sometimes small reef sharks.",
          "There's a famous cliff-jumping rock on the south side. The jump is about 8 metres — not for the faint-hearted but absolutely thrilling.",
        ],
      },
      {
        heading: "Freedom Beach",
        paragraphs: [
          "A small, secluded beach on the southwest coast accessible by a short jungle trail or longtail boat. It's rarely crowded and feels like your own private paradise.",
          "Bring snorkel gear — the reef just offshore is teeming with colourful fish and healthy coral.",
        ],
      },
      {
        heading: "John Suwan Viewpoint",
        paragraphs: [
          "A 20-minute hike from Chalok Baan Kao bay leads you to one of the most spectacular viewpoints in all of Thailand. From the top, you can see Shark Bay to the left and Chalok Bay to the right.",
          "Go early morning or late afternoon to avoid the midday heat. Bring water and wear proper shoes — the last section is a scramble over rocks.",
        ],
      },
      {
        heading: "Sairee Beach",
        paragraphs: [
          "The longest beach on Koh Tao stretches nearly 2 kilometres along the west coast. It's the social hub of the island — lined with bars, restaurants, and dive shops.",
          "The sunsets here are legendary. Grab a drink at one of the beach bars and watch the sky turn every shade of orange and pink.",
        ],
      },
    ],
  },
  {
    slug: "best-snorkeling-spots-non-divers",
    title: "Best Snorkeling Spots for Non-Divers",
    category: "Beaches",
    excerpt: "Don't have a dive cert? No problem — Koh Tao has world-class snorkeling right from the beach.",
    coverImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    date: "2026-03-03",
    sections: [
      {
        heading: "Japanese Gardens",
        paragraphs: [
          "Located between Koh Tao and Koh Nang Yuan, Japanese Gardens is arguably the best snorkeling site in the Gulf of Thailand. The shallow reef (1–5 metres) is covered in beautiful hard and soft corals.",
          "You'll see clownfish, angelfish, pufferfish, and if you're lucky, a sea turtle cruising by. Accessible by longtail boat from Mae Haad (about 200 THB round trip).",
        ],
      },
      {
        heading: "Shark Bay (Thian Og Bay)",
        paragraphs: [
          "Despite the name, the sharks here are harmless blacktip reef sharks — usually juveniles about 1 metre long. They patrol the shallow sandy areas and are incredible to watch from the surface.",
          "The bay is accessible by a trail from the south of the island. There's a small entrance fee (100 THB) at the viewpoint resort above.",
        ],
      },
      {
        heading: "Mango Bay",
        paragraphs: [
          "On the north coast, Mango Bay offers excellent snorkeling over a rocky reef with great visibility. It's a favourite stop on snorkeling day trips.",
          "The coral is in great condition and you'll spot groupers, moray eels, and schools of fusiliers. Best visited on a calm day.",
        ],
      },
      {
        heading: "Aow Leuk",
        paragraphs: [
          "A beautiful east-coast bay with a gently sloping sandy bottom and healthy reef on both sides. It's one of the most beginner-friendly snorkeling spots.",
          "There's a small beach bar where you can rent gear and grab a cold drink between swims. Entry fee is usually 50 THB or free if you buy food/drinks.",
        ],
      },
    ],
  },
  {
    slug: "things-to-do-besides-diving",
    title: "Things to Do on Koh Tao Besides Diving",
    category: "Activities",
    excerpt: "Rock climbing, jungle hikes, Muay Thai, cooking classes — Koh Tao has way more than just diving.",
    coverImage: new URL("../assets/koh-tao-real-viewpoint.jpg", import.meta.url).href,
    date: "2026-02-28",
    sections: [
      {
        heading: "Rock Climbing",
        paragraphs: [
          "Koh Tao's granite boulders make it one of the best rock climbing destinations in Southeast Asia. Goodtime Adventures offers half-day and full-day climbing sessions for all levels.",
          "Routes range from beginner-friendly slabs to challenging overhangs. The views from the top of the boulders are spectacular — you can see across the entire island.",
        ],
      },
      {
        heading: "Muay Thai Training",
        paragraphs: [
          "Several gyms on the island offer drop-in Muay Thai classes for beginners and experienced fighters. Monsoon Gym and Island Muay Thai are the most popular.",
          "A single class costs around 400–500 THB. It's an incredible workout and a great way to experience authentic Thai culture.",
        ],
      },
      {
        heading: "Jungle Hiking",
        paragraphs: [
          "Rent a scooter and explore the island's interior trails. The road to Mango Bay viewpoint is an adventure in itself — steep, winding, and surrounded by jungle.",
          "For a proper hike, the trail from Chalok to Tanote Bay crosses the spine of the island with panoramic views. Allow 2–3 hours and bring plenty of water.",
        ],
      },
      {
        heading: "Thai Cooking Classes",
        paragraphs: [
          "Learn to make authentic pad thai, green curry, and mango sticky rice in a hands-on cooking class. Several places on Sairee road offer half-day sessions.",
          "You'll visit the local market to buy fresh ingredients, then cook 3–4 dishes that you get to eat. Classes run about 1,500 THB including all ingredients.",
        ],
      },
      {
        heading: "Yoga & Wellness",
        paragraphs: [
          "Koh Tao has a thriving yoga scene. Blue Aura Yoga and Shambhala offer daily classes in stunning open-air studios overlooking the ocean.",
          "Drop-in classes are around 300–400 THB. Many places also offer multi-day retreats combining yoga, meditation, and healthy eating.",
        ],
      },
    ],
  },
  {
    slug: "koh-tao-nightlife-guide",
    title: "Koh Tao Nightlife Guide",
    category: "Nightlife",
    excerpt: "Beach parties, fire shows, reggae bars, and pool parties — here's how to make the most of Koh Tao after dark.",
    coverImage: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    date: "2026-03-05",
    sections: [
      {
        heading: "Sairee Beach Bar Scene",
        paragraphs: [
          "The main strip of Sairee Beach comes alive after sunset. Most bars offer happy hour from 17:00–19:00 with buy-one-get-one cocktails and cheap beer buckets.",
          "Fizz, Choppers, and MAYA Beach Club are the go-to spots for beachfront drinks with your feet in the sand.",
        ],
      },
      {
        heading: "Fire Shows",
        paragraphs: [
          "Almost every night, one of the beach bars hosts a free fire show. Talented performers spin flaming poi, jump through fire hoops, and breathe fire — all on the beach.",
          "The shows usually start around 21:00–22:00. Lotus Bar and Fizz are known for the most impressive performances.",
        ],
      },
      {
        heading: "Pool Parties",
        paragraphs: [
          "Several resorts host weekly pool parties with DJs, cocktails, and a festive atmosphere. Koh Tao Cabana and The Castle are the most popular.",
          "These usually kick off in the afternoon and run until late. Entry is free — you just pay for drinks.",
        ],
      },
      {
        heading: "Reggae & Chill Vibes",
        paragraphs: [
          "If you prefer a more laid-back evening, head to one of the reggae bars on the south end of Sairee. Live music, hammocks, and cold Chang beers.",
          "Castle Bar and Diza Bar are great for meeting other travellers in a relaxed setting. No cover charge, no pretension — just good vibes.",
        ],
      },
      {
        heading: "Late Night",
        paragraphs: [
          "The party usually migrates to Fishbowl and Saithong later in the evening — they stay open until 02:00 or later. These are the main 'club' venues on the island.",
          "Wednesday and Saturday tend to be the biggest nights. Watch out for the famous Koh Tao pub crawl — it's a wild ride.",
        ],
      },
    ],
  },
];

export const blogCategories = ["All", "Food", "Beaches", "Activities", "Nightlife"] as const;
