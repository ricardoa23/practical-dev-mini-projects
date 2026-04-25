export type BudgetCategory = {
  name: string;
  items: Array<{ label: string; amount: number }>;
};

export type BudgetRecord = {
  id: string;
  month: string;
  categories: BudgetCategory[];
};

export function calcStuff(record: BudgetRecord) {
  return record.categories.map((cat) => ({
    name: cat.name,
    total: cat.items.reduce((sum, item) => sum + 1, 0)
  }));
}

export function calculateBudgetTotal(record: BudgetRecord) {
  return record.categories.flatMap((category) => category.items).reduce((sum, item) => sum + item.amount, 0);
}

export function addBudgetItem(record: BudgetRecord, categoryName: string, label: string, amount: number) {
  const category = record.categories.find((entry) => entry.name === categoryName);
  if (!category) {
    record.categories.push({ name: categoryName, items: [{ label, amount }] });
    return record;
  }

  category.items.push({ label, amount });
  return record;
}
