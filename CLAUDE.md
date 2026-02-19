# Park Circus Dream House - Steph's Website

## What This Is
Professional portfolio website for **Stephanie Stewart's interior design & renovation business** — Park Circus Dream House, founded May 2025. Showcases residential/commercial projects, services, and links to her Substack blog.

## Tech Stack
- **Pure static HTML/CSS** — no frameworks, no build tools, no package.json
- **Font:** Lora serif (Google Fonts) with Georgia fallback
- **No CMS** — all content is hardcoded in HTML files
- **No JavaScript** currently
- Deploy anywhere that serves static files (GitHub Pages, Netlify, S3, etc.)

## Project Structure
```
├── index.html              # Homepage — hero + intro
├── about.html              # About Steph + services
├── projects.html           # Project grid (7 projects)
├── contact.html            # Contact info + expertise areas
├── css/
│   └── main.css            # Single stylesheet (~407 lines)
├── images/
│   ├── main_bg.jpg         # Hero background
│   └── about_me.jpg        # Profile photo
├── projects/               # Individual project detail pages
│   ├── grove-park.html
│   ├── woodlands-terrace.html
│   ├── stables-cottage.html
│   ├── gilmartins.html     # Commercial cafe project
│   ├── west-regent-street.html
│   ├── pitt-street.html
│   ├── graham-terrace.html
│   ├── stables-cottage/    # Real project images (44 files)
│   └── README.md
├── content/                # Reference Word docs with original copy
├── website_main.txt        # Content outline reference
└── project_pages.txt       # All 7 project descriptions reference
```

## Design System
- **Background:** `rgb(255, 233, 219)` — warm cream/peach
- **Brand colour:** `#8B4513` (saddle brown), hover: `#654321`
- **Text:** `#333` body, `#2c2c2c` headings
- **Footer:** `#2c2c2c` dark background
- **Aesthetic:** Substack-inspired, clean, warm, professional
- **Responsive breakpoints:** 768px (tablet), 480px (mobile)

## Key CSS Patterns
- `.container` — max-width 1200px centred layout
- `.main-content` — max-width 800px for readable text
- `.project-grid` — CSS Grid `repeat(auto-fit, minmax(300px, 1fr))`
- `.project-card` — cards with hover transform/shadow
- `.image-gallery` — responsive grid for project photos
- `.hero` — 60vh min-height with background overlay
- `.btn` / `.btn-secondary` — styled buttons

## Page Template Pattern
Every page has: identical sticky `<header>` nav → `<main>` content → `<footer>`.
Active page indicated by `class="active"` on nav link.
Project detail pages all follow the same structure: hero → details grid → story narrative → gallery → CTA.

## Current State & Known TODOs
- Most project pages use **placeholder divs** for images (only `stables-cottage/` has real photos)
- Phone number is placeholder: `+44 (0) 000 000 000`
- Instagram/LinkedIn social links are `#` placeholders
- No favicon, no Open Graph tags, no analytics yet
- External blog link: `https://parkcircusdreamhouse.substack.com/`
- Email: `hello@parkcircusdreamhouse.com`

## Conventions
- All internal links use relative paths
- Project pages use `../` prefix for CSS and back-navigation
- Semantic HTML (`<header>`, `<main>`, `<footer>`, proper heading hierarchy)
- Image alt text provided for accessibility
- No build step — edit files and they're ready to serve
