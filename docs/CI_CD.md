# CI and CD

CI and CD are related, but they prove different things.

## Continuous integration

Continuous integration, or CI, checks a change in a clean environment shared by the team.
The workflow in `.github/workflows/ci.yml` runs on every push and pull request.

It performs these steps:

1. Check out the exact Git commit.
2. Install the pinned pnpm version and Node.js 24.
3. Install the exact dependency versions from `pnpm-lock.yaml`.
4. Run ESLint.
5. Run the TypeScript compiler without emitting files.
6. Create a production Next.js build.

This catches many syntax, type, dependency, and build errors before a change is shared or merged.
It also gives reviewers one result tied to one exact commit.

## Continuous delivery and deployment

Continuous delivery prepares a verified change so a person can release it.
Continuous deployment goes one step further and publishes every accepted change automatically.

This starter does not include a deployment workflow.
That boundary is intentional because the final hosting account, domain, environment variables, and release policy belong to the person who deploys the site.

If Vercel is connected later, document which branch reaches production and which checks must pass first.
A successful GitHub Actions build still does not prove that the Vercel deployment completed or that the live site behaves correctly.

## Why students should care

- Repeatability: the same commands run for every contributor.
- Fast feedback: errors appear soon after code is pushed.
- Safer collaboration: reviewers can see whether the exact commit passed.
- Reproducibility: pinned tools and a lockfile reduce machine-to-machine differences.
- Clear boundaries: a green check means the code passed the listed checks, not that every possible problem is solved.

## Run the CI checks locally

Use one command:

```bash
pnpm check
```

Fix failures locally before pushing.
If local checks pass and CI fails, compare the Node.js version, pnpm version, environment, and exact commit before guessing at the cause.
