export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your list</em>
      </p>
    );

  const numItems = items.length;
  const numPackedItems = items.filter((i) => i.packed).length;
  const percentage = Math.round((numPackedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go"
          : `
        You have ${numItems} items on your list, and you have packed
        ${numPackedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}
