import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='h-screen flex justify-between flex-col overflow-x-hidden bg-primary'>

      {/* top corner */}
      <div className="flex justify-start">
        <div className="h-40 bg-white w-96 transform -skew-x-[25deg] -ml-10 flex items-center justify-center">
          <h1 className='skew-x-[25deg] text-5xl text-primary font-semibold'>SOCIAL APP</h1>
        </div>
      </div>

      {/* form */}
      <div className='flex justify-center bg-primary'>
        <div className="w-[420px] flex flex-col space-y-5 border border-white p-10">
          <h1 className='text-4xl text-white font-semibold'>Get In</h1>
          <hr />
          <input
            type="text"
            placeholder='email'
            className='border border-gray-300 h-10 rounded-sm focus:outline-none focus:ring focus:ring-white pl-5 bg-transparent text-white'
          />
          <input
            type="text"
            placeholder='password'
            className='border border-gray-300 h-10 rounded-sm focus:outline-none focus:ring focus:ring-white pl-5 bg-transparent text-white'
          />
          <input
            type="text"
            placeholder='confirm password'
            className='border border-gray-300 h-10 rounded-sm focus:outline-none focus:ring focus:ring-white pl-5 bg-transparent text-white'
          />
          <div className='flex justify-end'>
            <button className='bg-white h-10 rounded-sm text-primary px-10 hover:text-black hover:ring hover:ring-black'>Register</button>
          </div>
          <hr />
          <Link to='/login' className='text-center'>Already Registed? CLICK HERE TO LOGIN</Link>
        </div>
      </div>
      {/* bottom corner */}
      <div className="flex justify-end">
        <div className="h-40 bg-white w-96 transform skew-x-[25deg] -mr-10 flex items-center justify-center">
          <h1 className='-skew-x-[25deg] text-5xl text-primary font-semibold'>SOCIAL APP</h1>
        </div>
      </div>

    </div>
  )
}

export default Register