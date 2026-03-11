# CLAUDE.md — Valinor Ranch Website Project

## Project Overview

This is the website for **Valinor Ranch** — a 35-acre property on Missouri Heights above the Roaring Fork Valley in Carbondale, Colorado. Owner: Daniel Martineau. Brand strategy by David Scott / STR Booster.

The site is **three pages of plain HTML/CSS/JS**. No frameworks, no build step, no dependencies. Files open in a browser and deploy to Netlify or any static host by dropping the folder.

The site serves two distinct brand expressions under one master brand:
- **The Retreat** — private accommodation (index.html)
- **Weddings** — intimate mountain weddings and elopements (weddings.html)
- **The Land** — Missouri Heights, the architecture, the story (land.html)

These two expressions share a name, palette, and values but must **never cross channels**. No wedding language on retreat pages. No nightly rates or OTA references on wedding pages.

---

## Tech Stack — Plain HTML

```
valinor-ranch/
├── index.html          ← The Ranch (retreat landing page)
├── weddings.html       ← Weddings (intimate mountain weddings + elopements)
├── land.html           ← The Land (Missouri Heights, container home, story)
├── css/
│   └── style.css       ← Single stylesheet, full palette + typography
├── js/
│   └── main.js         ← Scroll animations, YouTube hero loop, nav behaviour
└── images/             ← All photography assets
```

### Rules for Code

- **No frameworks.** No React, Vue, Svelte, Tailwind, or npm packages.
- **One CSS file** (`css/style.css`) — use CSS custom properties for the palette and type system.
- **One JS file** (`js/main.js`) — Intersection Observer for scroll animations, YouTube IFrame API for hero video, sticky nav logic.
- **Google Fonts loaded via `<link>` tag** in each HTML file's `<head>`.
- **Images referenced from `images/` folder.** Use `loading="lazy"` on all images below the fold.
- **Semantic HTML** — use `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<figure>`, `<blockquote>`.
- **Mobile responsive** — CSS Grid and Flexbox, no media query below 768px breakpoint goes unhandled. Test at 375px, 768px, 1200px.
- **No JavaScript for layout.** JS is only for: scroll-triggered class toggling, YouTube embed control, and nav state.

### CSS Custom Properties — Define in `:root`

```css
:root {
  /* PRIMARY — FROM THE LOGO */
  --logo-ink: #1A1C10;
  --ranch-cream: #F3F0E7;
  --bronze-gold: #A8874A;
  --deep-forest: #243B2D;

  /* SUPPORT */
  --warm-stone: #5A5650;
  --gold-tint: #EFE5CF;
  --divider: #D6D0C2;
  --parchment: #FAF6EE;

  /* TYPOGRAPHY */
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body: 'DM Sans', Arial, sans-serif;
}
```

