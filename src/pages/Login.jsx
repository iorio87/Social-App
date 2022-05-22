import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
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
            className='border border-gray-300 h-10 rounded-sm pl-5'
          />
          <input
            type="text"
            placeholder='password'
            className='border border-gray-300 h-10 rounded-sm pl-5'
          />
          <div className='flex justify-end'>
            <button className='bg-primary h-10 rounded-sm text-white px-10 hover:bg-red-700'>LOGIN</button>
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