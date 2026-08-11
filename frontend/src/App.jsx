import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Products from './components/Products'
import BeautyQuiz from './components/BeautyQuiz'
import Login from './components/Login'

import './App.css'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Products />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/quiz/:category" element={<BeautyQuiz />} />
    </Routes>
  )
}

export default App