export function totalThings(items: Array<{ amount: number }>) {
  let total = 0;
  for (const thing of items) {
    total += thing.amount;
  }
  return total;
}
