import React from 'react'
import { useNavigate } from 'react-router'

function Navbar() {
  const navigate = useNavigate();

  const onClickLogin = () => {
    navigate("/login");
  }
  const onClickHome = () => {
    navigate("/");
  }

  const onClickDoctor = () => {
    navigate("/add-doctor")
  }
  return (
    <div className='w-screen h-16 border bg-blue-600'>
      
         <button onClick={onClickLogin} className='text-white'>Login</button>
         <button className='text-white' onClick={onClickHome}>Home</button>
         <button onClick={onClickDoctor}>Add/Remove Doctor</button>
        
    </div>
  )
}

export default Navbar
