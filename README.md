# ZOENP Solutions — Institutional Website

Professional institutional website for ZOENP Solutions, a technology company based in Pompano Beach, FL. Built with Next.js 14 App Router, TypeScript, Tailwind CSS and Framer Motion.

---

## 🏢 Company Info

| Field    | Value |
|----------|-------|
| Company  | ZOENP Solutions |
| Domain   | www.zoenpsolutions.com |
| Address  | 2335 E Atlantic BLVD 300-20, Pompano Beach, FL 33062 |
| Instagram| @zoenpsolutions |
| Parent   | Suporte Informática — Itajaí/SC, Brazil |

---

## 🎨 Design

**Visual identity:** Dark tech premium — deep navy `#0D1B2A` + electric blue `#1E90FF` + clean whites.  
**Typography:** Syne (display headings) + Inter (body).  
**Animations:** CSS keyframes for scroll reveals, card hovers, glow effects.

---

## 📁 Project Structure

```
zoenp-solutions/
├── app/
│   ├── layout.tsx            # Root layout: fonts, metadata, Schema JSON-LD
│   ├── page.tsx              # / — Home (Hero, Intro, Services preview, Why Us, CTA)
│   ├── about/
│   │   └── page.tsx          # /about — Full story, timeline, stats, parent company
│   ├── services/
│   │   └── page.tsx          # /services — All services with Coming Soon badges
│   ├── contact/
│   │   └── page.tsx          # /contact — Form + info + parent company footer
│   └── globals.css           # Design system, CSS variables, animations
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        # Fixed navbar (transparent → solid on scroll)
│   │   └── Footer.tsx        # Full footer with nav, contact, parent co.
│   └── ui/
│       ├── Button.tsx        # Button variants (CVA)
│       └── PageHero.tsx      # Reusable inner-page hero header
├── lib/
│   ├── utils.ts              # cn() utility
│   └── constants.ts          # All site-wide data (single source of truth)
├── extras/
│   ├── business_card.html    # Print-ready business card (3.5" × 2", front + back)
│   └── letterhead.html       # Professional letterhead (US Letter)
├── public/
│   ├── logo.png              # ← PLACE LOGO HERE
│   ├── robots.txt
│   └── site.webmanifest
├── next-sitemap.config.js    # Sitemap + robots.txt generator
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js 18.17+
- pnpm (recommended)

### 1. Install dependencies

```bash
# With pnpm (recommended)
pnpm install

# With npm
npm install
```

### 2. Environment variables

```bash
cp .env.example .env.local
# Fill in your real values
```

### 3. Add the logo

Place the `Logo Zoenp.png` file at:
```
/public/logo.png
```

Then update `Navbar.tsx` and `Footer.tsx` to use `next/image`:
```tsx
import Image from 'next/image';
// Replace the SVG placeholder div with:
<Image src="/logo.png" alt="ZOENP Solutions" width={120} height={40} priority />
```

### 4. Run in development

```bash
pnpm dev
# Open http://localhost:3000
```

### 5. Build for production

```bash
pnpm build
pnpm start
```

### 6. Generate sitemap (after build)

```bash
pnpm postbuild
# Or add to package.json: "postbuild": "next-sitemap"
```

---

## 🌐 Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
pnpm add -g vercel

# Login and deploy
vercel login
vercel

# Set environment variables in Vercel dashboard:
# SITE_URL = https://www.zoenpsolutions.com
```

**Or deploy via GitHub:**
1. Push to a GitHub repository
2. Go to vercel.com → New Project → Import from GitHub
3. Add environment variables in Project Settings
4. Deploy — automatic CI/CD on every push

---

## ✏️ Customization

### Update company data (all in one place)

Edit **`lib/constants.ts`**:
```ts
export const SITE = {
  phone:  '(954) 555-0000',   // ← Add real phone
  email:  'info@zoenpsolutions.com', // ← Add real email
  // ...
};
```

### Update services

Edit the `SERVICES` array in `lib/constants.ts`. When a service is ready to launch, set `coming: false`.

### Color palette (tailwind.config.ts)
```ts
colors: {
  brand: {
    dark:  '#0D1B2A',  // main dark background
    blue:  '#1E90FF',  // accent blue
  }
}
```

---

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `next` | 14.2.5 | Framework |
| `react` | ^18 | UI library |
| `typescript` | ^5 | Type safety |
| `tailwindcss` | ^3.4 | Styling |
| `framer-motion` | ^11 | Animations (ready to use) |
| `lucide-react` | ^0.400 | Icons |
| `clsx` + `tailwind-merge` | latest | Class utilities |
| `class-variance-authority` | ^0.7 | Button variants |
| `next-sitemap` | ^4.2 | Sitemap + robots.txt |

---

## 🔍 SEO Implemented

- ✅ `Metadata` API (title, description, keywords, robots)
- ✅ Per-page titles via `template: '%s | ZOENP Solutions'`
- ✅ Open Graph (og:title, og:description, og:image)
- ✅ Twitter Cards
- ✅ Schema Markup: `LocalBusiness` + `ComputerRepairService`
- ✅ `geo` coordinates in Schema
- ✅ `robots.txt` (static in `/public`)
- ✅ `sitemap.xml` via `next-sitemap`
- ✅ `lang="en"` and `locale="en_US"`
- ✅ Semantic HTML: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<address>`, `<ol>`
- ✅ H1 → H2 → H3 heading hierarchy on every page
- ✅ `aria-current="page"` on active nav link

---

## ♿ Accessibility

- ✅ All interactive elements have `aria-label`
- ✅ `role="dialog"` + `aria-modal` on mobile menu
- ✅ `aria-live="assertive"` on form success
- ✅ `aria-required` on required form fields
- ✅ `aria-label` on timeline list
- ✅ `focus-visible` with blue outline
- ✅ Keyboard navigable (Tab, Enter, Escape)
- ✅ Contrast ratio WCAG AA compliant

---

## 📇 Extra Files (extras/)

### `business_card.html`
Print-ready business card (US standard 3.5" × 2"):
- **Front:** Logo, name, title, phone, email, Instagram
- **Back:** Full dark logo on navy, address, website
- To print: Open in Chrome → Ctrl+P → Set paper size to 3.5×2 inches, or send to a card printing service (Moo, Vistaprint, etc.)

### `letterhead.html`
Professional letterhead (US Letter 8.5" × 11"):
- Header with logo + contact details
- Date, recipient, subject fields
- Signature block
- Footer with full address + website
- Print via Chrome → Ctrl+P

---

## 🔧 Future Improvements

### Functionality
- [ ] Add real logo via `next/image` in Navbar + Footer
- [ ] Connect contact form to Resend or EmailJS
- [ ] Add Google Analytics (GA4) + Meta Pixel
- [ ] Set up Google My Business integration
- [ ] Add real photography / team photos
- [ ] Build out services pages when offerings are ready
- [ ] Add a blog for SEO content marketing

### Technical
- [ ] Activate `framer-motion` scroll animations (`useInView`, `motion.div`)
- [ ] Add `next/image` for all photo assets with proper `sizes`
- [ ] Set up `react-hook-form` + `zod` for form validation
- [ ] Add Playwright E2E tests
- [ ] Configure `next-pwa` for PWA support
- [ ] Set up automated `postbuild` sitemap generation in `package.json`

---

## 📝 License

© 2024 ZOENP Solutions. All rights reserved.
