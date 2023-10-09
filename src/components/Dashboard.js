import React from 'react'
import DashboardCard from './DashboardCard'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Dashboard = () => {
 
  return (
    <div className='bg-blue-950 w-full h-[100vh]'>
      <div className='px-4 py-2 '>
    <div className='text-white text-2xl flex justify-between shadow-lg px-6 rounded-lg  bg-green-600 items-center'>
      <h1 className='w-[70%]   py-4  '>Dashboard</h1>
      <div className='flex w-[30%] justify-around'>
        <Link to={"/posts"}>
      
      <h1 className='w-12 h-12  post-icon     bg-gray-700  grid place-items-center relative  hover:bg-sky-800  ' ><i className="fa-solid fa-envelope ">
         </i><span className='absolute icon-theam text-black  text-sm'>Posts</span></h1>
         </Link>
         <Link to={"/"}>
      
      <h1 className='w-12 h-12  post-icon    bg-gray-700  grid place-items-center relative  hover:bg-sky-800  ' ><i className="fa-solid fa-envelope ">
         </i><span className='absolute icon-theam  text-black  text-sm'>Dashboard</span></h1>
         </Link>
         <Link to={"/links"}>
      
      <h1 className='w-12 h-12  post-icon    bg-gray-700  grid place-items-center relative  hover:bg-sky-800 ' ><i className="fa-solid fa-envelope ">
         </i><span className='absolute icon-theam text-black   text-sm'>Links</span></h1>
         </Link>
   

      </div>
    </div>
  <div className='flex gap-2 my-4 md:justify-around'>

<DashboardCard total="60" description="total number of cards"/>
<DashboardCard total="70" description="total number of cards"/>
<DashboardCard total="60" description="total number of cards"/>
<DashboardCard total="60" description="total number of cards"/>
<DashboardCard total="60" description="total number of cards"/>

  </div>
    </div>
    </div>
    
  )
}

export default Dashboard