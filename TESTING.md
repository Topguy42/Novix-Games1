# Running Tests

This project includes:

- Jest unit and API tests
- Playwright end-to-end tests

Quick commands:

Install dependencies and Playwright browsers:

```pwsh
pnpm install
pnpm exec playwright install
```

Run Jest unit/API tests:

```pwsh
pnpm test:unit
```

Run Playwright end-to-end tests:

```pwsh
pnpm test:e2e
```

Run all tests:

```pwsh
pnpm test
```

Notes:

- Playwright will start the server automatically via the `webServer`
  configuration; make sure no other server is running on port 3000.
- Some tests rely on the static sitemap at `.sitemap-base.json` which is already
  present in this repo.
