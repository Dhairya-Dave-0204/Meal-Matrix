import React, { useState } from "react";
import {
  Header,
  Stats,
  ExploreMenu,
  FoodDisplay,
  Testimonail,
} from "../../components/component_index";

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
          <h1 className="text-4xl font-bold testimonial-title">Our Testimonials</h1>
          <div className="testimonial-title bg-primary h-[4px] w-1/5 mx-auto mt-1"></div>
          <Testimonail />
          {/* We can write the entrie code of testimonail instead of writing testimonial component since on clicking button only the index of actual data shifts left and right */}
        </div>
      </div>


    </div>
  );
}

export default Home;
