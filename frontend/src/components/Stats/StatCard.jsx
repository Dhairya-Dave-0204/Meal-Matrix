import React from "react";

function StatCard() {
  return (
    <div className="stat-card grid md:grid-cols-2 grid-cols-1 px-8 py-4 gap-12 lg:w-3/5 w-full">
      <div className=" p-8 border border-secondary shadow-md rounded-3xl hover:scale-105 hover:shadow-2xl transition-all duration-700">
        <i className="ri-heart-3-fill text-primary text-2xl"></i>
        <h3 className="font-medium text-4xl">25,000+</h3>
        <p>Diners love our products</p>
      </div>

      <div className=" p-8 border border-secondary shadow-md rounded-3xl hover:scale-105 hover:shadow-2xl transition-all duration-700">
        <i className="ri-store-2-fill text-primary text-2xl"></i>
        <h3 className="font-medium text-4xl">150+</h3>
        <p>Registerd restaurants</p>
      </div>

      <div className=" p-8 border border-secondary shadow-md rounded-3xl hover:scale-105 hover:shadow-2xl transition-all duration-700">
        <i className="ri-restaurant-2-fill text-primary text-2xl"></i>
        <h3 className="font-medium text-4xl">100K+</h3>
        <p>App impressions</p>
      </div>

      <div className=" p-8 border border-secondary shadow-md rounded-3xl hover:scale-105 hover:shadow-2xl transition-all duration-700">
        <i className="ri-user-heart-fill text-primary text-2xl"></i>
        <h3 className="font-medium text-4xl">5,000+</h3>
        <p>Trusted positive reviews</p>
      </div>
    </div>
  );
}

export default StatCard;
