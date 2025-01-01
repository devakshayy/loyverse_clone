import React, { useEffect, useState } from "react";
import { FaAngleRight,FaAngleLeft, FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";


const Items = () => {
  const [items, setItems ] = useState([]);

  const getProducts = () => {
       fetch("http://localhost:4000/items")
       .then(response => {
           if (response.ok) {
              return response.json()
           }
           throw new Error()
       })
       .then(data => {
           setItems(data)
       })
       .catch(error => {
            alert("Unabel to get the data")
       })
  }

  useEffect(getProducts,[])

  return (
    <div className="p-4 h-screen w-full  text-white">
      <div className=" flex flex-col justify-between gap-5 pt-[24px] pb-[12px] bg-white w-full shadow-lg rounded-sm">
        <div className="flex justify-between px-[30px] items-center">
          {" "}
          {/* Add item btn div */}
          <div className="flex items-center gap-2">
            <Link to="/create" className="py-1 px-2 text-xs font-medium rounded-sm text-white bg-[#8cc748]">
              + ADD ITEM
            </Link>
            <button className="py-1 px-2 text-xs font-medium rounded-sm text-gray-900 hover:bg-[#f2f2f2]">
              IMPORT
            </button>
            <button className="py-1 px-2 text-xs font-medium rounded-sm text-gray-900 hover:bg-[#f2f2f2]">
              EXPORT
            </button>
          </div>
          <div className="flex gap-2 items-center">
            <form className="w-[150px] mx-auto">
              <label
                htmlFor="categories"
                className="block mb-1 text-[13px] font-medium text-gray-900"
              >
                Category
              </label>
              <div className="relative">
                <select
                  id="categories"
                  className="block py-2.5 px-0 w-full text-xs text-gray-500 bg-transparent border-0 border-b-2  appearance-none  border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                >
                  <option value="all">All items</option>
                  <option value="no-category">No category</option>
                  <option value="electronics">Electronics</option>
                  <option value="fashion">Fashion</option>
                  <option value="furniture">Furniture</option>
                </select>
                <FaCaretDown className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </form>
            <form className="w-[150px] mx-auto">
              <label
                htmlFor="categories"
                className="block mb-1 text-[13px] font-medium text-gray-900"
              >
                Stock alert
              </label>
              <div className="relative">
                <select
                  id="categories"
                  className="block py-2.5 px-0 w-full text-xs text-gray-500 bg-transparent border-0 border-b-2  appearance-none border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                >
                  <option value="all">All items</option>
                  <option value="no-category">Low stock</option>
                  <option value="electronics">Out of stock</option>
                </select>
                <FaCaretDown className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </form>
          </div>
        </div>

        <div>
          {/* Table div */}

          <div className="relative w-full overflow-auto  ">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all-search"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2"
                      />
                      <label htmlFor="checkbox-all-search" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Code
                  </th>
                  <th scope="col" className="px-6 py-3">
                   Barcode
                  </th>
                  <th scope="col" className="px-6 py-3">
                   Item name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Cost
                  </th>
                  <th scope="col" className="px-6 py-3">
                   Margin
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                 {items.map((item,idx) => (
                     <tr key={item.id} className="bg-white border-b hover:bg-gray-50 dark:hover:bg-gray-100">
                     <td className="w-4 p-4">
                       <div className="flex items-center">
                         <input
                           id="checkbox-table-search-1"
                           type="checkbox"
                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                         />
                         <label htmlFor="checkbox-table-search-1" className="sr-only">
                           checkbox
                         </label>
                       </div>
                     </td>
                     <td className="px-6 py-4">{item.code}</td>
                     <td className="px-6 py-4">{item.barcode}</td>
                     <th
                       scope="row"
                       className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                     >
                       {item.name}
                     </th>
                     <td className="px-6 py-4">{item.category}</td>
                     <td className="px-6 py-4">${item.price}</td>
                     <td className="px-6 py-4">${item.cost}</td>
                     <td className="px-6 py-4">{item.margin}%</td>
                     <td className="flex items-center px-6 py-4">
                       <a
                         href="#"
                         className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                       >
                         View
                       </a>
                       <a
                         href="#"
                         className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                       >
                         Remove
                       </a>
                     </td>
                   </tr>
                 ))}
                {/* <tr className="bg-white border-b hover:bg-gray-50 dark:hover:bg-gray-100">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-2"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 "
                      />
                      <label for="checkbox-table-search-2" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    Microsoft Surface Pro
                  </th>
                  <td className="px-6 py-4">Laptop PC</td>
                  <td className="px-6 py-4">S$2000</td>
                  <td className="px-6 py-4">$2999</td>
                  <td className="px-6 py-4">15%</td>
                  <td className="flex items-center px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                    >
                      Remove
                    </a>
                  </td>
                </tr>
                <tr className="bg-white border-b hover:bg-gray-50 ">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-3"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 "
                      />
                      <label for="checkbox-table-search-3" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Magic Mouse 2
                  </th>
                  <td className="px-6 py-4">Accessories</td>
                  <td className="px-6 py-4">S$2000</td>
                  <td className="px-6 py-4">$2999</td>
                  <td className="px-6 py-4">15%</td>
                  <td className="flex items-center px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                    >
                      Remove
                    </a>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          {" "}
          {/* Pagination div */}
          <div className="flex justify-between px-[30px] items-center">
          {" "}
          {/* Add item btn div */}
          <div className="flex items-center">
            <button className="p-3 py-2  text-sm font-medium ring-gray-200 ring-[1px] shadow-gray-900 active:shadow-inner text-gray-900 bg-white">
              <FaAngleLeft />
            </button>
            <button className="px-3 py-2 text-sm font-medium ring-gray-200 ring-[1px] shadow-gray-900 active:shadow-inner text-gray-900 bg-white">
              <FaAngleRight />
            </button>
            <div className="text-gray-900 text-xs flex items-center gap-2 ml-5">
               <div>Page:</div>
               <button className="px-3 py-1 text-sm font-medium ring-gray-200 ring-[1px] shadow-gray-900 active:shadow-inner bg-white">
                  1
               </button>
               <div>of 1</div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
