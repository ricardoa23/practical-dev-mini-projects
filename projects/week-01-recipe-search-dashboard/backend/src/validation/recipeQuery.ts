import type { RecipeQuery } from "../services/recipeService";

export function parseRecipeQuery(raw: Record<string, string | undefined>): RecipeQuery {
  return {
    search: raw.search,
    tag: raw.tag,
    sort: raw.sort as RecipeQuery["sort"],
    direction: raw.direction as RecipeQuery["direction"],
    page: raw.page ? Number(raw.page) : 1,
    pageSize: raw.pageSize ? Number(raw.pageSize) : 2
  };
}
