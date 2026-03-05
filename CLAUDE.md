# CLAUDE.md — FX Coating Website Build

## Project Overview

Build a static, multi-page website for **FX Coating Ltd.** — an industrial coating contractor serving Southwestern Ontario. The company specializes in epoxy flooring, concrete surface preparation, protective coatings, and tank/vessel linings for grain elevators, wastewater facilities, food processing plants, agricultural operations, and manufacturing facilities.

**This is a demo/staging build.** Host-ready for GitHub Pages or Netlify. No backend, no CMS, no server-side logic. Pure static HTML, CSS, and JS.

---

## Tech Stack

- **Static HTML, CSS, vanilla JS** — no frameworks, no build tools, no dependencies
- All pages are `.html` files in a flat directory structure
- CSS in a single `/css/` directory (one main stylesheet, reset/normalize optional)
- JS in a single `/js/` directory (minimal — mobile nav toggle, lazy loading, form UX)
- Images in `/images/` directory organized by subfolder: `/images/projects/`, `/images/icons/`, `/images/team/`, `/images/hero/`
- Google Fonts loaded via `<link>` tag — no self-hosting needed for demo
- No npm, no node_modules, no package.json, no build step — just files that open in a browser

---

## Hosting / Deployment

This site will be deployed to **GitHub Pages** or **Netlify** for demo purposes. No custom domain, no SSL configuration needed. Structure the output so that:
- `index.html` is at the root
- All internal links use relative paths (not absolute)
- No trailing slashes required in links

---

## Site Architecture & URL Structure

The site follows a **flat-but-semantically-organized** structure. Every important page sits within 3 clicks of the homepage. The architecture is organized across four content axes: **Industries** (who we serve), **Applications** (what problems we solve), **Systems** (what products we install), and **Projects** (proof of work).

### Pages to Build (~55–60 pages)

```
/index.html                                      ← Homepage

── INDUSTRIES ──
/industries/index.html                            ← Industries hub
/industries/food-beverage.html                    ← Food & Beverage (food production, dairy, meat processing)
/industries/agribusiness.html                     ← Agribusiness (livestock, robotic rooms, milk parlors, grain elevators, feed mangers, bulk-tank rooms)
/industries/commercial.html                       ← Commercial (office buildings, hospitality, retail, dealerships, parkades, apartments)
/industries/industrial.html                       ← Industrial (warehouses, shipping docks, chemical mfg, wastewater, hangars, pharma)
/industries/institutional.html                    ← Institutional/Developer (hospitals, research centres, rec centres, police/fire, education, labs)

── APPLICATIONS ──
/applications/index.html                          ← Applications hub
/applications/anti-slip-coating.html              ← Anti-Slip Coating
/applications/easy-clean-surfacing.html           ← Easy-Clean Surfacing
/applications/safety-marking.html                 ← Safety Marking
/applications/waterproofing.html                  ← Waterproofing / Structural Reinforcing
/applications/floor-sloping.html                  ← Floor Sloping
/applications/surface-sanitizing.html             ← Surface Sanitizing

── SYSTEMS (Products) ──
/systems/index.html                               ← Systems hub
/systems/fx-shield.html                           ← FX Shield
/systems/fx-urethane.html                         ← FX Urethane
/systems/fx-premium-flakes.html                   ← FX Premium Flakes
/systems/fx-partial-flakes.html                   ← FX Partial Flakes
/systems/fx-textured-epoxy.html                   ← FX Textured Epoxy
/systems/fx-crystal-grip.html                     ← FX Crystal Grip
/systems/fx-wall-glaze.html                       ← FX Wall Glaze
/systems/fx-black-rubber.html                     ← FX Black Rubber

── PROJECTS ──
/projects/index.html                              ← Project gallery
/projects/sample-project-1.html                   ← Individual project (create 3–5 sample projects)
/projects/sample-project-2.html
/projects/sample-project-3.html
/projects/sample-project-4.html
/projects/sample-project-5.html

── SERVICE AREAS ──
/service-areas/index.html                         ← Service areas hub
/service-areas/london-ontario.html                ← London & Area
/service-areas/kitchener-waterloo.html            ← Kitchener-Waterloo
/service-areas/hamilton-ontario.html              ← Hamilton
/service-areas/guelph-ontario.html                ← Guelph
/service-areas/woodstock-ontario.html             ← Woodstock
/service-areas/stratford-ontario.html             ← Stratford
/service-areas/st-thomas-ontario.html             ← St. Thomas
/service-areas/chatham-kent.html                  ← Chatham-Kent
/service-areas/sarnia-ontario.html                ← Sarnia
/service-areas/windsor-ontario.html               ← Windsor
/service-areas/cambridge-ontario.html             ← Cambridge
/service-areas/brantford-ontario.html             ← Brantford

── ABOUT ──
/about/index.html                                 ← About overview
/about/our-story.html
/about/our-team.html
/about/safety-quality.html

── RESOURCES ──
/blog/index.html                                  ← Blog/Resources hub

── UTILITY ──
/contact.html                                     ← Contact / Get a Quote
/privacy-policy.html
/sitemap.html                                     ← HTML sitemap
```

