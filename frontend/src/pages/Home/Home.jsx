import React, { useState } from "react";
import {
  Header,
  Stats,
  ExploreMenu,
  FoodDisplay,
  Testimonail,
} from "../../components/component_index";
import reviews from "../../components/Testimonial/data";

function Home() {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      
      <Stats />
      
      <ExploreMenu category={category} setCategory={setCategory} />
      
      <FoodDisplay category={category} />
      
      <div className="flex flex-col w-[100vw] mb-8 justify-center items-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Our Testimonials</h1>
          <div className="bg-primary h-[4px] w-1/5 mx-auto mt-1"></div>
          <Testimonail reviews={reviews} />
          {/* We can write the entrie code of testimonail instead of writing testimonial component since on clicking button only the index of actual data shifts left and right */}
        </div>
      </div>


    </div>
  );
}

export default Home;
