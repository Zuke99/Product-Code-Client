import React, {useEffect, useRef, useState} from 'react'
import { useReactToPrint } from 'react-to-print'

function Output2() {

    const [companyDetails, setCompanyDetails] = useState();
    const formattedDate = new Date().toLocaleDateString('en-GB');

    useEffect(()=>{
        const details = JSON.parse(localStorage.getItem("PharmacyForm"))
        setCompanyDetails(details);
    },[setCompanyDetails])

    const printRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => printRef.current,
    })

  return (
    <>
   { companyDetails && <div className=''>
       
      <div ref={printRef} >
       <div className=' w-[100%] text-md text-center mt-10'>

        SOUTH CENTRAL RAILWAY <br/>
        MEDICAL DEPARTMENT<br/>
        MEDICAL DIRECTOR<br/>
        CENTRAL HOSPITAL, LALLAGUDA, SECUNDERABAD-500 017<br/>
        <hr className='w-[80%] mx-auto border-[1px] border-black '></hr>
           	


       </div>


       <div className='ml-20 text-sm'>
       No: HQ/MD/69/Stores/PH Code/2023-24/{1}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       
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
<p className='font-bold'>{ companyDetails.pac_yes_no === "Yes" ? `Imported / Supplied By: ${companyDetails.imported_by}` :"" } </p>
<br/>
<br/>

<ul className='list-disc ml-10'>
    <li><strong>Description: </strong> {companyDetails.desc_and_spec} </li>
    <li><strong>Approximate Requirement: </strong> {companyDetails.avg_monthly_consumption} </li>
    <li><strong>Approximate Rate:  </strong> {companyDetails.rate_per_unit} : ( {companyDetails.avg_monthly_consumption} ) </li>
</ul>


<br/> <br/>

<p className='ml-10 '>
PCMD/SCR is requested to assign New product code and include in the Master list of {companyDetails.category} <br/> 
of South-Central Railway for use at CH/LGD.

</p>








       </div><br/><br/>


       <div className='ml-96 text-sm'>
        <p>MEDICAL DIRECTOR <br/></p>
        Central Hospital<br/>
        Lallaguda/SC	
       </div>





      {/* SECOND PAGE */}
      <div className='mt-[500px]'>
      <div className=' w-[100%] text-md text-center mt-10'>

SOUTH CENTRAL RAILWAY <br/>
MEDICAL DEPARTMENT<br/>
Office of the Medical Director<br/>
Central Hospital, Lallaguda, Secunderabad-500 017.
<br/>
<hr className='w-[80%] mx-auto border-[1px] border-black '></hr>

</div>



<div className='ml-20 text-sm'>
No: HQ/MD/69/Stores/PH Code/{2023-24}/{10}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       
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
issued by {companyDetails.suggested_by} Note Approval, and other documents if any are enclosed herewith.</p>

    <br/>
    <br/>
    <p><strong>Product Name : </strong> {companyDetails.desc_and_spec}</p>
    <br/>
    <br/>
    <div className='text-md text-center'>
    <p> Indenting Officer <br/>
    {companyDetails.suggested_by}  
    <br/>
   {localStorage.getItem("Doctor")}

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
<div className=' w-[100%] text-sm text-center mt-96'>


Office of the Medical Director<br/>
Central Hospital, Lallaguda, Secunderabad-500 017.
<br/>
<hr className='w-[80%] mx-auto border-[1px] border-black '></hr>

</div>
<div className='ml-20 text-sm'>
    <p>Request No. {1}  
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       
       Date:{formattedDate}<br/></p>
       <br/>
       <center><p className='ml-[-60px]'>NOTE</p></center>
       <p>Request for Inclusion/Change in product Code</p>

       <table className='border w-[80%]'>
            <tbody>
            <tr className="border">
                <td className='border w-[50%]'>New or Existing</td>
                <td>{companyDetails.req_for}</td>
            </tr>

            <tr className="border">
                <td>If Existing, Product Code</td>
                <td>{companyDetails.req_for === "New" ? "Not Applicable" : companyDetails.product_code}</td>
            </tr>
            <tr className="border">
                <td>Details of existing Product</td>
                <td>{companyDetails.req_for === "New" ? "Not Applicable" : companyDetails.details_existing_product}</td>
            </tr>
            <tr className="border">
                <td>Details of changes proposed in the above product </td>
                <td>{companyDetails.req_for === "New" ? "Not Applicable" : companyDetails.details_of_changes}</td>
            </tr>
            <tr className="border">
                <td>Specification</td>
                <td>{companyDetails.req_for === "New" ? "Not Applicable" : companyDetails.specification}</td>
            </tr>
            <tr className="border">
                <td>If New, Proposed Details</td>
                <td></td>
            </tr>
            <tr className="border">
                <td>New Product Code</td>
                <td></td>
            </tr>
            <tr className="border">
                <td>Short Name</td>
                <td>{companyDetails.short_name}</td>
            </tr>
            <tr className="border">
                <td>Unit</td>
                <td>{companyDetails.unit}</td>
            </tr>
            <tr className="border">
                <td>Description and Specification</td>
                <td>{companyDetails.desc_and_spec}</td>
            </tr>
            <tr className="border">
                <td>Shelf Life</td>
                <td>{companyDetails.shelf_life}</td>
            </tr>
            <tr className="border">
                <td>Justification</td>
                <td>{companyDetails.prod_brief_justif}</td>
            </tr>
            <tr className="border">
                <td>Whether  the item has to be procured under PAC
(YES/NO)
</td>
                <td>{companyDetails.pac_yes_no}</td>
            </tr>
            <tr className="border">
                <td>If YES Details of OM/OEM available in the market</td>
                <td>{companyDetails.pac_yes_no === "Yes" ? `Manufactured By : ${companyDetails.manufactured_by }  Imported & Supplied
                by: ${companyDetails.suppl_distrib_details}
                ` :  "Not Applicable"}</td>
            </tr>
            <tr className="border">
                <td>If No, Details of OM/OEM available in the market</td>
                <td>{companyDetails.pac_yes_no === "No" ? `Manufactured By (Company 1): ${companyDetails.manufactured_by1 }  Manufactured By (Company 1):
                 ${companyDetails.manufactured_by2}
                ` :  "Not Applicable"}</td>
            </tr>
            <tr className="border">
                <td>Suggested by</td>
                <td>{companyDetails.suggested_by}</td>
            </tr>

            <tr className="border">
                <td>Countersigned by 
Unit in-charge/Sores Incharge 
</td>
                <td>{companyDetails.counter_signed_by}</td>
            </tr>
            <tr className="border">
                <td>MD/CH/LGD</td>
                <td>Signature: </td>
            </tr>
            <tr className="border">
                <td>CHD/SCR</td>
                <td>Signature: </td>
            </tr>

            <tr className="border">
                <td>PCMD/SCR</td>
                <td>Signature: </td>
            </tr>
            </tbody>
       </table>

</div>


</div>



{/* LAST FORM  */}


    <div>
   
<div className=' w-[100%] text-md text-center mt-96'>


<strong>SOUTH CENTRAL RAILWAY <br/>
MEDICAL DIRECTOR<br/>
CENTRAL HOSPITAL, LALLAGUDA, SECUNDERABAD-17<br/></strong>

<hr className='w-[80%] mx-auto border-[1px] border-black '></hr>

</div>

<div className='ml-20 text-sm'>
No: HQ/MD/69.Stores/PH Code/FY/{1}     
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       
       Date:{formattedDate}<br/><br/>

       <p className='ml-10'>Justification for procurement of  {companyDetails.short_name}-Reg.
</p>

<center><p className='ml-[-60px]'>*****</p></center>

<div className='w-[60%] ml-10 '>
    {companyDetails.prod_complete_justif}
</div>

<div className='text-md text-center'>
    <p>  <br/>
    {companyDetails.suggested_by}  
    <br/>
   {localStorage.getItem("Doctor")}

    </p>
    </div>

       </div>
    </div>








      </div>

    </div>}

    <button onClick={handlePrint}>Print</button>
    </>
  )
}

export default Output2
