# ESCAPE TOURISMS — IMAGE & VIDEO MANUAL

Everything you need to add your own photos and videos, page by page.
Every file below is listed with its **exact folder + file name**. Put the file at that path and the page picks it up automatically — no code change needed.

## 1. How to see what is missing (white boxes)
While a file is missing, the page shows a **white dashed box** with the exact path to add. For hero videos a white tag appears at the bottom-right of the hero with the video path.
- Added the file? Refresh — the box is replaced by your picture.
- **Before final launch:** open `js/slot-preview.js` and change `var SHOW_SLOTS = true;` to `false` (or delete the `<script src="/js/slot-preview.js">` line from the pages). Then missing files stay invisible.
- Quick test without editing: add `?slots=0` to any URL.

## 2. Rules (very important)
| Rule | Value |
|---|---|
| Image format | **WebP** (`.webp`). Convert JPG/PNG at squoosh.app or any WebP converter |
| Hero image / poster (`hero.webp`) | 1920×1080 (16:9), ≤ 250 KB |
| Point / place / vehicle photos | 1200×800 (3:2), ≤ 120 KB each |
| Hero video (`hero.mp4`) | MP4 H.264, 1280×720 (or 1920×1080), 8–15 seconds loop, **no audio**, ≤ 4 MB |
| File names | lowercase, words joined with hyphens, **exactly** as written here (case matters on Vercel) |
| Never delete the `assets/` folder when you re-upload the project | |
| Where the video poster comes from | the same page's `assets/images/hero.webp` (add it too, it is shown until the video loads and on slow phones) |

## 3. Folder pattern
- Every new page has its own folder: `/{page-slug}/assets/images/` and `/{page-slug}/assets/video/hero.mp4`
- Files shared by many pages (logo, vehicles) are in `/assets/images/` (section 4).
- Original pages (home, about, jeep safari, etc.) keep their original file paths — section 5.


## 4. Shared files (used on 3 or more pages — add once)

| File path | Type | Spec | Appears as |
|---|---|---|---|
| `/assets/images/journeys/ascend.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Escape Tourisms FAQ |
| `/assets/images/journeys/beyond.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Contact Escape Tourisms Munnar |
| `/assets/images/journeys/explore.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | About Escape Tourisms Munnar |
| `/assets/images/logo/logo.webp` | image | Square PNG/WebP 512×512 · ≤ 40 KB | Escape Tourisms |
| `/assets/images/munnar-day/first-light.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | First light over the mountains of Munnar |
| `/assets/images/vehicles/ertiga.webp` | image | 1200×800 (3:2) · WebP · ≤ 100 KB · vehicle side/3-quarter view | Ertiga taxi in Munnar |
| `/assets/images/vehicles/etios.webp` | image | 1200×800 (3:2) · WebP · ≤ 100 KB · vehicle side/3-quarter view | Etios sedan taxi in Munnar |
| `/assets/images/vehicles/innova-crysta.webp` | image | 1200×800 (3:2) · WebP · ≤ 100 KB · vehicle side/3-quarter view | Innova Crysta taxi in Munnar |
| `/assets/images/vehicles/innova.webp` | image | 1200×800 (3:2) · WebP · ≤ 100 KB · vehicle side/3-quarter view | Innova taxi in Munnar |
| `/assets/images/vehicles/jeep.webp` | image | 1200×800 (3:2) · WebP · ≤ 100 KB · vehicle side/3-quarter view | Jeep taxi in Munnar |
| `/assets/images/vehicles/swift.webp` | image | 1200×800 (3:2) · WebP · ≤ 100 KB · vehicle side/3-quarter view | Swift Dzire taxi in Munnar |
| `/assets/images/vehicles/traveller.webp` | image | 1200×800 (3:2) · WebP · ≤ 100 KB · vehicle side/3-quarter view | Traveller taxi in Munnar |
| `/assets/images/vehicles/urbania.webp` | image | 1200×800 (3:2) · WebP · ≤ 100 KB · vehicle side/3-quarter view | Urbania taxi in Munnar |

Tip: vehicle photos show on every fare table. Use the **same car, same angle, clean background**.

## 5. New pages built from your txt files (all files below must be added by you)

