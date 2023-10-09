import React from 'react'

const PostCard = ({data,title}) => {
    console.log(data);
  return (
    <div className='w-[20%] h-[400px] overflow-x-scroll container shadow-lg border border-black rounded-lg'>
   <h1 className='bg-gray-300 px-4 text-center m-2 hover:bg-gray-400 shadow-lg rounded-lg py-2'>{title}</h1>
   {
    data.length?
    data.map(ele=>
      <div  key={ele.id} className={`bg-gray-100 hover:shadow-lg p-2 m-2`}>
    <h1>{ele.title}</h1>
    <div className='flex justify-between items-center '>
    <img src={ele.feature_image} alt='card' className='w-10 h-10' />

    <a href={ele.url} target='_blank'>
    <i className="fa-solid fa-link"></i>
    </a>
    </div>
    </div>
  
    ):<div className='flex items-center justify-center h-[250px]'>
    <h1 className='m-2 p-2 font-bold text-2xl'>No Data Found</h1>
    </div>
   }
         {/* <a href={data.url} target='_blank'>
        <div className='p-2 shadow-lg hover:shadow-xl'> 
            
        <img src={data.feature_image} className="w-80 h-40"  alt='card'/>
        <h1 className='font-bold'>Title:{data.title}</h1>
        </div>
       </a> */}
    </div>
  )
}

export default PostCard