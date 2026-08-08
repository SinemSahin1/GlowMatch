import ProductCard from './ProductCard'

function Products() {
  return (
    <section className="products">
      <h2>Popular Products</h2>

      <div className="product-list">
        <ProductCard
          brand="YSL"
          name="Lash Clash Mascara"
          category="Mascara"
          price="1850 TL"
          image="/products/ysl-mascara.jpg"
        />

        <ProductCard
          brand="Rare Beauty"
          name="Soft Pinch Liquid Blush"
          category="Blush"
          price="1450 TL"
          image="/products/rare-blush.jpg"
        />
<ProductCard
  brand="Benefit"
  name="Dark Cherry Tint"
  category="Lip & Cheek Tint"
  price="1600 TL"
  image="/products/dark-cherry-tint.jpg"
/>
      </div>
    </section>
  )
}


export default Products