### Industry × Application Intersection Pages (Phase 2)

These are high-value SEO pages that combine a specific industry with a specific application. Only build these where there is a genuine, substantive story to tell — not every combination. Examples:

```
/industries/food-beverage/anti-slip-coating.html
/industries/food-beverage/easy-clean-surfacing.html
/industries/agribusiness/easy-clean-surfacing.html
/industries/agribusiness/waterproofing.html
/industries/industrial/anti-slip-coating.html
```

Each intersection page must have unique content (not reworded copies). Build these as real projects and case studies accumulate. Do not create thin intersection pages just to fill the matrix.

---

## Navigation Structure

### Main Navigation (persistent header on every page)

| Nav Item     | Type       | Links To                                                                          |
|--------------|------------|-----------------------------------------------------------------------------------|
| Industries   | Dropdown   | Food & Beverage · Agribusiness · Commercial · Industrial · Institutional          |
| Applications | Dropdown   | Anti-Slip · Easy-Clean · Safety Marking · Waterproofing · Floor Sloping · Sanitizing |
| Systems      | Dropdown   | FX Shield · FX Urethane · FX Premium Flakes · FX Partial Flakes · FX Textured Epoxy · FX Crystal Grip · FX Wall Glaze · FX Black Rubber |
| Projects     | Link       | /projects/                                                                        |
| About        | Dropdown   | Our Story · Our Team · Safety & Quality · Service Areas                           |
| Resources    | Link       | /blog/                                                                            |
| Contact      | CTA Button | /contact.html — styled as a button, not a text link                               |

**Note on dropdown size:** The Systems dropdown has 8 items. Group them visually with a subtle divider or two-column layout rather than a long single-column list. Keep to one level — no nested sub-menus anywhere.

### Utility Bar (above main nav, every page)
- Phone number: click-to-call link — `tel:+15551234567` (placeholder)
- "Request a Quote" text link → /contact.html

### Sticky Mobile Header
- Logo (left), click-to-call phone icon (center-right), "Get Quote" button (right)
- Hamburger menu for full nav
- Always visible on scroll
- Minimum 60px tap targets on all interactive elements

---

## Design Direction

### Aesthetic
**Industrial-utilitarian with precision.** Not slick SaaS. Not generic contractor. Think: clean, authoritative, built to communicate competence and safety. The audience is facility managers, project engineers, and procurement teams — they want proof of expertise, not marketing flash.

### Color Palette
Derived from the FX Coating logo. Use CSS custom properties (`var(--color-name)`) defined in `:root`:
- **FX Red** (primary accent): `#E31B23` — the red diamond in the logo. Use for primary CTAs, key highlights, and interactive elements.
- **FX Magenta** (secondary accent): `#D06BAE` — the middle diamond. Use for hover states, secondary buttons, and supporting accents.
- **FX Purple** (tertiary accent): `#7B5EA7` — the bottom diamond. Use for section backgrounds, borders, and depth.
- **FX Gray** (text/headings): `#666666` — matches the "FX" wordmark. Use for headings and primary body text.
- **Dark charcoal**: `#1a1a2e` — for the darkest backgrounds (footer, nav overlays).
- **Neutral light**: `#F5F4F0` — off-white/warm gray for page backgrounds. Not pure white.
- **Neutral mid**: `#D1D1D1` — borders, dividers, secondary text.
- **White**: `#FFFFFF` — card backgrounds, content areas against the warm gray.

