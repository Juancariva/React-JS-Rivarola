import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { createOrderFS } from "../../../services/firebase/orders";
import { NavLink } from "react-router";

export default function CheckoutForm() {
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const [buyer, setBuyer] = useState({ name: "", phone: "", email: "" });
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  if (cart.length === 0 && !orderId) {
    return (
      <main style={{ padding: 20 }}>
        <h2>No hay items para comprar</h2>
        <NavLink to="/">Ir al catálogo</NavLink>
      </main>
    );
  }

  const handleChange = (e) => {
    setBuyer((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!buyer.name || !buyer.phone || !buyer.email) return;

    setLoading(true);

    const order = {
      buyer,
      items: cart.map((product) => ({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: product.quantity,
      })),
      total: totalPrice,
    };

    createOrderFS(order)
      .then((docRef) => {
        setOrderId(docRef.id);
        clearCart();
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  if (orderId) {
    return (
      <main style={{ padding: 20 }}>
        <h2>¡Compra confirmada!</h2>
        <p>
          Tu id de orden es: <b>{orderId}</b>
        </p>
        <NavLink to="/">Volver al inicio</NavLink>
      </main>
    );
  }

  return (
    <main style={{ padding: 20 }}>
      <h2>Checkout</h2>
      <p>
        Total: <b>${totalPrice}</b>
      </p>

      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", gap: 10, maxWidth: 360 }}
      >
        <input
          name="name"
          placeholder="Nombre"
          value={buyer.name}
          onChange={handleChange}
        />
        <input
          name="phone"
          placeholder="Teléfono"
          value={buyer.phone}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={buyer.email}
          onChange={handleChange}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Generando orden..." : "Confirmar compra"}
        </button>
      </form>
    </main>
  );
}
