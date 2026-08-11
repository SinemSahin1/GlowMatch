
import { Link } from 'react-router-dom'
function Navbar() {
  <Link to="/login">
  <button>Login</button>
</Link>
    return (
      <nav>
        <h1>GlowMatch</h1>
  
        <ul>
        <li>
  <a href="#home">Home</a>
</li>
          <li>Skincare</li>
          <li>Makeup</li>
          <li>
  <a href="#quiz">Quiz</a>
</li>
          <li>Favorites</li>
        </ul>
  
        <button>Login</button>
      </nav>
    )
  }
   
  export default Navbar