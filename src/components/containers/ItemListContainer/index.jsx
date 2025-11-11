function ItemListContainer({ greeting }) {
  return (
    <main className="item-list-container">
      <section className="hero">
        <h1 className="hero-title">{greeting}</h1>
        <p className="hero-subtitle">
          Muy pronto vas a ver el catálogo de productos acá.
        </p>
      </section>
    </main>
  );
}

export default ItemListContainer;