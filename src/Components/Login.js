import React from 'react'

function Login() {
  return (
    <div>
      <label>Username</label>
      <input type='text' className='border'></input>
      <br/>
      <label>Password</label>
      <input type='password' className='border'></input>
      <br/>
      <button>Login</button>
    </div>
  )
}

export default Login
