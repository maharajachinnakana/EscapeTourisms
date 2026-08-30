# ESCAPE TOURISMS — WEBSITE ARCHITECTURE

**Status:** Living document. Updated as pages are built.
**Last updated:** August 2026

---

## 1. EXISTING PAGES (LIVE, PRESERVED AS-IS)

| Page | URL | Status |
|---|---|---|
| Home | `/` | Live |
| About | `/about/` | Live |
| Contact | `/contact/` | Live |
| FAQ | `/faq/` | Live |
| Travel Guide | `/travel-guide/` | Live |
| Camping | `/camping/` | Live |
| Privacy Policy | `/privacy-policy/` | Live |
| Terms | `/terms/` | Live |
| Munnar Sightseeing | `/munnar-sightseeing/` | Live — **being upgraded to Hub (see below)** |
| Jeep Safari | `/jeep-safari/` | Live — Ads landing page (P0 fixes already implemented) |
| Kerala Taxi Package | `/kerala-taxi-package/` | Live — Ads landing page (P0 fixes already implemented) |
| Pickup & Drop Taxi | `/pickup-drop-taxi/` | Live |
| Kerala Tour Packages | `/kerala-tour-packages/` | Live — **needs audit vs. /kerala-taxi-package/ overlap (see Section 4)** |

---

## 2. IN PROGRESS — THIS SESSION

| Page | URL | Status |
|---|---|---|
| Munnar Sightseeing Hub | `/munnar-sightseeing/` | ✅ Built this session — existing verified content (pricing, FAQ) preserved, new "Explore by Route" section added as a teaser for future route pages |

---

## 3. PLANNED — NOT YET BUILT (require field research before publishing facts)

These pages need **verified attraction data** (timings, distances, access conditions) from the business owner before they can be written honestly, per the blueprint's own "do not invent" rule.

| Page | URL | Depends On |
|---|---|---|
| Mattupetty & Top Station Route | `/munnar-sightseeing/mattupetty-top-station/` | Verified attraction list, timings |
| Thekkady Route | `/munnar-sightseeing/thekkady-route/` | Verified route feasibility |
| Coimbatore/Chinnar Route | `/munnar-sightseeing/coimbatore-chinnar-route/` | Verified access/trekking requirements |
| Munnar Adventures Hub | `/munnar-sightseeing/adventures/` | Verified activity list |
| Chathuranga Para Safari | `/jeep-safari/chathuranga-para/` | Verified route/duration |
| Anakulam Safari | `/jeep-safari/anakulam/` | Verified route, no false wildlife guarantees |
| Kolukkumalai Safari | `/jeep-safari/kolukkumalai/` | Verified timings/access |
| Munnar Jeep Sightseeing | `/jeep-safari/munnar-jeep-sightseeing/` | Differentiation from taxi sightseeing |
| Kochi Airport → Munnar Taxi | `/kochi-airport-to-munnar-taxi/` | New Ads landing page |
| Railway Station → Munnar Taxi | `/railway-station-to-munnar-taxi/` | Verified station coverage |
| Munnar Adventure Taxi | `/munnar-adventure-taxi/` | Verified service area |
| Munnar Trip Planner | `/munnar-trip-planner/` | Interactive tool — needs JS build |

---

## 4. `/kerala-taxi-package/` vs `/kerala-tour-packages/` — NEEDS YOUR INPUT

Both pages currently exist. Before merging or restructuring anything (blueprint explicitly says do not blindly merge), I need to know from you:

- Is `/kerala-taxi-package/` the **per-day taxi rental** page (e.g. "₹2,500/day, 100km limit")?
- Is `/kerala-tour-packages/` meant to be the **multi-day planned itinerary** page (2–10 day journeys)?

If yes, they serve genuinely different search intents (transactional "rent a taxi" vs. planning "help me plan my Kerala trip") and should both stay, cross-linked. I have not touched either page pending your confirmation.

---

## 5. FUTURE (explicitly deferred per blueprint Section 5)

Not building until justified by real demand/Ads data:
`/kerala-weekend-tour/`, `/kerala-honeymoon-packages/`, `/kerala-family-tour-packages/`, `/kerala-group-tour-packages/`, `/custom-kerala-tour/`, destination-combo pages.

---

## 6. NAVIGATION IMPACT

No navigation changes made this session. Once route sub-pages exist, `/munnar-sightseeing/` nav dropdown can add a "Sightseeing" flyout — not implemented yet to avoid broken links.
