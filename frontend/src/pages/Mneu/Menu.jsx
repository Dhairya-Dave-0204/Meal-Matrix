import React, {useState} from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { ExploreMenu, FoodDisplay } from '../../components/component_index'

function Menu() {

    const [category, setCategory] = useState("All");

  return (
    <>
      <div
        className="bg-cover bg-center h-[60vh] flex flex-col mb-20 justify-center items-center text-white"
        style={{ backgroundImage: `url(${assets.SearchBG})` }}
      >
        <h1 className="text-4xl md:text-7xl font-bold mb-4 font-expletus">
          Meal Matrix
        </h1>
        <h2 className="text-3xl md:text-5xl font-semibold mb-4 p-2">
          Discover the best food & drinks around you
        </h2>
      </div>

      <ExploreMenu category={category} setCategory={setCategory} />
      
      <FoodDisplay category={category} />
    </>
  );
}

export default Menu;