### Chinnakanal Taxi Service — `/chinnakanal-taxi-service/`
| # | File path (exact) | Type | Spec | What it shows |
|---|---|---|---|---|
| 1 | `/chinnakanal-taxi-service/assets/images/hero.webp` | image | 1920×1080 (16:9) · WebP · ≤ 250 KB | Hero poster / background (also shown while the video loads) |
| 2 | `/chinnakanal-taxi-service/assets/video/hero.mp4` | video | 1920×1080 or 1280×720 · MP4 (H.264) · 8–15 s loop · no audio · ≤ 4 MB | Video |

### Etios / Sedan Munnar Sightseeing — `/etios-sedan-munnar-sightseeing-taxi/`
| # | File path (exact) | Type | Spec | What it shows |
|---|---|---|---|---|
| 1 | `/etios-sedan-munnar-sightseeing-taxi/assets/images/hero.webp` | image | 1920×1080 (16:9) · WebP · ≤ 250 KB | Hero poster / background (also shown while the video loads) |
| 2 | `/etios-sedan-munnar-sightseeing-taxi/assets/video/hero.mp4` | video | 1920×1080 or 1280×720 · MP4 (H.264) · 8–15 s loop · no audio · ≤ 4 MB | Video |

### Etios / Sedan Pickup & Drop — `/etios-sedan-taxi-pickup-drop-munnar/`
| # | File path (exact) | Type | Spec | What it shows |
|---|---|---|---|---|
| 1 | `/etios-sedan-taxi-pickup-drop-munnar/assets/images/cochin.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Munnar to Cochin by Etios / sedan |
| 2 | `/etios-sedan-taxi-pickup-drop-munnar/assets/images/alleppey.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Munnar to Alleppey by Etios / sedan |
| 3 | `/etios-sedan-taxi-pickup-drop-munnar/assets/images/varkala.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Munnar to Varkala by Etios / sedan |
| 4 | `/etios-sedan-taxi-pickup-drop-munnar/assets/images/hero.webp` | image | 1920×1080 (16:9) · WebP · ≤ 250 KB | Hero poster / background (also shown while the video loads) |
| 5 | `/etios-sedan-taxi-pickup-drop-munnar/assets/video/hero.mp4` | video | 1920×1080 or 1280×720 · MP4 (H.264) · 8–15 s loop · no audio · ≤ 4 MB | Video |

### Innova Munnar Sightseeing — `/innova-munnar-sightseeing-taxi/`
| # | File path (exact) | Type | Spec | What it shows |
|---|---|---|---|---|
| 1 | `/innova-munnar-sightseeing-taxi/assets/images/hero.webp` | image | 1920×1080 (16:9) · WebP · ≤ 250 KB | Hero poster / background (also shown while the video loads) |
| 2 | `/innova-munnar-sightseeing-taxi/assets/video/hero.mp4` | video | 1920×1080 or 1280×720 · MP4 (H.264) · 8–15 s loop · no audio · ≤ 4 MB | Video |

### Innova Pickup & Drop — `/innova-taxi-pickup-drop-munnar/`
| # | File path (exact) | Type | Spec | What it shows |
|---|---|---|---|---|
| 1 | `/innova-taxi-pickup-drop-munnar/assets/images/cochin.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Munnar to Cochin by Innova |
| 2 | `/innova-taxi-pickup-drop-munnar/assets/images/alleppey.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Munnar to Alleppey by Innova |
| 3 | `/innova-taxi-pickup-drop-munnar/assets/images/varkala.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Munnar to Varkala by Innova |
| 4 | `/innova-taxi-pickup-drop-munnar/assets/images/hero.webp` | image | 1920×1080 (16:9) · WebP · ≤ 250 KB | Hero poster / background (also shown while the video loads) |
| 5 | `/innova-taxi-pickup-drop-munnar/assets/video/hero.mp4` | video | 1920×1080 or 1280×720 · MP4 (H.264) · 8–15 s loop · no audio · ≤ 4 MB | Video |

### Munnar Bus Stand Pickup & Drop — `/munnar-bus-stand-taxi-pickup-drop/`
| # | File path (exact) | Type | Spec | What it shows |
|---|---|---|---|---|
| 1 | `/munnar-bus-stand-taxi-pickup-drop/assets/images/hero.webp` | image | 1920×1080 (16:9) · WebP · ≤ 250 KB | Hero poster / background (also shown while the video loads) |
| 2 | `/munnar-bus-stand-taxi-pickup-drop/assets/video/hero.mp4` | video | 1920×1080 or 1280×720 · MP4 (H.264) · 8–15 s loop · no audio · ≤ 4 MB | Video |