The logo uses a red-to-purple gradient across three stacked diamond shapes. The site should echo this energy — the red draws attention (CTAs, alerts), the purple provides depth and professionalism, and the gray keeps everything grounded and industrial. Do not use all three accent colors at equal weight on every page — lead with red for action, purple for structure, magenta sparingly as a bridge.

### Typography
- **Headings**: A bold, industrial-feeling display font from Google Fonts — something with character and weight. NOT Inter, Roboto, or Arial.
- **Body**: A clean, highly readable sans-serif that pairs well with the display font
- Use `font-display: swap` on all font loads

### Logo
The FX Coating logo file is at `/images/FX-Coating-short.png`. Use this in the header on every page. The logo features three stacked diamond shapes (red → magenta → purple) with "FX" in dark gray. It works on both light and dark backgrounds. Do not stretch, recolor, or modify the logo.

### Key Visual Elements
- **Certification badges** displayed in the header area or immediately below the hero on every page (SSPC, NACE, COR, WSIB, manufacturer logos — use placeholder badge icons for now)
- **Numbers strip**: "XX Years Experience | XX+ Projects Completed | XX+ Facilities Served | XXX,000+ Sq Ft Coated" — displayed prominently on homepage
- **Real project photography**: The `/images/` folder in this repo contains real project and site photos from the Webflow export. Use those actual images throughout the site — match photos to the appropriate pages based on filenames. Before/after pairs should use real photos where available. Use `<img>` tags with proper `alt` text, `width`, `height`, and `loading="lazy"` (except hero images which get `fetchpriority="high"`).
- If a page needs an image and no suitable real photo exists in `/images/`, use a gray placeholder `div` with descriptive text at the correct aspect ratio (16:9 or 4:3) as a fallback — but always prefer real images first.

---

## Content Voice and Tone

All website content must follow these principles:

- **Lead with the buyer's problem, not FX's product features.** Every page opens by describing the challenge the reader faces, then positions FX as the solution. Not "We offer epoxy flooring" — instead "Your facility floor takes constant abuse from chemical spills, heavy traffic, and thermal cycling. Here's how to stop it."
- **Use industry-specific terminology naturally.** Write the way a knowledgeable coatings professional talks to a facility manager — not the way a marketer writes ad copy. Terms like SSPC-SP13, CFIA-approved, chemical resistance, thermal cycling, substrate preparation should appear where they belong, not forced in for SEO.
- **Be direct and confident without being salesy.** No "we are committed to excellence" or "we pride ourselves on quality." Replace every generic claim with a specific proof point — a number, a certification, a project outcome, a system name.
- **Reference FX systems by name** (FX Shield, FX Urethane, etc.) throughout content to build brand recognition. When discussing which coating solves a problem, name the system.
- **Include concrete details** wherever possible: square footage ranges, cure times, service life expectations, applicable standards, temperature and chemical resistance ratings.
- **Tone model:** "FX Coating Ltd. offers integral services to companies looking for growth and transformation. Our focus into building authentic product lines offers our clients increased efficiency and less workload problems." — Practical, solutions-focused, no fluff.

---

## Page Templates & Content Structure

### Every Page Must Include
1. Utility bar (phone + quote link)
2. Main navigation with dropdowns
3. Breadcrumb navigation (Home > Section > Page)
4. Page content
5. CTA section before footer ("Ready to discuss your project?")
6. Footer with: company info, nav links, service areas list, phone number, email, copyright

### Homepage Template
1. **Hero section**: Full-width background (placeholder image), outcome-focused headline ("Protect Your Facility. Minimize Downtime."), subheadline with specifics, two CTAs (primary: "Get a Free Site Assessment", secondary: "View Our Projects"), certification badges below
2. **Industries served**: Visual grid linking to all 5 industry pages — this leads the content because buyers think in terms of their industry first
3. **Numbers strip**: Key metrics in a horizontal bar
4. **Systems overview**: Grid/cards showing FX's branded systems with brief descriptions
5. **Featured project**: One project highlight with before/after placeholder and brief narrative
6. **Testimonial**: Client quote with full name, title, company (use placeholder — never anonymous quotes)
7. **Service area section**: Text listing of all 12 cities served with link to service areas hub
8. **Final CTA**: "Get a Free Site Assessment" with phone number and link to contact form

