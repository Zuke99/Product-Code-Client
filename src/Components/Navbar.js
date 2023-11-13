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


  return (
    <div className='flex w-screen h-16 border bg-ui-black justify-center'>
      
         <button onClick={onClickLogin} className='text-white'>Login</button>
         <button className='text-white' onClick={onClickHome}>Home</button>
        
    </div>
  )
}

export default Navbar
