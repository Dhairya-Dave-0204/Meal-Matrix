import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/admin_assets/assets'

function Sidebar() {
  return (
    <div className='sidebar w-[18%] min-h-[100vh] border-2 border-secondary border-t-0 text-lg'>
        <div className='sidebar-options pt-12 pl-[20%] flex flex-col gap-5 font-medium'>
            <NavLink to="/add" className='sidebar-option flex items-center gap-3 border border-secondary border-r-0 py-2 px-3 rounded-t-[3px] rounded-l-[3px] cursor-pointer'>
                <img src={assets.add_icon} alt="" />
                <p>Add items</p>
            </NavLink>
            
            <NavLink to="/list" className='sidebar-option flex items-center gap-3 border border-secondary border-r-0 py-2 px-3 rounded-t-[3px] rounded-l-[3px] cursor-pointer'>
                <img src={assets.order_icon} alt="" />
                <p>List items</p>
            </NavLink>
            
            <NavLink to="/orders" className='sidebar-option flex items-center gap-3 border border-secondary border-r-0 py-2 px-3 rounded-t-[3px] rounded-l-[3px] cursor-pointer'>
                <img src={assets.order_icon} alt="" />
                <p>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar