import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addDoctor } from '../redux/slice/DoctorSlice';
import CustomPopup from './CustomPopup';

function DoctorEntry(props) {
    const [doctorName, setDoctorName] = useState("");
    const [designation, setDesignation] = useState("");
    const [visibility, setVisibility] = useState(true);

    const dispatch = useDispatch();
    
    const onChangeDoctorName = (e) => {
        setDoctorName(e.target.value);
    }

    const onChangeDesignation = (e) => {
        setDesignation(e.target.value)
    }



    const popupCloseHandler = (e, data) => {
        setVisibility(data);
        props.onClose();
      };

    const onClickAdd = () => {
        const data = {
            name : doctorName,
            designation : designation
        }
        if(doctorName !== "" || designation!==""){
            console.log("here");
            dispatch(addDoctor(data))
            .unwrap()
            .then((result) => {

                 alert(result.message);
                 props.onSuccess();
                // console.log("Cledd props.onsuccess");
                // props.onSuccess();
                // popupCloseHandler(false);
               // navigate("/");
                
                
                
            }).catch((error) => {
                alert("error");
               })
        } else {
            alert("please enter all details")
        }
      
    
    }
  return (

 <div className=''>
     <CustomPopup onClose={popupCloseHandler}
        show={visibility}>
     <div className='ml-[10%] mt-[10%] w-[80%] border rounded-md'>
      <div className='flex justify-center items-center h-10 bg-ui-black rounded-t-md'>
       <span className='text-white'>Add Doctor</span>
      </div>
      <div className='flex flex-col justify-center'>
      <input onChange={onChangeDoctorName}
      type='text' 
      placeholder="Enter Doctor's Full Name" 
      className='w-[90%] h-10 my-5 mx-3 border rounded-sm px-5'/>
      
      <input onChange={onChangeDesignation}
      type='text' 
      placeholder="Enter Doctor's Designation" 
      className='w-[90%] h-10 my-5 mx-3 border rounded-sm px-5'/>
      

      </div>

      <div className='flex justify-center'>
      <button 
      onClick={onClickAdd}
      className='h-10 w-20 my-5 bg-ui-light-blue text-white rounded-lg'>Add</button>
      </div>
      </div>
     </CustomPopup>

    </div>
 
  )
}

export default DoctorEntry
