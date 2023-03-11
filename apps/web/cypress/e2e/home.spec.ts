import { describe, it, cy } from "local-cypress";

describe("Home", () => {
  it("Opens homepage", () => {
    cy.visit("/");
  });
});
