import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MdEmail, MdCall, MdMessage } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { LiaBarcodeSolid } from "react-icons/lia";

const CustomerEdit = () => {
   const {cusid} = useParams();
   const [initialData, setInitialData] = useState([])
   const [validationErrors,setValidationErrors] = useState({})
   const navigate = useNavigate()
   
   const getCustomer = () => {
      fetch(`http://localhost:4000/customers/${cusid}`)
      .then(response => {
         if(response.ok){
            return response.json()
         }throw new Error()
      })
      .then(data => {
        setInitialData(data)
      })
      .catch(error => {
        alert("Unable to get Customer!!!..")
      })
   }

   useEffect(getCustomer,[])
   
   console.log(initialData);
   

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
        const response = await fetch(`http://localhost:4000/customers/${cusid}`,{
            method: "PATCH",
            body: formData
         })
         const data = await response.json();
        if(response.ok){
            navigate("/customers")
        }else if (response.status === 400){
            setValidationErrors(data)
        }
        else{
            alert("Unable to Update the Customer!!")
        }
      } catch (error) {
         alert("Server not responding!!!....")
      }
   }
   console.log(initialData.totalVisits);
   
  return (
    <div className="p-2 h-screen w-full bg-white text-gray-900 overflow-auto">
      <div className="flex flex-col bg-white w-1/2 rounded-md shadow-2xl p-6">
        <div className="flex items-center justify-center">
          <FaUserCircle className="w-20 rounded-full h-16" />
        </div>
       {initialData && <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input 
            defaultValue={initialData.totalVisits}
            name="totalVisits"
            type="hidden"  />
          <input
            defaultValue={initialData.name}
            name="name"
            autoComplete="off"
            className={`outline-none w-full border-b-2  border-gray-200 focus:border-[#4baf4f] ${ validationErrors.name > 0 ? "border-red-500" : "border-gray-200"}  text-gray-600 text-sm placeholder:text-gray-500  px-1`}
            placeholder="Name"
            type="text"
          />
          <div className="flex items-center gap-2 w-full">
            <MdEmail />
            <input
              defaultValue={initialData.email}
              name="email"
              autoComplete="off"
              className={`outline-none w-full border-b-2  border-gray-200 focus:border-[#4baf4f] ${ validationErrors.email ? "border-red-500" : "border-gray-200"}  text-gray-600 text-sm placeholder:text-gray-500  px-1`}
              placeholder="Email"
              type="text"
            />
          </div>

          <div className="flex items-center gap-2">
            <MdCall />
            <input
             defaultValue={initialData.phone}
              name="phone"
              autoComplete="off"
              className={`outline-none w-full border-b-2  border-gray-200 focus:border-[#4baf4f] ${ validationErrors.phone ? "border-red-500" : "border-gray-200"}  text-gray-600 text-sm placeholder:text-gray-500  px-1`}
              placeholder="Phone"
              type="text"
            />
          </div>
          <div className="flex items-center gap-2">
            <FaLocationDot />
            <input
               defaultValue={initialData.address}
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
                  defaultValue={initialData.city}
                  name="city"
                  autoComplete="off"
                  className="outline-none border-b-2 border-gray-200  focus:border-[#4baf4f]  text-gray-600 text-sm placeholder:text-gray-500  px-1"
                  placeholder="City"
                  type="text"
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  defaultValue={initialData.state}
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
                  defaultValue={initialData.postalCode}
                  name="postalCode"
                  autoComplete="off"
                  className={`outline-none w-full border-b-2  border-gray-200 focus:border-[#4baf4f] ${ validationErrors.postalCode ? "border-red-500" : "border-gray-200"}  text-gray-600 text-sm placeholder:text-gray-500  px-1`}
                  placeholder="Postal code"
                  type="text"
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  defaultValue={initialData.country}
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
              defaultValue={initialData.customerCode}
              name="customerCode"
              autoComplete="off"
              className={`outline-none w-full border-b-2  border-gray-200 focus:border-[#4baf4f] ${ validationErrors.customerCode ? "border-red-500" : "border-gray-200"}  text-gray-600 text-sm placeholder:text-gray-500  px-1`}
              placeholder="Customer code"
              type="text"
            />
          </div>
          <div className="flex items-center gap-2 w-full">
            <MdMessage />
            <textarea
              defaultValue={initialData.note}
              name="note"
              autoComplete="off"
              className={`outline-none w-full border-b-2  border-gray-200 focus:border-[#4baf4f] ${ validationErrors.note ? "border-red-500" : "border-gray-200"}  text-gray-600 text-sm placeholder:text-gray-500  px-1`}
              placeholder="Note"
              type="text"
            />
          </div>
          <div className="flex justify-end mt-4 gap-4">
             <Link to={`/customers/${cusid}`} className="py-2 px-2 w-[100px] text-xs font-medium rounded-sm text-gray-900 bg-white shadow-md">
               Cancel
             </Link>
             <button  type="submit" className="py-2 px-2 w-[100px] text-xs font-medium rounded-sm text-white bg-[#8cc748]">
                Save
             </button>
           </div>
        </form> }
      </div>
    </div>
  );
};

export default CustomerEdit;


// address
// city
// country
// customerCode
// email
// firstVisit
// id
// lastVisit
// name
// note
// phone
// pointsBalance
// state
// totalVisits
