import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCompanyForms } from '../redux/slice/CompanyFormSlice';
import { useNavigate } from 'react-router';
import { isUserLoggedIn } from '../redux/slice/UserSlice';
import { getAllPharmacyForms } from '../redux/slice/PharmacySlice';

function PharmacyDashboard() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [visibleForms, setVisibleForms] = useState(8); 

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

        dispatch(getAllPharmacyForms());
        
        
    },[dispatch])

    

    const companyForms = useSelector((state) => state.companyForm.data);
    const pharmacyForms = useSelector((state) => state.pharmacy.data);
    

    console.log("Company Form Req List",companyForms)
    console.log("phamacy form list", pharmacyForms);

    const handleScroll = (e) => {
      const bottom =
        e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
      if (bottom) {
        // Load more forms or increase visibleForms count
        setVisibleForms((prevVisibleForms) => prevVisibleForms + 8);
      }
    };
   const onClickOpenForm = (id) => {
 
        for(let i = 0;i < companyForms.data.length; i++){
            if(companyForms.data[i]._id === id){
              console.log("Inside")
                localStorage.setItem("CompanyForm", JSON.stringify(companyForms.data[i]));
                localStorage.setItem("navigate-from-dashboard", "false");
                navigate("/pharmacy-form");
            }
            }
            
        }

        const onClickOpenPharmacyForm = (id) => {
          for(let i = 0; i< pharmacyForms.data.length ; i++){
            if(pharmacyForms.data[i]._id === id){
              localStorage.setItem("CompanyForm", JSON.stringify(pharmacyForms.data[i]))
              localStorage.setItem("navigate-from-dashboard", "true");
              navigate("/pharmacy-form");
            }
          }
        }

        const onClickPrint = (id) => {
          for(let i = 0; i< pharmacyForms.data.length ; i++){
            if(pharmacyForms.data[i]._id === id){
              localStorage.setItem("PharmacyForm", JSON.stringify(pharmacyForms.data[i]))
              navigate("/output-1");
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





    {/* DISPLAY COMPANY FORMS */}


   
<div className='flex w-[100%] justify-center mt-5'>

<div className='w-[60%]'>
    <div className='flex bg-ui-black h-10 items-center justify-center'>
        <center className='text-white text-lg font-bold'>Previous Form Submissions</center>
    </div>

    <div className='flex'>
    <div className='flex w-[40%] border justify-center'>
          <strong>Sl No.</strong>
        </div>
        <div className='flex w-[40%] border justify-center'>
          <strong>Short Name</strong>
        </div>
        <div className='flex w-[40%] border justify-center'>
          <strong>Description</strong>
        </div>
        <div className='flex w-[20%] border justify-center'>
          <strong>Proceed</strong>
        </div>
        <div className='flex w-[20%] border justify-center'>
          <strong>Output</strong>
        </div>
    </div>




    {pharmacyForms && Array.isArray(pharmacyForms.data)? (
pharmacyForms.data
.map((form) => (
<div key={form._id} className='flex'>
<div className='flex w-[40%] py-2 border justify-center'>
  {form.sl_no}
</div>
<div className='flex w-[40%] py-2 border justify-center'>
  {form.short_name}
</div>
<div className='flex w-[40%] py-2 border justify-center'>
  {form.desc_and_spec}
</div>
<div className='flex w-[20%] py-2 border justify-center'>
  <button 
    className='bg-ui-light-blue text-white w-28 h-8 rounded-md'
    onClick={() => onClickOpenPharmacyForm(form._id)}>
    Update Form
  </button>
</div>
<div className='flex w-[20%] py-2 border justify-center'>
  <button 
    className='bg-ui-light-blue text-white w-28 h-8 rounded-md'
    onClick={() => onClickPrint(form._id)}>
    Print
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
