# Af Hooyo project memory

## Product

Af Hooyo is a Somali language learning app for Somali-American children around ages 5–9 who understand some Somali but struggle to speak it. Fluent parents manage the account. The product bet is AI-powered speaking practice with an AI “Ayeeyo” character, paired with a parent mode that helps families use Somali at home. Luuqad and Somali Kids focus on vocabulary and flashcards. Use Standard Somali in Latin script. This repository currently contains only a foundation and placeholder screens.

## Stack

- Expo SDK 57, React Native, TypeScript with strict checking, Expo Router, and React Native Web.
- npm with a committed lockfile; Node 24.19.0 is pinned in `.nvmrc` and `package.json`.
- ESLint, Prettier, Jest, and React Native Testing Library.

## Commands

- `nvm use` (or otherwise use Node 24.19.0), then `npm ci`.
- `npx expo start --web` for the web app; `npm start` for the Expo development server.
- `npm run lint`, `npm run format:check`, `npm run typecheck`, and `npm test` for local checks.

## Coding conventions

- Keep route files in `app/` small; put screen UI in `src/screens/` and reusable components in `src/components/`.
- Use accessible labels and touch targets at least 48 points high.
- Keep English and Somali UI copy in `src/content/` JSON. Every Somali entry has `text` and `reviewed`; new entries start as `reviewed: false` until a fluent reviewer approves them.
- Development shows unreviewed Somali with a visible marker. Production renders English for unreviewed entries and Somali only for reviewed entries. Keep that behavior covered by rendered-label tests.
- Keep tests outside `app/`, which Expo Router reserves for routes.

## Non-negotiable rules

- No ads, no third-party analytics or tracking SDKs.
- No collection of child data (voice, names, progress) except behind the parent gate, and never commit secrets or API keys.
- All Somali content must be stored as reviewable data files, never hardcoded in components.
- Keep PRs small and focused; every PR must pass CI.

There is no backend, authentication provider, AI integration, or child data storage in this scaffold. The adult check is a placeholder, not a security control.
