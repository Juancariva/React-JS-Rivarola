import { useState } from "react";

export default function ItemCount({ stock, initial = 1, onAdd }) {
  const safeInitial = Math.min(Math.max(initial, 1), stock);
  const [count, setCount] = useState(safeInitial);

  const dec = () => setCount((c) => Math.max(1, c - 1));
  const inc = () => setCount((c) => Math.min(stock, c + 1));

  if (stock <= 0) return <p style={{ color: "#f87171" }}>Sin stock</p>;

  return (
    <div className="item-count">
      <div className="item-count-controls">
        <button onClick={dec} disabled={count <= 1}>
          -
        </button>
        <span>{count}</span>
        <button onClick={inc} disabled={count >= stock}>
          +
        </button>
      </div>

      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
}
