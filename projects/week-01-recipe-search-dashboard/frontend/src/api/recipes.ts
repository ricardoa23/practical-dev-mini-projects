export type RecipeCard = {
  id: number;
  name: string;
  prepTimeMinutes: number;
  tags: string[];
};

export async function fetchRecipes() {
  // TODO: replace with a real fetch call once the backend is running locally.
  return {
    data: [] as RecipeCard[],
    total: 0,
    page: 1,
    pageSize: 10
  };
}