### Industry Page Template (use for all 5 industry pages)
1. **Industry-specific headline** (e.g., "Protective Coatings for Food & Beverage Facilities")
2. **Overview**: Pain points specific to that industry (800–1,200 words total page content)
3. **Relevant applications**: Which of FX's applications solve this industry's problems, with links to application pages
4. **Recommended systems**: Which FX systems are typically used in this industry, with links to system pages
5. **Industry-specific challenges and solutions**: 3–4 items with detail
6. **Relevant project/case study** (placeholder)
7. **FAQ section**: 3–5 industry-specific questions with FAQPage schema
8. **Industry-specific testimonial** (placeholder with name, title, company)
9. **CTA section**: "Request a Free Consultation" primary, "View Projects in [Industry]" secondary

### Application Page Template (use for all 6 application pages)
1. **Application-specific headline** (e.g., "Anti-Slip Coating Systems for High-Risk Environments")
2. **What this application is and why it matters** (600–1,000 words total page content)
3. **Which industries need it**: Links to relevant industry pages
4. **Which FX systems deliver it**: Links to relevant system pages with brief explanation of why each system suits this application
5. **Project photos** showing this application installed (placeholders)
6. **FAQ section**: 3–5 questions about this application
7. **CTA section**: "Get a Site Assessment" primary, "Download Application Guide" secondary

### System Page Template (use for all 8 system pages)
1. **System name as headline** with benefit subtitle (e.g., "FX Shield — Maximum Chemical and Abrasion Resistance")
2. **What this system is** (600–800 words total page content)
3. **Performance features**: Chemical resistance, abrasion resistance, thermal cycling tolerance, UV stability, etc. — use a specs table or feature list
4. **Which industries and applications it serves**: Links to relevant industry and application pages
5. **Project photos** showing this system installed (placeholders)
6. **Technical specifications**: Thickness, cure time, temperature range, service life, applicable standards
7. **CTA section**: "Request Technical Data Sheet" primary, "See This System in Action" secondary

### Location/Service Area Page Template (use for all 12 city pages)
1. **City-specific headline** ("Industrial Coating Services in London, Ontario")
2. **300–500 words of unique content** about FX's services in that area — not copy-pasted across cities
3. **List of services/applications** available in this area with links
4. **Industries served in this area** with links to industry pages
5. **Relevant project** from this area or nearby (placeholder)
6. **Company credentials**: FX Coating description, certifications, contact info
7. **Business hours**
8. **Contact form or CTA** to request a quote
9. **Directory links** to other city pages (creates internal link network between location pages)
10. **CTA section**: "Get a Free Quote in [City]" primary, phone number prominent

### Project Page Template (use for all 3–5 sample projects)
1. **Descriptive title** ("Grain Elevator Floor Coating Restoration — Chatham, Ontario")
2. **Snapshot box**: Industry, location, FX system used, key metrics (sq ft, timeline)
3. **Before/after photos** (placeholders)
4. **Situation → Challenge → Solution → Results** narrative (500–800 words)
5. **Client quote** with full name, title, company (placeholder)
6. **Links to relevant service, industry, application, and system pages**
7. **CTA**: "Have a similar project?"

### Contact Page
1. **Headline**: "Get a Free Site Assessment"
2. **Phone number** prominently displayed with click-to-call
3. **Email address**
4. **Two-step form** (visual only — no backend needed):
   - Step 1: Name, Email, Company/Facility Name
   - Step 2: Project type (dropdown), Approximate scope, Timeline (dropdown), Phone (optional)
   - Button text: "Get My Free Quote" (never "Submit")
5. **Service area summary** listing all 12 cities
6. **Business hours**

### About Section Pages
- **Our Story**: Company history, family-owned positioning, values. Include the "numbers strip" metrics.
- **Our Team**: Team photos (placeholders) with names, roles, and brief bios. Show the people behind the work.
- **Safety & Quality**: Full certification details with credential numbers and verification links. SSPC, NACE, COR, WSIB compliance, manufacturer certifications (Sika, Tremco, Tnemec where applicable). This is a standalone trust page following Morin Industrial's QA/QC and HSE model.

### Blog Hub
- Placeholder page with "Coming Soon" messaging
- List 3–5 planned article titles to signal intent:
  - "Floor Coatings for Food Processing Plants: What Meets CFIA Standards"
  - "Industrial Epoxy Flooring Cost Guide for Ontario Facilities"
  - "How to Protect Grain Elevator Walls from Moisture and Corrosion"
  - "Epoxy vs Urethane vs Polyaspartic: Choosing the Right System"
  - "Surface Preparation Standards: SSPC-SP13/NACE 6 Explained"

