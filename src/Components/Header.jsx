import React from 'react'
import { FiMenu } from "react-icons/fi";


const Header = ({openToggle}) => {
  return (
    <div className='fixed flex items-center text-sm text-white gap-4 top-0 z-50 w-full px-4 py-1 bg-[#4baf4f] border-b border-gray-200' >
     
       <button onClick={openToggle}>
       <FiMenu  />
       </button>
       <div className='font-semibold'>Item list</div>
    </div>
  )
}

export default Header
