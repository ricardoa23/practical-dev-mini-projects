import { useEffect, useState } from "react";
import { fetchRecipes, type RecipeCard } from "../api/recipes";

export function RecipeSearchPage() {
  const [recipes, setRecipes] = useState<RecipeCard[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchRecipes().then((result) => setRecipes(result.data));
  }, []);

  return (
    <section>
      <h1>Recipe Search Dashboard</h1>
      <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search recipes" />
      <p>Results: {recipes.length}</p>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.name} - {recipe.prepTimeMinutes} min</li>
        ))}
      </ul>
    </section>
  );
}
