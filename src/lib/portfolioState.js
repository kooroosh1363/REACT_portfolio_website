export function normalizeQuery(value) {
  return String(value ?? "")
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, 120);
}

export function normalizeCapability(value, allowed) {
  const options = Array.isArray(allowed) ? allowed : [];
  return options.includes(value) ? value : "all";
}

export function filterCaseStudies(items, { query = "", capability = "all" } = {}) {
  const normalizedQuery = normalizeQuery(query).toLowerCase();

  return items.filter((item) => {
    const capabilityMatch =
      capability === "all" || item.capabilities.includes(capability);

    if (!capabilityMatch) return false;
    if (!normalizedQuery) return true;

    const haystack = [
      item.title,
      item.eyebrow,
      item.summary,
      item.scope,
      ...item.capabilities,
      ...item.evidence
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(normalizedQuery);
  });
}

export function readPortfolioState(search, allowedCapabilities) {
  const params = new URLSearchParams(search || "");

  return {
    query: normalizeQuery(params.get("q") || ""),
    capability: normalizeCapability(
      params.get("capability") || "all",
      allowedCapabilities
    )
  };
}

export function writePortfolioState(search, state) {
  const params = new URLSearchParams(search || "");
  const query = normalizeQuery(state?.query);

  if (query) params.set("q", query);
  else params.delete("q");

  if (state?.capability && state.capability !== "all") {
    params.set("capability", state.capability);
  } else {
    params.delete("capability");
  }

  const next = params.toString();
  return next ? `?${next}` : "";
}

export function countCapabilities(items) {
  return items.reduce((counts, item) => {
    for (const capability of item.capabilities) {
      counts[capability] = (counts[capability] || 0) + 1;
    }
    return counts;
  }, {});
}

export function caseStudyById(items, id) {
  return items.find((item) => item.id === id) ?? null;
}

export function isExternalHttpUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}
