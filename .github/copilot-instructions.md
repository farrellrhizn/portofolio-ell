# Copilot Instructions - Portfolio Website

## Project Overview
Professional portfolio website built with **React 19.1.1**, **TypeScript 5.9.3**, and **Tailwind CSS v4.1.16**. Features elegant black-purple theme with 3D animations, cursor-following glow effects, and scroll reveal animations.

## Tech Stack
- **Build Tool**: Vite 7.1.7
- **Routing**: React Router DOM 7.9.5
- **Styling**: Tailwind CSS v4 via `@tailwindcss/postcss` (PostCSS-based, **NO tailwind.config.js**)
- **Animations**: `lottie-react` 2.4.1 for Lottie animations
- **Linting**: ESLint 9 with TypeScript support (`typescript-eslint`)

## Critical Architecture Patterns

### 1. Tailwind CSS v4 Configuration
**⚠️ IMPORTANT**: This project uses Tailwind v4 which has a fundamentally different configuration approach:
- **DO NOT** create or modify `tailwind.config.js` - it's not used in v4
- All configuration lives in `src/index.css` inside the `@theme` block
- Custom colors, shadows, and animations are defined with CSS custom properties

Example from `src/index.css`:
```css
@theme {
  --color-brand-purple: #7c3aed;
  --color-bg-900: #05060a;
  --color-card-900: #0b1220;
  --color-slate-800: #1e293b;
  --shadow-glow-purple: 0 8px 40px rgba(124,58,237,0.14);
}
```

Usage in components:
```tsx
<div className="bg-brand-purple text-slate-300 shadow-glow-purple" />
```

### 2. Scroll Reveal Animation Pattern
All sections use the custom `useScrollReveal` hook for fade-in animations on scroll:

**Hook**: `src/hooks/useScrollReveal.ts`
```typescript
export function useScrollReveal(itemCount: number) {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const itemRefs = useRef<(HTMLElement | null)[]>([])
  // Intersection Observer with threshold: 0.2, rootMargin: -100px
  return { visibleItems, itemRefs }
}
```

**Usage Pattern** (in every section component):
```tsx
const { visibleItems, itemRefs } = useScrollReveal(items.length)

items.map((item, index) => (
  <div
    key={index}
    ref={(el) => { itemRefs.current[index] = el }}
    className={`transition-all duration-700 ${
      visibleItems.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}
    style={{ transitionDelay: `${index * 150}ms` }} // Stagger animation
  />
))
```

### 3. Cursor-Following Glow Effect
Implemented via `CardWithCursorGlow.tsx` component using CSS custom properties:

```tsx
<div
  onMouseMove={handleMouseMove}
  style={{
    '--mouse-x': `${mousePosition.x}px`,
    '--mouse-y': `${mousePosition.y}px`,
  }}
>
  <div className="glow-border" style={{
    background: `radial-gradient(600px at var(--mouse-x) var(--mouse-y), rgba(124,58,237,0.15), transparent 40%)`
  }} />
</div>
```

### 4. Smooth Scroll Navigation
All navigation links use `handleNavClick` function with 80px offset to account for fixed header:

```typescript
const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
  e.preventDefault()
  const element = document.querySelector(targetId)
  if (element) {
    const offset = 80 // Fixed header height
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
  }
}
```

## Component Structure

### Page Layout (`src/pages/Home.tsx`)
Section order:
1. `Header` (fixed navigation)
2. `Hero` (full-screen with Lottie animation)
3. `About` (personal info + mini cards)
4. `Experience` (timeline with company logos)
5. `Certificates` (4 certificates with click-to-view)
6. `Projects` (grid of project cards)
7. `Skills` (skill badges)
8. `Playlist` (Spotify embed)
9. `Contact` (contact form)
10. `Footer` (social links)

### Custom CSS Classes (in `src/index.css`)
- `.tilt-card`: Hover lift effect (`translateY(-4px) scale(1.02)`)
- `.card-glow::before`: Top gradient overlay
- `.card-bottom-glow::after`: Bottom shadow with blur
- `.animate-glow-slow`: Pulsing glow animation (3.5s)

### Asset Organization
```
src/assets/
├── logos/          # Company logos (otakkanan.jpg, RevoU.png)
├── img/            # Project images + 4 certificate images
└── animation/      # WaveLoop.json (Lottie animation)
```

## Development Workflow

### Commands
```bash
npm run dev        # Start dev server (Vite)
npm run build      # TypeScript check + Vite build
npm run lint       # ESLint check
npm run preview    # Preview production build
```

### Adding New Sections
1. Create component in `src/components/`
2. Import `useScrollReveal` and `CardWithCursorGlow`
3. Implement scroll reveal pattern (see examples above)
4. Add section to `Home.tsx` with `id` attribute for navigation
5. Update `Header.tsx` navigation links if needed

### Styling Guidelines
- **Primary color**: `brand-purple` (#7c3aed)
- **Background colors**: `bg-900` (#05060a), `card-900` (#0b1220)
- **Text colors**: `white` for headings, `slate-300` for body text
- **Borders**: `slate-800/20` default, `brand-purple/30` on hover
- **Hover effects**: Remove rotation (no 3D tilt rotation), use `translateY` + `scale`
- **Animation duration**: 700ms for scroll reveals, 300-500ms for hovers

### TypeScript Patterns
- Strict mode enabled (`tsconfig.json`)
- Interface definitions for data structures (see `src/types.ts`)
- Type-safe event handlers: `React.MouseEvent<HTMLAnchorElement>`
- Proper ref typing: `useRef<HTMLDivElement>(null)`

## Common Issues & Solutions

### Issue: Tailwind classes not working
**Solution**: Ensure classes are defined in `@theme` block in `src/index.css`, NOT in a config file.

### Issue: Section not visible on scroll
**Solution**: Check `useScrollReveal` implementation - ensure `itemRefs.current[index]` is properly assigned and `visibleItems.has(index)` is used correctly.

### Issue: Smooth scroll not working
**Solution**: Use `handleNavClick` function with 80px offset, not plain `href` links.

### Issue: Border glow not following cursor
**Solution**: Wrap component with `CardWithCursorGlow` and ensure `onMouseMove` handler is not overridden.

## External Integrations
- **Spotify Embed**: Playlist ID `1fAaXy8LitQFZ7lvBts4fi` (in `Playlist.tsx`)
- **Lottie Animation**: `WaveLoop.json` in Hero section (opacity: 20%, scale: 150%)
- **Email Contact**: `mailto:farrellabrar01@gmail.com` in Footer

## Code Quality Standards
- ESLint: No warnings/errors (`eslint.config.js` with React hooks plugin)
- TypeScript: Strict mode, no `any` types
- Accessibility: Semantic HTML, `aria-label` on icon buttons
- Performance: Lazy loading for heavy components, optimized Intersection Observer usage

## Future Development Guidelines
- Keep scroll reveal animations consistent (700ms duration, 150ms stagger)
- Maintain black-purple theme consistency
- Test all navigation links with smooth scroll
- Ensure mobile responsiveness (Tailwind breakpoints: `sm:`, `md:`, `lg:`)
- Add new colors/shadows to `@theme` block, not inline styles
