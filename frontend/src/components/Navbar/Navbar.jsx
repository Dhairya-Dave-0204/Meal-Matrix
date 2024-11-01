import React, { useContext, useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/storeContext";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const{ getTotalCartAmount } = useContext(StoreContext)

  const user = null

  return (
    <nav className="flex justify-between items-center py-4 gap-3 px-4 md:px-32 z-20">
      <Link to="/">
        <img src={assets.logo} alt="" className="w-42" />
      </Link>

      <ul className="hidden xl:flex items-center gap-12 font-semibold text-xl text-primary">
        <Link to="/" className=" hover:scale-110 transition-all duration-700">
          Home
        </Link>
        <Link
          to="/menu"
          className=" hover:scale-110 transition-all duration-700"
        >
          Menu
        </Link>
        <Link
          to="/about"
          className=" hover:scale-110 transition-all duration-700"
        >
          About Us
        </Link>
        <Link
          to="/contact"
          className=" hover:scale-110 transition-all duration-700"
        >
          Contact Us
        </Link>
      </ul>

      {user ? (
        <div className="hidden xl:flex items-center justify-center text-primary font-semibold text-xl gap-12">
          <Link
            to="/cart"
            className=" hover:scale-110 transition-all duration-700 relative"
          >
            <img src={assets.basket_icon} alt="" />
            <div className={getTotalCartAmount() === 0 ? "" : "absolute min-w-3 min-h-3 bg-primary rounded-lg -top-2 -right-2"}></div>
          </Link>
          <Link
            to="/signout"
            className=" hover:scale-110 transition-all duration-700"
          >
            <button className="bg-primary border-2 border-primary text-xl px-8 py-2 text-white font-semibold rounded-xl cursor-pointer hover:bg-[#faf9f6] hover:text-primary transition-all duration-700">
              Signout
            </button>
          </Link>
        </div>
      ) : (
        <Link
          to="/signin"
          className="hidden xl:flex hover:scale-110 transition-all duration-700"
        >
          <button className="bg-primary border-2 border-primary text-xl px-8 py-2 text-white font-semibold rounded-xl cursor-pointer hover:bg-[#faf9f6] hover:text-primary transition-all duration-700">
            Sign In
          </button>
        </Link>
      )}

      <i
        className="ri-menu-5-line xl:hidden block text-4xl text-primary cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      ></i>

      <div
        className={`absolute xl:hidden py-8 top-16 left-0 w-full bg-[#faf9f6] text-primary flex flex-col items-center gap-6 font-semibold text-xl transform transition-transform ${
          isMenuOpen ? "opacity-100" : "opacity-0"
        }`}
        style={{ transition: "transfrom 0.3s ease, opacity 0.3s ease" }}
      >
        <Link to="/" className=" hover:scale-110 transition-all duration-700">
          Home
        </Link>
        <Link
          to="/menu"
          className=" hover:scale-110 transition-all duration-700"
        >
          Menu
        </Link>
        <Link
          to="/about"
          className=" hover:scale-110 transition-all duration-700"
        >
          About Us
        </Link>
        <Link
          to="/contact"
          className=" hover:scale-110 transition-all duration-700"
        >
          Contact Us
        </Link>
        {user ? (
          <div className="xl:hidden flex flex-col items-center gap-6">
            <Link
              to="/cart"
              className=" hover:scale-110 transition-all duration-700 relative"
            >
              <img src={assets.basket_icon} alt="" />
              <div className=" absolute min-w-3 min-h-3 bg-primary rounded-lg -top-2 -right-2"></div>
            </Link>
            <Link
              to="/signout"
              className=" hover:scale-110 transition-all duration-700"
            >
              <button className="bg-primary border-2 border-primary text-xl px-8 py-2 text-white font-semibold rounded-xl cursor-pointer hover:bg-[#faf9f6] hover:text-primary transition-all duration-700">
                Signout
              </button>
            </Link>
          </div>
        ) : (
          <Link
            to="/signin"
            className=" hover:scale-110 transition-all duration-700"
          >
            <button className="bg-primary border-2 border-primary text-xl px-8 py-2 text-white font-semibold rounded-xl cursor-pointer hover:bg-[#faf9f6] hover:text-primary transition-all duration-700">
              Sign In
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
