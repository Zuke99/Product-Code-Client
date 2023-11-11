import React from 'react'

function Login() {
  return (
    <div className=''>
      <div className='ml-[35%] mt-[10%] w-[40%] border rounded-md'>
      <div className='flex justify-center items-center h-16 bg-orange-700 rounded-t-md'>
       <span className='text-white'>Login</span>
      </div>
      <div className='flex justify-center'>
      <input type='text' placeholder='Username' className='w-60 h-10 my-5 mx-5 border rounded-sm px-5'/><br/>
      <input type='password' placeholder='Password' className='w-60 h-10 my-5 mx-5 border rounded-sm px-5' />
      </div>

      <div className='flex justify-center'>
      <button className='h-10 w-32 my-5 bg-orange-700 text-white rounded-lg'>Login</button>
      </div>
      </div>

    </div>
  )
}

export default Login
