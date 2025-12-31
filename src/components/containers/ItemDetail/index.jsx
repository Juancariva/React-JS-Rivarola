import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount";
import { NavLink } from "react-router";

function ItemDetail({ product }) {
  const { addItem } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const handleAdd = (qty) => {
    addItem(
      {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      },
      qty
    );
    setAdded(true);
  };

  return (
    <main className="item-detail-container">
      <section className="item-detail">
        <img
          src={product.image}
          alt={product.title}
          style={{ maxWidth: 280 }}
        />

        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>
            <b>${product.price}</b>
          </p>

          {!added ? (
            <ItemCount
              stock={product.stock ?? 10}
              initial={1}
              onAdd={handleAdd}
            />
          ) : (
            <NavLink to="/cart">Ir al carrito</NavLink>
          )}
        </div>
      </section>
    </main>
  );
}

export default ItemDetail;
