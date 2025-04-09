import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { StoreContext } from "../../context/StoreContext";

function SignIn({data, onChangeHandler}) {

  const navigate = useNavigate()

  const { url, setToken } = useContext(StoreContext)

  const onLogIn = async (event) => {
    event.preventDefault()
    let newUrl = url
    newUrl += "/api/user/login"

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
      <div className="bg-white border rounded-xl p-8 shadow-lg backdrop-filter backdrop-blur-sm relative w-[310px] md:w-[560px] lg:w-[768px] h-[56vh] 2xl:h-[50vh]">
        <h2 className="mb-6 text-4xl font-semibold text-center">Sign In</h2>
        <form onSubmit={onLogIn} className="flex flex-col items-center ">
          <div className="flex flex-col w-full my-4">
            <label htmlFor="email" className="mb-2 text-2xl">
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
              className="px-4 py-2 text-xl font-medium transition-all duration-500 border outline-none border-primary border-opacity-30 focus:border-opacity-100 text-primary accent-primary placeholder:text-gray-300"
            />
          </div>
          
          <div className="flex flex-col w-full my-4">
            <label htmlFor="password" className="mb-2 text-2xl">
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
              className="px-4 py-2 text-xl font-medium border outline-none border-primary text-primary border-opacity-30 focus:border-opacity-100 accent-primary placeholder:text-gray-300"
            />
          </div>

          <button type="submit" className="px-6 py-2 my-4 text-xl font-semibold text-white transition-all duration-500  bg-primary rounded-2xl hover:bg-secondary hover:text-primary hover:scale-110">
            Sign In
          </button>

          <p className="text-lg">
            Create an account? <Link to="/signup" className="underline  hover:text-primary">Create here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
