# Learning Guide

This guide is for middle school and high school students who know a little HTML and CSS and want to see how a complete modern website fits together.
You do not need to understand every file before you begin.

## What you need

- A code editor.
- A terminal.
- Node.js 24.
- pnpm 11.25.0.
- A modern web browser.

## Check your setup

Download Node.js 24 from the [official Node.js download page](https://nodejs.org/en/download) if it is not installed.
Follow the [official pnpm installation guide](https://pnpm.io/installation) to install pnpm.
Ask a teacher, parent, or system administrator before installing software on a shared or school computer.

Open a terminal and run:

```bash
node --version
pnpm --version
```

The first result should begin with `v24`.
The second result should be `11.25.0`.
If a command is missing, finish its installation before continuing.

Run `pnpm install` once, then run `pnpm dev` whenever you want to work on the site.
Visit `http://localhost:3000` to see your local copy.

## A simple mental model

A browser asks for a URL.
Next.js finds the matching file inside `src/app` and renders the page.
The page reads fictional records from `src/lib/data.ts` and assembles reusable components from `src/components`.
Most of that work happens on the server.
An interactive component marked with `"use client"`, plus the modules it imports, becomes part of the browser bundle.

```text
URL -> route file -> data and components -> HTML -> browser
```

## Lesson 1: Change visible content

Goal: connect one line of code to something you can see.

1. Open `src/app/page.tsx`.
2. Find the main `<h1>` heading.
3. Change its text and save the file.
4. Look at the browser while the development server is running.

Question: why did the page update without a manual refresh?

## Lesson 2: Follow a reusable component

Goal: understand why one component can appear in several places.

1. Find a `<ContentCard>` in `src/app/page.tsx`.
2. Open `src/components/content-card.tsx`.
3. Match each prop, such as `title` or `image`, to the HTML it produces.
4. Add a temporary word before the `Explore` link and observe every card.
5. Remove the temporary word when you finish.

Question: when is one shared component safer than copying the same markup three times?

## Lesson 3: Add typed content

Goal: see how one record can power several parts of the site.

1. Open `src/lib/data.ts`.
2. Copy one fictional product object inside the `products` array.
3. Give it a unique lowercase slug with hyphens.
4. Change its name, text, and illustration while keeping every required field.
5. Visit `/products` and the new `/products/your-slug` route.
6. Run `pnpm typecheck` and fix any reported field mistakes.

The same record appears in cards, a detail route, metadata, and the sitemap because those features all read the same array.
TypeScript helps keep the record shape consistent.

## Lesson 4: Compare server and client components

Goal: understand the client boundary.

Open `src/app/products/page.tsx` and notice that it has no `"use client"` directive.
It can render on the server because it only turns data into markup.

Next, open `src/components/mobile-nav.tsx`.
It is a Client Component because it uses state, click events, keyboard events, and the current browser path.

Question: what would the user lose if the mobile navigation did not run in the browser?

## Lesson 5: Trace the demo form

Goal: follow a request from the browser to server code and back.

1. Open `src/components/quote-form.tsx` and find the `fetch` call.
2. Open `src/app/api/quote/route.ts` and find the `POST` function.
3. Submit the form in your browser.
4. Match the response message to the JSON returned by the route.
5. Read the allowlist checks and explain why arbitrary values are rejected.

The form asks for no personal information and the route stores and sends nothing.
That makes it safe as a learning demo, but it is not a production contact system.

## Lesson 6: Run the quality gate

Goal: learn what automated checks can and cannot prove.

Run:

```bash
pnpm check
```

Linting catches selected code-quality problems.
Type checking catches incompatible TypeScript shapes.
The production build confirms that Next.js can compile and render the configured routes.
A successful command does not prove that every design choice is good or that a deployed website works.

Open `.github/workflows/ci.yml` and compare its commands with `pnpm check`.
CI repeats the checks on a clean GitHub-hosted machine so the result does not depend only on one laptop.

## Suggested projects

- Add one fictional article and confirm that its detail page and sitemap entry are generated.
- Create a new CSS color token and use it for one purposeful state.
- Add a new non-personal option to the quote form and update both client and server allowlists.
- Improve one page for keyboard users and describe how you verified the change.
- Sketch the request path for another website you use.

## Vocabulary

- Route: a URL and the code that responds to it.
- Component: a reusable piece of a user interface.
- Prop: data passed into a component.
- State: information an interactive component remembers while it runs.
- Server Component: a component rendered on the server without its own browser JavaScript.
- Client Component: a component allowed to use browser state, events, and APIs.
- API: a defined way for two pieces of software to exchange data.
- Static generation: creating page output during a build instead of for every visitor.
- CI: automated checks run when code changes.
- CD: automated delivery or deployment after agreed checks pass.
