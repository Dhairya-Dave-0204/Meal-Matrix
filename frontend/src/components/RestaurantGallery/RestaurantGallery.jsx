import React from 'react'
import { assets } from '../../assets/frontend_assets/assets';


function RestaurantGallery() {

const images = [
    { src: assets.restaurnat1, alt: "Restaurant1", large: true },
    { src: assets.restaurnat2, alt: "Restaurant2", large: false },
    { src: assets.restaurnat3, alt: "Restaurant3", large: false },
    { src: assets.restaurnat4, alt: "Restaurant4", large: false },
    { src: assets.restaurnat5, alt: "Restaurant5", large: false },
  ];
    
  return (
    <div className="p-4 mx-auto mt-8 sm:mt-10">
        <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-3 lg:grid-cols-3">
          <div className="relative col-span-1 md:col-span-2 lg:col-span-2">
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="object-cover w-full h-full rounded-lg shadow-lg"
            />
            <p className='absolute bottom-0 right-0 px-1 py-1 text-white bg-black rounded-lg max-sm:text-sm md:py-3 md:px-6 opacity-70'>See all photos</p>
          </div>
          <div className="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-2 max-sm:hidden">
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
  )
}

export default RestaurantGallery