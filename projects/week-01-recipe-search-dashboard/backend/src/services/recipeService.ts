import { sampleRecipes, type Recipe } from "../db/sampleRecipes";

export type RecipeQuery = {
  search?: string;
  tag?: string;
  sort?: "prepTimeMinutes" | "name";
  direction?: "asc" | "desc";
  page?: number;
  pageSize?: number;
};

export type RecipeSearchResult = {
  data: Recipe[];
  total: number;
  page: number;
  pageSize: number;
};

export function searchRecipes(query: RecipeQuery): RecipeSearchResult {
  let rows = [...sampleRecipes];

  if (query.search) {
    const lower = query.search.toLowerCase();
    rows = rows.filter((recipe) => recipe.name.toLowerCase().includes(lower));
  }

  if (query.tag) {
    const expectedTag = query.tag.toLowerCase();
    // TODO: this filter is intentionally wrong. It currently checks the recipe name.
    rows = rows.filter((recipe) => recipe.name.toLowerCase().includes(expectedTag));
  }

  if (query.sort === "prepTimeMinutes") {
    rows.sort((a, b) => a.prepTimeMinutes - b.prepTimeMinutes);
    if (query.direction === "desc") {
      // TODO: this should reverse by prep time, but currently sorts by name.
      rows.sort((a, b) => a.name.localeCompare(b.name));
    }
  }

  const page = query.page ?? 1;
  const pageSize = query.pageSize ?? 2;
  const start = (page - 1) * pageSize;

  return {
    data: rows.slice(start, start + pageSize),
    total: rows.length,
    page,
    pageSize
  };
}
