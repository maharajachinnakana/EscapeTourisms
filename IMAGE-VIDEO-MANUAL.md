# Escape Tourisms — IMAGE & VIDEO MANUAL

Ithula ovvoru page-kum entha folder-la, enna peyar-la, enna size-la image/video podanum nu irukku. Nee ezhuthina madhiri **file name kandippa same-ah irukkanum** (lowercase, hyphen, `.webp` / `.mp4`).

## 1. Rules (ellaarukum)

| Item | Rule |
|---|---|
| Image format | `.webp` mattum (JPG/PNG-ah convert pannunga) |
| Image name | lowercase, hyphen, no space. Example: `mattupetty-dam-and-lake.webp` |
| Stop / place photo | 1200×750 px (16:10), under 120 KB |
| Hero image | 1920×1080 px, under 250 KB |
| Hero video | `hero.mp4`, 1280×720, 8–12 sec, loop, **no audio**, under 4 MB (H.264) |
| Vehicle photo | 1200×750 px, under 100 KB, plain or transparent background |
| Case | Vercel is case-sensitive: `Hero.webp` ≠ `hero.webp` |

### Convert commands
```bash
# image -> webp (1200 wide, quality 78)
cwebp -q 78 -resize 1200 0 input.jpg -o attukad-waterfall.webp

# hero image 1920 wide
cwebp -q 76 -resize 1920 0 input.jpg -o hero.webp

# video -> small hero.mp4 (720p, no audio, web-fast start)
ffmpeg -i input.mp4 -vf scale=1280:-2 -an -c:v libx264 -crf 28 -preset slow -movflags +faststart -t 12 hero.mp4
```
Command line vendam-na https://squoosh.app la webp convert pannalaam.

## 2. White blank slots eppadi work aagum

- File innum illa-na page-la **white blank box** varum. Adhula **podanum file path** ezhuthirukkum.
- File-ah antha path-la potta, blank automatic-ah maraindhu real photo varum. Code edhuvum maatra vendam.
- Hero-la video/poster illa-na hero keezha **ADD HERO MEDIA** white strip varum.
- Ella photos-um potta aprom blank-ah muzhusa maraikka: `js/taxi-service.js` la `var SHOW_SLOTS = true;` -> `false` pannunga.
- Deploy pannum bothu un `assets` folder-ah delete panna vendam, athula irukkura files-ah mix panni upload pannunga.

## 3. Folder pattern
```text
/assets/images/vehicles/        <- shared car photos (ella pages-layum use aagum)
/assets/images/...              <- home page & global images (already un project-la irukku)
/{page}/assets/images/          <- antha page-ku mattum photos
/{page}/assets/video/hero.mp4   <- antha page hero video
```
Ovvoru page-kum already folder + `README.txt` irukku; files mattum drop pannunga.

## 4. Shared car photos (8) — ELLA vehicle pages-layum varum

Folder: `/assets/images/vehicles/`  · Used on: all sightseeing, sunrise, sunset, Innova, Etios pages.

| ✔ | File | Shows | Size |
|---|---|---|---|
| ☐ | `/assets/images/vehicles/ertiga.webp` | Ertiga car photo (side/3-quarter view) | 1200×750 · plain/transparent background · under 100 KB |
| ☐ | `/assets/images/vehicles/etios.webp` | Etios car photo (side/3-quarter view) | 1200×750 · plain/transparent background · under 100 KB |
| ☐ | `/assets/images/vehicles/innova-crysta.webp` | Innova Crysta car photo (side/3-quarter view) | 1200×750 · plain/transparent background · under 100 KB |
| ☐ | `/assets/images/vehicles/innova.webp` | Innova car photo (side/3-quarter view) | 1200×750 · plain/transparent background · under 100 KB |
| ☐ | `/assets/images/vehicles/jeep.webp` | Jeep car photo (side/3-quarter view) | 1200×750 · plain/transparent background · under 100 KB |
| ☐ | `/assets/images/vehicles/swift.webp` | Swift car photo (side/3-quarter view) | 1200×750 · plain/transparent background · under 100 KB |
| ☐ | `/assets/images/vehicles/traveller.webp` | Traveller car photo (side/3-quarter view) | 1200×750 · plain/transparent background · under 100 KB |
| ☐ | `/assets/images/vehicles/urbania.webp` | Urbania car photo (side/3-quarter view) | 1200×750 · plain/transparent background · under 100 KB |

