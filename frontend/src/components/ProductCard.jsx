function ProductCard({ brand, name, category, price, image }) {
  return (
    <div className="product-card">

      <img
        className="product-image"
        src={image}
        alt={name}
      />

      <p className="product-brand">{brand}</p>

      <h3>{name}</h3>

      <p className="product-category">{category}</p>

      <p className="product-price">{price}</p>

    </div>
  )
}

export default ProductCard