import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  RestaurantGallery,
  ExploreMenu,
  FoodDisplay,
} from "../../components/component_index";

function Restaurant() {
  const [category, setCategory] = useState("All");

  return (
    <>
      <div className="px-4 py-4 mx-4 my-6 md:px-24 lg:px-48 md:mx-8 md:my-20">
        <div className="flex items-center gap-5 sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold md:text-5xl">
              Restaurant Name
            </h1>
            <p className="text-lg font-medium text-gray-500 max-sm:hidden">
              Pizza, Burger, Fast Food
            </p>

            <div className="flex items-center gap-2 text-gray-500 md:text-lg">
              <i className="ri-time-line"></i>
              <p>20 mins</p>
              <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
              <p>Area locality</p>
            </div>

            <p className="mt-1 text-lg text-gray-500 max-sm:hidden">
              <i className="text-xl font-medium ri-phone-fill text-primary"></i>{" "}
              +91 1234567890
            </p>
          </div>

          <div className="flex flex-col items-center gap-8 xl:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 p-1.5 text-white rounded-md bg-primary">
                <p className="text-lg font-medium">4.2</p>
                <i className="ri-star-fill"></i>
              </div>

              <div className="flex flex-col max-sm:hidden">
                <p className="text-lg font-medium">2.8K</p>
                <p className="underline opacity-80">Dining Reviews</p>
              </div>
            </div>

            <div className="flex items-center gap-3 max-md:hidden">
              <div className="flex items-center gap-2 p-1.5 text-white rounded-md bg-primary">
                <p className="text-lg font-medium">4.5</p>
                <i className="ri-star-fill"></i>
              </div>

              <div className="flex flex-col max-sm:hidden">
                <p className="text-lg font-medium">5.7K</p>
                <p className="underline opacity-80">Delivery Reviews</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-5 mt-3 max-sm:hidden">
          <Link to="https://maps.app.goo.gl/NXtHmGPRDw2BL3Pr7">
            <button className="px-2 py-1 text-lg font-medium transition-all duration-500 border rounded-md border-primary text-primary hover:scale-105">
              Directions <i className="ri-direction-line"></i>
            </button>
          </Link>

          <button className="px-2 py-1 text-lg font-medium transition-all duration-500 border rounded-md border-primary text-primary hover:scale-105">
            Share <i className="ri-share-forward-line"></i>
          </button>

          <button className="px-2 py-1 text-lg font-medium transition-all duration-500 border rounded-md border-primary text-primary hover:scale-105">
            Reviews <i className="ri-question-answer-line"></i>
          </button>
        </div>

        <div className="flex items-center gap-3 mt-3 sm:hidden max-sm:justify-between">
          <Link to="https://maps.app.goo.gl/NXtHmGPRDw2BL3Pr7">
            <button className="px-2 py-1 transition-all duration-500 border rounded-md border-primary text-primary hover:scale-105">
              Directions<i className="ri-direction-line"></i>
            </button>
          </Link>
          <div className="flex items-center gap-2 px-3 py-1 border border-gray-300 rounded-full shadow">
            <i className="ri-thumb-up-fill"></i>
            <p>Best in Fast Food</p>
          </div>
        </div>

        <RestaurantGallery />
      </div>

      <ExploreMenu category={category} setCategory={setCategory} />

      <FoodDisplay category={category} />
    </>
  );
}

export default Restaurant;
