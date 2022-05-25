import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { BiComment } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

function Post({ post }) {
    const navigate = useNavigate()
    const getUserName = () => {
        const email = post.user.email
        const username = email.substring(0, email.length - 10)
        return username
    }

    return (
        <div onClick={() => navigate(`post/${post.id}`)} className='cursor-pointer mx-4'>
            <div className='flex items-center card-sm p-2'>
                <div className='w-8 h-8 rounded-full bg-primary text-white flex justify-center items-center mr-2'>
                    <span className='text-2xl text-transform: uppercase'>{getUserName()[0]}</span>
                </div>
                <span>{getUserName()}</span>
            </div>
            <div className='w-full text-center flex justify-center card-sm'>
                <img src={post.imageURL} alt="" className='h-60 w-60' />
            </div>
            <div className='card-sm flex p-2 w-full items-center space-x-5'>
                <div className='flex space-x-2 items-center'>
                    <AiFillHeart size={25} />
                    <h1>{post.likes.length}</h1>
                </div>

                <div className='flex space-x-2 items-center'>
                    <BiComment size={25} />
                    <h1>{post.comments.length}</h1>
                </div>
            </div>
        </div>
    )
}

export default Post