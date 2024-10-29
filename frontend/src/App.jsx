import React from 'react'
import { Navbar, Footer } from './components/component_index'
import { Route, Routes } from 'react-router-dom'
import { Cart, Home, PlaceOrder } from './pages/page_index'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App