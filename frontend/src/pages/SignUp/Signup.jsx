import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import { StoreContext } from '../../context/storeContext';

function Signup({data, onChangeHandler}) {

  const navigate = useNavigate()

  const { url, setToken } = useContext(StoreContext);

  const onRegister = async (event) => {
    event.preventDefault()
    let newUrl = url
    newUrl += "/api/user/register"

    const response = await axios.post(newUrl, data)

    if (response.data.success) {
      setToken(response?.data.token)
      localStorage.setItem("token", response?.data.token)
      navigate( "/")
    } else {
      alert(response?.data.message)
    }
  }

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="bg-white border rounded-xl p-8 shadow-lg backdrop-filter backdrop-blur-sm relative w-[310px] md:w-[560px] lg:w-[768px] h-[70vh] 2xl:h-[63vh]">
        <h2 className="text-4xl text-center mb-6 font-semibold">Sign Up</h2>
        <form onSubmit={onRegister} className=" flex flex-col items-center">
          <div className="my-4 flex flex-col w-full">
            <label htmlFor="username" className="text-2xl mb-2">
              Username :
            </label>
            <input
              type="text"
              id="username"
              name="name"
              placeholder="username"
              required
              onChange={onChangeHandler}
              value={data.name}
              className="border border-primary border-opacity-30 transition-all duration-500 focus:border-opacity-100 text-primary outline-none accent-primary font-medium text-xl placeholder:text-gray-300 px-4 py-2"
            />
          </div>
          
          <div className="my-4 flex flex-col w-full">
            <label htmlFor="email" className="text-2xl mb-2">
              E-mail :
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              required
              onChange={onChangeHandler}
              value={data.email}
              className="border border-primary border-opacity-30 transition-all duration-500 focus:border-opacity-100 text-primary outline-none accent-primary font-medium text-xl placeholder:text-gray-300 px-4 py-2"
            />
          </div>
          
          <div className="my-4 flex flex-col w-full">
            <label htmlFor="password" className="text-2xl mb-2">
              Password :
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              onChange={onChangeHandler}
              value={data.password}
              className="border border-primary text-primary border-opacity-30 focus:border-opacity-100 outline-none accent-primary font-medium text-xl placeholder:text-gray-300 px-4 py-2"
            />
          </div>

          <button type="submit" className=" bg-primary text-white px-6 rounded-2xl py-2 my-4 text-xl font-semibold hover:bg-secondary hover:text-primary transition-all duration-500 hover:scale-110">
            Sign In
          </button>

          <p className="text-lg">
            Already have an account? <Link to="/signin" className=" underline hover:text-primary">Login</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Signup