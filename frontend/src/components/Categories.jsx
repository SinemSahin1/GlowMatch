import { Link } from 'react-router-dom'

function Categories() {
  return (
    <section className="categories">

      <p className="section-label">EXPLORE</p>
      <h2>Shop by Category</h2>

      <div className="category-list">

        <Link to="/quiz/skincare" className="category-card">
          <h3>Skincare</h3>
          <p>Find products suited to your skin.</p>
          <span>Explore →</span>
        </Link>

        <Link to="/quiz/makeup" className="category-card">
          <h3>Makeup</h3>
          <p>Discover makeup matched to your style.</p>
          <span>Explore →</span>
        </Link>

        <Link to="/quiz/fragrance" className="category-card">
          <h3>Fragrance</h3>
          <p>Find a scent that matches your preferences.</p>
          <span>Explore →</span>
        </Link>

        <Link to="/quiz/haircare" className="category-card">
          <h3>Haircare</h3>
          <p>Discover care for your hair needs.</p>
          <span>Explore →</span>
        </Link>

      </div>

    </section>
  )
}

export default Categories