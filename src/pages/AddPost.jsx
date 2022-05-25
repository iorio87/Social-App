import React, { useState } from 'react';
import DefaultLayout from '../components/DefaultLayout';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addDoc, collection } from 'firebase/firestore';
import { fireDb } from '../FirebaseConfig';
import { useNavigate } from 'react-router-dom';

function AddPost() {
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const imageChangeHandle = (e) => {
    setImage(e.target.files[0])
  }

  const addPost = () => {
    dispatch({ type: 'showLoading' })
    const storage = getStorage();
    const storageRef = ref(storage, `/posts/${image.name}`);
    uploadBytes(storageRef, image).then((snapshot) => {

      getDownloadURL(ref(storage, `/posts/${image.name}`))
        .then((url) => {

          addDoc(collection(fireDb, 'posts'), {
            description,
            imageURL: url,
            likes: [],
            comments: [],
            user: JSON.parse(localStorage.getItem('social-app-user'))
          }).then(() => {
            toast.success('Post created successfully')
            dispatch({ type: 'hideLoading'})
            navigate('/')
          }).catch(() => {
            toast.error('Something went wrong..')
            dispatch({ type: 'hideLoading'})
          })
        })
    }).catch(() => {
      toast.error('Error Uploading')
    });
  }

  return (
    <DefaultLayout>
      <div>
        <h1 className='text-3xl text-gray-600'>Add New Post</h1>
        <div className='w-screen flex flex-col'>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='border-2 border-dashed border-gray-500 w-1/2 md:w-full my-5 p-5' rows="3">

          </textarea>

          <input type="file" onChange={(e) => imageChangeHandle(e)} />

          {/* Previe image */}
          {image && (
            <img src={URL.createObjectURL(image)} alt="" className='mt-5 h-52 w-52 rounded' />
          )}

        </div>

        {description && image && (
          <button className='bg-primary h-10 rounded-sm text-white px-10 hover:bg-red-700 mt-10'
            onClick={addPost}>
            ADD POST
          </button>
        )}

      </div>
    </DefaultLayout>
  )
}

export default AddPost