### Munnar Resort Pickup & Drop — `/munnar-resort-pickup-drop-taxi/`
| # | File path (exact) | Type | Spec | What it shows |
|---|---|---|---|---|
| 1 | `/munnar-resort-pickup-drop-taxi/assets/images/hero.webp` | image | 1920×1080 (16:9) · WebP · ≤ 250 KB | Hero poster / background (also shown while the video loads) |
| 2 | `/munnar-resort-pickup-drop-taxi/assets/video/hero.mp4` | video | 1920×1080 or 1280×720 · MP4 (H.264) · 8–15 s loop · no audio · ≤ 4 MB | Video |

### Munnar to Kochi — `/munnar-sightseeing/cochin-direction/`
| # | File path (exact) | Type | Spec | What it shows |
|---|---|---|---|---|
| 1 | `/munnar-sightseeing/cochin-direction/assets/images/hydel-park.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Hydel Park - Munnar sightseeing |
| 2 | `/munnar-sightseeing/cochin-direction/assets/images/pothamedu-view-point.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Pothamedu View Point - Munnar sightseeing |
| 3 | `/munnar-sightseeing/cochin-direction/assets/images/attukad-waterfall.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Attukad Waterfall - Munnar sightseeing |
| 4 | `/munnar-sightseeing/cochin-direction/assets/images/2nd-mile-view-point.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | 2nd Mile View Point - Munnar sightseeing |
| 5 | `/munnar-sightseeing/cochin-direction/assets/images/hot-air-balloon.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Hot Air Balloon - Munnar sightseeing |
| 6 | `/munnar-sightseeing/cochin-direction/assets/images/elephant-safari-elephant-ride.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Elephant Safari / Elephant Ride - Munnar sightseeing |
| 7 | `/munnar-sightseeing/cochin-direction/assets/images/chocolate-factory.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Chocolate Factory - Munnar sightseeing |
| 8 | `/munnar-sightseeing/cochin-direction/assets/images/zip-line.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Zip Line - Munnar sightseeing |
| 9 | `/munnar-sightseeing/cochin-direction/assets/images/kerala-handloom-saree-factory.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Kerala Handloom Saree Factory - Munnar sightseeing |
| 10 | `/munnar-sightseeing/cochin-direction/assets/images/dream-land-adventure-park.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Dream Land Adventure Park - Munnar sightseeing |
| 11 | `/munnar-sightseeing/cochin-direction/assets/images/glass-bridge.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Glass Bridge - Munnar sightseeing |
| 12 | `/munnar-sightseeing/cochin-direction/assets/images/sengulam-dam-boating.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Sengulam Dam Boating - Munnar sightseeing |
| 13 | `/munnar-sightseeing/cochin-direction/assets/images/spice-garden-tour.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Spice Garden Tour - Munnar sightseeing |
| 14 | `/munnar-sightseeing/cochin-direction/assets/images/kathakali-show.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Kathakali Show - Munnar sightseeing |
| 15 | `/munnar-sightseeing/cochin-direction/assets/images/kalari-show.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Kalari Show - Munnar sightseeing |
| 16 | `/munnar-sightseeing/cochin-direction/assets/images/ayurvedic-massage.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Ayurvedic Massage - Munnar sightseeing |
| 17 | `/munnar-sightseeing/cochin-direction/assets/images/kallar-waterfall.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Kallar Waterfall - Munnar sightseeing |
| 18 | `/munnar-sightseeing/cochin-direction/assets/images/anachal-jeep-safari.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Anachal Jeep Safari - Munnar sightseeing |
| 19 | `/munnar-sightseeing/cochin-direction/assets/images/hero.webp` | image | 1920×1080 (16:9) · WebP · ≤ 250 KB | Hero poster / background (also shown while the video loads) |
| 20 | `/munnar-sightseeing/cochin-direction/assets/video/hero.mp4` | video | 1920×1080 or 1280×720 · MP4 (H.264) · 8–15 s loop · no audio · ≤ 4 MB | Video |

