import { Link } from "react-router";

function Item({ product }) {
  return (
    <article className="item-card">
      <div className="item-image-wrapper">
        <img src={product.image} alt={product.title} className="item-image" />
      </div>

      <h3 className="item-title">{product.title}</h3>
      <p className="item-price">${product.price}</p>

      <Link to={`/item/${product.id}`} className="item-detail-link">
        Ver detalle
      </Link>
    </article>
  );
}

export default Item;
