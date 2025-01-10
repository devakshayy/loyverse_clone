import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom'

const CreateEmployee = () => {
  return (
    <div className="p-2 h-screen w-full bg-white text-gray-900 overflow-auto">  
        <form id="form" >
          <div className="bg-white w-1/3 rounded-md shadow-2xl">
            <div className="flex items-center justify-center border-b-[1px] px-3 py-2">
                <FaUserCircle className='w-16 rounded-full h-16' />
            </div>
       
             
              <div className="p-4 w-full flex flex-col gap-1">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[15px] font-medium text-gray-700"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="off"
                    className="mt-1 block w-full p-2 text-xs bg-[#f4f5f6] rounded-md shadow-sm focus:ring-none focus:outline-gray-300"
                  />
                  <span className="text-[15px] text-red-600"> {/*This field cannot be blank*/}</span> 
                </div>
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[15px] font-medium text-gray-700"
                  >
                     Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="off"
                    className="mt-1 block w-full p-2 text-xs bg-[#f4f5f6] rounded-md shadow-sm focus:ring-none focus:outline-gray-300"
                  />
                   <span className="text-[15px] text-red-600">{/*Enter a valid email*/}</span>
                </div>
                {/* Item Name */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-[15px] font-medium text-gray-700"
                  >
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    autoComplete="off"
                    className="mt-1 block w-full p-2 text-xs bg-[#f4f5f6] rounded-md shadow-sm focus:ring-none focus:outline-gray-300"
                  />
                   <span className="text-[15px] text-red-600">{/*Phone number is too short*/}</span>
                </div>
                {/* Select role */}
                <div>
                <label
                htmlFor="role"
                className="block mb-1 text-[15px] font-medium text-gray-900"
              >
                Role
              </label>
                <select
                  id="role"
                  name="role"
                  className="mt-1 block w-full p-2 text-xs bg-[#f4f5f6] rounded-md shadow-sm focus:ring-none focus:outline-gray-300"
                  >
                  <option value="all">Select role</option>
                  <option value="no-category">Administrator</option>
                  <option value="electronics">Manager</option>
                  <option value="fashion">Cashier</option>
                </select>
                </div>
                {/* Pos Pin */}
                <div>
                  <label
                    htmlFor="poseCode"
                    className="block text-[15px] font-medium text-gray-700"
                  >
                    POS PIN
                  </label>
                  <input
                    type="number"
                    id="poseCode"
                    name="poseCode"
                    autoComplete="off"
                    className="mt-1 block w-full p-2 text-xs bg-[#f4f5f6] rounded-md shadow-sm focus:ring-none focus:outline-gray-300"
                    placeholder='* * * *'
                  />
                   <span className="text-[15px] text-red-600">{/*PIN must be 4 digits*/}</span>
                </div>
                {/* Sale Rate */}
                <div className="flex justify-end mt-1 gap-4">
                 <Link to="/items" className="py-2 px-2 w-[100px] text-xs font-medium rounded-sm text-gray-900 bg-white shadow-md">
                   Cancel
                 </Link>
                 <button  type="submit" className="py-2 px-2 w-[100px] text-xs font-medium rounded-sm text-white bg-[#8cc748]">
                    Save
                 </button>
               </div>
              </div>
           
          </div>
        </form>
      </div>
  )
}

export default CreateEmployee