---

## Content Depth Requirements

Every page must contain substantive, unique content. Thin pages with under 200 words of generic copy do not rank.

| Page Type              | Minimum Word Count | Key Content Requirements                                                       |
|------------------------|--------------------|--------------------------------------------------------------------------------|
| Industry page          | 800–1,200 words    | Industry context, problems FX solves, relevant systems/applications, FAQ       |
| Application page       | 600–1,000 words    | What the application is, which industries need it, which systems deliver it    |
| System/product page    | 600–800 words      | What it is, performance features, where it's used, technical specs, photos     |
| Location/city page     | 300–500 words      | Unique city-relevant content, services, credentials, contact info              |
| Project/case study     | 500–800 words      | Industry context, challenge, FX solution, system used, results                 |
| Blog/resource page     | 800–1,500 words    | Educational content answering specific buyer questions                          |

---

## SEO & Schema Requirements

### On Every Page
- Unique `<title>` tag: `[Primary Keyword] | FX Coating Ltd.` (under 60 characters)
- Unique `<meta name="description">` — 150–160 characters, includes primary keyword and location where relevant
- Self-referencing `<link rel="canonical">`
- Open Graph tags: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
- Breadcrumb markup in the `<head>` as JSON-LD (`BreadcrumbList` schema)
- One H1 tag per page containing the primary keyword
- Structured H2/H3 hierarchy
- Image alt text that describes what is shown, with keyword where natural

### Homepage Schema (JSON-LD in `<head>`)
```json
{
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "name": "FX Coating Ltd.",
  "url": "https://www.fxcoating.ca",
  "telephone": "+1-555-123-4567",
  "email": "info@fxcoating.ca",
  "areaServed": [
    {"@type": "City", "name": "London", "sameAs": "https://www.wikidata.org/wiki/Q22647"},
    {"@type": "City", "name": "Kitchener", "sameAs": "https://www.wikidata.org/wiki/Q200166"},
    {"@type": "City", "name": "Hamilton", "sameAs": "https://www.wikidata.org/wiki/Q2921676"},
    {"@type": "City", "name": "Guelph", "sameAs": "https://www.wikidata.org/wiki/Q504114"},
    {"@type": "City", "name": "Windsor", "sameAs": "https://www.wikidata.org/wiki/Q182221"},
    {"@type": "City", "name": "Cambridge", "sameAs": "https://www.wikidata.org/wiki/Q1026990"},
    {"@type": "City", "name": "Brantford", "sameAs": "https://www.wikidata.org/wiki/Q164304"},
    {"@type": "City", "name": "Sarnia", "sameAs": "https://www.wikidata.org/wiki/Q730121"},
    {"@type": "City", "name": "Woodstock", "sameAs": "https://www.wikidata.org/wiki/Q1018022"},
    {"@type": "City", "name": "Stratford", "sameAs": "https://www.wikidata.org/wiki/Q1018019"},
    {"@type": "City", "name": "St. Thomas", "sameAs": "https://www.wikidata.org/wiki/Q1025498"},
    {"@type": "City", "name": "Chatham-Kent", "sameAs": "https://www.wikidata.org/wiki/Q668925"}
  ],
  "description": "Industrial epoxy flooring, concrete surface preparation, protective coatings, and tank linings for facilities across Southwestern Ontario.",
  "sameAs": []
}
```

### Service/System Page Schema
Each system and application page gets `Service` schema with `name`, `provider` (linking to LocalBusiness), `serviceType`, `areaServed`, and `description`.

### FAQ Schema
Every industry, application, and system page with an FAQ section gets `FAQPage` schema in JSON-LD.

---

## Internal Linking Rules

The four content axes (Industries, Applications, Systems, Projects) form a cross-referencing web. Every link uses descriptive anchor text — never "click here" or "learn more."

### Linking Direction Map

| From Page Type   | Must Link To                                                                 |
|------------------|------------------------------------------------------------------------------|
| Industry page    | Relevant application pages + relevant system pages + relevant projects       |
| Application page | Industries that need it + systems that deliver it + relevant projects         |
| System page      | Applications where it's used + industries where it's installed + projects     |
| Project page     | The industry, application, system, and location page relevant to that project |
| Location page    | All services/applications available + industries served in that area          |
| Blog/resource    | Relevant industry, application, and system pages (these are the money pages) |

