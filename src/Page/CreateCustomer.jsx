import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdEmail, MdCall, MdMessage } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { LiaBarcodeSolid } from "react-icons/lia";

const CreateCustomer = () => {
   
   const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const customer = Object.fromEntries(formData.entries());
      console.log(customer);

      if(!customer.name || !customer.email || !customer.phone || !customer.address || !customer.city ||
         !customer.state || !customer.postalCode || !customer.country || !customer.customerCode || !customer.note){
          alert("Please fill all the fields!!!");
          return
      }

      try {
        const response = await fetch("http://localhost:4000/customers",{
            method: "POST",
            body: formData
         })
        const data = await response.json();
        if(response.ok){
            alert("item added successfully!!!")
        }else{
            alert("Unable to add customer")
        }
      } catch (error) {
         alert("Server not responding")
      }
      
   }
  return (
    <div className="p-2 h-screen w-full bg-white text-gray-900 overflow-auto">
      <div className="flex flex-col bg-white w-1/2 rounded-md shadow-2xl p-6">
        <div className="flex items-center justify-center">
          <FaUserCircle className="w-20 rounded-full h-16" />
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            name="name"
            autoComplete="off"
            className="outline-none w-full border-b-2  border-gray-200 focus:border-[#4baf4f]  text-gray-600 text-sm placeholder:text-gray-500  px-1"
            placeholder="Name"
            type="text"
          />
          <div className="flex items-center gap-2 w-full">
            <MdEmail />
            <input
              name="email"
              autoComplete="off"
              className="outline-none w-full border-b-2  border-gray-200 focus:border-[#4baf4f]  text-gray-600 text-sm  placeholder:text-gray-500 px-1"
              placeholder="Email"
              type="text"
            />
          </div>

          <div className="flex items-center gap-2">
            <MdCall />
            <input
              name="phone"
              autoComplete="off"
              className="outline-none w-full border-b-2  border-gray-200 focus:border-[#4baf4f]  text-gray-600 text-sm placeholder:text-gray-500  px-1"
              placeholder="Phone"
              type="text"
            />
          </div>
          <div className="flex items-center gap-2">
            <FaLocationDot />
            <input
              name="address"
              autoComplete="off"
              className="outline-none w-full border-b-2  border-gray-200  focus:border-[#4baf4f]  text-gray-600 text-sm placeholder:text-gray-500  px-1"
              placeholder="Address"
              type="text"
            />
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col gap-4">
              {/* div 1 */}
              <div className="flex items-center gap-2">
                <input
                  name="city"
                  autoComplete="off"
                  className="outline-none border-b-2 border-gray-200  focus:border-[#4baf4f]  text-gray-600 text-sm placeholder:text-gray-500  px-1"
                  placeholder="City"
                  type="text"
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  name="state"
                  autoComplete="off"
                  className="outline-none border-b-2  border-gray-200  focus:border-[#4baf4f]  text-gray-600 text-sm placeholder:text-gray-500  px-1"
                  placeholder="State"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {/* div 2 */}
              <div className="flex items-center gap-2">
                <input
                  name="postalCode"
                  autoComplete="off"
                  className="outline-none border-b-2  border-gray-200 focus:border-[#4baf4f]  text-gray-600 text-sm  placeholder:text-gray-500 px-1"
                  placeholder="Postal code"
                  type="text"
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  name="country"
                  autoComplete="off"
                  className="outline-none border-b-2  border-gray-200  focus:border-[#4baf4f]  text-gray-600 text-sm  placeholder:text-gray-500 px-1"
                  placeholder="Country"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 w-full">
            <LiaBarcodeSolid />
            <input
              name="customerCode"
              autoComplete="off"
              className="outline-none w-full border-b-2  border-gray-200  focus:border-[#4baf4f]  text-gray-600 text-sm placeholder:text-gray-500  px-1"
              placeholder="Customer code"
              type="text"
            />
          </div>
          <div className="flex items-center gap-2 w-full">
            <MdMessage />
            <textarea
              name="note"
              autoComplete="off"
              className="outline-none w-full border-b-2  border-gray-200  focus:border-[#4baf4f]  text-gray-600 text-sm  placeholder:text-gray-500 px-1"
              placeholder="Note"
              type="text"
            />
          </div>
          <div className="flex justify-end mt-4 gap-4">
             <Link to="/customers" className="py-2 px-2 w-[100px] text-xs font-medium rounded-sm text-gray-900 bg-white shadow-md">
               Cancel
             </Link>
             <button  type="submit" className="py-2 px-2 w-[100px] text-xs font-medium rounded-sm text-white bg-[#8cc748]">
                Save
             </button>
           </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCustomer;



// <div>
// <label
//   htmlFor="poseCode"
//   className="block text-[15px] font-medium text-gray-700"
// >
//   POS PIN
// </label>
// <input
//   type="number"
//   id="poseCode"
//   name="poseCode"
//   autoComplete="off"
//   className="mt-1 block w-full p-2 text-xs bg-[#f4f5f6] rounded-md shadow-sm focus:ring-none focus:outline-gray-300"
//   placeholder='* * * *'
// />
//  <span className="text-[15px] text-red-600">{"validationErrors.poseCode"}</span>
// </div>
