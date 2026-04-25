import { describe, expect, it } from "vitest";
import { searchRecipes } from "../src/services/recipeService";

describe("searchRecipes", () => {
  it("filters by recipe name", () => {
    const result = searchRecipes({ search: "soup" });
    expect(result.total).toBe(1);
    expect(result.data[0]?.name).toBe("Soup");
  });

  it("sorts by prep time ascending", () => {
    const result = searchRecipes({ sort: "prepTimeMinutes", direction: "asc", pageSize: 10 });
    expect(result.data.map((item) => item.name)).toEqual(["Fruit Bowl", "Lemon Pasta", "Soup", "Chili"]);
  });

  it("filters by tag", () => {
    const result = searchRecipes({ tag: "vegetarian", pageSize: 10 });
    expect(result.data.map((item) => item.name)).toEqual(["Lemon Pasta", "Soup"]);
  });

  it("sorts by prep time descending", () => {
    const result = searchRecipes({ sort: "prepTimeMinutes", direction: "desc", pageSize: 10 });
    expect(result.data.map((item) => item.name)).toEqual(["Chili", "Soup", "Lemon Pasta", "Fruit Bowl"]);
  });
});
