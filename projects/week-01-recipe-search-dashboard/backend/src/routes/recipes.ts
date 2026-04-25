import { parseRecipeQuery } from "../validation/recipeQuery";
import { searchRecipes } from "../services/recipeService";

export function getRecipes(query: Record<string, string | undefined>) {
  const parsed = parseRecipeQuery(query);
  return searchRecipes(parsed);
}
