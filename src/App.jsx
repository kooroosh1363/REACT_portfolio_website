import { useMemo, useState } from "react";
import {
  capabilities,
  capabilityNotes,
  caseStudies
} from "./data/portfolio.js";
import {
  countCapabilities,
  filterCaseStudies,
  readPortfolioState,
  writePortfolioState
} from "./lib/portfolioState.js";

function updateUrl(state) {
  const search = writePortfolioState(window.location.search, state);
  const next = `${window.location.pathname}${search}${window.location.hash}`;
  window.history.replaceState(null, "", next);
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function App() {
  const initialState = useMemo(
    () => readPortfolioState(window.location.search, capabilities),
    []
  );
  const [state, setState] = useState(initialState);

  const visibleCaseStudies = useMemo(
    () => filterCaseStudies(caseStudies, state),
    [state]
  );

  const capabilityCounts = useMemo(
    () => countCapabilities(caseStudies),
    []
  );

  function setPortfolioState(next) {
    setState((current) => {
      const merged = { ...current, ...next };
      updateUrl(merged);
      return merged;
    });
  }

  function resetDiscovery() {
    const next = { query: "", capability: "all" };
    setState(next);
    updateUrl(next);
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="layout header-row">
          <a className="brand" href="#top" aria-label="SIGNAL portfolio home">
            <span className="brand-mark" aria-hidden="true">S</span>
            <span>
              <strong>SIGNAL</strong>
              <small>Evidence-driven engineering portfolio</small>
            </span>
          </a>

          <nav aria-label="Primary">
            <a href="#work">Work</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#method">Method</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero layout">
          <p className="eyebrow">Engineering portfolio · verifiable evidence</p>
          <h1>Show the work. Show the boundaries. Let the repository carry the claim.</h1>
          <p className="hero-copy">
            SIGNAL replaces a generic personal-site template with a portfolio system built around
            real repositories, inspectable engineering choices, explicit scope, and recruiter-friendly discovery.
          </p>

          <div className="hero-metrics" aria-label="Portfolio summary">
            <div>
              <span>Case studies</span>
              <strong>{caseStudies.length}</strong>
            </div>
            <div>
              <span>Architecture-tagged</span>
              <strong>{capabilityCounts.architecture || 0}</strong>
            </div>
            <div>
              <span>Frontend-tagged</span>
              <strong>{capabilityCounts.frontend || 0}</strong>
            </div>
            <div>
              <span>Fake claims</span>
              <strong>0</strong>
            </div>
          </div>
        </section>

        <section id="work" className="work-section layout" aria-labelledby="work-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 id="work-title">Discover by engineering capability.</h2>
            </div>
            <p>{visibleCaseStudies.length} of {caseStudies.length} case studies visible</p>
          </div>

          <div className="discovery-toolbar">
            <label className="search-field">
              <span>Search case studies</span>
              <input
                type="search"
                value={state.query}
                placeholder="Try route, state, automation…"
                onChange={(event) => setPortfolioState({ query: event.target.value })}
              />
            </label>

            <button className="reset-button" type="button" onClick={resetDiscovery}>
              Reset
            </button>
          </div>

          <div className="capability-filter" aria-label="Capability filters">
            {capabilities.map((capability) => (
              <button
                key={capability}
                type="button"
                aria-pressed={state.capability === capability}
                onClick={() => setPortfolioState({ capability })}
              >
                <span>{capability}</span>
                {capability !== "all" && (
                  <small>{capabilityCounts[capability] || 0}</small>
                )}
              </button>
            ))}
          </div>

          {visibleCaseStudies.length ? (
            <div className="case-grid">
              {visibleCaseStudies.map((study, index) => (
                <article className="case-card" key={study.id}>
                  <div className="case-index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <p className="eyebrow">{study.eyebrow}</p>
                  <h3>{study.title}</h3>
                  <p className="case-summary">{study.summary}</p>

                  <div className="tag-row" aria-label="Capabilities">
                    {study.capabilities.map((capability) => (
                      <span key={capability}>{capability}</span>
                    ))}
                  </div>

                  <div className="evidence-block">
                    <strong>Evidence visible in repository</strong>
                    <ul>
                      {study.evidence.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="scope-block">
                    <strong>Scope boundary</strong>
                    <p>{study.scope}</p>
                  </div>

                  <a
                    className="repo-link"
                    href={study.repository}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Inspect repository
                    <ArrowIcon />
                  </a>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <strong>No case study matches this discovery state.</strong>
              <p>Clear the search or select another capability.</p>
              <button type="button" onClick={resetDiscovery}>Reset discovery</button>
            </div>
          )}
        </section>

        <section id="capabilities" className="capability-section layout" aria-labelledby="capabilities-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Capability model</p>
              <h2 id="capabilities-title">What this portfolio is designed to prove.</h2>
            </div>
          </div>

          <div className="capability-grid">
            {capabilityNotes.map((item, index) => (
              <article key={item.id}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="method" className="method-section">
          <div className="layout method-grid">
            <div>
              <p className="eyebrow">Portfolio method</p>
              <h2>Credibility comes from traceability, not decoration.</h2>
            </div>

            <div className="method-list">
              <article>
                <span>01</span>
                <div>
                  <strong>Repository-backed claims</strong>
                  <p>Every featured case study links to a repository instead of a fake client logo or invented testimonial.</p>
                </div>
              </article>
              <article>
                <span>02</span>
                <div>
                  <strong>Explicit scope</strong>
                  <p>Each case study states what the project demonstrates and what it does not claim to be.</p>
                </div>
              </article>
              <article>
                <span>03</span>
                <div>
                  <strong>Discoverable state</strong>
                  <p>Search and capability filters are reflected in the URL so recruiter views are shareable and recoverable.</p>
                </div>
              </article>
              <article>
                <span>04</span>
                <div>
                  <strong>Small dependency surface</strong>
                  <p>No router, icon library, typewriter package, Bootstrap layer, or analytics dependency is required.</p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer layout">
        <strong>SIGNAL</strong>
        <span>Evidence-driven engineering portfolio · static frontend</span>
      </footer>
    </div>
  );
}