### Munnar to Coimbatore / Chinnar — `/munnar-sightseeing/coimbatore-chinnar-route/`
| # | File path (exact) | Type | Spec | What it shows |
|---|---|---|---|---|
| 1 | `/munnar-sightseeing/coimbatore-chinnar-route/assets/images/tea-museum.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Tea Museum - Munnar sightseeing |
| 2 | `/munnar-sightseeing/coimbatore-chinnar-route/assets/images/eravikulam-national-park.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Eravikulam National Park - Munnar sightseeing |
| 3 | `/munnar-sightseeing/coimbatore-chinnar-route/assets/images/kannan-devan-tea-hills-view-point.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Kannan Devan Tea Hills View Point - Munnar sightseeing |
| 4 | `/munnar-sightseeing/coimbatore-chinnar-route/assets/images/lakkam-waterfall.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Lakkam Waterfall - Munnar sightseeing |
| 5 | `/munnar-sightseeing/coimbatore-chinnar-route/assets/images/sandalwood-forest.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Sandalwood Forest - Munnar sightseeing |
| 6 | `/munnar-sightseeing/coimbatore-chinnar-route/assets/images/chinnar-wildlife-sanctuary.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Chinnar Wildlife Sanctuary - Munnar sightseeing |
| 7 | `/munnar-sightseeing/coimbatore-chinnar-route/assets/images/thoovanam-waterfalls-trek.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Thoovanam Waterfalls Trek - Munnar sightseeing |
| 8 | `/munnar-sightseeing/coimbatore-chinnar-route/assets/images/kanthaloor-jeep-safari.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Kanthaloor Jeep Safari - Munnar sightseeing |
| 9 | `/munnar-sightseeing/coimbatore-chinnar-route/assets/images/hero.webp` | image | 1920×1080 (16:9) · WebP · ≤ 250 KB | Hero poster / background (also shown while the video loads) |
| 10 | `/munnar-sightseeing/coimbatore-chinnar-route/assets/video/hero.mp4` | video | 1920×1080 or 1280×720 · MP4 (H.264) · 8–15 s loop · no audio · ≤ 4 MB | Video |

### Munnar Sightseeing (hub) — `/munnar-sightseeing/`
| # | File path (exact) | Type | Spec | What it shows |
|---|---|---|---|---|
| 1 | `/munnar-sightseeing/assets/images/kundala-lake.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Kundala Lake - Munnar sightseeing |
| 2 | `/assets/images/munnar-day/tea-country.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Top Station Munnar |
| 3 | `/assets/images/munnar-day/golden-hour.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Eravikulam National Park Munnar |
| 4 | `/assets/images/munnar-day/under-stars.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Attukad Waterfalls Munnar |
| 5 | `/munnar-sightseeing/assets/images/hero.webp` | image | 1920×1080 (16:9) · WebP · ≤ 250 KB | Hero poster / background (also shown while the video loads) |
| 6 | `/munnar-sightseeing/assets/video/hero.mp4` | video | 1920×1080 or 1280×720 · MP4 (H.264) · 8–15 s loop · no audio · ≤ 4 MB | Video |

