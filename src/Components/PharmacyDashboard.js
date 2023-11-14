import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCompanyForms } from '../redux/slice/CompanyFormSlice';
import { useNavigate } from 'react-router';
import { isUserLoggedIn } from '../redux/slice/UserSlice';

function PharmacyDashboard() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      
        dispatch(isUserLoggedIn())
        .unwrap()
        .then((result) => {
          //onsole.log("loggedIn", result);
        })
        .catch((error) => {
          navigate("/login");
          alert(error.message)
        })
        dispatch(getAllCompanyForms());
        
        
    },[dispatch])

    const companyForms = useSelector((state) => state.companyForm.data);

    console.log("Company Form Req List",companyForms)
   const onClickOpenForm = (id) => {
 
        for(let i = 0;i < companyForms.data.length; i++){
            if(companyForms.data[i]._id === id){
              console.log("Inside")
                localStorage.setItem("CompanyForm", JSON.stringify(companyForms.data[i]));
                navigate("/pharmacy-form");
            }
            }
            
        }
   
  return (
    <div>
    {/* {companyForms ? (
      <>
        <h2>Company Forms</h2>
        {companyForms.data.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Company Name</th>
              </tr>
            </thead>
            <tbody>
              {companyForms.data.map((form) => (
                <tr key={form._id}>
                  <td>{form.full_name}</td>
                  <td>{form.company_name}</td>
                  <td><button onClick={()=>onClickOpenForm(form._id)}>Open Form</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No data available</p>
        )}
      </>
    ) : (
      <p>Loading...</p>
    )} */}


{/* ************************************************NEW DESIGN ******************************************** */}


<div className='flex w-[100%] justify-center mt-5'>

        <div className='w-[60%]'>
            <div className='flex bg-ui-black h-10 items-center justify-center'>
                <center className='text-white text-lg font-bold'>Company Form Requests</center>
            </div>

            <div className='flex'>
                <div className='flex w-[40%] border justify-center'>
                  <strong>Full Name</strong>
                </div>
                <div className='flex w-[40%] border justify-center'>
                  <strong>Company Name</strong>
                </div>
                <div className='flex w-[20%] border justify-center'>
                  <strong>Proceed</strong>
                </div>
            </div>




            {companyForms && companyForms.data && Array.isArray(companyForms.data)? (
  companyForms.data
    .filter((form) => form.approval_status === false)
    .map((form) => (
      <div key={form._id} className='flex'>
        <div className='flex w-[40%] py-2 border justify-center'>
          {form.full_name}
        </div>
        <div className='flex w-[40%] py-2 border justify-center'>
          {form.company_name}
        </div>
        <div className='flex w-[20%] py-2 border justify-center'>
          <button 
            className='bg-ui-light-blue text-white w-32 h-8 rounded-md'
            onClick={() => onClickOpenForm(form._id)}>
            Open Form
          </button>
        </div>
      </div>
    ))
) : (
  <p>no data available</p>
)}
        </div>




</div>











    </div>
  )
}

export default PharmacyDashboard
