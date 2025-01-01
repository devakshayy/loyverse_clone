import React from "react";
import { Link } from "react-router-dom";

const Create = () => {
  return (
    <div className="p-4 h-screen w-full bg-white text-gray-900">
      
        <form name="form" id="form" >
          <div className="bg-white rounded-md shadow-lg">
            <div className="border-b-[1px] px-3 py-2">
              <a className="itemadd-ul-text-decoration font-bold text-[#4baf4f]">New Item</a>
            </div>
            <div className="flex gap-20">
              {/* Left Column */}
              <div className="p-3 w-full flex flex-col gap-2">
                {/* Item Code */}
                <div>
                  <label
                    htmlFor="code"
                    className="block text-[15px] font-medium text-gray-700"
                  >
                    Item Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="code"
                    name="code"
                    autoComplete="off"
                    className="mt-1 block w-full p-2 text-xs bg-[#f4f5f6] rounded-md shadow-sm focus:ring-none focus:outline-gray-300"
                  />
                  <span className="text-[15px] text-red-600">Error</span>
                </div>
                {/* Barcode */}
                <div>
                  <label
                    htmlFor="barcode"
                    className="block text-[15px] font-medium text-gray-700"
                  >
                    Item Barcode <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="barcode"
                    name="barcode"
                    autoComplete="off"
                    className="mt-1 block w-full p-2 text-xs bg-[#f4f5f6] rounded-md shadow-sm focus:ring-none focus:outline-gray-300"
                  />
                   <span className="text-[15px] text-red-600">Error</span>
                </div>
                {/* Item Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[15px] font-medium text-gray-700"
                  >
                    Item Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="off"
                    className="mt-1 block w-full p-2 text-xs bg-[#f4f5f6] rounded-md shadow-sm focus:ring-none focus:outline-gray-300"
                  />
                   <span className="text-[15px] text-red-600">Error</span>
                </div>
                {/* Purchase Rate */}
                <div>
                  <label
                    htmlFor="purchaserate"
                    className="block text-[15px] font-medium text-gray-700"
                  >
                    Price
                  </label>
                  <input
                    type="text"
                    id="purchaserate"
                    name="purchaserate"
                    autoComplete="off"
                    className="mt-1 block w-full p-2 text-xs bg-[#f4f5f6] rounded-md shadow-sm focus:ring-none focus:outline-gray-300"
                    placeholder="0.0000"
                  />
                   <span className="text-[15px] text-red-600">Error</span>
                </div>
                {/* Sale Rate */}
               
              </div>

              {/* Right Column */}
              <div className="p-3 w-full flex flex-col gap-2">
                {/* Brand */}
                <div>
                  <label
                    htmlFor="salerate"
                    className="block text-[15px] font-medium text-gray-700"
                  >
                    Cost
                  </label>
                  <input
                    type="text"
                    id="salerate"
                    name="salerate"
                    autoComplete="off"
                    className="mt-1 block w-full p-2 text-xs bg-[#f4f5f6] rounded-md shadow-sm focus:ring-none focus:outline-gray-300"
                  />
                   <span className="text-[15px] text-red-600">Error</span>
                </div>
                {/* Category */}
                <div>
                  <label
                    htmlFor="category"
                    className="block text-[15px] font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <textarea
                    type="text"
                    id="category"
                    name="category"
                    autoComplete="off"
                    className="mt-1 block w-full p-2 text-xs bg-[#f4f5f6] rounded-md shadow-sm focus:ring-none focus:outline-gray-300"
                  />
                </div>
                <span className="text-[15px] text-red-600">Error</span>
                {/* Opening Qty */}
                <div>
                  <label
                    htmlFor="openingqty"
                    className="block text-[15px] font-medium text-gray-700"
                  >
                    Upload image
                  </label>
                  <input
                    type="file"
                    id="openingqty"
                    name="openingqty"
                    autoComplete="off"
                    className="mt-1 block w-full p-2 text-xs bg-[#f4f5f6] rounded-md shadow-sm focus:ring-none focus:outline-gray-300"
                  />
                   <span className="text-[15px] text-red-600">Error</span>
                   
                </div>
               <div className="flex justify-end gap-4">
               <Link to="/items" className="py-2 px-2 w-[100px] text-xs font-medium rounded-sm text-gray-900 bg-white shadow-md">
                   Cancel
                 </Link>
                 <button type="submit" className="py-2 px-2 w-[100px] text-xs font-medium rounded-sm text-white bg-[#8cc748]">
                    Save
                 </button>
               </div>
              </div>
            </div>
          </div>
        </form>
      </div>
  );
};

