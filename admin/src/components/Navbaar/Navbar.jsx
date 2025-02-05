import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../../assets/admin_assets/assets'

function Navbar() {

  const navigate = useNavigate()
  
  return (
    <div className='flex justify-between items-center py-4 px-[4%]'>
        <img src={assets.logo} alt="" className='cursor-pointer w-42' onClick={() => navigate("/")}/>
        <img src={assets.profile_image} alt="" className='w-[50px]'/>
    </div>
  )
}

export default Navbar