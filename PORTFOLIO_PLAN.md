# Portfolio Redesign Plan

## Overview

A modern, minimalist developer portfolio with rich interactions using the current theme colors (dark blue primary with light/dark mode support) and React Bits components for memorable visual effects.

## Tech Stack

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with CSS variables (current theme)
- **Animations**: Framer Motion + React Bits components
- **UI Components**: shadcn/ui + React Bits

---

## Sections Structure

### 1. Hero Section

**Purpose**: Strong first impression with your name, title, and a compelling tagline.

**Layout**:
- Full viewport height, split layout (text left, image right) or centered with image background
- Hero image: `src/assets/hero.jpg` or `src/assets/hero.png` (your profile/avatar photo)
- Large typography (name + role)
- Brief tagline/intro text
- CTA buttons (View Projects / Contact)
- Social links

**Hero Image Options**:
1. **Split layout**: Text content on left, hero image on right with mask/clip-path effect
2. **Background overlay**: Hero image as subtle background with dark overlay + LightRays on top
3. **Floating avatar**: Circular/rounded hero image floating with animation beside text

**Effects**:
- `LightRays` background effect (already installed)
- `BlurText` or `SplitText` for animated name reveal
- Hero image with `TiltedCard` or floating animation
- Subtle scroll indicator at bottom

**React Bits to install**:
```bash
npx shadcn@latest add @react-bits/BlurText-TS-TW
npx shadcn@latest add @react-bits/SplitText-TS-TW
```

---

### 2. Skills Section

**Purpose**: Showcase technical expertise in a visually engaging way.

**Layout**:
- Section title with text animation
- Grid of skill categories (Frontend, Backend, Tools, etc.)
- Each skill as an interactive card/badge

**Effects**:
- `Magnet` effect on skill cards (hover attraction)
- `TiltedCard` for 3D perspective on hover
- Staggered fade-in animations on scroll

**React Bits to install**:
```bash
npx shadcn@latest add @react-bits/Magnet-TS-TW
npx shadcn@latest add @react-bits/TiltedCard-TS-TW
npx shadcn@latest add @react-bits/FadeContent-TS-TW
```

---

### 3. Projects Section

**Purpose**: Showcase your best work with detailed project cards.

**Layout**:
- Section title
- Project grid (2-3 columns on desktop, 1 on mobile)
- Each project card with:
  - Image/thumbnail
  - Title
  - Tech stack badges
  - Brief description
  - Links (Live demo / GitHub)

**Effects**:
- `SpotlightCard` for project cards with cursor-following spotlight
- `ImageTrail` for creative hover effects on project images
- `AnimatedList` for staggered project reveal

**React Bits to install**:
```bash
npx shadcn@latest add @react-bits/SpotlightCard-TS-TW
npx shadcn@latest add @react-bits/AnimatedList-TS-TW
```

---

### 4. Experience Section

**Purpose**: Professional timeline showcasing work history and education.

**Layout**:
- Vertical timeline design
- Each entry with:
  - Company/Institution name
  - Role/Degree
  - Date range
  - Key achievements/description

**Effects**:
- `ScrollReveal` for progressive reveal on scroll
- `Counter` for any stats/numbers
- Accordion component for expandable details

**React Bits to install**:
```bash
npx shadcn@latest add @react-bits/ScrollReveal-TS-TW
npx shadcn@latest add @react-bits/CountUp-TS-TW
```

---

### 5. Contact Section

**Purpose**: Easy way for visitors to get in touch.

**Layout**:
- Section title
- Contact info (email, location)
- Social links with icons
- Optional: Contact form or "Let's work together" CTA

**Effects**:
- `ClickSpark` (already installed) on submit button
- `ShinyText` or `GradientText` for email highlight
- Hover animations on social icons

**React Bits to install**:
```bash
npx shadcn@latest add @react-bits/ShinyText-TS-TW
npx shadcn@latest add @react-bits/GradientText-TS-TW
```

---

## Navigation

**Layout**:
- Fixed header with blur backdrop
- Logo/Name on left
- Nav links on right (Home, Skills, Projects, Experience, Contact)
- Mobile: Hamburger menu with slide-out navigation
- Theme toggle (light/dark)

**Effects**:
- Hide on scroll down, show on scroll up
- `Dock` component for a macOS-style dock navigation (alternative)

**React Bits to install (optional)**:
```bash
npx shadcn@latest add @react-bits/Dock-TS-TW
```

---

