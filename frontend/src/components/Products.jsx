import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

function Products() {
  
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/api/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
      })
  }, [])

  return (
    <section className="products">
      <h2>Popular Products</h2>

      <div className="product-list">
      {products
  .filter((product) => product.brand !== 'CeraVe')
  .map((product) => (
    <ProductCard
    key={product.id}
    id={product.id}
    brand={product.brand}
    name={product.name}
    category={product.category}
    price={`${product.price} TL`}
    image={product.image}
  />
        ))}
      </div>
    </section>
  )
}

export default Products