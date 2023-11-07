import React from 'react'
import { useNavigate } from 'react-router'

function Home() {
  const navigate = useNavigate();
  const onClickSubmit = () => {
    navigate("/company-form")
  }
  return (
    <div >
      <input type='text' placeholder='Enter Your Full Name' ></input>
      <input type='text' placeholder='Enter Your Company Name'></input><br/>
      <button onClick={onClickSubmit}>Submit</button>
    </div>
  )
}

export default Home
