# Emna Guizani — Personal Portfolio

A professional portfolio website built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **MDX**.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.local.example .env.local
# then edit .env.local and add your Resend API key

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Header, Footer, ThemeProvider, SEO)
│   ├── page.tsx            # Home page (Hero → About → Skills → Projects → Experience)
│   ├── blog/
│   │   ├── page.tsx        # Blog list
│   │   └── [slug]/page.tsx # Individual blog post (MDX)
│   ├── contact/
│   │   ├── page.tsx        # Contact page
│   │   └── ContactForm.tsx # Client-side form with Zod validation
│   └── api/contact/
│       └── route.ts        # POST handler — sends email via Resend
├── components/
│   ├── layout/             # Header, Footer, SectionLayout
│   ├── sections/           # Hero, About, Skills, Projects, Experience
│   ├── ui/                 # Primitive UI components (Button, Card, Badge, …)
│   ├── providers.tsx       # next-themes ThemeProvider
│   └── ThemeToggle.tsx     # Dark/light toggle
├── data/
│   ├── projects.ts         # ← Edit your projects here
│   ├── experience.ts       # ← Edit your experience here
│   └── skills.ts           # ← Edit your skills here
└── lib/
    ├── mdx.ts              # Blog post reader (gray-matter)
    └── utils.ts            # cn() helper
content/
└── blog/                   # ← Drop .mdx files here to publish posts
```

---

## Adding Content

### New Project

Open [`src/data/projects.ts`](src/data/projects.ts) and add an object to the `projects` array:

```ts
{
  id: "my-project",
  title: "My New Project",
  dateRange: "Jan – Mar 2026",
  description: "What it does and why it matters.",
  highlights: ["Key point 1", "Key point 2"],
  techStack: ["Next.js", "TypeScript"],
  featured: false,
  // githubUrl: "https://github.com/...",
  // liveUrl:   "https://...",
}
```

### New Experience Entry

Open [`src/data/experience.ts`](src/data/experience.ts) and add to the `experiences` array.
`type` must be one of `"internship" | "volunteer" | "fulltime"`.

### New Blog Post

Create a file in `content/blog/my-post-slug.mdx` with this frontmatter:

```mdx
---
title: "My Post Title"
date: "2026-01-15"
description: "A one-line summary shown in the post list."
tags: ["Cloud", "DevOps"]
---

Your markdown content here…
```

The file name becomes the URL slug: `/blog/my-post-slug`.

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | Yes (for contact form) | API key from [resend.com](https://resend.com) |

1. Copy `.env.local.example` → `.env.local`
2. Paste your Resend API key
3. **Never commit `.env.local`** — it is already in `.gitignore`

Without the key set, the contact form returns a 503 with a friendly error message pointing the visitor to email you directly.

> **Sender domain**: by default the API route uses `delivered@resend.dev` as the sender (Resend's sandbox domain). Once you've verified your own domain in the Resend dashboard, update the `from` field in [`src/app/api/contact/route.ts`](src/app/api/contact/route.ts).

---

## Dark / Light Mode

- Defaults to the **system preference** (via `next-themes`)
- The toggle in the header persists the choice to `localStorage`
- Implemented with CSS custom properties and the `dark` class on `<html>`

---

## Deploying to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository
3. In **Project Settings → Environment Variables**, add `RESEND_API_KEY`
4. Click **Deploy** — Vercel auto-detects Next.js, no extra config needed

> **Custom domain**: after deployment, add your domain in Vercel's settings.
> Then update `siteUrl` in [`src/app/layout.tsx`](src/app/layout.tsx) to match.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI Primitives | Custom (shadcn-compatible interface) |
| Dark mode | next-themes |
| Blog | next-mdx-remote + gray-matter |
| Contact form | react-hook-form + Zod + Resend |
| Deployment | Vercel |
