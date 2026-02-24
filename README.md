# Aaron George — Portfolio

A modern, minimal developer portfolio built with Next.js, React and Radix UI.

Version: `0.1.1`

## About

This is the personal portfolio site for Aaron George, a Computer Science undergraduate specializing in Artificial Intelligence. It showcases projects, lab notes, and a blog — all built on a modern stack including Next.js 16, React 19, TypeScript, Tailwind CSS and Radix UI primitives.

### Key Features

- App shell and layout in `app/`
- Reusable UI primitives under `components/` (cursor glow, header, footer, workbench, etc.)
- Styling with Tailwind CSS and global styles in `styles/` and `app/globals.css`
- TypeScript-first codebase

### Getting Started

Prerequisites

- Node.js 18 or newer
- pnpm (recommended) — install from <https://pnpm.io/>

Quick start

```bash
# install dependencies
pnpm install

# run development server
pnpm dev
```

Available scripts

- `pnpm dev` — runs `next dev` (development server)
- `pnpm build` — runs `next build` (production build)
- `pnpm start` — runs `next start` (serve built app)
- `pnpm lint` — run `eslint .`

Building for production

```bash
pnpm build
pnpm start
```

Project layout (high level)

- `app/` — Next.js App Router pages and layout
- `components/` — UI components and small feature pieces
- `lib/` — utilities and helpers
- `public/` — static assets
- `styles/` — global styles and Tailwind CSS entry

## Maintainer

- Aaron George — [GitHub](https://github.com/aaxonxn) · [LinkedIn](https://linkedin.com/in/aarongeorge)

## Contributing

Contributions are welcome. Open an issue to discuss larger changes, or send a pull request with a focused, well-documented change.
