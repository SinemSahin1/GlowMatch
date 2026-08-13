import { useNavigate } from 'react-router-dom'

function ProductCard({ id, brand, name, category, price, image }) {

  const navigate = useNavigate()

  const handleAddFavorite = async (e) => {
    e.stopPropagation()

    const userId = localStorage.getItem('userId')

    if (!userId) {
      alert('Please login first.')
      return
    }

    try {
      const response = await fetch(
        `http://localhost:8080/api/favorites?userId=${userId}&productId=${id}`,
        {
          method: 'POST'
        }
      )

      if (response.ok) {
        alert('Added to favorites!')
      } else {
        alert('Could not add to favorites.')
      }

    } catch (error) {
      console.error('Favorite error:', error)
    }
  }

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/products/${id}`)}
    >

      <button
        className="favorite-button"
        onClick={handleAddFavorite}
      >
        ♡
      </button>

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