export default Create;

{
  /* <form name="form" id="form" onSubmit={handleSubmit}>
<div className="bg-white rounded-md shadow-lg">
  <div className="border-b-[1px] px-3 py-2">
    <a className="itemadd-ul-text-decoration">New Item</a>
  </div>

  <div className="flex gap-20">
    <div className="p-3 w-full flex flex-col gap-2">
      <div>
        <label
          htmlFor="code"
          className="block text-[15px] font-medium text-gray-700"
        >
          Item Code <span className="text-red-500">*</span>
        </label>
        <input
          
          type="text"
          id="code"
          name="code"
          autoComplete="off"
          className="mt-1 block w-full p-2 text-xs bg-[#f4f5f6] rounded-md shadow-sm focus:ring-none focus:outline-gray-300"
        />
      </div>
      <div>
        <label
          htmlFor="barcode"
          className="block text-[15px] font-medium text-gray-700"
        >
          Item Barcode <span className="text-red-500">*</span>
        </label>
        <input
        
          type="text"
          id="barcode"
          name="barcode"
          autoComplete="off"
          className="mt-1 block w-full p-2 text-xs bg-[#f4f5f6] rounded-md shadow-sm focus:ring-none focus:outline-gray-300"
        />
      </div>
      <div>
        <label
          htmlFor="name"
          className="block text-[15px] font-medium text-gray-700"
        >
          Item Name
        </label>
        <input
         
          type="text"
          id="name"
          name="name"
          autoComplete="off"
          className="mt-1 block w-full p-2 text-xs bg-[#f4f5f6] rounded-md shadow-sm focus:ring-none focus:outline-gray-300"
        />
      </div>
      <div>
        <label
          htmlFor="purchaserate"
          className="block text-[15px] font-medium text-gray-700"
        >
          Purchase Rate
        </label>
        <input
         
          type="text"
          id="purchaserate"
          name="purchaserate"
          autoComplete="off"
          className="mt-1 block w-full p-2 text-xs bg-[#f4f5f6] rounded-md shadow-sm focus:ring-none focus:outline-gray-300"
          placeholder="0.0000"
        />
      </div>
      <div>
        <label
          htmlFor="salerate"
          className="block text-[15px] font-medium text-gray-700"
        >
          Sale Rate
        </label>
        <input
         
          type="text"
          id="salerate"
          name="salerate"
          autoComplete="off"
          className="mt-1 block w-full p-2 text-xs bg-[#f4f5f6] rounded-md shadow-sm focus:ring-none focus:outline-gray-300"
        />
      </div>
    </div>

    <div className="p-3 w-full flex flex-col gap-2">
      <div>
        <label
          htmlFor="brand"
          className="block text-[15px] font-medium text-gray-700"
        >
          Item Brand
        </label>
        <input
          
          type="text"
          id="brand"
          name="brand"
          autoComplete="off"
          className="mt-1 block w-full p-2 text-xs bg-[#f4f5f6] rounded-md shadow-sm focus:ring-none focus:outline-gray-300"
        />
      </div>
      <div>
        <label
          htmlFor="category"
          className="block text-[15px] font-medium text-gray-700"
        >
          Item Category
        </label>
        <input
          
          type="text"
          id="category"
          name="category"
          autoComplete="off"
          className="mt-1 block w-full p-2 text-xs bg-[#f4f5f6] rounded-md shadow-sm focus:ring-none focus:outline-gray-300"
        />
      </div>
      <div>
        <label
          htmlFor="openingqty"
          className="block text-[15px] font-medium text-gray-700"
        >
          Opening Qty
        </label>
        <input
          
          type="text"
          id="openingqty"
          name="openingqty"
          autoComplete="off"
          className="mt-1 block w-full p-2 text-xs bg-[#f4f5f6] rounded-md shadow-sm focus:ring-none focus:outline-gray-300"
        />
      </div>
    </div>
  </div>
</div>
</form> */
}
