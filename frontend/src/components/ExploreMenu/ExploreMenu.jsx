import React from "react";
import { assets, menu_list } from "../../assets/frontend_assets/assets";

function ExploreMenu({ category, setCategory }) {
  return (
    <div
      id="explore_menu"
      className="flex flex-col gap-6 px-4 py-4 mx-4 my-6 explore-menu md:px-24 lg:px-48 md:mx-8 md:my-20"
    >
      <h2 className="text-4xl font-semibold text-center sm:text-5xl text-primary font-expletus">
        Explore dishes from restaurant
      </h2>
      <p className="text-lg font-medium text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
        similique dignissimos praesentium odio! Fugit, voluptates iusto nemo
        aliquam laboriosam voluptas.
      </p>
      <div className="grid grid-cols-1 gap-10 my-4 text-center cursor-pointer xl:grid-cols-8 lg:grid-cols-4 md:grid-cols-2 place-items-center">
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
            >
              <img
                src={item.menu_image}
                alt=""
                className={`${
                  category === item.menu_name ? "active" : ""
                } rounded-full transition-all duration-200 `}
              />
              <p className="mt-2 text-xl font-medium">{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr className=" my-2 h-[2px] border-none bg-gray-300" />
    </div>
  );
}

export default ExploreMenu;
