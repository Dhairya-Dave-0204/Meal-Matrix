import React, { useContext, useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <nav className="z-20 flex items-center justify-between gap-3 px-4 py-4 md:px-32">
      <Link to="/">
        <img src={assets.logo} alt="" className="w-42" />
      </Link>

      <ul className="items-center hidden gap-12 text-xl font-semibold xl:flex text-primary">
        <Link to="/" className="transition-all duration-700  hover:scale-110">
          Home
        </Link>
        <Link
          to="/menu"
          className="transition-all duration-700  hover:scale-110"
        >
          Menu
        </Link>
        <Link
          to="/about"
          className="transition-all duration-700  hover:scale-110"
        >
          About Us
        </Link>
        <Link
          to="/contact"
          className="transition-all duration-700  hover:scale-110"
        >
          Contact Us
        </Link>
      </ul>

      {token ? (
        <div className="items-center justify-center hidden gap-12 text-xl font-semibold xl:flex text-primary">
          <Link
            to="/cart"
            className="relative transition-all duration-700  hover:scale-110"
          >
            <img src={assets.basket_icon} alt="" />
            <div
              className={
                getTotalCartAmount() === 0
                  ? ""
                  : "absolute min-w-3 min-h-3 bg-primary rounded-lg -top-2 -right-2"
              }
            ></div>
          </Link>
          <Link
            to="/myorders"
            className="relative hidden transition-all duration-700 xl:block hover:scale-110"
          >
            <img src={assets.bag_icon} alt="" />
          </Link>
          <Link to="/" className="transition-all duration-700  hover:scale-110">
            <button
              onClick={logout}
              className="bg-primary border-2 border-primary text-xl px-8 py-2 text-white font-semibold rounded-xl cursor-pointer hover:bg-[#faf9f6] hover:text-primary transition-all duration-700"
            >
              Signout
            </button>
          </Link>
        </div>
      ) : (
        <Link
          to="/signin"
          className="hidden transition-all duration-700 xl:flex hover:scale-110"
        >
          <button className="bg-primary border-2 border-primary text-xl px-8 py-2 text-white font-semibold rounded-xl cursor-pointer hover:bg-[#faf9f6] hover:text-primary transition-all duration-700">
            Sign In
          </button>
        </Link>
      )}

      <i
        className="block text-4xl cursor-pointer ri-menu-5-line xl:hidden text-primary"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      ></i>

      <div
        className={`absolute xl:hidden py-8 top-16 left-0 w-full bg-[#faf9f6] text-primary flex flex-col items-center gap-6 font-semibold text-xl transform transition-transform ${
          isMenuOpen ? "opacity-100" : "opacity-0"
        }`}
        style={{ transition: "transfrom 0.3s ease, opacity 0.3s ease" }}
      >
        <Link to="/" className="transition-all duration-700  hover:scale-110">
          Home
        </Link>
        <Link
          to="/menu"
          className="transition-all duration-700  hover:scale-110"
        >
          Menu
        </Link>
        <Link
          to="/about"
          className="transition-all duration-700  hover:scale-110"
        >
          About Us
        </Link>
        <Link
          to="/contact"
          className="transition-all duration-700  hover:scale-110"
        >
          Contact Us
        </Link>
        {token ? (
          <div className="flex flex-col items-center gap-6 xl:hidden">
            <Link
              to="/cart"
              className="relative transition-all duration-700  hover:scale-110"
            >
              <img src={assets.basket_icon} alt="" />
              <div className="absolute rounded-lg  min-w-3 min-h-3 bg-primary -top-2 -right-2"></div>
            </Link>
            <Link
              to="/myorders"
              className="relative transition-all duration-700  hover:scale-110"
            >
              <img src={assets.bag_icon} alt="" />
            </Link>
            <Link
              to="/signout"
              className="transition-all duration-700  hover:scale-110"
            >
              <button
                onClick={logout}
                className="bg-primary border-2 border-primary text-xl px-8 py-2 text-white font-semibold rounded-xl cursor-pointer hover:bg-[#faf9f6] hover:text-primary transition-all duration-700"
              >
                Signout
              </button>
            </Link>
          </div>
        ) : (
          <Link
            to="/signin"
            className="transition-all duration-700  hover:scale-110"
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
