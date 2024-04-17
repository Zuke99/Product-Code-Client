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
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchData, setSearchData] = useState([]);

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

    // const handleSearch = (term) => {
    //   if (term.trim() !== '') {
    //     setIsSearchActive(true);
    //     setSearchTerm(term);
    //   } else {
    //     setIsSearchActive(false);
    //     setSearchTerm('');
    //   }
    // };




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
              localStorage.setItem("Doctor", JSON.stringify(pharmacyForms.data[i]).suggested_by);
              //console.log("clicked print", pharmacyForms.data[i].counter_signed_by);
              localStorage.setItem("DoctorCounter", JSON.stringify(pharmacyForms.data[i]).counter_signed_by); 
              navigate("/output-1");
            }
          }
        }

        const onChangeSearch = (e) => {
          const searchTerm = e.target.value.toLowerCase().trim();
          if (searchTerm !== '') {
            setIsSearchActive(true);
            // setSearchTerm(searchTerm);
        
            const searchdata = pharmacyForms.data.filter((form) =>
              form.short_name.toLowerCase().includes(searchTerm) || form.desc_and_spec.toLowerCase().includes(searchTerm)
            );
        
            // Do something with searchData, such as updating state or using it directly
            
            setSearchData(searchdata  );
            console.log("SEARCH DATA",searchData);
            // Set searchData state or use it in your component as needed
            // setSearchData(searchData);
          } else {
            setIsSearchActive(false);
            setSearchData("");
            // setSearchTerm('');
            // Handle case when search term is empty
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

<div className='w-[90%]'>
    <div className='flex bg-ui-black h-10 items-center justify-center'>
        <center className='text-white text-lg font-bold'>Previous Form Submissions</center>
        <input
        
            type='type'
            placeholder='Search by Short Name or Description'
            
            onChange={onChangeSearch}
            className='border border-gray-300 rounded-md p-2 ml-10 h-7 mt-4 mb-4 w-96 '
          />
       
    </div>

    

    <div className='flex'>
    <div className='flex w-[40%] border justify-center'>
          <strong>Sl No.</strong>
        </div>
        <div className='flex w-[40%] border justify-center'>
          <strong>Submission Date:</strong>
        </div>
        <div className='flex w-[40%] border justify-center'>
          <strong>Generation Date</strong>
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




    {!isSearchActive && pharmacyForms && Array.isArray(pharmacyForms.data) ? ( 
  pharmacyForms.data 
    .slice() // create a shallow copy of the array to avoid mutating the original
    .sort((a, b) => b.sl_no - a.sl_no) // sort the array in descending order of sl_no
    .map((form) => (
      <div key={form._id} className='flex'>
        <div className='flex w-[40%] py-2 border justify-center'>
          {form.sl_no}
        </div>
        <div className='flex w-[40%] py-2 border justify-center'>
        {new Date(form.date_of_submission).toLocaleDateString('en-GB')}
        </div>
       
        <div className='flex w-[40%] py-2 border justify-center'>
        {new Date(form.date_of_generation).toLocaleDateString('en-GB')}
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
  searchData && Array.isArray(searchData) && searchData
    .map((form) => (
      <div key={form._id} className='flex'>
        <div className='flex w-[40%] py-2 border justify-center'>
          {form.sl_no}
        </div>
        
        <div className='flex w-[40%] py-2 border justify-center'>
        {new Date(form.date_of_submission).toLocaleDateString('en-GB')}
        </div>
       
        <div className='flex w-[40%] py-2 border justify-center'>
          {new Date(form.date_of_generation).toLocaleDateString('en-GB')}
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
)}

</div>




</div>









    </div>
  )
}

export default PharmacyDashboard
