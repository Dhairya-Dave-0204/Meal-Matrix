import React from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-secondary py-10">
        <div className="container mx-auto px-4 md:flex md:justify-between">
          {/* Explore Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Explore</h3>
            
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-primary text-base">
                  About Us
                </Link>
              </li>
              
              <li>
                <Link to="/contact" className="hover:text-primary text-base">
                  Contact Us
                </Link>
              </li>
              
              <li>
                <Link to="/menu" className="hover:text-primary text-base">
                  Menu
                </Link>
              </li>
              
              <li>
                <Link to="/faq" className="hover:text-primary text-base">
                  FAQ's
                </Link>
              </li>
              
              <li>
                <Link to="/cart" className="hover:text-primary text-base">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies Info Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Policies</h3>
            
            <ul className="space-y-2">
              <li className="hover:text-primary text-base">
                <Link to="/privacy-ploicy">Privacy Policy</Link>
              </li>
              
              <li className="hover:text-primary text-base">
                <Link to="/restaurant-policy">Restaurant Poicy</Link>
              </li>
              
              <li className="hover:text-primary text-base">
                <Link to="/food-policy">Food Poicy</Link>
              </li>
              
              <li className="hover:text-primary text-base">
                <Link to="/order-policy">Order Poicy</Link>
              </li>
              
              <li className="hover:text-primary text-base">
                <Link
                  to="https://www.instagram.com/"
                  className="mr-4 bg-primary px-3 py-1 rounded-2xl text-white"
                >
                  <i className="ri-instagram-line"></i>
                </Link>
                
                <Link
                  to="https://x.com/home?lang=en"
                  className="mr-4 bg-primary px-3 py-1 rounded-2xl text-white"
                >
                  <i className="ri-twitter-x-line"></i>
                </Link>
                
                <Link
                  to="https://www.facebook.com/"
                  className="mr-4 bg-primary px-3 py-1 rounded-2xl text-white"
                >
                  <i className="ri-facebook-line"></i>
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            
            <p className="mb-4">
              Join our subscribers list to get the latest news and special
              offers.
            </p>
            
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your Email"
                className="text-primary border border-primary outline-none font-medium p-2 rounded placeholder:text-primary"
              />
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="privacyPolicy"
                  className="mr-2 accent-primary"
                />
                
                <label htmlFor="privacyPolicy" className="">
                  I agree to the Privacy Policy
                </label>
              </div>
              
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded font-medium hover:scale-105 transition-all duration-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="h-[2px] w-[80%] mx-auto border-none my-5 bg-primary" />

        <div className="mt-8 text-center text-gray-600">
          <p>&copy; Copyright 2024. Meal Matrix. All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