### Google Fonts — Include in Every HTML `<head>`

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
```

---

## Brand Voice — Follow These Rules on Every Line of Copy

### Voice Principles

1. **Specific over general** — "A thousand feet above the valley floor, looking directly south at Mt. Sopris" — never "stunning mountain views"
2. **Sensory over promotional** — Put the reader inside the experience. "The morning comes up over the ridge and the windows catch all of it" — never "wake up to breathtaking views"
3. **Restrained over enthusiastic** — No exclamation marks. No urgency language. No stacked adjectives. The voice of something that does not need to sell itself.
4. **The land leads** — In every description, the landscape is the main character. The property is the frame. The guest is the one the story is for.
5. **Earned words only** — Every word earns its place. If a sentence can be shorter without losing meaning, it is shorter.

### Vocabulary — Use These Words

Land, acre, altitude, sight line, frame, morning, season, summit, stone, ridge, still — words with weight and place.

### Anti-Vocabulary — NEVER Use These Words

stunning, breathtaking, luxurious, cozy, charming, nestled, boasting, incredible, magical, amazing, world-class

Also never use: "book now," "limited availability," "don't miss out," or any urgency language.

### Tone

Unhurried. Specific. Sensory. Closer to a well-written travel essay than a hotel brochure. Closer to an architect's notes than a real estate listing.

### Brand Personality

If Valinor Ranch were a person: they have been somewhere most people haven't. They carry the weathered, unhurried quality of someone who knows working land and the quiet depth of someone who chose a name like Valinor. They speak less than most people in the room and mean more.

Archetype: **The Sage-Guide** — creates conditions for extraordinary experience without making themselves the main character.

### Name Usage

- Correct: `Valinor Ranch` | `Valinor Ranch — Weddings`
- After first use: "the Ranch" is acceptable
- NEVER: "Valinor" alone, "VR," "The Valinor," "Valinor Ranch Luxury Retreat"
- NEVER append descriptors like "luxury," "private," or "mountain retreat"

### The Brand Promise

> A frame worthy of the view.

### The Positioning Statement

> Thirty-five private acres above the Roaring Fork Valley. A home built to put nothing between you and the mountains.

---

## Visual Identity

### Colour Palette

Bronze Gold (#A8874A) is the only warm accent. It appears on rule lines, key type treatments, and selected callout elements — never as a large background fill. Its rarity gives it weight. Logo Ink (#1A1C10) reads as warm olive-black referencing the land.

### Typography

- **Display / Headlines:** Cormorant Garamond — serif with genuine character. Mixed case. Never all-caps at display sizes.
- **Body / Interface:** DM Sans — clean neutral sans-serif. Legibility over personality at reading sizes.
- **Accent Labels:** DM Sans, `letter-spacing: 0.25em`, `text-transform: uppercase`, small sizes (11px) — for category labels and section indicators.
- **NEVER use:** Script fonts, decorative display faces, mountain lodge gift shop typography.

### Photography Direction

- Hero: Mt. Sopris and the Elk Range — container home visible but small against the landscape
- Architecture: Wide lens, environmental framing — structure earns its place
- Interior: Clean, light-filled, evidence of human presence — windows and view are always the subject
- Editing: Natural light, warm-neutral grade. NO heavily saturated "Colorado travel" look.

### Design Direction

**Rugged-refined.** Not minimalist-cold. Not rustic-nostalgic. The space between.

- Generous negative space
- Asymmetric editorial layouts
- Bronze Gold rule lines as structural accents
- Photography takes dominant space
- Container home architecture informs the grid: open, framed, deliberate

---

## Page Architecture

### Page 1: index.html — The Ranch (Retreat)

The retreat landing page. Hero is a YouTube video loop (muted autoplay) or full-bleed landscape photo.

Sections in order:
1. **Hero** — Video/image with brand promise overlay. Minimal text.
2. **The Ranch** — Introduction. The land story. Asymmetric grid: label left, prose right.
3. **Full-bleed landscape** — Photography break. Caption in small tracked text.
4. **The Home** — Container home story. Image left, copy right. Stats (35 acres, 4.97 rating). **Weave the hero amenities into the narrative** — bedrooms, kitchen, deck, hot tub, the stove — described as sensory details of the experience, not a feature list. Example: "Three bedrooms, each with sight lines to the range. A deck that sits at the altitude of the ridgeline. A hot tub that earns its position." The amenities are there but they read as architecture, not inventory.
5. **The Seasons** — Three-column seasonal cards. Winter, Summer, Autumn.
6. **Social Proof** — Centred testimonial. Review count + rating as section label.
7. **The Details** — A quiet grid of practical amenities the guest needs to confirm before booking. No icons, no descriptions — just tracked uppercase labels in a clean grid. These are the things guests search for that don't belong in the narrative: wifi, parking, washer/dryer, pet policy, EV charging, distance to Aspen, etc. Section label: "The Details." The grid sits quietly — it serves the guest who needs to check a box, not the guest who's already sold. Style: DM Sans, 11px, uppercase, letter-spacing 0.2em, Warm Stone colour, on a Parchment background. 3-column grid on desktop, 2-column on tablet, single on mobile.
8. **Second landscape** — Another photography break.
9. **Reserve CTA** — "Reserve your stay." Confident, no urgency.
10. **Footer**

**Separation rule:** Zero mention of weddings, elopements, ceremony, venue, celebration, guest capacity for events.

### Page 2: weddings.html — Weddings

Elevated register. Fewer words, more weight. The couple's story comes first, the property second.

Sections in order:
1. **Hero** — Full-bleed ceremony photography in the landscape. "Valinor Ranch — Weddings"
2. **The Promise** — Short prose about what the ranch holds for a wedding day. Thirty-five acres as the setting for the most significant day of their lives. The feeling of discovery — "I can't believe this place exists."
3. **Full-bleed ceremony photography** — The couple in the landscape, the Elk Range behind them
4. **What the Ranch Offers** — 35 private acres, mountain ceremony sites, the container home as bridal suite, Daniel as host. Bespoke — no packages, no templated weddings.
5. **Gallery** — 3-4 ceremony/celebration images showing the landscape as wedding venue
6. **Inquiry Form** — Wedding date, approximate guest count, "Tell us about your day." Submit to webhook.
7. **Footer**

**Separation rule:** Zero mention of nightly rates, Airbnb, VRBO, OTA platforms, "booking." This is a venue inquiry, not an accommodation listing.

**Tone:** A couple planning their wedding who finds this page should feel they have discovered something rare — not that they are shopping a venue directory. The language should feel like a considered letter from someone who understands what the day means to them. No package language, no "starting at $X per head," no volume framing.

### Page 3: land.html — The Land

The differentiator page. Missouri Heights as place.

Sections in order:
1. **Hero** — Landscape at altitude. "Missouri Heights" as headline.
2. **The Heights** — Geographic context, altitude, character of the area
3. **Photography grid** — The land in different seasons and light
4. **The Architecture** — Container home story, sustainability, the "frame" concept
5. **Daniel's Story** — The owner's relationship to the land
6. **Footer**

---

## Hero Video Implementation

When a YouTube video URL is provided with start/end timestamps:

```html
<!-- In the HTML hero section -->
<div id="hero-video" class="hero"></div>

