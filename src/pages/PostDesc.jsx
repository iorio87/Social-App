import { doc, getDoc, setDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import DefaultLayout from '../components/DefaultLayout'
import { fireDb } from '../FirebaseConfig'
import { AiFillHeart } from 'react-icons/ai'
import { BiComment } from 'react-icons/bi'
import { toast } from 'react-toastify'
import { current } from '@reduxjs/toolkit'


function PostDesc() {
    const [post, setPost] = useState(null)
    const [alreadyLiked, setAlreadyLiked] = useState(false)
    const [showlikes, setShowlikes] = useState(false)
    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const currentUser = JSON.parse(localStorage.getItem('social-app-user'))

    const getUserName = () => {
        const email = post.user.email
        const username = email.substring(0, email.length - 10)
        return username
    }

    const getData = ()=>{
        dispatch({type: 'showLoading'})
        getDoc(doc(fireDb, 'posts', params.id)).then((res) => {
           setPost({...res.data(), id: res.id})
           if(res.data().likes.find((user) => user.id === currentUser.id)){
            setAlreadyLiked(true)
           }else{
            setAlreadyLiked(false)
           }
           dispatch({type: 'hideLoading'})
          }).catch(()=>{
            dispatch({type: 'hideLoading'})
          })
    }

    useEffect(() => {
        getData()        
      }, [])

      const likeOrUnlikePost = ()=>{
          let updatedlikes = post.likes 

          //quitar like
          if(alreadyLiked){
            updatedlikes = post.likes.filter(user => user.id == current.id)
          }else{
            updatedlikes.push({
                id : currentUser.id,
                email: currentUser.email
            })
          }
                   

          setDoc(doc(fireDb, 'posts', post.id), {...post, likes: updatedlikes})
            .then(()=>{
                getData()
                toast.success('Post liked successfully', {autoClose: 2000})
            }).catch(()=>{
                toast.error('An error ocurred', {autoClose: 2000})
            })
      }

  return (
   <DefaultLayout>
       <div className='flex justify-center'>
       {post && (
           <div className='cursor-pointer h-[380px] w-[400px]'>
           <div className='flex items-center card-sm p-2'>
               <div className='w-8 h-8 rounded-full bg-primary text-white flex justify-center items-center mr-2'>
                   <span className='text-2xl text-transform: uppercase'>{getUserName()[0]}</span>
               </div>
               <span>{getUserName()}</span>
           </div>
           <div className='w-full text-center flex justify-center card-sm'>
               <img src={post.imageURL} alt="" className='h-[380px] w-full' />
           </div>
           <div className='card-sm flex p-2 w-full items-center space-x-5'>
               <div className='flex space-x-2 items-center'>
                   <AiFillHeart size={25} onClick={likeOrUnlikePost} color={alreadyLiked? 'red': 'gray'}/>
                   {console.log(alreadyLiked)}
                   <h1>{post.likes.length}</h1>
               </div>

               <div className='flex space-x-2 items-center'>
                   <BiComment size={25} />
                   <h1>{post.comments.length}</h1>
               </div>
           </div>
       </div>
       )}
       </div>
   </DefaultLayout> 
  )
}

export default PostDesc