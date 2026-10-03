export const capabilities = Object.freeze([
  "all",
  "frontend",
  "state-systems",
  "accessibility",
  "automation",
  "architecture"
]);

export const caseStudies = Object.freeze([
  {
    id: "agentic-automation-lab",
    title: "Agentic Automation Lab",
    eyebrow: "Applied AI systems",
    repository: "https://github.com/kooroosh1363/agentic-automation-lab",
    summary:
      "A multi-project repository exploring agentic automation, RAG, data operations, production engineering, reliability, and capstone work.",
    capabilities: ["automation", "architecture"],
    evidence: [
      "Repository organized as a multi-project engineering lab",
      "Includes production, reliability, and capstone-oriented work",
      "Documentation-driven portfolio structure"
    ],
    scope:
      "Portfolio evidence is limited to what is visible in the linked repository; this page does not claim external production deployment."
  },
  {
    id: "interactive-parts-finder",
    title: "Interactive Parts Finder Platform",
    eyebrow: "Product architecture",
    repository: "https://github.com/kooroosh1363/interactive-parts-finder-platform",
    summary:
      "A reusable parts-finder platform structured around a generic core with customer-specific configuration kept separate from reusable product logic.",
    capabilities: ["frontend", "state-systems", "architecture"],
    evidence: [
      "Reusable generic core",
      "Customer-specific configuration boundary",
      "Versioned, architecture-first development approach"
    ],
    scope:
      "This case study describes repository architecture and project boundaries, not unsupported claims about commercial traffic or scale."
  },
  {
    id: "restaurant-operations",
    title: "Restaurant AI Operations Platform",
    eyebrow: "Domain integrity",
    repository: "https://github.com/kooroosh1363/restaurant-ai-operations-platform",
    summary:
      "A domain-focused restaurant operations platform emphasizing database integrity, stock movement rules, CI, tests, and architecture traceability.",
    capabilities: ["automation", "architecture", "state-systems"],
    evidence: [
      "Explicit stock-movement domain model",
      "Database-level integrity constraints",
      "Foundation-phase testing and CI discipline"
    ],
    scope:
      "The portfolio reflects the repository's implemented and documented foundation scope only."
  },
  {
    id: "applied-agentic-systems",
    title: "Applied Agentic Systems",
    eyebrow: "Evaluation and systems work",
    repository: "https://github.com/kooroosh1363/applied-agentic-systems",
    summary:
      "A project collection centered on commercial automation systems and applied agentic engineering, including evaluation-oriented work.",
    capabilities: ["automation", "architecture"],
    evidence: [
      "Multiple applied system projects",
      "Evaluation-oriented engineering examples",
      "Repository-level documentation and demos"
    ],
    scope:
      "Descriptions stay at repository level and intentionally avoid unverifiable customer or business-impact claims."
  },
  {
    id: "meridian",
    title: "MERIDIAN — Product Discovery State Lab",
    eyebrow: "Frontend systems",
    repository: "https://github.com/kooroosh1363/REACT_ECommers_Product_Lists",
    summary:
      "A React catalog modernization focused on search, filters, deterministic sorting, bounded shortlist state, URL synchronization, and local recovery.",
    capabilities: ["frontend", "state-systems", "accessibility"],
    evidence: [
      "Pure catalog state policies",
      "URL-backed discovery state",
      "Sanitized local shortlist persistence"
    ],
    scope:
      "It is intentionally a product-discovery demo, not a checkout or payment system."
  },
  {
    id: "beacon",
    title: "BEACON — Route-Aware Navigation Shell",
    eyebrow: "Navigation engineering",
    repository: "https://github.com/kooroosh1363/REACT_Navbar",
    summary:
      "A route-aware React navigation shell built around a canonical route registry, explicit recovery, keyboard behavior, and static-host-safe links.",
    capabilities: ["frontend", "state-systems", "accessibility"],
    evidence: [
      "Canonical route registry",
      "Keyboard-aware navigation policy",
      "Explicit unknown-route recovery"
    ],
    scope:
      "A focused navigation engineering demo rather than a multi-page product."
  }
]);

export const capabilityNotes = Object.freeze([
  {
    id: "architecture",
    title: "Architecture before feature volume",
    description:
      "Projects are scoped around explicit boundaries, testable policies, documented trade-offs, and honest limitations."
  },
  {
    id: "state-systems",
    title: "State that can be reasoned about",
    description:
      "Filtering, routing, persistence, and interaction rules are separated from presentation where practical."
  },
  {
    id: "accessibility",
    title: "Interaction is part of correctness",
    description:
      "Keyboard behavior, focus visibility, semantic controls, reduced motion, and recovery states are treated as engineering work."
  }
]);
