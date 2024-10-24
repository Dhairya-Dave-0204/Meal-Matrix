import React from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      {/* ========================== FIRST SECTION ============================== */}
      <div className=" flex items-center justify-between flex-col-reverse xl:flex-row px-4 md:px-28 lg:px-52 py-4 gap-8 mx-4 md:mx-8 my-6 md:my-20">
        {/* ============= LEFT CONTENT =========== */}
        <div>
          <h2 className="text-2xl md:text-4xl font-medium mb-2">
            {" "}
            <span className=" text-primary">No Markup</span> Food Ordering
          </h2>
          <h1 className="md:text-7xl text-4xl font-bold font-expletus mb-6">
            Your Passport to <br className="hidden md:visible" /> the{" "}
            <span className=" text-primary"> Future of Dining </span>
          </h1>
          <p className="md:text-lg text-sm mb-4">
            Welcome to Meal Matrix, the revolutionary Food-Tech that is <br />{" "}
            transforming your dining experience. Happy You, <br /> Happy
            Restaurants.
          </p>
          <Link to="/menu">
            <button className=" bg-primary rounded-lg text-white px-3 py-2 md:px-6 md:py-4 text-lg font-semibold hover:bg-secondary hover:text-primary hover:scale-105 hover:text-xl transition-all duration-700">
              View Menu
            </button>
          </Link>
        </div>
        {/* ============= RIGHT CONTENT =========== */}
        <div>
          <img src={assets.Section1} alt="" />
        </div>
      </div>
    </>
  );
}

export default Header;
