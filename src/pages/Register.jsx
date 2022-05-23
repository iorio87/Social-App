import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { fireDb, app } from '../FirebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import Loader from '../components/Loader'


function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmpassword] = useState('')
  const { loading } = useSelector(state => state)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const register = () => {
    const auth = getAuth(app);
    dispatch({ type: 'showLoading' })
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userData = {
          email: user.email,
          profilePicUrl: '',
          Bio: 'Hola! estoy usando Social-App'
        }
        setDoc(doc(fireDb, 'users', user.uid), userData)
        dispatch({ type: 'hideLoading' })
        toast.success('Registration successfull')
        navigate('/login')
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: 'hideLoading' })
        toast.error('Registration Failed')
      });
  }

  return (
    <div className='h-screen flex justify-between flex-col overflow-x-hidden bg-primary'>

      {loading.loading && <Loader />}

      {/* top corner */}
      <div className="flex justify-start">
        <div className="h-[90px] bg-white w-96 transform -skew-x-[25deg] -ml-10 flex items-center justify-center">
          <h1 className='skew-x-[25deg] text-5xl text-primary font-semibold'>SOCIAL APP</h1>
        </div>
      </div>

      {/* form */}
      <div className='flex justify-center bg-primary'>
        <div className="w-[420px] flex flex-col space-y-5 border border-white p-10">
          <h1 className='text-3xl text-white font-semibold'>Create Account</h1>
          <hr />
          <input
            type="text"
            placeholder='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border border-gray-300 h-10 rounded-sm focus:outline-none focus:ring focus:ring-white pl-5 bg-transparent text-white placeholder-white'
          />
          <input
            type="password"
            placeholder='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='border border-gray-300 h-10 rounded-sm focus:outline-none focus:ring focus:ring-white pl-5 bg-transparent text-white placeholder-white'
          />
          <input
            type="password"
            placeholder='confirm password'
            name='confirmpassword'
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
            className='border border-gray-300 h-10 rounded-sm focus:outline-none focus:ring focus:ring-white pl-5 bg-transparent text-white placeholder-white'
          />
          <div className='flex justify-end'>
            <button className='bg-white h-10 rounded-sm text-primary px-10 hover:text-black hover:ring hover:ring-black' onClick={register}>
              Register
            </button>
          </div>
          <hr />
          <Link to='/login' className='text-center'>Already Registed? CLICK HERE TO LOGIN</Link>
        </div>
      </div>

      {/* bottom corner */}
      <div className="flex justify-end">
        <div className="h-[90px] bg-white w-96 transform skew-x-[25deg] -mr-10 flex items-center justify-center">
          <h1 className='-skew-x-[25deg] text-5xl text-primary font-semibold'>SOCIAL APP</h1>
        </div>
      </div>

    </div>
  )
}

export default Register