### Munnar to Top Station — `/munnar-sightseeing/mattupetty-top-station/`
| # | File path (exact) | Type | Spec | What it shows |
|---|---|---|---|---|
| 1 | `/munnar-sightseeing/mattupetty-top-station/assets/images/flower-garden.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Flower Garden - Munnar sightseeing |
| 2 | `/munnar-sightseeing/mattupetty-top-station/assets/images/tea-garden-and-photo-point.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Tea Garden & Photo Point - Munnar sightseeing |
| 3 | `/munnar-sightseeing/mattupetty-top-station/assets/images/horse-riding.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Horse Riding - Munnar sightseeing |
| 4 | `/munnar-sightseeing/mattupetty-top-station/assets/images/carmelagiri-elephant-park.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Carmelagiri Elephant Park - Munnar sightseeing |
| 5 | `/munnar-sightseeing/mattupetty-top-station/assets/images/mattupetty-tea-factory.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Mattupetty Tea Factory - Munnar sightseeing |
| 6 | `/munnar-sightseeing/mattupetty-top-station/assets/images/mattupetty-dam-and-lake.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Mattupetty Dam & Lake - Munnar sightseeing |
| 7 | `/munnar-sightseeing/mattupetty-top-station/assets/images/sun-moon-valley-boating.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Sun Moon Valley Boating - Munnar sightseeing |
| 8 | `/munnar-sightseeing/mattupetty-top-station/assets/images/wild-elephant-sightings.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Wild Elephant Sightings - Munnar sightseeing |
| 9 | `/munnar-sightseeing/mattupetty-top-station/assets/images/echo-point.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Echo Point - Munnar sightseeing |
| 10 | `/munnar-sightseeing/mattupetty-top-station/assets/images/kundala-lake.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Kundala Lake - Munnar sightseeing |
| 11 | `/munnar-sightseeing/mattupetty-top-station/assets/images/yellappetty.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Yellappetty - Munnar sightseeing |
| 12 | `/munnar-sightseeing/mattupetty-top-station/assets/images/top-station.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Top Station - Munnar sightseeing |
| 13 | `/munnar-sightseeing/mattupetty-top-station/assets/images/ellapatti-village-view.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Ellapatti Village View - Munnar sightseeing |
| 14 | `/munnar-sightseeing/mattupetty-top-station/assets/images/strawberry-and-honey-farm-visit.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Strawberry & Honey Farm Visit - Munnar sightseeing |
| 15 | `/munnar-sightseeing/mattupetty-top-station/assets/images/mattupetty-dam-boating.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Mattupetty Dam Boating - Munnar sightseeing |
| 16 | `/munnar-sightseeing/mattupetty-top-station/assets/images/hero.webp` | image | 1920×1080 (16:9) · WebP · ≤ 250 KB | Hero poster / background (also shown while the video loads) |
| 17 | `/munnar-sightseeing/mattupetty-top-station/assets/video/hero.mp4` | video | 1920×1080 or 1280×720 · MP4 (H.264) · 8–15 s loop · no audio · ≤ 4 MB | Video |

### Munnar to Thekkady — `/munnar-sightseeing/thekkady-route/`
| # | File path (exact) | Type | Spec | What it shows |
|---|---|---|---|---|
| 1 | `/munnar-sightseeing/thekkady-route/assets/images/lockhart-gap.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Lockhart Gap - Munnar sightseeing |
| 2 | `/munnar-sightseeing/thekkady-route/assets/images/lockhart-tea-garden.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Lockhart Tea Garden - Munnar sightseeing |
| 3 | `/munnar-sightseeing/thekkady-route/assets/images/lockhart-tea-factory.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Lockhart Tea Factory - Munnar sightseeing |
| 4 | `/munnar-sightseeing/thekkady-route/assets/images/periyakanal-waterfall.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Periyakanal Waterfall - Munnar sightseeing |
| 5 | `/munnar-sightseeing/thekkady-route/assets/images/anayirankal-dam.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Anayirankal Dam - Munnar sightseeing |
| 6 | `/munnar-sightseeing/thekkady-route/assets/images/anayirankal-tea-country.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Anayirankal Tea Country - Munnar sightseeing |
| 7 | `/munnar-sightseeing/thekkady-route/assets/images/spice-garden.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Spice Garden - Munnar sightseeing |
| 8 | `/munnar-sightseeing/thekkady-route/assets/images/chathurangapara-jeep-safari.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Chathurangapara Jeep Safari - Munnar sightseeing |
| 9 | `/munnar-sightseeing/thekkady-route/assets/images/ripple-waterfall.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Ripple Waterfall - Munnar sightseeing |
| 10 | `/munnar-sightseeing/thekkady-route/assets/images/botanical-garden.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Botanical Garden - Munnar sightseeing |
| 11 | `/munnar-sightseeing/thekkady-route/assets/images/idli-hills.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Idli Hills - Munnar sightseeing |
| 12 | `/munnar-sightseeing/thekkady-route/assets/images/muttukad-valley-view.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Muttukad Valley View - Munnar sightseeing |
| 13 | `/munnar-sightseeing/thekkady-route/assets/images/lake-view-point.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Lake View Point - Munnar sightseeing |
| 14 | `/munnar-sightseeing/thekkady-route/assets/images/hanging-bridge.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Hanging Bridge - Munnar sightseeing |
| 15 | `/munnar-sightseeing/thekkady-route/assets/images/chokramudi-trek.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Chokramudi Trek - Munnar sightseeing |
| 16 | `/munnar-sightseeing/thekkady-route/assets/images/kolukkumalai-jeep-safari.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Kolukkumalai Jeep Safari - Munnar sightseeing |
| 17 | `/munnar-sightseeing/thekkady-route/assets/images/ayurvedic-body-massage.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Ayurvedic Body Massage - Munnar sightseeing |
| 18 | `/munnar-sightseeing/thekkady-route/assets/images/hero.webp` | image | 1920×1080 (16:9) · WebP · ≤ 250 KB | Hero poster / background (also shown while the video loads) |
| 19 | `/munnar-sightseeing/thekkady-route/assets/video/hero.mp4` | video | 1920×1080 or 1280×720 · MP4 (H.264) · 8–15 s loop · no audio · ≤ 4 MB | Video |