Every page should contain 3–5 contextual internal links minimum. This cross-referencing web is the core SEO engine of the site — it concentrates authority on the pages most likely to rank and helps Google understand the relationships between content.

---

## NAP Consistency

Every page with contact information must use the exact same business name, address, and phone format. This must match the Google Business Profile listing exactly.

```
FX Coating Ltd.
[Full street address]
[City, Province, Postal Code]
Phone: [consistent format]
Email: [consistent format]
```

---

## Performance Requirements

- All images use `loading="lazy"` except the hero image which gets `fetchpriority="high"`
- All images have explicit `width` and `height` attributes
- Use real images from `/images/` throughout the site. Only fall back to placeholder `div` elements when no suitable photo exists for a page.
- CSS should be in one file, loaded in `<head>`
- JS should be minimal and loaded with `defer` attribute
- No external dependencies beyond Google Fonts
- Target: would pass Core Web Vitals if real images were optimized (structure the HTML/CSS for it)

---

## Trust Signals (Display on Every Page)

### Certifications and Standards
Display these prominently — not buried in footer text:
- SSPC-SP13/NACE 6 compliant surface preparation
- Full insurance coverage and WSIB Certificate
- FDA and CFIA approved systems (on food & beverage pages)
- Tnemec certified applicator (where applicable)
- COR certification

### Company Credentials
- Family-owned and operated since 2005
- Southwestern Ontario based
- Turn-key surface modification services
- Trained specialists with practical supervisor training

### Testimonials
- Place industry-specific testimonials on corresponding industry pages
- Always include full name, title, and company — never anonymous quotes
- Testimonials must be specific about what was done and the outcome

---

## Form Behavior (Frontend Only)

The contact form is visual/UI only — no backend. On "submit":
- Show a success message: "Thanks! We'll be in touch within 1 business day."
- Use JS to toggle between step 1, step 2, and success state
- No actual form submission, no action attribute needed

---

## Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px–1199px
- Mobile: below 768px
- Navigation collapses to hamburger at tablet breakpoint
- All CTAs become full-width on mobile
- Sticky mobile header with phone + quote button

---

## File Naming Conventions

- All lowercase
- Hyphens for spaces (no underscores, no camelCase)
- HTML files named to match the URL structure above
- CSS: `main.css` (primary), `reset.css` (optional normalize)
- JS: `main.js`

---

## What NOT to Build

- No CMS or database
- No backend / server
- No contact form backend (visual only)
- No blog posts (just the hub page with planned titles)
- No animations beyond basic hover states and mobile nav toggle
- No cookie banners or popups
- No chat widgets
- No image carousel/slider libraries — use simple CSS grid for galleries
- No Industry × Application intersection pages yet (Phase 2 — only when real content exists)

---

## Reference Material

The `/images/` folder contains real project and site photos from the Webflow export. **Use these actual images throughout the site instead of gray placeholder boxes.** Look through the images folder, match photos to the appropriate pages based on filenames, and use real `<img>` tags pointing to the correct files. Keep lazy loading on all images except the hero.

The `/cms-exports/` folder contains CSV files with real content exported from the existing Webflow CMS. Use this content to populate pages where applicable — project descriptions, service details, team info, etc. Fill gaps with realistic placeholder content that matches the tone and industry.

The existing Webflow export (HTML/CSS/JS files in the root) can be used as **design reference only** — do not copy Webflow's generated code. Build fresh, clean, semantic HTML.

---

## Build Order (Suggested)

1. Set up file/folder structure (all directories and empty HTML files)
2. Build the shared components: header (with nav + utility bar), footer, breadcrumbs
3. Build the homepage
4. Build one industry page as the template, then replicate for the other 4 — **industries are the foundation everything links to**
5. Build one system page as the template, then replicate for the other 7
6. Build one application page as the template, then replicate for the other 5
7. Build the contact page with the two-step form UI
8. Build the projects gallery and 3–5 sample project pages
9. Build location/service area pages (all 12)
10. Build the about section pages (Our Story, Our Team, Safety & Quality)
11. Build the blog hub placeholder with planned article titles
12. Add schema markup to all pages (LocalBusiness, Service, FAQPage, BreadcrumbList)
13. Add the HTML sitemap page
14. Final pass: verify all internal cross-links between industries ↔ applications ↔ systems ↔ projects, check all meta tags, test responsive behavior
