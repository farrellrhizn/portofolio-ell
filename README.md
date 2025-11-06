# 🌟 Portfolio Website - Farrell Abrar Rhiznanda

A modern, elegant portfolio website showcasing my journey as a web developer. Built with cutting-edge technologies and featuring smooth animations, 3D effects, and an intuitive user experience.

[![React](https://img.shields.io/badge/React-19.1.1-61dafb?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4.1.16-38bdf8?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.1.7-646cff?logo=vite&logoColor=white)](https://vitejs.dev/)

## ✨ Features

- 🎨 **Modern Black-Purple Theme** - Elegant dark theme with vibrant purple accents
- 🌊 **Lottie Animations** - Smooth, high-quality animations using Lottie
- ✨ **Cursor Glow Effects** - Interactive border glow that follows your cursor
- 📜 **Scroll Reveal** - Beautiful fade-in animations as you scroll
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎯 **Type-Safe** - Written in TypeScript with strict mode enabled
- ♿ **Accessible** - Semantic HTML and ARIA labels for better accessibility

## 🚀 Tech Stack

### Core
- **React 19.1.1** - Modern React with latest features
- **TypeScript 5.9.3** - Type-safe development
- **Vite 7.1.7** - Next-generation frontend tooling

### Styling
- **Tailwind CSS v4** - Utility-first CSS framework (PostCSS-based, no config file needed)
- Custom theme with CSS variables in `@theme` block
- Custom animations and transitions

### Libraries
- **React Router DOM 7.9.5** - Client-side routing
- **Lottie React 2.4.1** - Lightweight animation library
- **ESLint 9** - Code quality and consistency

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/farrellrhizn/portofolio-ell.git
   cd portofolio-ell
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🛠️ Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📂 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation bar
│   ├── Hero.tsx        # Hero section with Lottie animation
│   ├── About.tsx       # About me section
│   ├── Experience.tsx  # Work experience timeline
│   ├── Certificates.tsx # Certificates showcase
│   ├── Projects.tsx    # Projects grid
│   ├── Skills.tsx      # Skills badges
│   ├── Playlist.tsx    # Spotify playlist embed
│   ├── Contact.tsx     # Contact section
│   ├── Footer.tsx      # Footer with social links
│   └── CardWithCursorGlow.tsx  # Cursor glow wrapper
├── hooks/
│   └── useScrollReveal.ts      # Scroll animation hook
├── pages/
│   ├── Home.tsx        # Main page layout
│   └── ProjectDetail.tsx # Project detail page
├── data/
│   └── projects.ts     # Projects data
├── assets/
│   ├── logos/          # Company logos
│   ├── img/            # Images and certificates
│   └── animation/      # Lottie animation files
├── types.ts            # TypeScript interfaces
├── index.css           # Global styles + Tailwind v4 config
└── main.tsx           # App entry point
```

## 🎨 Key Architecture Patterns

### Tailwind CSS v4
This project uses **Tailwind CSS v4** which uses a different configuration approach:
- ❌ No `tailwind.config.js` file
- ✅ All configuration in `src/index.css` inside `@theme` block
- ✅ CSS custom properties for colors, shadows, and animations

### Scroll Reveal Animation
Uses custom `useScrollReveal` hook with Intersection Observer:
```typescript
const { visibleItems, itemRefs } = useScrollReveal(items.length)
```

### Cursor Glow Effect
Interactive border glow using CSS custom properties:
```tsx
<CardWithCursorGlow>
  {/* Your content */}
</CardWithCursorGlow>
```

### Smooth Scroll Navigation
All navigation uses smooth scroll with 80px offset for fixed header.

## 🎯 Sections

1. **Hero** - Full-screen introduction with Lottie wave animation
2. **About** - Personal information with mini cards
3. **Experience** - Work history with timeline design
4. **Certificates** - Achievements and certifications
5. **Projects** - Featured projects with technologies used
6. **Skills** - Technical skills and tools
7. **Playlist** - Spotify playlist integration
8. **Contact** - Get in touch via Gmail
9. **Footer** - Social media links

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

The build output will be in the `dist/` folder, ready to deploy to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Farrell Abrar Rhiznanda**

- GitHub: [@farrellrhizn](https://github.com/farrellrhizn)
- LinkedIn: [farrell-rhiznanda](https://www.linkedin.com/in/farrell-rhiznanda-079b361b1/)
- Email: [farrellabrar18@gmail.com](mailto:farrellabrar18@gmail.com)

## 🙏 Acknowledgments

- Lottie animations for beautiful motion graphics
- Tailwind CSS v4 for the amazing utility-first approach
- React team for the incredible framework
- Vite for blazing fast development experience

---

⭐ **Star this repo if you find it helpful!**
