# Vihashini K S — Portfolio

A modern, professional, fully responsive personal portfolio website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- **Next.js 14** App Router with TypeScript
- **Framer Motion** animations — scroll reveals, typing effect, hover effects
- **Glassmorphism** UI with purple/blue/cyan gradient accents
- **Dark/Light mode** toggle via `next-themes`
- **Particle background** canvas animation
- **Loading screen** with progress bar
- **Project filter** tabs
- **Contact form** with client-side validation
- **SEO optimized** with Open Graph metadata
- **Fully responsive** — mobile, tablet, desktop

## 🗂️ Project Structure

```
portfolio/
├── app/
│   ├── globals.css        # Global styles + Tailwind utilities
│   ├── layout.tsx         # Root layout with metadata & ThemeProvider
│   └── page.tsx           # Main page assembling all sections
├── components/
│   ├── ThemeProvider.tsx
│   ├── LoadingScreen.tsx
│   ├── ParticleBackground.tsx
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Achievements.tsx
│   ├── Certifications.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/
│   └── resume.pdf         # Add your resume here
├── tailwind.config.ts
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone or navigate to the project
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📦 Deploy to Vercel

### Option 1 — Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Next.js.

### Option 2 — GitHub + Vercel Dashboard

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Vercel auto-configures Next.js — click **Deploy**
5. Your site is live at `https://your-project.vercel.app`

### Environment Variables (if needed)
No environment variables required for the base portfolio.

## 🎨 Customization

| What to change | Where |
|---|---|
| Personal info, links | Each component file |
| Resume PDF | `public/resume.pdf` |
| Colors/theme | `tailwind.config.ts` + `globals.css` |
| GitHub/LinkedIn URLs | `Hero.tsx`, `Footer.tsx`, `Contact.tsx` |
| Projects | `Projects.tsx` — `projects` array |
| Skills | `Skills.tsx` — `skillGroups` array |

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 | React framework with App Router |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations |
| Lucide React | Icons |
| next-themes | Dark/light mode |

## 📄 License

MIT © Vihashini K S