## 5. Home page & global images (already un project-la irukkum — name maathaadhinga)

Idhu home page, about, contact, jeep-safari, camping etc. use pannura files. Un original project-la irundha thoda vendam. Illa-na intha name-la podunga.

| ✔ | File | Shows | Size |
|---|---|---|---|
| ☐ | `/assets/images/find-escape/find-your-next-escape-bg.webp` | Photo of: Find Your Next Escape Bg | 1600×900 · under 200 KB |
| ☐ | `/assets/images/find-escape/munnar-recommendation.webp` | Photo of: Munnar Recommendation | 1600×900 · under 200 KB |
| ☐ | `/assets/images/journeys/arrive.webp` | Photo of: Arrive | 1600×900 · under 200 KB |
| ☐ | `/assets/images/journeys/ascend.webp` | Photo of: Ascend | 1600×900 · under 200 KB |
| ☐ | `/assets/images/journeys/beyond.webp` | Photo of: Beyond | 1600×900 · under 200 KB |
| ☐ | `/assets/images/journeys/explore.webp` | Photo of: Explore | 1600×900 · under 200 KB |
| ☐ | `/assets/images/logo/logo.webp` | Photo of: Logo | Square 512×512 · under 40 KB |
| ☐ | `/assets/images/munnar-day/first-light.webp` | Photo of: First Light | 1600×900 · under 200 KB |
| ☐ | `/assets/images/munnar-day/go-off-route.webp` | Photo of: Go Off Route | 1600×900 · under 200 KB |
| ☐ | `/assets/images/munnar-day/golden-hour.webp` | Photo of: Golden Hour | 1600×900 · under 200 KB |
| ☐ | `/assets/images/munnar-day/tea-country.webp` | Photo of: Tea Country | 1600×900 · under 200 KB |
| ☐ | `/assets/images/munnar-day/under-stars.webp` | Photo of: Under Stars | 1600×900 · under 200 KB |
| ☐ | `/assets/images/services/camping.mp4` | Home page service card video: Camping | Video · 720p · 6–10 sec loop · no audio · under 2.5 MB |
| ☐ | `/assets/images/services/kerala-tour-packages.mp4` | Home page service card video: Kerala Tour Packages | Video · 720p · 6–10 sec loop · no audio · under 2.5 MB |
| ☐ | `/assets/images/services/munnar-sightseeing.mp4` | Home page service card video: Munnar Sightseeing | Video · 720p · 6–10 sec loop · no audio · under 2.5 MB |
| ☐ | `/assets/images/services/offroad-jeep.mp4` | Home page service card video: Offroad Jeep | Video · 720p · 6–10 sec loop · no audio · under 2.5 MB |
| ☐ | `/assets/images/services/pickup-drop.mp4` | Home page service card video: Pickup Drop | Video · 720p · 6–10 sec loop · no audio · under 2.5 MB |
| ☐ | `/assets/images/services/pickup-taxi.webp` | Photo of: Pickup Taxi | 1600×900 · under 200 KB |
| ☐ | `/assets/images/services/resorts-nature-stays.mp4` | Home page service card video: Resorts Nature Stays | Video · 720p · 6–10 sec loop · no audio · under 2.5 MB |
| ☐ | `/assets/images/services/rooms-stays.mp4` | Home page service card video: Rooms Stays | Video · 720p · 6–10 sec loop · no audio · under 2.5 MB |
| ☐ | `/assets/images/services/taxi-services.webp` | Photo of: Taxi Services | 1600×900 · under 200 KB |
| ☐ | `/assets/images/why-escape/munnar-road.webp` | Photo of: Munnar Road | 1600×900 · under 200 KB |
| ☐ | `/assets/video/hero.mp4` | Hero background video (muted, looping) for this page | Video · 1280×720 (720p) · 8–12 sec loop · no audio · under 4 MB |

## 6. Page by page

### Chinnakanal Taxi Service — `/chinnakanal-taxi-service/`

