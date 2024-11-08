import React, { useContext } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext'

function FoodItem({id, name, price, description, image}) {

    const {cartItems, addToCart, removeFromCart, url} = useContext(StoreContext)

  return (
    <div className='w-[100%] m-auto rounded-xl hover:scale-105 hover:shadow-2xl transition-all duration-500'>
        <div className='relative'>
            <img src={url+"/images/"+image} alt="" className='w-[100%] rounded-lg'/>
            {
                !cartItems[id] ? 
                <img src={assets.add_icon_white} onClick={() => addToCart(id)} alt="" 
                    className='w-9 absolute bottom-4 right-4 cursor-pointer rounded-[50%]'
                />
                : <div className='absolute bottom-4 right-4 flex items-center gap-3 p-1 rounded-3xl bg-white'>
                    <img src={assets.remove_icon_red} onClick={() => removeFromCart(id)} alt="" 
                        className='w-7 cursor-pointer'
                    />
                    
                    <p>{cartItems[id]}</p>

                    <img src={assets.add_icon_green} onClick={() => removeFromCart(id)} alt="" />
                </div>
            }
        </div>
        
        <div className='p-7'>
            <div className='flex justify-between items-center mb-2'>
                <p className=' text-xl font-medium'>
                    {name}
                </p>
                
                <img src={assets.rating_starts} alt="" className='w-[70px]'/>
            </div>
            
            <div>
                <p className='text-sm'>
                    {description}
                </p>
                
                <p className='text-primary text-2xl font-semibold my-2'>
                    ${price}
                </p>
            </div>
        </div>
    </div>
  )
}

export default FoodItem