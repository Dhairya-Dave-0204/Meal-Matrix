import React from "react";
import { assets } from "../../assets/admin_assets/assets";

function Home({ url }) {
  const images = [
    { src: assets.restaurnat1, alt: "Restaurant1", large: true },
    { src: assets.restaurnat2, alt: "Restaurant2", large: false },
    { src: assets.restaurnat3, alt: "Restaurant3", large: false },
    { src: assets.restaurnat4, alt: "Restaurant4", large: false },
    { src: assets.restaurnat5, alt: "Restaurant5", large: false },
  ];

  return (
    <div className="w-[70%] ml-5 mt-5 md:ml-16 md:mt-14 text-lg add">
      <h1 className="text-3xl font-medium md:font-semibold md:font-expletus md:mb-4 md:text-5xl text-primary">Restaurant Name</h1>

      <div className="p-4 mx-auto">
        <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="object-cover w-full h-full rounded-lg shadow-lg"
            />
          </div>
          <div className="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-2">
            {images.slice(1).map((image, index) => (
              <div key={index} className="h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
