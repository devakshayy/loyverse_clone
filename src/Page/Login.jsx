import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const [singnIn, setSignIn] = useState(false);
  const [data,setData] = useState([ ]);
  const [username,setUserName] = useState('');

  useEffect(() => {
      setData(JSON.parse(localStorage.getItem("user")))
  },[])

  const navigate = useNavigate();

  const handleSubmit = (e,type) => {
        e.preventDefault()
        if(e.target.username.value && e.target.password.value){
             if(!localStorage.getItem('user')){
                 localStorage.setItem('user',JSON.stringify([{username:e.target.username.value,password:e.target.password.value}]))
                 navigate('/items',{state:e.target.username.value})
             }else{
               for(let val of data){
                 setUserName(val.username)
                 if(val.username.includes(e.target.username.value)){
                     if(type == "signIn"){
                      alert("User Already Exist")
                      setSignIn(false)
                     }else{
                        if(val.password == e.target.password.value){
                           navigate("/items",{state:e.target.username.value})
                        }else{
                           alert("Password does not match")
                        }
                     }
                     return true;
                  }
                 
                }
             }
             if(type == 'signIn' && username !== e.target.username.value){
                   localStorage.setItem('user',JSON.stringify([...data,{username:e.target.username.value,password:e.target.password.value}]))
                   navigate('/items',{state:e.target.username.value})
             }else {
                 alert("User does not exist")
                 setSignIn(false)
             }
        }
  }


  return (
    <div className='bg-gradient-to-r flex items-center justify-center from-[#3e95cc] to-[#c2c5c9] w-full h-full'>
       <div className='flex items-center w-2/3 h-2/3 rounded-xl shadow-2xl'>
           <div className='bg-gradient-to-r flex items-center justify-center from-[#4599a1] to-[#2588ca] w-1/2 h-full rounded-l-xl'>   {/*  image div */}
               <img src="/LoginImage.png" className='w-full h-full' alt="LoginImage.png" />
           </div> 

           <div className='bg-[#dbdee6] w-1/2 h-full flex flex-col items-center justify-center rounded-r-xl'>    {/*  image div */}
                  <div className='uppercase font-bold text-xl text-[#4294cf] mb-4'>Welcome</div>
                  <form onSubmit={(e) => handleSubmit(e,singnIn?"signIn":"signUp")} className='flex flex-col w-full items-center gap-2'>
                      <input
                         autoComplete='off'
                         name='username'
                         placeholder='User Name'
                         className='rounded-md w-2/3 text-xs  text-black px-2 py-1 placeholder:text-sm outline-none'
                         type="text" />
                     
                      <input 
                         autoComplete='off'
                         name='password'
                         placeholder='Password'
                         className='rounded-md w-2/3  text-xs text-black px-2  py-1 placeholder:text-sm outline-none'
                         type="text" />
                      <button type='submit'  className='bg-[#4294cf] font-semibold px-8 text-white  rounded-md'>{ singnIn ? "Sign Up" : "Sign In"}</button> 
                  </form>
                 {!singnIn &&  <div className='text-xs mt-5 text-gray-800'>Don't have an account ?  <span onClick={() => setSignIn(true)} className='ml-2 cursor-pointer text-[#2a8bc2] font-semibold'>Sign Up</span></div>}
           </div>
          
       </div>
    </div>
  )
}

export default Login
