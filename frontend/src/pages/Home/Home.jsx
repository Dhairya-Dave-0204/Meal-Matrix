import React, { useState } from "react";
import { Header, Stats, ExploreMenu, FoodDisplay } from "../../components/component_index";

function Home() {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <Stats />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
}

export default Home;
