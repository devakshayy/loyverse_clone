import React, { useEffect, useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { MdEmail,MdCall,MdMessage } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { LiaBarcodeSolid } from "react-icons/lia";
import { AiFillDelete } from "react-icons/ai";
import { useParams } from 'react-router-dom';


const CustomerView = () => {

  const params = useParams()
  const [initialData, setInitialData] = useState([]);

  const getCustomer = () => {
    fetch(`http://localhost:4000/customers/${params.cusid}`)
    .then(response => {
       if(response.ok){
        return response.json();
       }
       throw new Error();
    })
    .then(data => {
      setInitialData(data)
    })
    .catch(error => {
      alert("Unable to get the Customer!!!")
    })
  }

  useEffect(getCustomer,[])   
  console.log(initialData);

  
  return (
    <div className="p-2 h-screen w-full bg-white text-gray-900 overflow-auto">  
      <div className="bg-white w-1/2 rounded-md shadow-2xl">
        <div className="flex items-center gap-3 relative justify-center  p-3">
           <div className='flex flex-col items-center'>
           <FaUserCircle className='w-16 rounded-full h-16' />
           <div className='font-semibold'>{initialData.name}</div>
           </div>
             <button className='text-gray-500 absolute top-2 right-2'><AiFillDelete /></button>
        </div>
        <div className='p-5 flex flex-col gap-4 '>
           <div className='flex items-center gap-2'> 
            <MdEmail />
            <div className='text-xs text-gray-600'>{initialData.email}</div>
           </div>
           <div  className='flex items-center gap-2'> 
             <MdCall />
              <div className='text-xs text-gray-600'>{initialData.phone}</div>
             
           </div>
           <div  className='flex items-center gap-2'>
            <FaLocationDot />
             <div className='text-xs text-gray-600'>Company at Kottakal,Kerala</div>
            </div>
           <div  className='flex items-center gap-2'>
             <LiaBarcodeSolid />
              <div className='text-xs text-gray-600'> 2845 </div>
             </div>
           <div  className='flex items-center gap-2'> 
            <MdMessage />
            <div className='text-xs text-gray-600'>This is the comapny in Kottakal</div>
           </div>
       </div>
         <div className='text-xs px-3 py-1 flex justify-between text-gray-600 border-t-2' >  {/* first div */}
           <div>
           <div>First Visit : {initialData.firstVisit}</div>
            <div>Last Visit : {initialData.lastvisit}</div>
            <div>Visits : 0</div>
           </div>
           <div>
           <div>Total Spent : {initialData.totalVisits}</div>
           <div>Points : {initialData.pointsBalance}</div>
           </div>
         </div>
      </div>      
   </div>
  )
}

export default CustomerView