Folder: `/chinnakanal-taxi-service/assets/images/` and `/chinnakanal-taxi-service/assets/video/`

| ✔ | File | Shows | Size |
|---|---|---|---|
| ☐ | `/chinnakanal-taxi-service/assets/images/hero.webp` | Hero background + video poster (shows before video plays, and if video is missing) | 1920×1080 · under 250 KB |
| ☐ | `/chinnakanal-taxi-service/assets/video/hero.mp4` | Hero background video (muted, looping) for this page | Video · 1280×720 (720p) · 8–12 sec loop · no audio · under 4 MB |

### Etios Sedan Munnar Sightseeing Taxi — `/etios-sedan-munnar-sightseeing-taxi/`

Folder: `/etios-sedan-munnar-sightseeing-taxi/assets/images/` and `/etios-sedan-munnar-sightseeing-taxi/assets/video/`

| ✔ | File | Shows | Size |
|---|---|---|---|
| ☐ | `/etios-sedan-munnar-sightseeing-taxi/assets/images/hero.webp` | Hero background + video poster (shows before video plays, and if video is missing) | 1920×1080 · under 250 KB |
| ☐ | `/etios-sedan-munnar-sightseeing-taxi/assets/video/hero.mp4` | Hero background video (muted, looping) for this page | Video · 1280×720 (720p) · 8–12 sec loop · no audio · under 4 MB |

### Etios Sedan Taxi Pickup Drop Munnar — `/etios-sedan-taxi-pickup-drop-munnar/`

Folder: `/etios-sedan-taxi-pickup-drop-munnar/assets/images/` and `/etios-sedan-taxi-pickup-drop-munnar/assets/video/`

| ✔ | File | Shows | Size |
|---|---|---|---|
| ☐ | `/etios-sedan-taxi-pickup-drop-munnar/assets/images/hero.webp` | Hero background + video poster (shows before video plays, and if video is missing) | 1920×1080 · under 250 KB |
| ☐ | `/etios-sedan-taxi-pickup-drop-munnar/assets/video/hero.mp4` | Hero background video (muted, looping) for this page | Video · 1280×720 (720p) · 8–12 sec loop · no audio · under 4 MB |
| ☐ | `/etios-sedan-taxi-pickup-drop-munnar/assets/images/alleppey.webp` | Photo of: Alleppey | 1200×750 · under 120 KB |
| ☐ | `/etios-sedan-taxi-pickup-drop-munnar/assets/images/cochin.webp` | Photo of: Cochin | 1200×750 · under 120 KB |
| ☐ | `/etios-sedan-taxi-pickup-drop-munnar/assets/images/varkala.webp` | Photo of: Varkala | 1200×750 · under 120 KB |

### Innova Munnar Sightseeing Taxi — `/innova-munnar-sightseeing-taxi/`

Folder: `/innova-munnar-sightseeing-taxi/assets/images/` and `/innova-munnar-sightseeing-taxi/assets/video/`

| ✔ | File | Shows | Size |
|---|---|---|---|
| ☐ | `/innova-munnar-sightseeing-taxi/assets/images/hero.webp` | Hero background + video poster (shows before video plays, and if video is missing) | 1920×1080 · under 250 KB |
| ☐ | `/innova-munnar-sightseeing-taxi/assets/video/hero.mp4` | Hero background video (muted, looping) for this page | Video · 1280×720 (720p) · 8–12 sec loop · no audio · under 4 MB |

### Innova Taxi Pickup Drop Munnar — `/innova-taxi-pickup-drop-munnar/`

Folder: `/innova-taxi-pickup-drop-munnar/assets/images/` and `/innova-taxi-pickup-drop-munnar/assets/video/`

