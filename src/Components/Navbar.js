import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { isUserLoggedIn } from '../redux/slice/UserSlice';
import { useDispatch } from 'react-redux';

function Navbar() {

  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(isUserLoggedIn())
        .unwrap()
        .then((result) => {
          setLoggedIn(true);
          //console.log("loggedIn", result);
        })
        .catch((error) => {
         setLoggedIn(false);  
          
        })
  })

  const onClickLogin = () => {
    navigate("/login");
  }
  const onClickLogout= () => {
    localStorage.removeItem("userToken");
    navigate("/login")
  }
  const onClickHome = () => {
    navigate("/");
  }
  const onClickDashboard = () => {
    navigate("/pharmacy-dashboard");
  }
  const onClickDoctorsList = () => {
    navigate("/doctor-list");
  }


  return (
    <div className='flex w-screen h-16 border bg-ui-black justify-center'>
      
        { !loggedIn && <button onClick={onClickLogin} className='text-white mx-5'>Login</button>}
         <button className='text-white mx-5' onClick={onClickHome}>Home</button>
         {loggedIn &&<button onClick={onClickLogout} className='text-white mx-5'>LogOut</button>}
         {loggedIn && <button onClick={onClickDashboard} className='text-white mx-5'>Dashboard</button>}
         {loggedIn && <button onClick={onClickDoctorsList} className='text-white mx-5'>Doctor's List</button>}
        
    </div>
  )
}

export default Navbar
