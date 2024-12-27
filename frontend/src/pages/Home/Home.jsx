import React, { useState } from "react";
import {
  Header,
  Stats,
  ExploreMenu,
  FoodDisplay,
  Testimonail,
  RestaurantCards,
} from "../../components/component_index";

function Home() {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      
      <Stats />

      <RestaurantCards />
      
      <ExploreMenu category={category} setCategory={setCategory} />
      
      <FoodDisplay category={category} />
      
      <div className="flex flex-col w-[100vw] mb-8 justify-center items-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold testimonial-title">Our Testimonials</h1>
          <div className="testimonial-title bg-primary h-[4px] w-1/5 mx-auto mt-1"></div>
          <Testimonail />
        </div>
      </div>


    </div>
  );
}

export default Home;