### Munnar Sunrise Taxi — `/munnar-sunrise-taxi/`
| # | File path (exact) | Type | Spec | What it shows |
|---|---|---|---|---|
| 1 | `/munnar-sunrise-taxi/assets/images/top-station-sunrise.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Top Station Sunrise - Munnar sightseeing |
| 2 | `/munnar-sunrise-taxi/assets/images/chokramudi-sunrise.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Chokramudi Sunrise - Munnar sightseeing |
| 3 | `/munnar-sunrise-taxi/assets/images/kolukkumalai-sunrise.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Kolukkumalai Sunrise - Munnar sightseeing |
| 4 | `/munnar-sunrise-taxi/assets/images/chathurangapara-sunrise.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Chathurangapara Sunrise - Munnar sightseeing |
| 5 | `/munnar-sunrise-taxi/assets/images/bodimettu-sunrise.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Bodimettu Sunrise - Munnar sightseeing |
| 6 | `/munnar-sunrise-taxi/assets/images/hero.webp` | image | 1920×1080 (16:9) · WebP · ≤ 250 KB | Hero poster / background (also shown while the video loads) |
| 7 | `/munnar-sunrise-taxi/assets/video/hero.mp4` | video | 1920×1080 or 1280×720 · MP4 (H.264) · 8–15 s loop · no audio · ≤ 4 MB | Video |

### Munnar Sunset Taxi — `/munnar-sunset-taxi/`
| # | File path (exact) | Type | Spec | What it shows |
|---|---|---|---|---|
| 1 | `/munnar-sunset-taxi/assets/images/pothamedu-view-point.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Pothamedu View Point - Munnar sightseeing |
| 2 | `/munnar-sunset-taxi/assets/images/idly-hills-sunset.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Idly Hills Sunset - Munnar sightseeing |
| 3 | `/munnar-sunset-taxi/assets/images/2nd-mile-tea-garden-sunset.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | 2nd Mile Tea Garden Sunset - Munnar sightseeing |
| 4 | `/munnar-sunset-taxi/assets/images/door-of-heaven-sunset.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Door of Heaven Sunset - Munnar sightseeing |
| 5 | `/munnar-sunset-taxi/assets/images/gap-road-sunset.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Gap Road Sunset - Munnar sightseeing |
| 6 | `/munnar-sunset-taxi/assets/images/top-station-sunset.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Top Station Sunset - Munnar sightseeing |
| 7 | `/munnar-sunset-taxi/assets/images/kolukkumalai-sunset.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Kolukkumalai Sunset - Munnar sightseeing |
| 8 | `/munnar-sunset-taxi/assets/images/hero.webp` | image | 1920×1080 (16:9) · WebP · ≤ 250 KB | Hero poster / background (also shown while the video loads) |
| 9 | `/munnar-sunset-taxi/assets/video/hero.mp4` | video | 1920×1080 or 1280×720 · MP4 (H.264) · 8–15 s loop · no audio · ≤ 4 MB | Video |

## 6. Original pages (home, about, jeep safari…)
These pages already had their media paths in your original project — **keep the files you already have at the same paths**. White boxes appear only for files that are not in the folder yet.

### About — `/about/`
_No page-specific files (uses shared files only)._

