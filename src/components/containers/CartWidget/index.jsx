import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { NavLink } from "react-router";

function CartWidget() {
  const { totalUnits } = useContext(CartContext);
  return (
    <NavLink to="/cart" className="cart-widget">
      🛒
      {totalUnits > 0 && <span className="cart-badge">{totalUnits}</span>}
    </NavLink>
  );
}
export default CartWidget;
