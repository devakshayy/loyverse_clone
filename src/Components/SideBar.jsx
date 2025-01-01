import React from 'react'
import { FaUserCircle } from "react-icons/fa";

import { links } from '../data/links.jsx'
import { Link } from 'react-router-dom';

const SideBar = ({isSidebarOpen}) => {
  return (
    <aside className={`fixed top-0 left-0 
                       z-40  h-screen 
                       pt-[42px] bg-white
                       border-r border-gray-200
                       transition-all duration-300
                       ${isSidebarOpen ? "w-[300px]" : "w-[70px]"} `}>
         <div  className='px-[18px] flex justify-center border-b-[1px] py-[14px]'><FaUserCircle /></div>
        <div className='h-full overflow-auto'>
              <ul className='space-y-2 flex flex-col items-center  justify-center font-medium'>
                  {links.map((link,idx) => (
                   <Link to={link.path} key={idx} className='px-[21px] hover:bg-[#f2f2f2] hover:shadow-md active:border-l-4 border-indigo-500 py-[14px]' >
                       <li > { link.icon} </li>
                   </Link>
                  ))}
              </ul>
        </div>
    </aside>
  )
}

export default SideBar
