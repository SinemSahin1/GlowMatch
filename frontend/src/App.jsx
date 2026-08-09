import Navbar from './components/Navbar'
import Login from './components/Login'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Products from './components/Products'
import BeautyQuiz from './components/BeautyQuiz'
import { Routes, Route } from 'react-router-dom'
import './App.css'


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Products />
      <BeautyQuiz />
    </>
  )
}


function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

    </Routes>
  )
}

export default App