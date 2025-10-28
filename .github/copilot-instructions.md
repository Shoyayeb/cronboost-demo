# Cronboost - Web Development Agency Website

## Project Overview
Full-featured Next.js website for Cronboost web development agency with Apple-inspired design, glassmorphism effects, and comprehensive features.

## Design Guidelines
- **Style**: Apple-inspired minimal design with large spacing
- **Effects**: Glassmorphism with backdrop blur, neon blue/purple gradients
- **Animations**: Smooth Framer Motion animations, parallax, 3D transforms
- **Accessibility**: WCAG 2.1 AA compliant, keyboard navigation, screen reader support
- **Responsive**: Mobile-first approach, works on all devices

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Email**: Resend
- **Analytics**: Vercel Analytics
- **CMS**: MDX for blog

## Project Structure
```
/src
  /app - Pages and routing (page.tsx, layout.tsx, etc.)
    /about - About page
    /services - Services page
    /portfolio - Portfolio page
    /blog - Blog with MDX
    /contact - Contact page
  /components
    /layout - Navbar, Footer, MobileMenu
    /sections - Hero, Services, Features, Pricing, Testimonials, FAQ, etc.
    /ui - shadcn components
    /forms - ContactForm, Newsletter, etc.
  /lib - Utilities, helpers, API clients
  /types - TypeScript definitions
  /data - Static content (testimonials, projects, etc.)
```

## Implementation Rules
1. **NO Markdown Documentation Files** - Never create .md files to document changes
2. **Code-First** - All documentation in code comments or this file only
3. **Component-Based** - Each feature is a reusable component
4. **Type Safety** - Full TypeScript coverage, no `any` types
5. **Accessibility** - All interactive elements have proper ARIA labels
6. **Performance** - Lazy load components, optimize images, code splitting
7. **SEO** - Proper meta tags, structured data, semantic HTML
8. **Mobile-First** - Design for mobile, enhance for desktop
9. **Animations** - Respect prefers-reduced-motion
10. **Error Handling** - Graceful degradation, user-friendly error messages

## Feature Checklist
- [x] Hero section with CTAs
- [x] Services showcase
- [x] Features section
- [x] Call-to-action section
- [x] Navbar with glassmorphism
- [x] Footer with links
- [x] Accessibility compliance
- [ ] Pricing tiers
- [ ] Testimonials carousel
- [ ] Portfolio grid
- [ ] Process timeline
- [ ] Tech stack showcase
- [ ] FAQ accordion
- [ ] Contact form
- [ ] Newsletter signup
- [ ] Mobile navigation menu
- [ ] Dark/light mode toggle
- [ ] Floating action button
- [ ] Enhanced animations
- [ ] Loading skeletons
- [ ] Image optimization
- [ ] SEO implementation
- [ ] Multi-page routing
- [ ] Blog section
- [ ] Analytics integration
- [ ] i18n support
- [ ] Cookie consent
- [ ] PWA features
- [ ] Project calculator
- [ ] Live chat widget
- [ ] Client portal
- [ ] Booking system

## Development Commands
- `npm run dev` - Start dev server (http://localhost:3000)
- `npm run build` - Production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - TypeScript checking

## Coding Standards
- Use functional components with hooks
- Implement proper TypeScript types
- Follow Next.js best practices
- Use Tailwind utility classes
- Implement proper error boundaries
- Add loading states
- Use semantic HTML
- Test accessibility
- Optimize performance
- Write clean, maintainable code

## When Making Changes
1. Update this file if architecture changes
2. Add TypeScript types for new features
3. Ensure mobile responsiveness
4. Test accessibility
5. Add proper error handling
6. Optimize performance
7. Update relevant components only
8. **NEVER create separate .md documentation files**
