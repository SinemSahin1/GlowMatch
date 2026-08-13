import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

function Favorites() {
  const [favorites, setFavorites] = useState([])

  const userId = localStorage.getItem('userId')

  const loadFavorites = () => {
    if (!userId) {
      return
    }

    fetch(`http://localhost:8080/api/favorites/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setFavorites(data)
      })
      .catch((error) => {
        console.error('Favorites error:', error)
      })
  }

  useEffect(() => {
    loadFavorites()
  }, [])

  const handleRemoveFavorite = async (productId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/favorites?userId=${userId}&productId=${productId}`,
        {
          method: 'DELETE'
        }
      )

      if (response.ok) {
        setFavorites((currentFavorites) =>
          currentFavorites.filter(
            (favorite) => favorite.product.id !== productId
          )
        )
      }

    } catch (error) {
      console.error('Remove favorite error:', error)
    }
  }

  return (
    <section className="favorites-page">

      <h1>My Favorites</h1>

      <p>Your saved GlowMatch products.</p>

      {favorites.length === 0 ? (
        <p>You haven't added any favorites yet.</p>
      ) : (
        <div className="product-list">

          {favorites.map((favorite) => (
            <div
              className="favorite-item"
              key={favorite.id}
            >

              <ProductCard
                id={favorite.product.id}
                brand={favorite.product.brand}
                name={favorite.product.name}
                category={favorite.product.category}
                price={`${favorite.product.price} TL`}
                image={favorite.product.image}
              />

              <button
                className="remove-favorite-button"
                onClick={() =>
                  handleRemoveFavorite(favorite.product.id)
                }
              >
                Remove from Favorites
              </button>

            </div>
          ))}

        </div>
      )}

    </section>
  )
}

export default Favorites