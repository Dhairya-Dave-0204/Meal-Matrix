import React from "react";
import data from "./data";
import { useNavigate } from "react-router-dom";

function RestaurantCards() {

  const navigate = useNavigate();
  
  return (
    <div className="px-4 py-4 mx-4 my-6 md:px-24 lg:px-48 md:mx-8 md:my-20">
      <h1 className="mb-4 text-4xl font-semibold text-center text-primary font-expletus md:text-5xl">
        Top restaurants near you
      </h1>
      <p className="mb-5 text-lg font-medium text-center md:mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        architecto? Saepe dolor laudantium sequi ut!
      </p>
      
      <div className="grid gap-8 food-display-list">
        {data.map((restaurant, index) => (
          <div key={restaurant.id} onClick={() => navigate("/restaurant")} className="flex flex-col gap-4 transition-all duration-500 cursor-pointer hover:scale-105">
            <div className="h-48">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-full mb-2 rounded-2xl"
              />
            </div>
            
            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold">{restaurant.name}</h2>

              <div className="flex items-center gap-[6px] mb-1">
                <i className="rounded-lg px-[3px] text-primary ri-star-fill bg-secondary"></i>
                <p className="text-lg font-medium">{restaurant.star}</p>
                <span className="w-1 h-1 bg-black rounded-[50%]"></span>
                <p className="text-lg font-medium">{restaurant.time}</p>
              </div>

              <p className="">{restaurant.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RestaurantCards;
