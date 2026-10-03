# SIGNAL — Evidence-Driven Engineering Portfolio

SIGNAL modernizes a 2023 React portfolio template into a recruiter-oriented engineering portfolio system.

The original repository presented a generic "Jhon Doe" profile, Lorem Ipsum copy, a fake BUY NOW button, social-media icon buttons without destinations, seven navigation anchors for sections that mostly did not exist, decorative skills imagery, a typewriter dependency, and a scroll listener registered directly during render. It also used Create React App, React Router, React Bootstrap, multiple icon libraries, Web Vitals, a large Google Fonts import, and CRA boilerplate despite being a single-page portfolio.

## Engineering focus

SIGNAL treats a portfolio as structured, verifiable evidence:

- repository-backed case studies
- explicit scope boundaries
- capability taxonomy
- search across project evidence
- URL-backed capability and search state
- deterministic filtering
- recruiter-friendly scanning
- semantic controls
- accessible focus treatment
- reduced-motion support
- small dependency surface

## Architecture

```text
src/data/portfolio.js
        │
        ▼
src/lib/portfolioState.js
        ├─ query normalization
        ├─ capability validation
        ├─ case-study filtering
        ├─ URL read/write rules
        ├─ capability counts
        ├─ case-study lookup
        └─ evidence-link validation
        │
        ▼
src/App.jsx
        ├─ discovery state
        ├─ history.replaceState()
        ├─ case-study rendering
        └─ capability presentation
```

Portfolio claims live in structured data instead of being scattered through presentational components.

## Evidence policy

Each featured case study:

1. links to a real repository
2. describes observable repository-level evidence
3. states a scope boundary
4. avoids invented customer names, traffic, revenue, testimonials, or deployment scale

This portfolio deliberately prefers traceability over marketing language.

## Featured repositories

Current case studies point to:

- `agentic-automation-lab`
- `interactive-parts-finder-platform`
- `restaurant-ai-operations-platform`
- `applied-agentic-systems`
- `REACT_ECommers_Product_Lists`
- `REACT_Navbar`

The portfolio can be extended by adding structured entries to `src/data/portfolio.js`.

## Discovery state

The URL can carry:

- `q` — search text
- `capability` — selected capability

Example:

```text
?q=state&capability=frontend
```

Unknown capabilities recover to `all`, and unrelated query parameters are preserved.

## Modernization summary

- Create React App → Vite
- React 18 → React 19
- removed React Router
- removed React Bootstrap
- removed React Bootstrap Icons
- removed React Icons
- removed react-simple-typewriter
- removed Web Vitals
- removed decorative/person/skill images
- removed fake BUY NOW behavior
- removed destination-less social buttons
- removed placeholder Jhon Doe / Lorem Ipsum content
- removed non-existent navigation sections
- removed render-time scroll listener
- removed CRA public/test boilerplate
- removed legacy lockfile
- removed oversized Google Fonts import
- added Vitest, CI, GitHub Pages deployment, and professional documentation

## Accessibility

- skip navigation
- semantic navigation and headings
- real search field
- real filter/reset buttons
- `aria-pressed` capability state
- visible focus treatment
- responsive layout
- reduced-motion support
- descriptive external repository links

## Local development

Requirements:

- Node.js 22+
- npm

```bash
npm install --legacy-peer-deps --no-audit --no-fund
npm run dev
```

## Tests

```bash
npm test
```

The suite covers:

- search normalization
- valid and invalid capability normalization
- capability filtering
- title/summary search
- evidence-text search
- combined search + capability filtering
- empty discovery state
- URL state reading
- invalid URL recovery
- canonical URL writing
- unrelated-query preservation
- default-state cleanup
- capability counting
- case-study lookup
- missing case-study recovery
- HTTP evidence-link validation
- rejection of unsafe/non-HTTP evidence links

## Quality gate

```bash
npm run check
```

Runs syntax checks, Vitest, and a Vite production build.

## CI

`.github/workflows/quality.yml` runs on pull requests and pushes to `main`.

## Deployment

SIGNAL includes a manual GitHub Pages workflow.

1. Open **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. Open **Actions → Deploy Pages**.
4. Run the workflow.

## Security review

No API keys, tokens, passwords, credentials, auth flows, backend endpoints, analytics, sensitive browser storage, or user-controlled HTML injection are required.

External evidence links are explicit HTTP(S) repository URLs stored in static portfolio data.

## Scope

SIGNAL is a static engineering portfolio. It intentionally does not implement:

- CMS editing
- contact-form submission
- analytics
- authentication
- fake testimonials
- fake customer logos
- invented conversion metrics

## License

MIT. See [LICENSE](./LICENSE).
