import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("../api/recipes", () => ({
  fetchRecipes: vi.fn().mockResolvedValue({
    data: [
      { id: 1, name: "Lemon Pasta", prepTimeMinutes: 20, tags: ["vegetarian"] }
    ],
    total: 1,
    page: 1,
    pageSize: 10
  })
}));

import { RecipeSearchPage } from "./RecipeSearchPage";

describe("RecipeSearchPage", () => {
  it("renders the heading", () => {
    render(<RecipeSearchPage />);
    expect(screen.getByRole("heading", { name: "Recipe Search Dashboard" })).toBeInTheDocument();
  });
});
