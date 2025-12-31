import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function CartItem({ item }) {
  const { removeItem } = useContext(CartContext);

  return (
    <article
      style={{
        display: "flex",
        gap: 12,
        alignItems: "center",
        marginBottom: 12,
      }}
    >
      <img
        src={item.image}
        alt={item.title}
        style={{ width: 60, height: 60, objectFit: "contain" }}
      />
      <div style={{ flex: 1 }}>
        <p>
          <b>{item.title}</b>
        </p>
        <p>Precio: ${item.price}</p>
        <p>Cantidad: {item.quantity}</p>
        <p>Subtotal: ${item.price * item.quantity}</p>
      </div>
      <button onClick={() => removeItem(item.id)}>Eliminar</button>
    </article>
  );
}
