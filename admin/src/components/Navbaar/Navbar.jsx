import React from 'react'
import { assets } from '../../assets/admin_assets/assets'

function Navbar() {
  return (
    <div className='flex justify-between items-center py-4 px-[4%]'>
        <img src={assets.logo} alt="" className='w-42'/>
        <img src={assets.profile_image} alt="" className='w-[50px]'/>
    </div>
  )
}

export default Navbar