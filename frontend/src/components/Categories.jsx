
import { Link } from 'react-router-dom'
function Categories() {
  return (
    <section className="categories">
      <h2>Shop by Category</h2>

      <div className="category-list">

        <Link to="/quiz/skincare">
          <button>Skincare</button>
        </Link>

        <Link to="/quiz/makeup">
          <button>Makeup</button>
        </Link>

        <Link to="/quiz/fragrance">
          <button>Fragrance</button>
        </Link>

        <Link to="/quiz/haircare">
          <button>Haircare</button>
        </Link>

      </div>
    </section>
  )
}

export default Categories