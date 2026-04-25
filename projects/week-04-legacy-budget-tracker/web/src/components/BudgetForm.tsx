import { useState } from "react";

export function BudgetForm() {
  const [amount, setAmount] = useState("0");
  const [category, setCategory] = useState("groceries");

  return (
    <form>
      <h2>Add Budget Item</h2>
      <select value={category} onChange={(event) => setCategory(event.target.value)}>
        <option value="groceries">groceries</option>
        <option value="transport">transport</option>
      </select>
      <input value={amount} onChange={(event) => setAmount(event.target.value)} />
      <button type="submit">Save</button>
      <p>TODO: show validation for negative numbers</p>
    </form>
  );
}
