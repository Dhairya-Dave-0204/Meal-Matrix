import React from "react";
import { StatCard } from "../component_index";

function Stats() {
  return (
    <div>
      <section className="flex flex-col lg:flex-row gap-8 px-6 py-4 md:px-28 lg:px-56 mb-16">
        {/* ============= LEFT CONTENT =========== */}
        <div className="stat-text lg:w-2/5">
          <h2 className="text-2xl font-semibold mb-4 md:text-5xl font-expletus">
            <span className="text-primary">
              Elevating Your Business <br /> Experience
            </span>{" "}
            & Enriching <br /> Your Culinary Journey
          </h2>
          <p className=" md:text-xl">
            Whether you are a food business enthusiast exploring new flavors or
            a casual diner seeking convenience, Meal Matrix is here to enhance
            your culinary adventures.
          </p>
        </div>

        {/* ============= RIGHT CONTENT =========== */}
        <StatCard />
      </section>
    </div>
  );
}

export default Stats;
