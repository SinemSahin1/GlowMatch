import Navbar from './components/Navbar'
import './App.css'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Products from './components/Products'
import BeautyQuiz from './components/BeautyQuiz'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <Products />
      <BeautyQuiz />
    </div>
  )
}

export default App