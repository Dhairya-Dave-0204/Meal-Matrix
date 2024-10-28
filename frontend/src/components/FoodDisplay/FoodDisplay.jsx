import React, { useContext } from 'react'
import { StoreContext } from '../../context/storeContext'
import { FoodItem } from '../component_index'

function FoodDisplay({category}) {

    const {food_list} = useContext(StoreContext)

  return (
    <div id='food-display' className='mt-7 px-4 md:px-24 lg:px-48 py-4 mx-4 md:mx-8 my-6 md:my-20'>
        <h2 className=' text-6xl text-center text-primary font-semibold font-expletus mb-8'>
            Top dishes near you
        </h2>
        
        <div className='food-display-list grid mt-7 gap-7'>
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