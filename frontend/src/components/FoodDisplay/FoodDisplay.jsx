import React, { useContext } from 'react'
import { StoreContext } from '../../context/storeContext'
import { FoodItem } from '../component_index'

function FoodDisplay({category}) {

    const {food_list} = useContext(StoreContext)

  return (
    <div id='food-display' className='px-4 py-4 mx-4 my-6 food-display mt-7 md:px-24 lg:px-48 md:mx-8 md:my-20'>
        <h2 className='mb-8 text-6xl font-semibold text-center  text-primary font-expletus'>
            Top dishes for you
        </h2>
        
        <div className='grid food-display-list mt-7 gap-7'>
            {food_list.map((item,index) => {
                if (category === "All" || category===item.category) {
                    return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                }
                
            })}
        </div>
    </div>
  )
}

export default FoodDisplay