# CLAUDE.md — FX Coating Website Build

## Project Overview

Build a static, multi-page website for **FX Coating Ltd.** — an industrial coating contractor serving Southwestern Ontario. The company specializes in epoxy flooring, concrete surface preparation, protective coatings, and tank/vessel linings for grain elevators, wastewater facilities, food processing plants, and manufacturing facilities.

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

The site follows a **flat-but-semantically-organized** structure. Every important page sits within 3 clicks of the homepage.

### Pages to Build (Launch Set — ~25 pages)

```
/index.html                                  ← Homepage
/services/index.html                         ← Services hub
/services/epoxy-flooring-systems.html        ← Service page
/services/concrete-surface-preparation.html  ← Service page
/services/protective-coatings.html           ← Service page
/services/tank-vessel-linings.html           ← Service page
/industries/index.html                       ← Industries hub
/industries/grain-elevators-agriculture.html ← Industry page
/industries/wastewater-treatment.html        ← Industry page
/industries/food-processing.html             ← Industry page
/industries/manufacturing.html               ← Industry page
/projects/index.html                         ← Project gallery
/projects/sample-project-1.html             ← Individual project (create 3 sample projects)
/projects/sample-project-2.html
/projects/sample-project-3.html
/service-areas/index.html                    ← Service areas hub
/service-areas/london-ontario.html           ← Location page
/service-areas/kitchener-waterloo.html       ← Location page
/service-areas/hamilton-ontario.html         ← Location page
/about/index.html                            ← About overview
/about/our-story.html
/about/our-team.html
/about/safety-quality.html
/blog/index.html                             ← Blog hub
/contact.html                                ← Contact / Get a Quote
/privacy-policy.html
/sitemap.html                                ← HTML sitemap
```

---

## Navigation Structure

### Main Navigation (persistent header on every page)

| Nav Item    | Type       | Links To                                                  |
|-------------|------------|-----------------------------------------------------------|
| Services    | Dropdown   | Epoxy Flooring · Concrete Surface Prep · Protective Coatings · Tank & Vessel Linings |
| Industries  | Dropdown   | Grain Elevators · Wastewater · Food Processing · Manufacturing |
| Projects    | Link       | /projects/                                                |
| About       | Dropdown   | Our Story · Our Team · Safety & Quality · Service Area    |
| Resources   | Link       | /blog/                                                    |
| Contact     | CTA Button | /contact.html — styled as a button, not a text link       |

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
Use CSS custom properties (`var(--color-name)`) defined in `:root`:
- **Primary dark**: Deep charcoal/near-black for headers and text — `#1a1a2e` or similar
- **Primary accent**: Bold industrial color (deep orange, safety yellow, or bold blue — pick one that reads "industrial" not "tech startup")
- **Secondary accent**: Muted complement for hover states and secondary elements
- **Neutral light**: Off-white/warm gray for backgrounds — not pure white
- **Neutral mid**: Medium gray for borders, dividers, secondary text
- **Success/CTA**: High-contrast color for all call-to-action buttons

### Typography
- **Headings**: A bold, industrial-feeling display font from Google Fonts — something with character and weight. NOT Inter, Roboto, or Arial.
- **Body**: A clean, highly readable sans-serif that pairs well with the display font
- Use `font-display: swap` on all font loads

### Key Visual Elements
- **Certification badges** displayed in the header area or immediately below the hero on every page (SSPC, NACE, COR, WSIB, manufacturer logos — use placeholder badge icons for now)
- **Numbers strip**: "XX Years Experience | XX+ Projects Completed | XX+ Facilities Served | XXX,000+ Sq Ft Coated" — displayed prominently on homepage
- **Before/after project photography** placeholders — use solid colored placeholder boxes with labels like "[Before Photo]" and "[After Photo]" at correct aspect ratios (16:9 or 4:3)
- All placeholder images should be gray boxes with descriptive text, not broken image icons

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
2. **Services overview**: Grid/cards linking to each service page with brief description
3. **Numbers strip**: Key metrics in a horizontal bar
4. **Industries served**: Visual grid linking to industry pages
5. **Featured project**: One project highlight with before/after placeholder and brief narrative
6. **Testimonial**: Client quote with name, title, company (use placeholder)
7. **Service area map section**: Text listing of cities served with link to service areas hub
8. **Final CTA**: "Get a Free Site Assessment" with phone number and link to contact form

### Service Page Template (use for all 4 service pages)
1. **Benefit-driven headline** — not just the service name (e.g., "Durable Epoxy Flooring for High-Traffic Industrial Facilities")
2. **2–3 sentence overview** of the service and who it's for
3. **3 value propositions** as cards/columns addressing client pain points
4. **Process overview** with numbered steps and placeholder photos
5. **Specifications/technical details** section (coating systems, thickness, cure times — use realistic placeholder content)
6. **Project photo/case study snippet** from a relevant completed job (placeholder)
7. **FAQ section** with 3–5 questions (accordion/collapsible)
8. **Client testimonial** specific to that service (placeholder)
9. **CTA section**: "Get a Free Site Assessment" with phone and form link

