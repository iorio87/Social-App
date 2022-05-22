import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { app, fireDb } from '../FirebaseConfig'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = () => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        getDoc(doc(fireDb, 'users', user.uid)).then((user) => {
          localStorage.setItem('social-app-user', JSON.stringify({ ...user.data(), id: user.id }))
        })

      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className='h-screen flex justify-between flex-col overflow-x-hidden'>

      {/* top corner */}
      <div className="flex justify-start">
        <div className="h-40 bg-primary w-96 transform -skew-x-[25deg] -ml-10 flex items-center justify-center">
          <h1 className='skew-x-[25deg] text-5xl text-white font-semibold'>SOCIAL APP</h1>
        </div>
      </div>

      {/* form */}
      <div className='flex justify-center'>
        <div className="w-[420px] flex flex-col space-y-5 card p-10">
          <h1 className='text-4xl text-primary font-semibold'>Get In</h1>
          <hr />
          <input
            type="text"
            placeholder='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border border-gray-300 h-10 rounded-sm pl-5'
          />
          <input
            type="password"
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='border border-gray-300 h-10 rounded-sm pl-5'
          />
          <div className='flex justify-end'>
            <button className='bg-primary h-10 rounded-sm text-white px-10 hover:bg-red-700' onClick={login}>LOGIN</button>
          </div>
          <hr />
          <Link to='/register' className='text-center'>Don't have an account? REGISTER HERE</Link>
        </div>
      </div>

      {/* bottom corner */}
      <div className="flex justify-end">
        <div className="h-40 bg-primary w-96 transform skew-x-[25deg] -mr-10 flex items-center justify-center">
          <h1 className='-skew-x-[25deg] text-5xl text-white font-semibold'>SOCIAL APP</h1>
        </div>
      </div>

    </div>
  )
}

export default Login