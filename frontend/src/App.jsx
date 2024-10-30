import React, { useState } from 'react'
import { Navbar, Footer } from './components/component_index'
import { Route, Routes } from 'react-router-dom'
import { Cart, Home, PlaceOrder, SignIn, Signup } from './pages/page_index'

function App() {

  return (
    <>
      <Navbar />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App