export type Recipe = {
  id: number;
  name: string;
  prepTimeMinutes: number;
  tags: string[];
};

export const sampleRecipes: Recipe[] = [
  { id: 1, name: "Lemon Pasta", prepTimeMinutes: 20, tags: ["vegetarian", "quick"] },
  { id: 2, name: "Chili", prepTimeMinutes: 45, tags: ["spicy", "dinner"] },
  { id: 3, name: "Fruit Bowl", prepTimeMinutes: 10, tags: ["vegan", "breakfast"] },
  { id: 4, name: "Soup", prepTimeMinutes: 35, tags: ["vegetarian", "dinner"] }
];
