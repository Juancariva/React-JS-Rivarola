import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/index";
import { NavLink } from "react-router";

function Cart() {
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <main style={{ padding: 20 }}>
        <h2>Carrito vacío</h2>
        <NavLink to="/">Volver al catálogo</NavLink>
      </main>
    );
  }

  return (
    <main style={{ padding: 20 }}>
      <h2>Tu carrito</h2>

      {cart.map((product) => (
        <CartItem key={product.id} item={product} />
      ))}

      <h3>Total: ${totalPrice}</h3>

      <div style={{ display: "flex", gap: 12 }}>
        <button onClick={clearCart}>Vaciar carrito</button>
        <NavLink to="/checkout">Ir a checkout</NavLink>
      </div>
    </main>
  );
}

export default Cart;
