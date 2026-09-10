# Contributing

Thank you for helping improve Solar Lighting Starter.
Keep changes small enough that a student can connect the code to the result.

## Before changing code

1. Read `README.md` and the relevant section of `ARCHITECTURE.md`.
2. Run `pnpm install` with Node.js 24 and pnpm 11.25.0.
3. Run `pnpm check` so you know the starting state.

## While working

- Keep page content fictional and clearly labeled as a demonstration.
- Prefer Server Components unless browser state, events, or APIs are required.
- Reuse typed data and shared components instead of copying whole page structures.
- Add code comments only for constraints or reasoning that the code cannot explain by itself.
- Use plain language in learner documentation.
- Add only assets that have a recorded, compatible source and license.
- Never commit secrets, personal information, customer material, or private environment files.

## Before requesting review

Run:

```bash
pnpm check
```

Then review the changed pages at narrow and wide viewport sizes.
Describe what changed, what you checked, and any limitation that remains.

## Commit and pull request scope

Use a short commit message that states the result.
Keep unrelated cleanup out of the same pull request.
CI must pass, but reviewers should still inspect behavior, accessibility, copy, and visual design that automated checks cannot prove.
