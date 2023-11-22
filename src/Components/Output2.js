import React, {useEffect, useRef, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useReactToPrint } from 'react-to-print'
import { getTracker, updateTracker } from '../redux/slice/TrackerSlice';
import { isUserLoggedIn } from '../redux/slice/UserSlice';
import { useNavigate } from 'react-router';


function Output2() {

    const [companyDetails, setCompanyDetails] = useState();
    const formattedDate = new Date().toLocaleDateString('en-GB');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const trackerDetails1 = useSelector((state) => state.tracker);
    let trackerDetails = null;
    if(trackerDetails1.getData){
        trackerDetails = trackerDetails1.getData.data[0];
    }

    useEffect(()=>{
        dispatch(isUserLoggedIn())
        .unwrap()
        .then((result) => {
          console.log("loggedIn", result);
        })
        .catch((error) => {
          navigate("/login");
          alert(error.message)
        })
        const details = JSON.parse(localStorage.getItem("PharmacyForm"))
        setCompanyDetails(details);
        dispatch(getTracker());
        

        
    },[setCompanyDetails, dispatch])

    const printRef = useRef();


    const handlePrint = useReactToPrint({
        content: () => printRef.current,
    })

  return (
    <>
   { companyDetails && trackerDetails && <div className=''>
       
      <div ref={printRef} >
       <div className=' w-[100%] text-[12px] text-center mt-10'>

        SOUTH CENTRAL RAILWAY <br/>
        MEDICAL DEPARTMENT<br/>
        MEDICAL DIRECTOR<br/>
        CENTRAL HOSPITAL, LALLAGUDA, SECUNDERABAD-500 017<br/>
        <hr className='w-[80%] mx-auto border-[1px] border-black '></hr>
           	


       </div>


       <div className='ml-20 text-[10px]'>
       No: HQ/MD/69/Stores/PH Code/{companyDetails.fy1}-{companyDetails.fy2}/{companyDetails.sl_no}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;
       
       Date:{formattedDate}<br/><br/>

       <p>PCMD/SCR</p><br/>
       <p className='ml-10'>Sub: - Allotment of Product Code for {companyDetails.short_name} - Reg.</p>
       <br/>
       <p className='ml-10'>With reference to the above, the following item is being proposed for allotment <br/>
       of New Product Code/Change of Description of product as applicable and to include <br/>
       in the Master list of {companyDetails.category} of South-Central Railway and approval is sought for the same. 
</p> <br/>
<p className='ml-10'>The following Firm is the manufacturer/Supplier for the subject item in India. </p>
<br/>
<p className='font-bold'>Manufactured By:</p>
<p>{companyDetails.pac_yes_no ==="Yes" ? companyDetails.manufactured_by : `${companyDetails.manufactured_by1}, ${companyDetails.manufactured_by2}`}</p>
<br/>
<p className=''>
    {companyDetails.pac_yes_no === "Yes" && (
        <>
            <strong>Imported By:  </strong><br />
            {companyDetails.imported_by} <br/><br/>
            <strong>Supplied By:</strong> <br/>
            {companyDetails.suppl_distrib_details}
        </>
    )}
</p>

<br/>
<br/>

<ul className='list-disc ml-10'>
    <li><strong>Description: </strong> {companyDetails.desc_and_spec} </li>
    <li><strong>Approximate Requirement: </strong> {companyDetails.avg_monthly_consumption} </li>
    <li><strong>Approximate Rate:  </strong> {companyDetails.rate_per_unit} : ( {companyDetails.price_ref} ) </li>
</ul>


<br/> <br/>

<p className='ml-10 '>
PCMD/SCR is requested to assign New product code/Change of Description as <br/>applicable and include in the Master list of {companyDetails.category} 
of South-Central Railway for use at CH/LGD.

</p>








       </div><br/><br/>


       <div className=' text-[10px] ml-[75%] w-[20%]'>
        <p>MEDICAL DIRECTOR <br/></p>
        Central Hospital<br/>
        Lallaguda/SC	
       </div>





      {/* SECOND PAGE */}
      <div className='mt-[500px]'>
      <div className=' w-[100%] text-[12px] text-center mt-10'>

SOUTH CENTRAL RAILWAY <br/>
MEDICAL DEPARTMENT<br/>
Office of the Medical Director<br/>
Central Hospital, Lallaguda, Secunderabad-500 017.
<br/>
<hr className='w-[80%] mx-auto border-[1px] border-black '></hr>

</div>



<div className='ml-20 text-[10px]'>
No: HQ/MD/69/Stores/PH Code/{companyDetails.fy1}-{companyDetails.fy2}/{companyDetails.sl_no}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;
     
       
       Date:{formattedDate}<br/><br/>
       <center><p className='ml-[-60px]'><strong>NOTE</strong></p></center>
       <br/>
       <br/>
       <p className='ml-10'>Sub: - Allotment of Product Code for {companyDetails.short_name}-Reg.
</p>
<center><p className='ml-[-60px]'>*****</p></center>
<br/>
<br/>
<p className='ml-10'>It is requested to assign the New product code/Change of Description of product as <br/>
applicable and include the below mentioned item in Master List of {companyDetails.category} <br/>
of South Central Railway for use at CH/LGD. Necessary justification, <br/> 
issued by {companyDetails.suggested_by}, Note Approval, and other documents if any are enclosed herewith.</p>

    <br/>
    <br/>
    <p><strong>Product Name : </strong> {companyDetails.desc_and_spec}</p>
    <br/>
    <br/>
    <div className='text-[12px] text-center ml-[70%] w-[20%]'>
    <p> Indenting Officer <br/>
      {companyDetails.suggested_by } 
    <br/>
  ( {companyDetails.suggested_by_designation } )

    </p>
    </div>
    <br/>
    <br/>
    MD/CH/LGD.<br/><br/><br/><br/>
    CHD/SCR.<br/><br/><br/><br/>
    PCMD/SCR.


    
    
    </div>


       


</div>



{/* THIRD PAGE */}

<div>
<div className=' w-[100%]  text-[10px] text-center mt-[600px]'>


Office of the Medical Director<br/>
Central Hospital, Lallaguda, Secunderabad-500 017.
<br/>
<hr className='w-[80%] mx-auto border-[1px] border-black '></hr>

</div>
<div className='ml-20 text-[10px]'>
    <p>Request No. {companyDetails.sl_no}/{companyDetails.fy1}-{companyDetails.fy2}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


       
       Date:{formattedDate}<br/></p>
       <br/>
       <center><p className='ml-[-60px]'>NOTE</p></center>
       <p>Request for Inclusion/Change in product Code</p>

       <table className='border-[1px] w-[90%] text-[10px]'>
            <tbody>
            <tr className=" border-[1px] border-black">
                <td className='border border-black w-[50%]'>New or Existing</td>
                <td>{companyDetails.req_for}</td>
            </tr>

            <tr className="border-[1px] border-black">
                <td className='border-[1px] w-[50%] border-black'>If Existing, Product Code</td>
                <td>{companyDetails.req_for === "New" ? "Not Applicable" : companyDetails.product_code}</td>
            </tr>
            <tr className="border-[1px] border-black">
                <td className='border-[1px] w-[50%] border-black'>Details of existing Product</td>
                <td>{companyDetails.req_for === "New" ? "Not Applicable" : companyDetails.details_existing_product}</td>
            </tr>
            <tr className="border-[1px] border-black">
                <td className='border-[1px] border-black w-[50%]'>Details of changes proposed in the above product </td>
                <td>{companyDetails.req_for === "New" ? "Not Applicable" : companyDetails.details_of_changes}</td>
            </tr>
            <tr className="border-[1px] border-black">
                <td className='border-[1px] border-black w-[50%]'>Specification</td>
                <td>{companyDetails.req_for === "New" ? "Not Applicable" : companyDetails.specification}</td>
            </tr>
            <tr className="border-[1px] border-black">
                <td ><strong>If New, Proposed Details</strong></td>
                <td></td>
            </tr>
            <tr className="border-[1px] border-black">
                <td className='border-[1px] border-black w-[50%]'>New Product Code</td>
                <td></td>
            </tr>
            <tr className="border-[1px] border-black">
                <td className='border-[1px] border-black w-[50%]'>Short Name</td>
                <td>{companyDetails.short_name}</td>
            </tr>
            <tr className="border-[1px] border-black">
                <td className='border-[1px] border-black w-[50%]'>Unit</td>
                <td>{companyDetails.unit}</td>
            </tr>
            <tr className="border-[1px] border-black">
                <td className='border border-black w-[50%]'>Description and Specification</td>
                <td>{companyDetails.desc_and_spec}</td>
            </tr>
            <tr className="border-[1px] border-black">
                <td className='border-[1px] border-black w-[50%]'>Shelf Life</td>
                <td>{companyDetails.shelf_life}</td>
            </tr>
            <tr className="border-[1px] border-black">
                <td className='border-[1px] border-black w-[50%]'>Justification</td>
                <td>{companyDetails.prod_brief_justif}</td>
            </tr>
            <tr className="border-[1px] border-black">
                <td className='border-[1px] border-black w-[50%]'>Whether  the item has to be procured under PAC
(YES/NO)
</td>
                <td>{companyDetails.pac_yes_no}</td>
            </tr>
            <tr className="border-[1px] border-black">
                <td className='border-[1px] border-black w-[50%]'>If Yes, Details of OM/OEM available in the market</td>
                <td>{companyDetails.pac_yes_no === "Yes" ? (
        <>
            <strong>Manufactured By:</strong> <br />
            {companyDetails.manufactured_by} <br /><br />
            <strong> Supplied by:</strong> <br />
            {companyDetails.suppl_distrib_details}<br/>
            <strong>Imported By</strong><br/>
            {companyDetails.imported_by}

        </>
    ) : "Not Applicable"}</td>
            </tr>
            <tr className="border-[1px] border-black">
                <td className='border-[1px] border-black w-[50%]'>If No, Details of OM/OEM available in the market</td>
                <td>{companyDetails.pac_yes_no === "No" ? (
        <>
            <strong>Manufactured By (Company 1):</strong> <br />
            {companyDetails.manufactured_by1} <br /><br />
            <strong>Manufactured By (Company 2):</strong> <br />
            {companyDetails.manufactured_by2}
        </>
    ) : "Not Applicable"}</td>
            </tr>
            <tr className="border-[1px] border-black">
                <td className='border-[1px] border-black w-[50%]'>Suggested by</td>
                <td className='flex justify-center pt-20'>{companyDetails.suggested_by} <br/>( {companyDetails.suggested_by_designation } )</td>
            </tr>

            <tr className="border-[1px] border-black">
                <td className='border-[1px] border-black w-[50%] '>Countersigned by 
Unit in-charge/Stores Incharge 
</td>
                <td className='flex justify-center pt-20'>{companyDetails.counter_signed_by}<br/> ( {companyDetails.counter_signed_by_designation } )</td>
            </tr>
            <tr className="border-[1px] border-black">
                <td className='border-[1px] border-black w-[50%]'>MD/CH/LGD</td>
                <td className='h-20'>Signature: </td>
            </tr>
            <tr className="border-[1px] border-black">
                <td className='border-[1px] border-black w-[50%]'>CHD/SCR</td>
                <td className='h-20'>Signature: </td>
            </tr>

            <tr className="border-[1px] border-black">
                <td className='border-[1px] border-black w-[50%]'>PCMD/SCR</td>
                <td className='h-20'>Signature: </td>
            </tr>
            </tbody>
       </table>

</div>


</div>



{/* LAST FORM  */}


    <div>
   
<div className=' w-[100%] text-[12px] text-center mt-96'>


<strong>SOUTH CENTRAL RAILWAY <br/>
MEDICAL DIRECTOR<br/>
CENTRAL HOSPITAL, LALLAGUDA, SECUNDERABAD-17<br/></strong>

<hr className='w-[80%] mx-auto border-[1px] border-black '></hr>

</div>

<div className='ml-20 text-[10px]'>
No: HQ/MD/69.Stores/PH Code/{companyDetails.fy1}-{companyDetails.fy2}/{companyDetails.sl_no}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;
     
      
       
       
       Date:{formattedDate}<br/><br/>

       <p className='ml-10'>Sub: Justification for procurement of  {companyDetails.short_name}-Reg.
</p>

<center><p className='ml-[-60px]'>*****</p></center>

<div className='w-[60%] ml-10 '>
    {companyDetails.prod_complete_justif}
</div>

<div className='text-[12px] text-center ml-[70%] w-[20%]'>
    <p>  <br/>
    {companyDetails.suggested_by}  
    <br/>
  ( {companyDetails.suggested_by_designation } )

    </p>
    </div>

       </div>
    </div>








      </div>

    </div>}

    <div className='flex justify-center mb-96 mt-10'>
            <button 
            className='bg-ui-light-blue text-white w-96 h-10 rounded-md'
            onClick={handlePrint}>Print</button>
        </div>

    {/* <button onClick={handlePrint}>Print</button> */}
    </>
  )
}

export default Output2