| ✔ | File | Shows | Size |
|---|---|---|---|
| ☐ | `/innova-taxi-pickup-drop-munnar/assets/images/hero.webp` | Hero background + video poster (shows before video plays, and if video is missing) | 1920×1080 · under 250 KB |
| ☐ | `/innova-taxi-pickup-drop-munnar/assets/video/hero.mp4` | Hero background video (muted, looping) for this page | Video · 1280×720 (720p) · 8–12 sec loop · no audio · under 4 MB |
| ☐ | `/innova-taxi-pickup-drop-munnar/assets/images/alleppey.webp` | Photo of: Alleppey | 1200×750 · under 120 KB |
| ☐ | `/innova-taxi-pickup-drop-munnar/assets/images/cochin.webp` | Photo of: Cochin | 1200×750 · under 120 KB |
| ☐ | `/innova-taxi-pickup-drop-munnar/assets/images/varkala.webp` | Photo of: Varkala | 1200×750 · under 120 KB |

### Munnar Bus Stand Taxi Pickup Drop — `/munnar-bus-stand-taxi-pickup-drop/`

Folder: `/munnar-bus-stand-taxi-pickup-drop/assets/images/` and `/munnar-bus-stand-taxi-pickup-drop/assets/video/`

| ✔ | File | Shows | Size |
|---|---|---|---|
| ☐ | `/munnar-bus-stand-taxi-pickup-drop/assets/images/hero.webp` | Hero background + video poster (shows before video plays, and if video is missing) | 1920×1080 · under 250 KB |
| ☐ | `/munnar-bus-stand-taxi-pickup-drop/assets/video/hero.mp4` | Hero background video (muted, looping) for this page | Video · 1280×720 (720p) · 8–12 sec loop · no audio · under 4 MB |

### Munnar Resort Pickup Drop Taxi — `/munnar-resort-pickup-drop-taxi/`

Folder: `/munnar-resort-pickup-drop-taxi/assets/images/` and `/munnar-resort-pickup-drop-taxi/assets/video/`

| ✔ | File | Shows | Size |
|---|---|---|---|
| ☐ | `/munnar-resort-pickup-drop-taxi/assets/images/hero.webp` | Hero background + video poster (shows before video plays, and if video is missing) | 1920×1080 · under 250 KB |
| ☐ | `/munnar-resort-pickup-drop-taxi/assets/video/hero.mp4` | Hero background video (muted, looping) for this page | Video · 1280×720 (720p) · 8–12 sec loop · no audio · under 4 MB |

### Munnar Sightseeing — `/munnar-sightseeing/`

Folder: `/munnar-sightseeing/assets/images/` and `/munnar-sightseeing/assets/video/`

| ✔ | File | Shows | Size |
|---|---|---|---|
| ☐ | `/munnar-sightseeing/assets/images/hero.webp` | Hero background + video poster (shows before video plays, and if video is missing) | 1920×1080 · under 250 KB |
| ☐ | `/munnar-sightseeing/assets/video/hero.mp4` | Hero background video (muted, looping) for this page | Video · 1280×720 (720p) · 8–12 sec loop · no audio · under 4 MB |
| ☐ | `/munnar-sightseeing/assets/images/kundala-lake.webp` | Photo of: Kundala Lake | 1200×750 · under 120 KB |

### Munnar Sightseeing › Cochin Direction — `/munnar-sightseeing/cochin-direction/`

Folder: `/munnar-sightseeing/cochin-direction/assets/images/` and `/munnar-sightseeing/cochin-direction/assets/video/`

