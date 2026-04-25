import { describe, expect, it } from "vitest";
import { calcStuff, calculateBudgetTotal } from "./budgetService";

const record = {
  id: "budget-1",
  month: "2026-04",
  categories: [
    { name: "groceries", items: [{ label: "market", amount: 80 }, { label: "snacks", amount: 25 }] },
    { name: "transport", items: [{ label: "train", amount: 40 }] }
  ]
};

describe("budget service", () => {
  it("calculates the whole budget total", () => {
    expect(calculateBudgetTotal(record)).toBe(145);
  });

  it("calculates category totals", () => {
    expect(calcStuff(record)).toEqual([
      { name: "groceries", total: 105 },
      { name: "transport", total: 40 }
    ]);
  });
});
