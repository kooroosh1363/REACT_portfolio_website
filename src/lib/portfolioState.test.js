import { describe, expect, it } from "vitest";
import { capabilities, caseStudies } from "../data/portfolio.js";
import {
  caseStudyById,
  countCapabilities,
  filterCaseStudies,
  isExternalHttpUrl,
  normalizeCapability,
  normalizeQuery,
  readPortfolioState,
  writePortfolioState
} from "./portfolioState.js";

describe("SIGNAL portfolio state", () => {
  it("normalizes query whitespace", () => {
    expect(normalizeQuery("  route   state  ")).toBe("route state");
  });

  it("recovers an unknown capability to all", () => {
    expect(normalizeCapability("unknown", capabilities)).toBe("all");
  });

  it("keeps a known capability", () => {
    expect(normalizeCapability("frontend", capabilities)).toBe("frontend");
  });

  it("filters by capability", () => {
    expect(
      filterCaseStudies(caseStudies, { capability: "accessibility" }).map((item) => item.id)
    ).toEqual(["meridian", "beacon"]);
  });

  it("searches case-study title and summary", () => {
    expect(
      filterCaseStudies(caseStudies, { query: "restaurant" }).map((item) => item.id)
    ).toEqual(["restaurant-operations"]);
  });

  it("searches evidence text", () => {
    expect(
      filterCaseStudies(caseStudies, { query: "keyboard" }).map((item) => item.id)
    ).toEqual(["beacon"]);
  });

  it("combines query and capability filters", () => {
    expect(
      filterCaseStudies(caseStudies, {
        query: "state",
        capability: "frontend"
      }).map((item) => item.id)
    ).toEqual(["meridian", "beacon"]);
  });

  it("returns all items when discovery state is empty", () => {
    expect(filterCaseStudies(caseStudies)).toHaveLength(caseStudies.length);
  });

  it("reads valid URL state", () => {
    expect(
      readPortfolioState("?q=route&capability=frontend", capabilities)
    ).toEqual({ query: "route", capability: "frontend" });
  });

  it("recovers invalid URL capability state", () => {
    expect(
      readPortfolioState("?q=route&capability=missing", capabilities)
    ).toEqual({ query: "route", capability: "all" });
  });

  it("writes canonical URL state", () => {
    expect(
      writePortfolioState("", { query: "route state", capability: "frontend" })
    ).toBe("?q=route+state&capability=frontend");
  });

  it("preserves unrelated URL parameters", () => {
    expect(
      writePortfolioState("?ref=github", { query: "", capability: "architecture" })
    ).toBe("?ref=github&capability=architecture");
  });

  it("removes default discovery state from URL", () => {
    expect(
      writePortfolioState("?q=x&capability=frontend", {
        query: "",
        capability: "all"
      })
    ).toBe("");
  });

  it("counts capability coverage", () => {
    const counts = countCapabilities(caseStudies);
    expect(counts.frontend).toBe(3);
    expect(counts.architecture).toBe(4);
  });

  it("finds a case study by id", () => {
    expect(caseStudyById(caseStudies, "beacon")?.title).toContain("BEACON");
  });

  it("returns null for a missing case study", () => {
    expect(caseStudyById(caseStudies, "missing")).toBeNull();
  });

  it("accepts HTTPS repository evidence links", () => {
    expect(isExternalHttpUrl(caseStudies[0].repository)).toBe(true);
  });

  it("rejects non-HTTP evidence links", () => {
    expect(isExternalHttpUrl("javascript:alert(1)")).toBe(false);
  });
});