| ✔ | File | Shows | Size |
|---|---|---|---|
| ☐ | `/munnar-sightseeing/cochin-direction/assets/images/hero.webp` | Hero background + video poster (shows before video plays, and if video is missing) | 1920×1080 · under 250 KB |
| ☐ | `/munnar-sightseeing/cochin-direction/assets/video/hero.mp4` | Hero background video (muted, looping) for this page | Video · 1280×720 (720p) · 8–12 sec loop · no audio · under 4 MB |
| ☐ | `/munnar-sightseeing/cochin-direction/assets/images/2nd-mile-view-point.webp` | Photo of: 2Nd Mile View Point | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/cochin-direction/assets/images/anachal-jeep-safari.webp` | Photo of: Anachal Jeep Safari | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/cochin-direction/assets/images/attukad-waterfall.webp` | Photo of: Attukad Waterfall | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/cochin-direction/assets/images/ayurvedic-massage.webp` | Photo of: Ayurvedic Massage | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/cochin-direction/assets/images/chocolate-factory.webp` | Photo of: Chocolate Factory | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/cochin-direction/assets/images/dream-land-adventure-park.webp` | Photo of: Dream Land Adventure Park | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/cochin-direction/assets/images/elephant-safari-elephant-ride.webp` | Photo of: Elephant Safari Elephant Ride | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/cochin-direction/assets/images/glass-bridge.webp` | Photo of: Glass Bridge | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/cochin-direction/assets/images/hot-air-balloon.webp` | Photo of: Hot Air Balloon | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/cochin-direction/assets/images/hydel-park.webp` | Photo of: Hydel Park | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/cochin-direction/assets/images/kalari-show.webp` | Photo of: Kalari Show | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/cochin-direction/assets/images/kallar-waterfall.webp` | Photo of: Kallar Waterfall | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/cochin-direction/assets/images/kathakali-show.webp` | Photo of: Kathakali Show | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/cochin-direction/assets/images/kerala-handloom-saree-factory.webp` | Photo of: Kerala Handloom Saree Factory | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/cochin-direction/assets/images/pothamedu-view-point.webp` | Photo of: Pothamedu View Point | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/cochin-direction/assets/images/sengulam-dam-boating.webp` | Photo of: Sengulam Dam Boating | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/cochin-direction/assets/images/spice-garden-tour.webp` | Photo of: Spice Garden Tour | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/cochin-direction/assets/images/zip-line.webp` | Photo of: Zip Line | 1200×750 · under 120 KB |

### Munnar Sightseeing › Coimbatore Chinnar Route — `/munnar-sightseeing/coimbatore-chinnar-route/`

Folder: `/munnar-sightseeing/coimbatore-chinnar-route/assets/images/` and `/munnar-sightseeing/coimbatore-chinnar-route/assets/video/`

| ✔ | File | Shows | Size |
|---|---|---|---|
| ☐ | `/munnar-sightseeing/coimbatore-chinnar-route/assets/images/hero.webp` | Hero background + video poster (shows before video plays, and if video is missing) | 1920×1080 · under 250 KB |
| ☐ | `/munnar-sightseeing/coimbatore-chinnar-route/assets/video/hero.mp4` | Hero background video (muted, looping) for this page | Video · 1280×720 (720p) · 8–12 sec loop · no audio · under 4 MB |
| ☐ | `/munnar-sightseeing/coimbatore-chinnar-route/assets/images/chinnar-wildlife-sanctuary.webp` | Photo of: Chinnar Wildlife Sanctuary | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/coimbatore-chinnar-route/assets/images/eravikulam-national-park.webp` | Photo of: Eravikulam National Park | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/coimbatore-chinnar-route/assets/images/kannan-devan-tea-hills-view-point.webp` | Photo of: Kannan Devan Tea Hills View Point | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/coimbatore-chinnar-route/assets/images/kanthaloor-jeep-safari.webp` | Photo of: Kanthaloor Jeep Safari | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/coimbatore-chinnar-route/assets/images/lakkam-waterfall.webp` | Photo of: Lakkam Waterfall | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/coimbatore-chinnar-route/assets/images/sandalwood-forest.webp` | Photo of: Sandalwood Forest | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/coimbatore-chinnar-route/assets/images/tea-museum.webp` | Photo of: Tea Museum | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/coimbatore-chinnar-route/assets/images/thoovanam-waterfalls-trek.webp` | Photo of: Thoovanam Waterfalls Trek | 1200×750 · under 120 KB |

### Munnar Sightseeing › Mattupetty Top Station — `/munnar-sightseeing/mattupetty-top-station/`

Folder: `/munnar-sightseeing/mattupetty-top-station/assets/images/` and `/munnar-sightseeing/mattupetty-top-station/assets/video/`

