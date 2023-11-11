import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addDoctor } from '../redux/slice/DoctorSlice';

function DoctorEntry() {
    const [doctorName, setDoctorName] = useState("");

    const dispatch = useDispatch();
    const onChangeDoctorName = (e) => {
        setDoctorName(e.target.value);
    }

    const onClickAdd = () => {
        const data = {
            name : doctorName
        }
        if(doctorName !== ""){
            dispatch(addDoctor(data)).unwrap().then((result) => {
                alert(result.message);
                window.location.reload();
            }).catch((error) => {
                alert(error);
               })
        }
        console.log(doctorName);
    }
  return (

 <div className=''>
      <div className='ml-[35%] mt-[10%] w-[40%] border rounded-md'>
      <div className='flex justify-center items-center h-16 bg-orange-700 rounded-t-md'>
       <span className='text-white'>Add Doctor</span>
      </div>
      <div className='flex justify-center'>
      <input onChange={onChangeDoctorName}
      type='text' 
      placeholder="Enter Doctor's Full Name" 
      className='w-60 h-10 my-5 mx-5 border rounded-sm px-5'/><br/>

      </div>

      <div className='flex justify-center'>
      <button 
      onClick={onClickAdd}
      className='h-10 w-32 my-5 bg-orange-700 text-white rounded-lg'>Add</button>
      </div>
      </div>

    </div>
 
  )
}

export default DoctorEntry