### Camping — `/camping/`
| # | File path (exact) | Type | Spec | What it shows |
|---|---|---|---|---|
| 1 | `/assets/images/munnar-day/under-stars.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Munnar camping under the stars |

### Contact — `/contact/`
_No page-specific files (uses shared files only)._

### FAQ — `/faq/`
_No page-specific files (uses shared files only)._

### Home — `/`
| # | File path (exact) | Type | Spec | What it shows |
|---|---|---|---|---|
| 1 | `/assets/images/services/taxi-services.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Private taxi service in Munnar and Kerala |
| 2 | `/assets/images/why-escape/munnar-road.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Scenic mountain road in Munnar Kerala |
| 3 | `/assets/images/find-escape/find-your-next-escape-bg.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Munnar mountain road through Kerala tea plantations |
| 4 | `/assets/images/find-escape/munnar-recommendation.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Jeep journey through the Munnar hills |
| 5 | `/assets/images/services/pickup-drop.mp4` | video | 1920×1080 or 1280×720 · MP4 (H.264) · 8–15 s loop · no audio · ≤ 4 MB | Video |
| 6 | `/assets/images/services/munnar-sightseeing.mp4` | video | 1920×1080 or 1280×720 · MP4 (H.264) · 8–15 s loop · no audio · ≤ 4 MB | Video |
| 7 | `/assets/images/services/offroad-jeep.mp4` | video | 1920×1080 or 1280×720 · MP4 (H.264) · 8–15 s loop · no audio · ≤ 4 MB | Video |
| 8 | `/assets/images/services/kerala-tour-packages.mp4` | video | 1920×1080 or 1280×720 · MP4 (H.264) · 8–15 s loop · no audio · ≤ 4 MB | Video |
| 9 | `/assets/images/services/camping.mp4` | video | 1920×1080 or 1280×720 · MP4 (H.264) · 8–15 s loop · no audio · ≤ 4 MB | Video |
| 10 | `/assets/images/services/rooms-stays.mp4` | video | 1920×1080 or 1280×720 · MP4 (H.264) · 8–15 s loop · no audio · ≤ 4 MB | Video |
| 11 | `/assets/images/services/resorts-nature-stays.mp4` | video | 1920×1080 or 1280×720 · MP4 (H.264) · 8–15 s loop · no audio · ≤ 4 MB | Video |

### Chaduranga Para — `/jeep-safari/chaduranga-para/`
_No page-specific files (uses shared files only)._

### Jeep Safari — `/jeep-safari/`
| # | File path (exact) | Type | Spec | What it shows |
|---|---|---|---|---|
| 1 | `/assets/images/munnar-day/golden-hour.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Kolukkumalai sunrise jeep safari |

### Kolukkumalai Jeep Safari — `/jeep-safari/kolukkumalai/`
_No page-specific files (uses shared files only)._

### Kerala Taxi Package — `/kerala-taxi-package/`
_No page-specific files (uses shared files only)._

### Kerala Tour Packages — `/kerala-tour-packages/`
_No page-specific files (uses shared files only)._

### Kochi Airport to Munnar — `/kochi-airport-to-munnar-taxi/`
_No page-specific files (uses shared files only)._

### Munnar Adventures — `/munnar-sightseeing/adventures/`
_No page-specific files (uses shared files only)._

### Munnar to Alleppey — `/munnar-to-alleppey-taxi/`
_No page-specific files (uses shared files only)._

### Munnar to Kodaikanal — `/munnar-to-kodaikanal-taxi/`
_No page-specific files (uses shared files only)._

### Munnar to Madurai — `/munnar-to-madurai-taxi/`
_No page-specific files (uses shared files only)._

### Neelakurinji Season — `/neelakurinji-flower-season-munnar/`
_No page-specific files (uses shared files only)._

### Pickup & Drop — `/pickup-drop-taxi/`
| # | File path (exact) | Type | Spec | What it shows |
|---|---|---|---|---|
| 1 | `/assets/images/services/pickup-taxi.webp` | image | 1200×800 (3:2) · WebP · ≤ 120 KB | Airport pickup and drop taxi Kerala |

### Privacy Policy — `/privacy-policy/`
_No page-specific files (uses shared files only)._

### Terms — `/terms/`
_No page-specific files (uses shared files only)._

### Travel Guide — `/travel-guide/`
_No page-specific files (uses shared files only)._

### 404 page — `/404.html`
_No page-specific files (uses shared files only)._

## 7. Quick checklist
- [ ] Logo, favicon (already in `/assets/`)
- [ ] Vehicle photos (section 4)
- [ ] `hero.webp` + `hero.mp4` for every new page (section 5)
- [ ] Place photos for each page (section 5)
- [ ] Set `SHOW_SLOTS = false` in `js/slot-preview.js` before launch
- [ ] Test on mobile: open the page, scroll, confirm every image loads and no white box is left
