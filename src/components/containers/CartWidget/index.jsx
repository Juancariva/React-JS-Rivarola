function CartWidget() {
  const count = 2;

  return (
    <button aria-label="Carrito" className="cart-btn" title="Carrito">
      <span className="cart-icon">🛒</span>
      <span className="cart-count">{count}</span>
    </button>
  );
}

export default CartWidget;
