import React, { useEffect } from 'react'
import { API_DATA } from '../utils/constants'
import { useState } from 'react'
// import { arrCard } from '../utils/constants'
import PostCard from './PostCard'
import {useDispatch, useSelector} from "react-redux"
import { longMetaDesc, noFeatImg, noMetaDesc,allPost, tooLongPost, tooLongUrl, tooShortPost } from '../utils/Postfilter'
import { addlistofPost } from '../redux/createPostSlice'
import createBrowserRouter from "react-router-dom"
import App from '../App'
const PostPage = () => {
  const [content, setContent] = useState([]);
 
  const dispatch=useDispatch()
  const posts=useSelector(store=>store.post.postData)
  const options = [
    {title:'All',method:allPost(posts)},

    {title:'No Meta Descriptions',method:noMetaDesc(posts)},
    {title:'long Meta Description',method:longMetaDesc(posts)},
    {title:'Too long URL',method:longMetaDesc(posts)},
    {title:'No Featured Image',method:noFeatImg(posts)},
    {title:'Too Short Posts',method:tooShortPost(posts)},
{title:"Too Long Posts",method:tooLongPost(posts)}
    

  
  
  ];
  
  useEffect(() => {
    const getData = async () => {
    
      let data = await fetch(API_DATA);
      let results = await data.json();
      let givenData=results?.posts
 
   
      dispatch(addlistofPost(givenData))
   


  
  };
  getData()

  }, []);
  


  
  return (
    <div >
      <h1 className='bg-green-500 py-5 text-center text-2xl font-bold'>Welcome to Posts Section</h1>
      
      <div className='flex gap-2 p-2 '>
        {/* {
          options.map(ele=><div  value={ele} className='bg-gray-300 px-4 text-center m-2 hover:bg-gray-400 shadow-lg rounded-lg py-2' key={ele}>{ele}</div>)
        } */}
        {
          options.map(option=><PostCard key={option.title} title={option.title}  data={option.method}/>)
        }
         <div>

         </div>
      </div>
    </div>
    
  )
}

export default PostPage