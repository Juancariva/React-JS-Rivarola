function ItemDetail({ product }) {
  return (
    <section className="item-detail">
      <div className="item-detail-image-wrapper">
        <img
          src={product.image}
          alt={product.title}
          className="item-detail-image"
        />
      </div>

      <div className="item-detail-info">
        <h2 className="item-detail-title">{product.title}</h2>
        <p className="item-detail-category">
          Categoría: {product.category}
        </p>
        <p className="item-detail-description">{product.description}</p>
        <p className="item-detail-price">${product.price}</p>

        {/* más adelante va acá el ItemCount para agregar al carrito */}
        <button className="item-detail-add-btn">
          Agregar al carrito
        </button>
      </div>
    </section>
  );
}

export default ItemDetail;