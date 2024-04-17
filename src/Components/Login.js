import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { loginUser } from '../redux/slice/UserSlice';

function Login() {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();
  const navigate= useNavigate();


  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  }
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const onClickSubmit = () => {
    const data = {
      username : username,
      password : password
    }
    dispatch(loginUser(data)).unwrap().then((result) => {
      
      localStorage.setItem("userToken", JSON.stringify(result.data));
      navigate("/pharmacy-dashboard");
    }).catch((error) => {
      alert(error.message);
    })
  }
  return (
    <div className=''>
      <div className='ml-[35%] mt-[10%] w-[40%] border rounded-md'>
      <div className='flex justify-center items-center h-16 bg-orange-700 rounded-t-md'>
       <span className='text-white'>Login</span>
      </div>
      <div className='flex justify-center'>
      <input type='text' placeholder='Username' onChange={onChangeUsername} className='w-60 h-10 my-5 mx-5 border rounded-sm px-5'/><br/>
      <input type='password' placeholder='Password' onChange={onChangePassword} className='w-60 h-10 my-5 mx-5 border rounded-sm px-5' />
      </div>

      <div className='flex justify-center'>
      <button 
      onClick={onClickSubmit}
      className='h-10 w-32 my-5 bg-orange-700 text-white rounded-lg'>Login</button>
      </div>
      </div>

    </div>
  )
}

export default Login
