# Solar Lighting Starter

[![CI](https://github.com/hskl18/solar-lighting-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/hskl18/solar-lighting-starter/actions/workflows/ci.yml)

Solar Lighting Starter is a fictional business website built for students who want to learn modern frontend development from a complete, small project.
It uses Next.js App Router, React, strict TypeScript, and Tailwind CSS.

All company names, products, projects, specifications, contact details, copy, and illustrations in this repository are fictional demo material.

## What you can learn

- How folders and files become website routes.
- How one typed data file can power cards, detail pages, metadata, and a sitemap.
- Why Server Components keep most JavaScript off the browser.
- When a Client Component is needed for state, events, and browser APIs.
- How a form sends JSON to a Route Handler and receives a response.
- How shared components and CSS tokens keep a site consistent.
- How CI checks every pushed change on a clean machine.

## Why this framework is useful

- Next.js keeps routes, page metadata, server code, and frontend components in one project.
- TypeScript catches many mismatched data shapes before the site runs.
- Static generation turns the small fictional dataset into fast HTML during the build.
- React components let one shared page pattern serve many content records.
- The CI workflow repeats linting, type checking, and the production build for every change.

## Quick start

Use Node.js 24 and pnpm 11.25.0.
If you use `nvm`, the committed `.nvmrc` selects the intended Node.js version.

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Run the same quality checks used by CI:

```bash
pnpm check
```

## Start learning

Read [docs/LEARNING_GUIDE.md](./docs/LEARNING_GUIDE.md), then try the lessons in order.
The first lesson changes text only.
Later lessons add typed content, trace a request through the demo API, and explain the CI result.

## Repository map

```text
.github/workflows/   Automated CI checks
docs/                Learning and project guides
public/illustrations Original SVG artwork
src/app/             Routes, metadata routes, styles, and the demo API
src/components/      Reusable server and client components
src/lib/             Fictional data and site helpers
```

Use these guides when you want more detail:

- [ARCHITECTURE.md](./ARCHITECTURE.md) explains how the application fits together.
- [docs/CI_CD.md](./docs/CI_CD.md) explains automation and the boundary between checks and deployment.
- [docs/ASSET_PROVENANCE.md](./docs/ASSET_PROVENANCE.md) records where every illustration came from.
- [CONTRIBUTING.md](./CONTRIBUTING.md) describes the change and review workflow.

## Adapting the starter

Replace the fictional data in `src/lib/data.ts` with content you own or are licensed to use.
Change `SITE.url` before deploying so canonical URLs, the sitemap, robots rules, and JSON-LD point to the correct domain.
Connect the quote form to a real delivery service only after adding authentication or abuse controls, server-side validation, privacy disclosures, and secure environment variables appropriate to your use case.

## Demo limitations

The quote form is intentionally non-production.
It validates three non-personal planning fields and returns a demo confirmation, but it does not store data, send email, or connect to a CRM.
The fictional product specifications are interface examples, not engineering guidance.

## License

The source code and original demo illustrations are available under the [MIT License](./LICENSE).
