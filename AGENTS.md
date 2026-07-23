# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single, 100% client-side Vite + React 19 + TypeScript SPA (a 3D
typewriter-desk portfolio rendered with Three.js/WebGL). There is no backend and
no database.

### Package manager
- **Bun** is the package manager (`bun.lock`). It is installed at `~/.bun/bin`.
  If `bun` is not on your `PATH`, run `export PATH="$HOME/.bun/bin:$PATH"` (or
  call it via `~/.bun/bin/bun`).
- The update script already runs `bun install`; you normally do not need to
  reinstall.

### Commands (see `package.json` scripts)
- Dev server: `bun run dev` → serves on port **3000**, host `0.0.0.0`.
- Lint / typecheck: `bun run lint` (`tsc --noEmit`). This is the ONLY verification
  mechanism — there is no test framework/test suite in this repo.
- Production build: `bun run build` (outputs to `dist/`); preview with
  `bun run preview` (port 4173).

### Non-obvious gotchas
- **No env / secrets needed to run.** `express`, `@google/genai`, and the
  `GEMINI_API_KEY` / `APP_URL` entries in `.env.example` are leftover Google AI
  Studio scaffolding and are NOT referenced anywhere in `src/`. The app runs
  fully without a `.env`. The `clean` script also references a `server.js` that
  does not exist.
- **The Customizer drawer has no button in the committed UI.** `Navbar` renders
  `null` and `TopHeader` is not wired into `App.tsx`, so the `CustomizerDrawer`
  cannot be opened through the shipped UI. The interactive control that IS
  rendered is the `TypingPanel` — the bottom-left "打字机文稿" pill — which types
  text live onto the 3D typewriter paper. Do not add UI wiring just to test;
  use the TypingPanel.
- `vite.config.ts` reads `DISABLE_HMR`; setting it to `"true"` disables HMR and
  file watching (used by AI Studio during agent edits).