<!-- YouTube IFrame API -->
<script src="https://www.youtube.com/iframe_api"></script>
```

```javascript
// In main.js
let player;
const VIDEO_ID = 'YOUTUBE_ID_HERE';
const START_TIME = 80;  // seconds
const END_TIME = 105;   // seconds

function onYouTubeIframeAPIReady() {
  player = new YT.Player('hero-video', {
    videoId: VIDEO_ID,
    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 0,
      showinfo: 0,
      rel: 0,
      loop: 0,
      modestbranding: 1,
      playsinline: 1,
      start: START_TIME,
      end: END_TIME,
    },
    events: {
      onReady: (e) => e.target.playVideo(),
      onStateChange: (e) => {
        if (e.data === YT.PlayerState.ENDED) {
          player.seekTo(START_TIME);
          player.playVideo();
        }
      }
    }
  });
}
```

Style the video container to fill the hero with `position: absolute; inset: 0; overflow: hidden;` and scale the iframe larger than the container to crop YouTube UI: `width: 120%; height: 120%; top: -10%; left: -10%;`.

---

## Scroll Animations — Intersection Observer

Use a single pattern in main.js. Add class `reveal` to any element that should animate in on scroll. CSS handles the transition.

```javascript
// main.js
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, { threshold: 0.15 });
reveals.forEach(el => observer.observe(el));
```

```css
/* style.css */
.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 1s cubic-bezier(0.23, 1, 0.32, 1),
              transform 1s cubic-bezier(0.23, 1, 0.32, 1);
}
.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
.reveal-delay-1 { transition-delay: 0.15s; }
.reveal-delay-2 { transition-delay: 0.3s; }
```

---

## Nav Behaviour

Floating nav, transparent on hero, gains background on scroll. Use Intersection Observer on the hero section or a scroll position check.

```javascript
// main.js
const nav = document.querySelector('.site-nav');
const hero = document.querySelector('.hero');

const navObserver = new IntersectionObserver(([entry]) => {
  nav.classList.toggle('nav-scrolled', !entry.isIntersecting);
}, { threshold: 0 });
navObserver.observe(hero);
```

---

## The Decision Filter

When any design or copy decision is uncertain, apply these four tests:

1. **Does it serve the right guest?** Someone whose life leaves little room for presence.
2. **Does it honour the brand promise?** "A frame worthy of the view."
3. **Does it keep the two expressions apart?**
4. **Is it specific?** Altitude over "mountain views." Acreage over "private."

---

## What the Brand Always Does

- Leads with land and landscape before interiors
- Uses specific, verifiable language (altitudes, acreage, distances)
- Treats guests as adults who know what they want
- Maintains an unhurried, specific tone across every touchpoint
- Presents the container home's sustainability as character, not compromise
- Lets the landscape be the main character

## What the Brand Never Does

- Uses anti-vocabulary words (stunning, breathtaking, luxurious, cozy, charming, nestled, etc.)
- Leads with a feature inventory or amenity list
- Crosses retreat ↔ weddings language
- Describes the property in third person as promotional ("This beautiful home features…")
- Uses urgency language
- Produces generic Colorado mountain imagery
