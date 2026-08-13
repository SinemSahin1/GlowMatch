import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
  const { id } = useParams()

  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:8080/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data)
      })
      .catch((error) => {
        console.error('Product could not be loaded:', error)
      })
  }, [id])

  if (!product) {
    return <p>Loading...</p>
  }

  return (
    <section className="product-details">

      <div className="product-details-image">
        <img
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="product-details-info">

        <p className="product-details-brand">
          {product.brand}
        </p>

        <h1>{product.name}</h1>

        <p className="product-details-category">
          {product.category}
        </p>

        <p className="product-details-price">
          {product.price} TL
        </p>

        <p className="product-details-description">
          {product.description}
        </p>

      </div>

    </section>
  )
}

export default ProductDetails