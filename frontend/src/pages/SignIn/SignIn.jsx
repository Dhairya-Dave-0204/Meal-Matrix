import React from "react";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="bg-white border rounded-xl p-8 shadow-lg backdrop-filter backdrop-blur-sm relative w-[310px] md:w-[560px] lg:w-[768px] h-[56vh] 2xl:h-[50vh]">
        <h2 className="text-4xl text-center mb-6 font-semibold">Sign In</h2>
        <form action="#" className=" flex flex-col items-center">
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
              className="border border-primary text-primary border-opacity-30 focus:border-opacity-100 outline-none accent-primary font-medium text-xl placeholder:text-gray-300 px-4 py-2"
            />
          </div>

          <button type="submit" className=" bg-primary text-white px-6 rounded-2xl py-2 my-4 text-xl font-semibold hover:bg-secondary hover:text-primary transition-all duration-500 hover:scale-110">
            Sign In
          </button>

          <p className="text-lg">
            Create an account? <Link to="/signup" className=" underline hover:text-primary">Create here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;