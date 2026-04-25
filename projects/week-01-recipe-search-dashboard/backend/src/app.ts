import express from "express";
import { getRecipes } from "./routes/recipes";

export function createApp() {
  const app = express();

  app.get("/health", (_request, response) => {
    response.json({ ok: true });
  });

  app.get("/recipes", (request, response) => {
    try {
      const query = Object.fromEntries(
        Object.entries(request.query).map(([key, value]) => [key, typeof value === "string" ? value : undefined])
      );
      response.json(getRecipes(query));
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      response.status(400).json({ error: message });
    }
  });

  return app;
}