## Global Effects

### Click Spark
- Already installed
- Apply globally for all clickable elements or specific buttons

### Cursor Effects (Optional)
```bash
npx shadcn@latest add @react-bits/BlobCursor-TS-TW
npx shadcn@latest add @react-bits/SplashCursor-TS-TW
```

### Smooth Scrolling
- Already configured in CSS
- Add scroll progress indicator in header

---

## Color Theme

Using current CSS variables (no changes needed):

**Light Mode**:
- Background: White (#ffffff)
- Foreground: Dark blue (#0a0f1a)
- Primary: Dark blue
- Muted: Light gray

**Dark Mode**:
- Background: Deep blue (#0a0f1a)
- Foreground: Light (#f8fafc)
- Primary: Light
- Muted: Dark gray

**Accent Ideas** (optional enhancement):
- Cyan (#00ffff) - already used in LightRays demo
- Keep consistent with current theme

---

## File Structure

```
src/
├── components/
│   ├── ui/                    # shadcn components
│   ├── react-bits/            # React Bits components
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Skills.tsx
│       ├── Projects.tsx
│       ├── Experience.tsx
│       └── Contact.tsx
├── data/
│   ├── projects.ts            # Project data
│   ├── skills.ts              # Skills data
│   └── experience.ts          # Experience/timeline data
├── hooks/
│   └── useScrollDirection.ts
├── lib/
│   └── utils.ts
├── App.tsx
├── main.tsx
└── index.css
```

---

## Implementation Order

1. **Setup Layout**
   - Create Header component with navigation
   - Create basic section containers
   - Setup smooth scroll navigation

2. **Hero Section**
   - Implement LightRays background
   - Add animated typography (BlurText/SplitText)
   - Add CTA buttons and social links

3. **Skills Section**
   - Create skills data file
   - Build skill card grid
   - Add Magnet/TiltedCard effects

4. **Projects Section**
   - Create projects data file
   - Build project card component
   - Add SpotlightCard effects

5. **Experience Section**
   - Create experience data file
   - Build timeline component
   - Add scroll reveal animations

6. **Contact Section**
   - Build contact layout
   - Add social links
   - Apply ClickSpark to interactions

7. **Polish**
   - Add global cursor effects (optional)
   - Fine-tune animations
   - Mobile responsiveness
   - Performance optimization

---

## React Bits Installation Summary

**Essential (install first)**:
```bash
# Text animations
npx shadcn@latest add @react-bits/BlurText-TS-TW
npx shadcn@latest add @react-bits/SplitText-TS-TW

# Card effects
npx shadcn@latest add @react-bits/SpotlightCard-TS-TW
npx shadcn@latest add @react-bits/TiltedCard-TS-TW

# Scroll/reveal
npx shadcn@latest add @react-bits/FadeContent-TS-TW
npx shadcn@latest add @react-bits/ScrollReveal-TS-TW

# Interactive
npx shadcn@latest add @react-bits/Magnet-TS-TW
```

**Nice to have**:
```bash
npx shadcn@latest add @react-bits/CountUp-TS-TW
npx shadcn@latest add @react-bits/ShinyText-TS-TW
npx shadcn@latest add @react-bits/GradientText-TS-TW
npx shadcn@latest add @react-bits/AnimatedList-TS-TW
npx shadcn@latest add @react-bits/Dock-TS-TW
```

**Already installed**:
- LightRays
- ClickSpark
- LetterGlitch
- Accordion (shadcn)
- Avatar (shadcn)
- Button (shadcn)
- Card (shadcn)
- Sonner (shadcn)

---

## Design Principles

1. **Minimalism**: Clean layouts with generous whitespace
2. **Typography-first**: Large, bold headings as visual anchors
3. **Purposeful animation**: Effects enhance UX, not distract
4. **Performance**: Lazy load heavy components, optimize images
5. **Accessibility**: Keyboard navigation, focus states, reduced motion support
6. **Mobile-first**: Responsive design starting from mobile

---

## References

- [Portfolio Design Trends 2025](https://colorlib.com/wp/portfolio-design-trends/)
- [Web Design Trends 2026](https://elementor.com/blog/web-design-trends-2026/)
- [Minimalist Web Design Trends](https://www.digitalsilk.com/digital-trends/minimalist-web-design-trends/)
- [Best Developer Portfolio Examples](https://elementor.com/blog/best-web-developer-portfolio-examples/)
- [React Bits Components](https://www.reactbits.dev/)