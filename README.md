# Cronboost - Web Development Agency

A beautiful, minimal landing page for Cronboost web development agency featuring Apple-inspired design, glassmorphism effects, and smooth animations.

## ✨ Features

- 🎨 **Apple-inspired Design** - Clean, minimal interface with large spacing
- 💎 **Glassmorphism Effects** - Beautiful backdrop blur and transparency
- 🌈 **Neon Accents** - Blue/purple gradient accents throughout
- ⚡ **Smooth Animations** - Powered by Framer Motion
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🎯 **SEO Optimized** - Proper metadata and semantic HTML

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Components:** shadcn/ui
- **Icons:** Lucide React

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd cronboost
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
cronboost/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Features.tsx
│   │   │   └── CTA.tsx
│   │   └── ui/
│   │       ├── button.tsx
│   │       └── card.tsx
│   └── lib/
│       └── utils.ts
├── public/
├── package.json
└── README.md
```

## 🎨 Sections

- **Hero** - Eye-catching hero section with animated gradients and CTAs
- **Services** - Service offerings with glassmorphism cards
- **Features** - Feature highlights with parallax effects
- **CTA** - Call-to-action section with gradient background
- **Navbar** - Glassmorphism navigation bar
- **Footer** - Complete footer with links and social icons

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Customization

### Colors
Edit the gradient colors in each component or modify the Tailwind theme in `globals.css`

### Content
Update the placeholder text in each section component under `src/components/sections/`

### Animations
Modify Framer Motion settings in component files to adjust animation timing and effects

## 🌐 Deployment

Deploy easily with Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

Or build and deploy to any hosting platform:

```bash
npm run build
```

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ using Next.js and Tailwind CSS
