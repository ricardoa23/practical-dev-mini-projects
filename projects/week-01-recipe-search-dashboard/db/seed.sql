INSERT INTO recipes (id, name, prep_time_minutes) VALUES
  (1, 'Lemon Pasta', 20),
  (2, 'Chili', 45),
  (3, 'Fruit Bowl', 10),
  (4, 'Soup', 35);

INSERT INTO recipe_tags (recipe_id, tag) VALUES
  (1, 'vegetarian'),
  (1, 'quick'),
  (2, 'spicy'),
  (2, 'dinner'),
  (3, 'vegan'),
  (3, 'breakfast'),
  (4, 'vegetarian'),
  (4, 'dinner');
