import React from 'react'

const DashboardCard = ({total,description}) => {
  return (
    <div className=' py-3  bg-purple-600 text-white shadow-lg rounded-lg hover:bg-purple-700 md:w-60'>
    <h1 className='font-bold text-xl text-center md:text-3xl '>{total}</h1>
    <p className='text-sm text-center md:text-lg'>{description}</p>
        </div>
  )
}

export default DashboardCard