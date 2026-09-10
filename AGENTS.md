# Repository guide

MarketWise is a React 19 frontend for cryptocurrency, stock, and forex tracking, built with Vite, React Router 7, Redux Toolkit, and Material UI 5.

Use Node.js 20.19+ (20.x) or 22.12+; prefer a supported LTS release.

## Commands

- Install locked dependencies: `npm ci`.
- Start locally: `npm start` (http://localhost:3000).
- Check production compilation: `npm run build`.
- Run tests without watch mode: `npm test`.
- Tests in `tests/` use the Node.js built-in test runner; add focused regression checks for behavioral changes.

## Code map

- `src/index.jsx`: React entry point, router, and Redux provider.
- `src/routes/AppRoutes.jsx`: routes and user context provider.
- `src/pages/`: route-level screens; `src/components/`: feature components.
- `src/store/store.js` and `src/store/store-actions.js`: active Redux store and state logic.
- `src/api/index.js`: shared backend requests; some requests also live in components.
- `src/constants/constants.js`: backend URL and shared constants.
- `src/styles/`: theme and feature styling; `src/assets/`: bundled images.

## Working conventions

- Follow existing JavaScript/JSX, functional component, and styling patterns. Reuse existing components and dependencies; keep changes focused.
- Trace callers before changing shared API or state behavior.
- The backend defaults to `http://127.0.0.1:5050/` and is a separate service. A successful frontend build does not validate authentication, payments, or live market data.
- Keep secrets out of frontend source and committed environment files; browser bundles expose their configuration.
- Preserve `package-lock.json`; change dependencies only when the task needs it.
- For source changes, run the build and relevant tests; report existing warnings or external-service blockers accurately.
- Do not commit generated `build/` output or `node_modules/`.
