import React from 'react'
import { Navbar, Footer } from './components/component_index'
import { Route, Routes } from 'react-router-dom'
import { Cart, Home, PlaceOrder, SignIn, Signup, Menu, About, Contact, FAQ } from './pages/page_index'

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
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/faq' element={<FAQ />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App