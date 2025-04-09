import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="py-10 bg-secondary">
        <div className="container px-4 mx-auto md:flex md:justify-between">
          {/* Explore Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="mb-4 text-xl font-semibold">Explore</h3>
            
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-base hover:text-primary">
                  About Us
                </Link>
              </li>
              
              <li>
                <Link to="/contact" className="text-base hover:text-primary">
                  Contact Us
                </Link>
              </li>
              
              <li>
                <Link to="/menu" className="text-base hover:text-primary">
                  Menu
                </Link>
              </li>
              
              <li>
                <Link to="/faq" className="text-base hover:text-primary">
                  FAQ's
                </Link>
              </li>
              
              <li>
                <Link to="/cart" className="text-base hover:text-primary">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies Info Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="mb-4 text-xl font-semibold">Policies</h3>
            
            <ul className="space-y-2">
              <li className="text-base hover:text-primary">
                <Link to="/privacy-ploicy">Privacy Policy</Link>
              </li>
              
              <li className="text-base hover:text-primary">
                <Link to="/restaurant-policy">Restaurant Poicy</Link>
              </li>
              
              <li className="text-base hover:text-primary">
                <Link to="/food-policy">Food Poicy</Link>
              </li>
              
              <li className="text-base hover:text-primary">
                <Link to="/order-policy">Order Poicy</Link>
              </li>
              
              <li className="text-base hover:text-primary">
                <Link
                  to="https://www.instagram.com/"
                  className="px-3 py-1 mr-4 text-white bg-primary rounded-2xl"
                >
                  <i className="ri-instagram-line"></i>
                </Link>
                
                <Link
                  to="https://x.com/home?lang=en"
                  className="px-3 py-1 mr-4 text-white bg-primary rounded-2xl"
                >
                  <i className="ri-twitter-x-line"></i>
                </Link>
                
                <Link
                  to="https://www.facebook.com/"
                  className="px-3 py-1 mr-4 text-white bg-primary rounded-2xl"
                >
                  <i className="ri-facebook-line"></i>
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">Newsletter</h3>
            
            <p className="mb-4">
              Join our subscribers list to get the latest news and special
              offers.
            </p>
            
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 font-medium border rounded outline-none text-primary border-primary placeholder:text-primary"
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
                className="px-4 py-2 font-medium text-white transition-all duration-700 rounded bg-primary hover:bg-primary-dark hover:scale-105"
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
