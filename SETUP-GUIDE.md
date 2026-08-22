# Escape Tourisms — Setup Guide

## 1. Project structure (what's in this zip)

```
EscapeTourisms/
├── index.html                    ← Home page
├── sitemap.xml                   ← All 13 pages, ready for Search Console
├── robots.txt                    ← Points to sitemap.xml
├── css/                          ← Shared styles (all pages use these)
│   ├── variables.css             ← Colors, fonts, spacing tokens
│   ├── reset.css
│   ├── navbar.css
│   ├── liquid-glass.css          ← Your glass effect system
│   ├── footer.css
│   ├── page-shared.css           ← Shared hero/section/related-card styles
│   ├── legal.css                 ← Shared Privacy Policy / Terms styling
│   ├── routes.css                ← Homepage "Fares & Routes" tab section
│   └── ...(existing home page sections: hero, services, journeys, etc.)
├── js/
│   ├── main.js                   ← Nav, FAQ accordion, booking modal, back-to-top
│   ├── liquid-glass.js
│   ├── footer.js
│   ├── routes.js
│   └── ...
├── munnar-sightseeing/           ← Google Ads page: pricing, places, itinerary
├── kerala-taxi-package/          ← Google Ads page: pricing + fare calculator
├── pickup-drop-taxi/             ← Google Ads page: transfer types, routes
├── jeep-safari/                  ← Google Ads page: Kolukkumalai, Chaduranga Para
├── kerala-tour-packages/         ← Multi-day package overview
├── camping/                      ← Munnar camping page
├── about/                        ← About Escape Tourisms
├── contact/                      ← Contact details + CTA
├── faq/                          ← Site-wide FAQ (all questions combined)
├── travel-guide/                 ← Munnar trip-planning tips
├── privacy-policy/               ← Legal
├── terms/                        ← Legal
│   (each of the above = index.html + its own css/ + js/ folder)
├── partials/                     ← Master copy of footer.html — reference if
│                                    you build a new page by hand later
└── assets/images/                ← All images
```

Every inner page loads shared CSS/JS from `/css/` and `/js/` (root), plus its
own page-specific files from its own `css/` and `js/` folder. This means:

- **To change something on every page at once** (nav, footer, booking form,
  colors) → edit the file in the root `/css/` or `/js/` folder once.
- **To change something on only one page** (e.g. jeep safari pricing) → edit
  that page's own `css/`/`js/` folder. Nothing else is affected.

**Important:** all internal links and asset paths use root-absolute URLs
(`/css/...`, `/munnar-sightseeing/...`). This only works correctly when the
site is served from your domain root — e.g. `https://escapetourisms.com/`.
If you preview by double-clicking `index.html` in a folder, styles won't
load. To preview locally, run a simple local server from the project folder:

```
python3 -m http.server 8000
```

then open `http://localhost:8000` in your browser.


## 2. New page URLs (update these in GitHub Pages / your host)

- `/munnar-sightseeing/` — Google Ads landing page #1
- `/kerala-taxi-package/` — Google Ads landing page #2
- `/pickup-drop-taxi/` — Google Ads landing page #3
- `/jeep-safari/` — Google Ads landing page #4

Nav, footer and all internal links across the site already point to these
exact slugs.


## 3. Google Search Console setup

1. Go to https://search.google.com/search-console
2. Add property → choose **Domain** (not URL prefix) → enter `escapetourisms.com`
3. Verify via DNS TXT record (your domain registrar's DNS settings)
4. Once verified, go to **Sitemaps** in the left menu and submit:
   `https://escapetourisms.com/sitemap.xml`
   *(you'll need to generate a sitemap.xml — let me know and I'll build one
   listing all 5+ pages)*
5. Use **URL Inspection** to manually request indexing for each of the 4
   priority pages right after launch — this speeds up first crawl.
6. Check **Enhancements → FAQ / Structured Data** after a few days to confirm
   Google picked up the FAQPage and Service schema on each page (this is what
   powers "People Also Ask" style rich results and AI Overviews).


## 4. Google Analytics 4 setup

1. Go to https://analytics.google.com → Admin → Create Property
2. Name it "Escape Tourisms", set timezone to Kolkata, currency to INR
3. Create a **Web** data stream → enter your domain → copy the **Measurement
   ID** (looks like `G-XXXXXXXXXX`)
4. Add this snippet just before `</head>` on every page (I can wire this in
   for you across all 5 pages if you give me the Measurement ID):

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

5. Recommended events to track (I can wire these into the booking button /
   WhatsApp links so they show up in GA4 automatically):
   - `book_now_click` — every time someone clicks a "Book Now" / booking
     trigger button
   - `whatsapp_click` — every WhatsApp link click
   - `call_click` — every `tel:` link click
   - `form_submit` — booking form submission

This is what tells you which of your 4 Google Ads landing pages is actually
converting, not just getting clicks.


## 5. Google Ads landing page checklist (per page)

Each of your 4 priority pages already has:
- ✅ Unique, keyword-matched `<title>` and meta description
- ✅ Service schema with real pricing (helps Ads Quality Score + rich snippets)
- ✅ FAQPage schema matching visible on-page FAQ content
- ✅ Fast-loading structure (no heavy unused CSS/JS pulled in)
- ✅ Clear, single primary CTA above the fold (Book Now / WhatsApp)
- ✅ Mobile-first responsive layout

Before running ads, just make sure:
- Real photos are in place (see `IMAGE-VIDEO-SHOTLIST.md`)
- Phone number `+919497665450` and WhatsApp link are correct everywhere
  (they're consistent across all pages currently — update once, I'll propagate)
- Canonical URLs in each page's `<head>` match your final live domain


## 6. What I'd suggest next

- A short `sitemap.xml` + `robots.txt` for the whole site
- An `/about/`, `/contact/`, and `/camping/` page (referenced in the footer,
  not yet built — happy to build these next since you asked for pages split
  small rather than long)
- Wiring your real vehicle photos into a "Our Fleet" section
