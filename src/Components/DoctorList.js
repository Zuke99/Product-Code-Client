import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteDoctor, getAllDoctors } from '../redux/slice/DoctorSlice';
import { isUserLoggedIn } from '../redux/slice/UserSlice';
import { useNavigate } from 'react-router';


function DoctorList() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=> {
        dispatch(isUserLoggedIn())
        .unwrap()
        .then((result) => {
          //onsole.log("loggedIn", result);
        })
        .catch((error) => {
          navigate("/login");
          alert(error.message)
        })
        dispatch(getAllDoctors());
        

    },[dispatch])
    
    const allDoctors = useSelector((state) => state.doctor.doctorData);

    const onClickDelete = (doctor) => {
        
        const docId = doctor;
        dispatch(deleteDoctor(docId)).unwrap().then((result) => {
            //console.log(result);
            alert("Entry Deleted Successfully");
            window.location.reload();
        }).catch((error)=> {
            alert(error.message);
        })
    }
  return (
    <div>
    <div className='flex w-[100%]'>
        <div className='w-[30%]'>Name</div>
        <div className='w-[30%]'>Designation</div>
        <div className='w-[20%]'>Update</div>
        <div className='w-[20%]'>Delete</div>
    </div>

    {allDoctors && allDoctors.map((doctor, index) => (
        <div key={index} className='flex w-[100%]'>
            <div className='w-[30%]'>{doctor.name}</div>
            <div className='w-[30%]'>{doctor.designation}</div>
            <div className='w-[20%]'>
                <button>Update</button>
            </div>
            <div className='w-[20%] '>
                <button
                className='h-6 w-16 my-1 bg-orange-700 text-white rounded-lg'
                onClick={()=> onClickDelete(doctor._id)}>Delete</button>
            </div>
        </div>
    ))}
</div>
  )
}

export default DoctorList
