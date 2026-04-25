CREATE TABLE recipes (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  prep_time_minutes INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE recipe_tags (
  recipe_id INTEGER NOT NULL REFERENCES recipes(id),
  tag TEXT NOT NULL,
  PRIMARY KEY (recipe_id, tag)
);

CREATE INDEX idx_recipe_name ON recipes (name);
CREATE INDEX idx_recipe_tag ON recipe_tags (tag);
