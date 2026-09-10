# Architecture

Solar Lighting Starter keeps the application deliberately small so each part of the content pipeline is visible.

## Rendering model

Pages are Server Components unless browser state or event handling is required.
The desktop navigation reads the current path, the mobile navigation manages an open panel, and the quote form manages submission state.
Those three focused components cross the client boundary while the page content stays on the server.
Their imported modules also join the client bundle, so each boundary remains small.
Dynamic product, application, project, and article pages use `generateStaticParams` so the fictional dataset is rendered at build time.
Unknown slugs reach the page lookup and return the shared `notFound()` result.

## Content model

All demo content lives in `src/lib/data.ts` as typed arrays.
Each collection has a stable slug, summary, illustration, and route-specific fields.
The helper functions return `undefined` for unknown slugs so route pages can call `notFound()`.
The project collection uses a non-empty tuple because the homepage always features its first record.

For a real project, replace this module with a CMS or database adapter while keeping the page components dependent on the same typed shape.

## Metadata and discovery

`src/lib/site.ts` contains the single canonical site URL and shared identity values.
Page modules export static metadata or generate it from the matching data record.
The sitemap, robots rules, and `llms.txt` route use the same data collections so discovery surfaces stay aligned with public routes.

## Form boundary

`src/components/quote-form.tsx` is a Client Component because it manages submission state.
`src/app/api/quote/route.ts` is a Route Handler that validates a narrow allowlist of non-personal demo fields.
It intentionally has no email, CRM, database, analytics, authentication, or third-party integration.

The request path is:

```text
quote page -> QuoteForm -> POST /api/quote -> allowlist validation -> JSON response
```

Parsed JSON begins as `unknown` because successful JSON parsing does not prove that the value is an object or has the expected fields.

## Assets

The illustrations under `public/illustrations/` were created for this starter.
They use plain SVG so learners can inspect, edit, and version them without external design tools.
The asset record is in `docs/ASSET_PROVENANCE.md`.

## Quality and delivery boundary

The `pnpm check` command runs linting, strict type checking, and a production build in sequence.
The GitHub Actions workflow runs those same checks after pushes and on pull requests.
This repository does not deploy a website, so a green CI result proves the checked commit builds but does not prove a production URL is live.