| ✔ | File | Shows | Size |
|---|---|---|---|
| ☐ | `/munnar-sightseeing/mattupetty-top-station/assets/images/hero.webp` | Hero background + video poster (shows before video plays, and if video is missing) | 1920×1080 · under 250 KB |
| ☐ | `/munnar-sightseeing/mattupetty-top-station/assets/video/hero.mp4` | Hero background video (muted, looping) for this page | Video · 1280×720 (720p) · 8–12 sec loop · no audio · under 4 MB |
| ☐ | `/munnar-sightseeing/mattupetty-top-station/assets/images/carmelagiri-elephant-park.webp` | Photo of: Carmelagiri Elephant Park | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/mattupetty-top-station/assets/images/echo-point.webp` | Photo of: Echo Point | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/mattupetty-top-station/assets/images/ellapatti-village-view.webp` | Photo of: Ellapatti Village View | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/mattupetty-top-station/assets/images/flower-garden.webp` | Photo of: Flower Garden | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/mattupetty-top-station/assets/images/horse-riding.webp` | Photo of: Horse Riding | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/mattupetty-top-station/assets/images/kundala-lake.webp` | Photo of: Kundala Lake | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/mattupetty-top-station/assets/images/mattupetty-dam-and-lake.webp` | Photo of: Mattupetty Dam And Lake | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/mattupetty-top-station/assets/images/mattupetty-dam-boating.webp` | Photo of: Mattupetty Dam Boating | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/mattupetty-top-station/assets/images/mattupetty-tea-factory.webp` | Photo of: Mattupetty Tea Factory | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/mattupetty-top-station/assets/images/strawberry-and-honey-farm-visit.webp` | Photo of: Strawberry And Honey Farm Visit | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/mattupetty-top-station/assets/images/sun-moon-valley-boating.webp` | Photo of: Sun Moon Valley Boating | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/mattupetty-top-station/assets/images/tea-garden-and-photo-point.webp` | Photo of: Tea Garden And Photo Point | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/mattupetty-top-station/assets/images/top-station.webp` | Photo of: Top Station | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/mattupetty-top-station/assets/images/wild-elephant-sightings.webp` | Photo of: Wild Elephant Sightings | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/mattupetty-top-station/assets/images/yellappetty.webp` | Photo of: Yellappetty | 1200×750 · under 120 KB |

### Munnar Sightseeing › Thekkady Route — `/munnar-sightseeing/thekkady-route/`

Folder: `/munnar-sightseeing/thekkady-route/assets/images/` and `/munnar-sightseeing/thekkady-route/assets/video/`

