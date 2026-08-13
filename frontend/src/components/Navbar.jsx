import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/home" className="logo">
        GlowMatch
      </Link>

      <ul className="nav-links">

        <li>
          <Link to="/home">Home</Link>
        </li>

        <li>
          <Link to="/quiz/skincare">Skincare</Link>
        </li>

        <li>
          <Link to="/quiz/makeup">Makeup</Link>
        </li>

        <li>
          <Link to="/home">Quiz</Link>
        </li>

        <li>
          <Link to="/favorites">Favorites</Link>
        </li>

      </ul>

      <Link to="/login">
        <button className="login-button">
          Login
        </button>
      </Link>

    </nav>
  )
}

export default Navbar