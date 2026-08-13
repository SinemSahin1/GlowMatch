import { Routes, Route, Navigate } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Products from './components/Products'
import BeautyQuiz from './components/BeautyQuiz'
import Login from './components/Login'
import Favorites from './components/Favorites'
import HowItWorks from './components/HowItWorks'
import ProductDetails from './components/ProductDetails'
import './App.css'


function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Categories />

      <HowItWorks />

      <Products />
    </>
  )
}


function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/home"
        element={<Home />}
      />

      <Route
        path="/favorites"
        element={<Favorites />}
      />

      <Route
        path="/quiz/:category"
        element={<BeautyQuiz />}
      />
   

   <Route
  path="/products/:id"
  element={<ProductDetails />}
/>
    </Routes>
  )
}


export default App