| ✔ | File | Shows | Size |
|---|---|---|---|
| ☐ | `/munnar-sightseeing/thekkady-route/assets/images/hero.webp` | Hero background + video poster (shows before video plays, and if video is missing) | 1920×1080 · under 250 KB |
| ☐ | `/munnar-sightseeing/thekkady-route/assets/video/hero.mp4` | Hero background video (muted, looping) for this page | Video · 1280×720 (720p) · 8–12 sec loop · no audio · under 4 MB |
| ☐ | `/munnar-sightseeing/thekkady-route/assets/images/anayirankal-dam.webp` | Photo of: Anayirankal Dam | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/thekkady-route/assets/images/anayirankal-tea-country.webp` | Photo of: Anayirankal Tea Country | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/thekkady-route/assets/images/ayurvedic-body-massage.webp` | Photo of: Ayurvedic Body Massage | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/thekkady-route/assets/images/botanical-garden.webp` | Photo of: Botanical Garden | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/thekkady-route/assets/images/chathurangapara-jeep-safari.webp` | Photo of: Chathurangapara Jeep Safari | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/thekkady-route/assets/images/chokramudi-trek.webp` | Photo of: Chokramudi Trek | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/thekkady-route/assets/images/hanging-bridge.webp` | Photo of: Hanging Bridge | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/thekkady-route/assets/images/idli-hills.webp` | Photo of: Idli Hills | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/thekkady-route/assets/images/kolukkumalai-jeep-safari.webp` | Photo of: Kolukkumalai Jeep Safari | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/thekkady-route/assets/images/lake-view-point.webp` | Photo of: Lake View Point | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/thekkady-route/assets/images/lockhart-gap.webp` | Photo of: Lockhart Gap | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/thekkady-route/assets/images/lockhart-tea-factory.webp` | Photo of: Lockhart Tea Factory | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/thekkady-route/assets/images/lockhart-tea-garden.webp` | Photo of: Lockhart Tea Garden | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/thekkady-route/assets/images/muttukad-valley-view.webp` | Photo of: Muttukad Valley View | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/thekkady-route/assets/images/periyakanal-waterfall.webp` | Photo of: Periyakanal Waterfall | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/thekkady-route/assets/images/ripple-waterfall.webp` | Photo of: Ripple Waterfall | 1200×750 · under 120 KB |
| ☐ | `/munnar-sightseeing/thekkady-route/assets/images/spice-garden.webp` | Photo of: Spice Garden | 1200×750 · under 120 KB |

### Munnar Sunrise Taxi — `/munnar-sunrise-taxi/`

Folder: `/munnar-sunrise-taxi/assets/images/` and `/munnar-sunrise-taxi/assets/video/`

| ✔ | File | Shows | Size |
|---|---|---|---|
| ☐ | `/munnar-sunrise-taxi/assets/images/hero.webp` | Hero background + video poster (shows before video plays, and if video is missing) | 1920×1080 · under 250 KB |
| ☐ | `/munnar-sunrise-taxi/assets/video/hero.mp4` | Hero background video (muted, looping) for this page | Video · 1280×720 (720p) · 8–12 sec loop · no audio · under 4 MB |
| ☐ | `/munnar-sunrise-taxi/assets/images/bodimettu-sunrise.webp` | Photo of: Bodimettu Sunrise | 1200×750 · under 120 KB |
| ☐ | `/munnar-sunrise-taxi/assets/images/chathurangapara-sunrise.webp` | Photo of: Chathurangapara Sunrise | 1200×750 · under 120 KB |
| ☐ | `/munnar-sunrise-taxi/assets/images/chokramudi-sunrise.webp` | Photo of: Chokramudi Sunrise | 1200×750 · under 120 KB |
| ☐ | `/munnar-sunrise-taxi/assets/images/kolukkumalai-sunrise.webp` | Photo of: Kolukkumalai Sunrise | 1200×750 · under 120 KB |
| ☐ | `/munnar-sunrise-taxi/assets/images/top-station-sunrise.webp` | Photo of: Top Station Sunrise | 1200×750 · under 120 KB |

### Munnar Sunset Taxi — `/munnar-sunset-taxi/`

Folder: `/munnar-sunset-taxi/assets/images/` and `/munnar-sunset-taxi/assets/video/`

| ✔ | File | Shows | Size |
|---|---|---|---|
| ☐ | `/munnar-sunset-taxi/assets/images/hero.webp` | Hero background + video poster (shows before video plays, and if video is missing) | 1920×1080 · under 250 KB |
| ☐ | `/munnar-sunset-taxi/assets/video/hero.mp4` | Hero background video (muted, looping) for this page | Video · 1280×720 (720p) · 8–12 sec loop · no audio · under 4 MB |
| ☐ | `/munnar-sunset-taxi/assets/images/2nd-mile-tea-garden-sunset.webp` | Photo of: 2Nd Mile Tea Garden Sunset | 1200×750 · under 120 KB |
| ☐ | `/munnar-sunset-taxi/assets/images/door-of-heaven-sunset.webp` | Photo of: Door Of Heaven Sunset | 1200×750 · under 120 KB |
| ☐ | `/munnar-sunset-taxi/assets/images/gap-road-sunset.webp` | Photo of: Gap Road Sunset | 1200×750 · under 120 KB |
| ☐ | `/munnar-sunset-taxi/assets/images/idly-hills-sunset.webp` | Photo of: Idly Hills Sunset | 1200×750 · under 120 KB |
| ☐ | `/munnar-sunset-taxi/assets/images/kolukkumalai-sunset.webp` | Photo of: Kolukkumalai Sunset | 1200×750 · under 120 KB |
| ☐ | `/munnar-sunset-taxi/assets/images/pothamedu-view-point.webp` | Photo of: Pothamedu View Point | 1200×750 · under 120 KB |
| ☐ | `/munnar-sunset-taxi/assets/images/top-station-sunset.webp` | Photo of: Top Station Sunset | 1200×750 · under 120 KB |

## 7. Total

- Unique files referenced: **136** (shared cars 8, global 23, page-specific 105)
- Hero video per page: `hero.mp4` (optional but recommended — page-ku related video).
- Tip: Mudhalla **hero.webp** + 8 vehicle photos podunga. Adhu dhaan biggest visual change.