### Industry Page Template (use for all 4 industry pages)
1. **Industry-specific headline** (e.g., "Protective Coatings for Grain Elevators & Agricultural Facilities")
2. **Overview**: Pain points specific to that industry
3. **Relevant services**: Which of FX Coating's services apply, with links to service pages
4. **Industry-specific challenges and solutions**: 3–4 items
5. **Relevant project/case study** (placeholder)
6. **FAQ section**: 3–5 industry-specific questions
7. **CTA section**

### Location/Service Area Page Template
1. **City-specific headline** ("Industrial Coating Services in London, Ontario")
2. **Brief overview** of services available in this area
3. **List of services** with links to service pages
4. **Industries served in this area** with links
5. **Relevant project** from this area (placeholder)
6. **CTA section**

### Project Page Template
1. **Descriptive title** ("Grain Elevator Floor Coating Restoration — Chatham, Ontario")
2. **Snapshot box**: Industry, location, coating system, key metrics
3. **Before/after photos** (placeholders)
4. **Situation → Challenge → Solution → Results** narrative
5. **Client quote** (placeholder)
6. **Link to relevant service page**
7. **CTA**: "Have a similar project?"

### Contact Page
1. **Headline**: "Get a Free Site Assessment"
2. **Phone number** prominently displayed with click-to-call
3. **Email address**
4. **Two-step form** (visual only — no backend needed):
   - Step 1: Name, Email, Company/Facility Name
   - Step 2: Project type (dropdown), Approximate scope, Timeline (dropdown), Phone (optional)
   - Button text: "Get My Free Quote" (never "Submit")
5. **Service area summary**
6. **Business hours**

---

## SEO & Schema Requirements

### On Every Page
- Unique `<title>` tag: "Page Name | FX Coating — Industrial Coating Contractors, Southwestern Ontario"
- Unique `<meta name="description">` — 150–160 characters, includes primary keyword and location
- Self-referencing `<link rel="canonical">`
- Open Graph tags: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
- Breadcrumb markup in the `<head>` as JSON-LD (`BreadcrumbList` schema)

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
    {"@type": "City", "name": "Hamilton", "sameAs": "https://www.wikidata.org/wiki/Q2921676"}
  ],
  "description": "Industrial epoxy flooring, concrete surface preparation, protective coatings, and tank linings for facilities across Southwestern Ontario.",
  "sameAs": []
}
```

### Service Page Schema
Each service page gets `Service` schema with `name`, `provider` (linking to LocalBusiness), `serviceType`, `areaServed`, and `description`.

### FAQ Schema
Every service and industry page with an FAQ section gets `FAQPage` schema in JSON-LD.

---

## Performance Requirements

- All images use `loading="lazy"` except the hero image which gets `fetchpriority="high"`
- All images have explicit `width` and `height` attributes
- Use placeholder `div` elements with background colors for demo images (no actual image files needed for the build)
- CSS should be in one file, loaded in `<head>`
- JS should be minimal and loaded with `defer` attribute
- No external dependencies beyond Google Fonts
- Target: would pass Core Web Vitals if real images were optimized (structure the HTML/CSS for it)

---

## Internal Linking Rules

- Every page has 3–5 internal links to related pages
- Use descriptive anchor text ("industrial epoxy flooring" not "click here")
- Service pages cross-link to related services and relevant industry pages
- Industry pages link to all relevant service pages
- Location pages link to services and industries
- Project pages link back to the relevant service page
- Blog hub exists as a placeholder (can be empty with "Coming Soon" messaging)

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
- No blog posts (just the hub page with "Coming Soon")
- No animations beyond basic hover states and mobile nav toggle
- No cookie banners or popups
- No chat widgets
- No image carousel/slider libraries — use simple CSS grid for galleries

---

## Reference Material

The `/cms-exports/` folder contains CSV files with real content exported from the existing Webflow CMS. Use this content to populate pages where applicable — project descriptions, service details, team info, etc. Fill gaps with realistic placeholder content that matches the tone and industry.

The existing Webflow export (HTML/CSS/JS files in the root) can be used as **design reference only** — do not copy Webflow's generated code. Build fresh, clean, semantic HTML.

---

## Build Order (Suggested)

1. Set up file/folder structure
2. Build the shared components: header (with nav + utility bar), footer, breadcrumbs
3. Build the homepage
4. Build one service page as the template, then replicate for the other 3
5. Build one industry page as the template, then replicate for the other 3
6. Build the contact page with the two-step form UI
7. Build the projects gallery and 3 sample project pages
8. Build the service area pages (3 at launch)
9. Build the about section pages
10. Build the blog hub placeholder
11. Add schema markup to all pages
12. Add the HTML sitemap page
13. Final pass: check all internal links, meta tags, responsive behavior
