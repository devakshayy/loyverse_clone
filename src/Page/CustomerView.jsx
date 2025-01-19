import React, { useEffect, useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { MdEmail,MdCall,MdMessage } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { LiaBarcodeSolid } from "react-icons/lia";
import { FaUserEdit } from "react-icons/fa";
import { IoChevronBack } from "react-icons/io5";
import { MdDeleteSweep } from "react-icons/md";
import { useNavigate, useParams } from 'react-router-dom';


const CustomerView = () => {

  const navigate = useNavigate();
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
 
  const handleDelete = (id,name) => {
     const customer = name.toUpperCase();
     const userChoice =  confirm(`Are you sure want to remove "${customer}"`)

     if(userChoice){
      fetch(`http://localhost:4000/customers/${id}`,{
        method: "DELETE"
       })
       .then(response => {
        if(!response.ok){
          throw new Error();
        }else{
          navigate("/customers")
        }
       })
       .catch("Unable to remove customer")
     }else {
       navigate("/customers")

     }   
  }

  const editNavHandler = (id) => {
      navigate(`/editcustomer/${id}`)
  }

  
  return (
    <div className="p-2 h-screen w-full bg-white text-gray-900 overflow-auto">  
      <div className="bg-white w-1/2 rounded-md shadow-2xl">
         <div className='border-b-2 p-2 flex items-center justify-between'>
             <button onClick={()=>navigate("/customers")} className='text-xs flex items-center gap-2 p-1 hover:bg-gray-100'><IoChevronBack />Customer base</button>
            <div className='flex items-center gap-2'>
            <button onClick={() => editNavHandler(initialData.id)}><FaUserEdit /></button>
            <button onClick={() => handleDelete(initialData.id,initialData.name) }><MdDeleteSweep /></button>
            </div>
         </div>
        <div className="flex items-center gap-3 relative justify-center  p-3">
           <div className='flex flex-col items-center'>
           <FaUserCircle className='w-16 rounded-full h-16' />
           <div className=' text-xl font-semibold'>{initialData.name}</div>
           </div>
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
             <div className='text-xs text-gray-600'>Adress at {initialData.city},{initialData.state}</div>
            </div>
           <div  className='flex items-center gap-2'>
             <LiaBarcodeSolid />
              <div className='text-xs text-gray-600'> 2845 </div>
             </div>
           <div  className='flex items-center gap-2'> 
            <MdMessage />
            <div className='text-xs text-gray-600 capitalize'>{initialData.note}</div>
           </div>
       </div>
         <div className='text-xs px-3 py-1 flex justify-between text-gray-600 border-t-2' >  {/* first div */}
           <div>
           <div><span className='text-gray-900 font-semibold'>First Visit </span>: {initialData.firstVisit}</div>
            <div><span className='text-gray-900 font-semibold'>Last Visit</span>: {initialData.lastVisit}</div>
            <div><span className='text-gray-900 font-semibold'>Visits</span>:  {initialData.totalVisits}</div>
           </div>
           <div>
           <div><span className='text-gray-900 font-semibold'>Total Spent</span>:</div>
           <div><span className='text-gray-900 font-semibold'>Points</span>: {initialData.pointsBalance}</div>
           </div>
         </div>
      </div>      
   </div>
  )
}

export default CustomerView
