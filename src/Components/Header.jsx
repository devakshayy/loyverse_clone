import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';


const Header = ({openToggle}) => {
   const data = useLocation();
   const navigate = useNavigate();
  return (
    <div className='fixed flex items-center justify-between text-sm text-white gap-4 top-0 z-50 w-full px-4 py-2 bg-[#5BA4FF] border-b border-gray-200' >
     
       <div className='flex gap-2'>
       <button onClick={openToggle}>
       <FiMenu  />
       </button>
       <div className='font-semibold'>Item list</div>
       </div>
        <div className='flex items-center justify-center gap-2'>
             <button onClick={() =>navigate("/")} className='font-semibold'>{data.state?"Logout":"Login"}</button>
            
            <div className='flex gap-1'>
            <FaUserCircle className='text-xl' />
            <span className='text-[14px] font-semibold capitalize'>{data.state}</span>
            </div>
        </div>
    </div>
  )
}

export default Header
