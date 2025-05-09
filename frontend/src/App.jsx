import React, { useState } from 'react'
import { Navbar, Footer } from './components/component_index'
import { Route, Routes } from 'react-router-dom'
import { Cart, Home, PlaceOrder, SignIn, Signup, Menu, About, Contact, FAQ, Verify, MyOrders } from './pages/page_index'

function App() {

  // use state hook to update the state off user form login and signup page and use that state to update navbar

  //steps to check status of user and forward that status to the required component
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value

    setData(data => ({...data, [name]: value}))
  }

  return (
    <>
      <Navbar />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
        <Route path='/signup' element={<Signup data={data} setData={setData} onChangeHandler={onChangeHandler} />} />
        <Route path='/signin' element={<SignIn data={data} setData={setData} onChangeHandler={onChangeHandler} />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/verify' element={<Verify />} />
        <Route path='/myorders' element={<MyOrders />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App