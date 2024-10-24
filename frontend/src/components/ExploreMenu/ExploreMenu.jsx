import React from "react";
import { assets, menu_list } from "../../assets/frontend_assets/assets";

function ExploreMenu({category, setCategory}) {
  return (
    <div id="explore_menu" className="px-4 md:px-24 lg:px-48 py-4 gap-6 mx-4 md:mx-8 my-6 md:my-20 flex flex-col">
      <h2 className="sm:text-5xl text-4xl font-semibold text-primary font-expletus text-center">Explore dishes from top restaurants</h2>
      <p className="text-center text-lg font-medium">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
        similique dignissimos praesentium odio! Fugit, voluptates iusto nemo
        aliquam laboriosam voluptas.
      </p>
      <div className="grid grid-cols-1 xl:grid-cols-8 lg:grid-cols-4 md:grid-cols-2 place-items-center text-center gap-10 my-4 cursor-pointer">
        {menu_list.map((item,index) => {
            return (
                <div key={index} onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}>
                    <img src={item.menu_image} alt="" className={`${category === item.menu_name ? "active" : ""} rounded-full transition-all duration-200 `} />
                    <p className="text-xl font-medium mt-2">
                        {item.menu_name}
                    </p>
                </div>
            )
        })}
      </div>
      <hr className=" my-2 h-[2px] border-none bg-gray-300"/>
    </div>
  );
}

export default ExploreMenu;