import React, { useEffect, useState } from 'react'
import WordCountTextbox from './WordCountTextbox';
import { useDispatch, useSelector } from 'react-redux';
import { addPharmacyForm } from '../redux/slice/PharmacySlice';
import { useNavigate } from 'react-router';
import { getAllDoctors } from '../redux/slice/DoctorSlice';
import DoctorEntry from './DoctorEntry';
import UploadWidget from './UploadWidget';
import { updateCompanyFormStatus } from '../redux/slice/CompanyFormSlice';
import CopyToClipboardButton from './CopyToClipboardButton';
import { getTracker, updateTracker } from '../redux/slice/TrackerSlice';
import { isUserLoggedIn } from '../redux/slice/UserSlice';


function PharmacyForm() {

   



    // const profileUpload = async (file) => {
    //     const formData = new FormData();
    //     formData.append("file", file);
    //     formData.append("upload_preset", "productcode");
    //     let data = "";
    //     await axios.post(
    //         "http://api.cloudinary.com/v1_1/productcode/file/upload"
    //     )
        
    // }



    const [productCode, setProductCode] = useState(JSON.parse(localStorage.getItem("CompanyForm")).product_code || "");
    const [detailsExistingProduct, setDetailsExistingProduct] = useState(JSON.parse(localStorage.getItem("CompanyForm")).details_existing_product || "");
    const [detailsOfChanges, setDetailsOfChanges] = useState(JSON.parse(localStorage.getItem("CompanyForm")).details_of_changes || "");
    const [specification, setSpecification] = useState(JSON.parse(localStorage.getItem("CompanyForm")).specification || "");
    const [category, setCategory] = useState(JSON.parse(localStorage.getItem("CompanyForm")).category || "Medicines");
    const [shortName, setShortName] = useState(JSON.parse(localStorage.getItem("CompanyForm")).short_name || '');
    const [unit, setUnit] = useState(JSON.parse(localStorage.getItem("CompanyForm")).unit || '');
    const [descAndSpec, setDescAndSpec] = useState(JSON.parse(localStorage.getItem("CompanyForm")).desc_and_spec || '');
    const [shelfLife, setShelfLife] = useState(JSON.parse(localStorage.getItem("CompanyForm")).shelf_life || '');
    const [prodBriefJustif, setProdBriefJust] = useState(JSON.parse(localStorage.getItem("CompanyForm")).prod_brief_justif || '');
    const [prodCompleteJustif, setProdCompleteJustif] = useState(JSON.parse(localStorage.getItem("CompanyForm")).prod_complete_justif || '');
    const [pac, setPac] = useState(JSON.parse(localStorage.getItem("CompanyForm")).pac_yes_no || 'Yes');
    const [ratePerUnit, setRatePerUnit] = useState(JSON.parse(localStorage.getItem("CompanyForm")).rate_per_unit || '');
    const [priceRef, setPriceRef] = useState(JSON.parse(localStorage.getItem("CompanyForm")).price_ref || '');
    const [manufacturedBy, setManufacturedBy] = useState(JSON.parse(localStorage.getItem("CompanyForm")).manufactured_by || '');
    const [importedBy, setImportedBy] = useState(JSON.parse(localStorage.getItem("CompanyForm")).imported_by || '');
    const [supplDistribDetails, setSupplDistribDetails] = useState(JSON.parse(localStorage.getItem("CompanyForm")).suppl_distrib_details || '');
    const [manufacturedBy1, setManufacturedBy1] = useState(JSON.parse(localStorage.getItem("CompanyForm")).manufactured_by1 || '');
    const [manufacturedBy2, setManufacturedBy2] = useState(JSON.parse(localStorage.getItem("CompanyForm")).manufactured_by2 || '');
    const [suggestedBy, setSuggestedBy] = useState(JSON.parse(localStorage.getItem("CompanyForm")).suggested_by ||"");
    const [counterSignedBy, setCounterSignedBy] = useState(JSON.parse(localStorage.getItem("CompanyForm")).counter_signed_by ||"");
    const [avgMontlyConsumption, setAvgMonthlyConsumption] = useState(JSON.parse(localStorage.getItem("CompanyForm")).avg_monthly_consumption || "");
    const [req, setReq] = useState(JSON.parse(localStorage.getItem("CompanyForm")).req_for || "New");

    const [quotationLpr, setQuotationLpr] = useState(JSON.parse(localStorage.getItem("CompanyForm")).file_quotation_lpr || '');
    const [pacCertificate, setPacCertificate] = useState(JSON.parse(localStorage.getItem("CompanyForm")).file_pac_certif || '');
    const [manufacturerFile, setManufacturerFile] = useState(JSON.parse(localStorage.getItem("CompanyForm")).file_manufacture_impoeter_supplier || '');
    const [productPackPhoto, setProductPackPhoto] = useState(JSON.parse(localStorage.getItem("CompanyForm")).file_prod_pack_photo || '');
    const [additionalDoc1, setAdditionalDoc1] = useState(JSON.parse(localStorage.getItem("CompanyForm")).file_other_doc1 || '');
    const [additionalDoc2, setAdditionalDoc2] = useState(JSON.parse(localStorage.getItem("CompanyForm")).file_other_doc2 || '');
    const [additionalDoc3, setAdditionalDoc3] = useState(JSON.parse(localStorage.getItem("CompanyForm")).file_other_doc3 || '');

    const [fy1, setFy1] = useState();
    const [fy2, setFy2] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData,setFormData] = useState([]);
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
        dispatch(getAllDoctors());
          const data = JSON.parse(localStorage.getItem("CompanyForm"));
          dispatch(getTracker());
          checkFY();
          setFormData(data)
          // if(allDoctors){
          //     setSuggestedBy(allDoctors[0].name);
          //     setCounterSignedBy(allDoctors[0].name);
          // }
          
          
         
      },[dispatch, setFormData, setSuggestedBy, setCounterSignedBy])

  


    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const trackerDetails1 = useSelector((state) => state.tracker);
    let trackerDetails = null;
    if(trackerDetails1.getData){
        trackerDetails = trackerDetails1.getData.data[0];
    }

    const handleOpenPopup = () => {
      setIsPopupOpen(true);
    };
  
    const handleClosePopup = () => {
      setIsPopupOpen(!isPopupOpen);
    };

    const validate = () => {
        if(req === ""){
            alert("Enter Reequest For");
          return false;
        }
        if(req === "Existing" && productCode === ""){
            alert("Enter Product Code");
          return false;
        }
        if(req === "Existing" && detailsExistingProduct === ""){
            alert("Enter Details of existing Product");
          return false;
        }
        if(req === "Existing" && detailsOfChanges === ""){
            alert("Enter Details of changes proposed in the above product");
          return false;
        }
        if(req === "Existing" && specification === ""){
            alert("Enter Specification");
          return false;
        }
        
        
        
        
        if(category === ""){
            alert("Enter Category");
          return false;
        }
        
        if (shortName === "") {
            console.log("short empty")
          alert("Enter Short Name");
          return false;
        }
        if (unit === "") {
          alert("Enter Unit");
          return false;
        }
        if (descAndSpec === "") {
          alert("Enter Description and Specification");
          return false;
        }
        if (shelfLife === "") {
          alert("Enter Shelf Life");
          return false;
        }
        if (prodBriefJustif === "") {
          alert("Enter Product Brief Justification");
          return false;
        }
        if (prodCompleteJustif === "") {
          alert("Enter Product Complete Justification");
          return false;
        }
        if (pac === "Yes") {
          if (manufacturedBy === "") {
            alert("Enter Manufactured By");
            return false;
          }
          if (importedBy === "") {
            alert("Enter Imported By");
            return false;
          }
          if (supplDistribDetails === "") {
            alert("Enter Supplier/Distributor Details");
            return false;
          }
        } else {
          if (manufacturedBy1 === "") {
            alert("Enter Manufactured By (Company 1)");
            return false;
          }
          if (manufacturedBy2 === "") {
            alert("Enter Manufactured By (Company 2)");
            return false;
          }
        }
        if (ratePerUnit === "") {
          alert("Enter Rate per Unit");
          return false;
        }
        if (priceRef === "") {
            alert("Enter Price Reference");
            return false;
          }
        if(suggestedBy === "" || suggestedBy ==="Select a Doctor"){
            console.log("suggested by", suggestedBy);
            alert("Enter Suggested By");
          return false;
        }
        if(counterSignedBy === "" || counterSignedBy === "Select a Doctor"){
            alert("Enter Counter Signed By");
          return false;
        }
        if (avgMontlyConsumption === "") {
            alert("Enter Average Monthly Consumption");
            return false;
          }
        
      
        return true;
      };

    const allDoctors = useSelector((state) => state.doctor.doctorData)


   


    const refreshDoctorList = () => {
        dispatch(getAllDoctors());
    }

    const onPacChange = (e) => {
        setPac(e.target.value);
    }
    const onReqChange = (e) => {
        setReq(e.target.value);
    }
    const onChangeProductCode = (e) => {
        setProductCode(e.target.value);
    }
    const onChangeCategory = (e) => {
        setCategory(e.target.value);
    }
    const onChangeShelfLife = (e) => {
        setShelfLife(e.target.value);
    }
    const onChangeSuggestedBy = (e) => {
        setSuggestedBy(e.target.value);
    }
    const onChangeCounterSignedBy = (e) => {
        setCounterSignedBy(e.target.value);
    }

    const checkFY = () => {
        const date = new Date();
        let currentMonth = date.getMonth()+1;
        let currentYear = date.getFullYear();
        const fyear2 = (currentYear % 100) + 1;

        if(trackerDetails){
        setFy1(trackerDetails.fy1);
        setFy2(trackerDetails.fy2);
        }


       
        
        if(currentMonth > 2){
            let updateTracker1 = {
                _id : "6553250e6c6ac4939b14cdc0",
                fy1 : currentYear,
                fy2 : fyear2
            }
            setFy1(currentYear);
            setFy2(fyear2);
            dispatch(updateTracker(updateTracker1));

        }
        

        console.log(currentYear);
        console.log(currentMonth);
    }
    const onClickCancel = () => {
        navigate("/pharmacy-dashboard");
    }
    const onClickSubmit = () => {

        if(validate()){
        for(let i = 0;i< allDoctors.length ;i++){
            if(allDoctors[i].name === suggestedBy){
                localStorage.setItem("Doctor", JSON.stringify(allDoctors[i].designation));
            }
        }


        const slno = trackerDetails.sl_no + 1;
        const trackerUpdate = {
            _id : "6553250e6c6ac4939b14cdc0",
            sl_no : slno
        }
        const data = {
            sl_no : slno,
            fy1 : fy1,
            fy2 : fy2,
            req_for : req,
            product_code : productCode,
            details_existing_product : detailsExistingProduct,
            details_of_changes : detailsOfChanges,
            specification : specification,
            category : category,
            short_name : shortName,
            unit : unit,
            desc_and_spec : descAndSpec,
            shelf_life : shelfLife,
            prod_brief_justif : prodBriefJustif,
            prod_complete_justif : prodCompleteJustif,
            pac_yes_no : pac,
            manufactured_by : manufacturedBy,
            imported_by : importedBy,
            suppl_distrib_details : supplDistribDetails,
            manufactured_by1 : manufacturedBy1,
            manufactured_by2 : manufacturedBy2,
            rate_per_unit : ratePerUnit,
            price_ref : priceRef,
            suggested_by : suggestedBy,
            counter_signed_by : counterSignedBy,
            avg_monthly_consumption : avgMontlyConsumption,
            file_quotation_lpr : quotationLpr,
            file_pac_certif : pacCertificate,
            file_manufacture_impoeter_supplier : manufacturerFile,
            file_prod_pack_photo : productPackPhoto,
            file_other_doc1 : additionalDoc1,
            file_other_doc2 : additionalDoc2,
            file_other_doc3 : additionalDoc3,

        }

        const storageId = JSON.parse(localStorage.getItem("CompanyForm"))._id;

        const idData = {
            _id : storageId
        }
       // console.log(storageId);

        dispatch(updateCompanyFormStatus(idData))

         dispatch(addPharmacyForm(data))
         .unwrap()
         .then((result) => {
            alert(result.message);
            localStorage.setItem("PharmacyForm", JSON.stringify(data));
            navigate("/output-1")
         }).catch((error) => {
            alert(error);
           })

        dispatch(updateTracker(trackerUpdate));
    }



         



    }

  return (
    <>
   {/* { formData && <div className='flex flex-col border'>
        <div className='flex w-[100%]'>
            <table className='w-[50%] text-sm'>
            <tr className='border'>
                    <td className=''>Request For: </td>
                    <td className='px-10'><select onChange={onReqChange}>
                        <option>New</option>
                        <option>Existing</option>
                        </select></td>
                       { req === 'Existing' && <div>
                        <tr>
                            <td>Product Code</td>
                            <td><input type='number' onChange={onChangeProductCode} className='border' placeholder='Product Code'/></td>
                        </tr>
                        <tr>
                            <td>Details of existing Product</td>
                            <td><WordCountTextbox wordCount={60} onTextChange={(text) => setDetailsExistingProduct(text)} 
                            /></td>
                        </tr>
                        <tr>
                            <td>Details of changes proposed in the above product </td>
                            <td><WordCountTextbox wordCount={60} onTextChange={(text) => setDetailsOfChanges(text)}/></td>
                        </tr>
                        <tr>
                            <td>Specification </td>
                            <td><WordCountTextbox wordCount={100} onTextChange={(text) => setSpecification(text)}/></td>
                        </tr>
                        </div>}
                       
                </tr>
                <tr className='border'>
                    <td className=''>Category: </td>
                    <td className='px-10'><select onChange={onChangeCategory}>
                        <option>Medicines</option>
                        <option>Consumables</option>
                        </select></td>
                </tr>
                <tr className='border'>
                    <td className=''>Short Name: </td>
                    <td className='px-10'><WordCountTextbox wordCount = {10} onTextChange={(text) => setShortName(text)}
                    defaultValue={JSON.parse(localStorage.getItem("CompanyForm")).short_name}
                    /></td>
                </tr>
                <tr className='border'>
                    <td className=''>Unit :</td>
                    <td className='px-10'><WordCountTextbox wordCount = {10} onTextChange={(text) => setUnit(text)}
                    defaultValue={JSON.parse(localStorage.getItem("CompanyForm")).unit}/></td>
                </tr>
                <tr className='border'>
                    <td className=''>Description and Specification :</td>
                    <td className='px-10'><WordCountTextbox wordCount = {50} onTextChange={(text) => setDescAndSpec(text)}
                    defaultValue={JSON.parse(localStorage.getItem("CompanyForm")).desc_and_spec }/></td>
                </tr>
                <tr className='border'>
                    <td className=''>Shelf Life :</td>
                    <td className='px-10'><input className='border' type='text' onChange={onChangeShelfLife} value={JSON.parse(localStorage.getItem("CompanyForm")).shelf_life}></input></td>
                </tr>
                <tr className='border'>
                    <td className=''>Product Brief Justification :</td>
                    <td className='px-10'><WordCountTextbox wordCount = {60} onTextChange={(text) => setProdBriefJust(text)}
                    defaultValue={JSON.parse(localStorage.getItem("CompanyForm")).prod_brief_justif}/></td>
                </tr>
              
                <tr className='border'>
                    <td className=''>Product Complete Justification :</td>
                    <td className='px-10'><WordCountTextbox wordCount = {300} onTextChange={(text) => setProdCompleteJustif(text)}
                    defaultValue={JSON.parse(localStorage.getItem("CompanyForm")).prod_complete_justif}/></td>
                </tr>
               
                


                <tr className='border'>
                    <td className=''>Whether  the item has to be procured under “PAC”(YES/NO)
 :</td>
                    <td className='px-10'>
                        <select onChange={onPacChange}>
                            <option>Yes</option>
                            <option>No</option>
                        </select>

                        

                    </td>
                    </tr>
                    
                    {pac === "Yes" && <div>
                    <tr>
                            <td> Manufactured By: (Name & Complete Address)</td>
                            <td><WordCountTextbox wordCount={100} onTextChange={(text) => setManufacturedBy(text)}
                            defaultValue={JSON.parse(localStorage.getItem("CompanyForm")).manufactured_by}/></td>
                        </tr>
                        <tr>
                            <td> Imported by: (Name & Complete Address) </td>
                            <td><WordCountTextbox wordCount={100} onTextChange={(text) => setImportedBy(text)}
                            defaultValue={JSON.parse(localStorage.getItem("CompanyForm")).imported_by}/></td>
                        </tr>
                        <tr>
                            <td> Supplier/Distributor Details:(Name & Complete Address)
</td>
                            <td><WordCountTextbox wordCount={100} onTextChange={(text) => setSupplDistribDetails(text)}
                            defaultValue={JSON.parse(localStorage.getItem("CompanyForm")).suppl_distrib_details}/></td>
                        </tr>
                    </div>}

                   { pac === "No" && <div>
                        <tr>
                        <td>Manufactured By: (Company 1)</td>
                        <td><WordCountTextbox wordCount={100} onTextChange={(text) => setManufacturedBy1(text)}
                        defaultValue={JSON.parse(localStorage.getItem("CompanyForm")).manufactured_by1}/></td>
                        </tr>

                        <tr>
                        <td>Manufactured By: (Company 2)</td>
                        <td><WordCountTextbox wordCount={100} onTextChange={(text) => setManufacturedBy2(text)}
                        defaultValue={JSON.parse(localStorage.getItem("CompanyForm")).manufactured_by2}/></td>
                        </tr>
                    </div>}
                
                <tr className='border'>
                    <td className=''>Rate per Unit :</td>
                    <td className='px-10'><WordCountTextbox wordCount = {50} onTextChange={(text) => setRatePerUnit(text)}
                    defaultValue={JSON.parse(localStorage.getItem("CompanyForm")).rate_per_unit}/></td>
                </tr>
                <tr className='border'>
                    <td className=''>Price reference if any :</td>
                    <td className='px-10'><WordCountTextbox wordCount = {50} onTextChange={(text) => setPriceRef(text)}
                    defaultValue={JSON.parse(localStorage.getItem("CompanyForm")).price_ref}/></td>
                </tr>
                <tr className='border'>
                    <td className=''>Suggested by :</td>
                    <td className='px-10'>
                        
                           { allDoctors && <select
                                value={suggestedBy}
                                onChange={onChangeSuggestedBy}
                            >
                                <option value="" disabled>
                                Select a Doctor
                                </option>
                                {allDoctors.map((doctor) => (
                                <option key={doctor._id} value={doctor.name}>
                                    {doctor.name}
                                </option>
                                ))}
                            </select>}
                                                
                        </td>
                </tr>
                <tr className='border'>
                    <td className=''>Countersigned by Unit in-charge/Sores Incharge :</td>
                    <td className='px-10'>  { allDoctors && <select
                                value={counterSignedBy}
                                onChange={onChangeCounterSignedBy}
                            >
                                <option disabled>
                                Select a Doctor
                                </option>
                                {allDoctors.map((doctor) => (
                                <option key={doctor._id} value={doctor.name}>
                                    {doctor.name}
                                </option>
                                ))}
                            </select>}
                            <button onClick={handleOpenPopup}>Open Doctor Entry</button>
      {isPopupOpen && (
        <DoctorEntry onClose={handleClosePopup} onSuccess = {refreshDoctorList}/>
      )}
                            </td>
                </tr>
                <tr className='border'>
                    <td className=''>Average Monthly Consumption :</td>
                    <td className='px-10'><WordCountTextbox wordCount = {60} onTextChange={(text) => setAvgMonthlyConsumption(text)}
                    defaultValue={JSON.parse(localStorage.getItem("CompanyForm")).avg_monthly_consumption}/></td>
                </tr>
                <tr className='border'>
                    <td className=''>Upload documents :</td>
                    <tr className='border'><label> Quotation/LPR </label><td className='px-10'><UploadWidget onTextChange={(link) => setQuotationLpr(link)}/> {quotationLpr === "" ? "Not Uploaded" : quotationLpr}</td></tr>
                    <tr className='border'><label> PAC Certificate (If Any) </label><td className='px-10'><UploadWidget onTextChange={(link) => setPacCertificate(link)}/>{pacCertificate === "" ? "Not Uploaded" : pacCertificate}</td></tr>
                    <tr className='border'><label> Manufacturer/ Importer/ Supplier Details </label><td className='px-10'><UploadWidget onTextChange={(link) => setManufacturerFile(link)}/>{manufacturerFile === "" ? "Not Uploaded" : manufacturerFile}</td></tr>
                    <tr className='border'><label>  Product Pack Photo </label><td className='px-10'><UploadWidget onTextChange={(link) => setProductPackPhoto(link)}/>{productPackPhoto === "" ? "Not Uploaded" : productPackPhoto}</td></tr>

                    <tr className='border'><label> Additional Document 1 </label><td className='px-10'><UploadWidget onTextChange={(link) => setAdditionalDoc1(link)}/>{additionalDoc1 === "" ? "Not Uploaded" : additionalDoc1}</td></tr>
                    <tr className='border'><label> Additional Document 2 </label><td className='px-10'><UploadWidget onTextChange={(link) => setAdditionalDoc2(link)}/>{additionalDoc2 === "" ? "Not Uploaded" : additionalDoc2}</td></tr>
                    <tr className='border'><label> Additional Document 3 </label><td className='px-10'><UploadWidget onTextChange={(link) => setAdditionalDoc3(link)}/>{additionalDoc3 === "" ? "Not Uploaded" : additionalDoc3}</td></tr>
                </tr>
            </table>
            
        </div>

        <button onClick={onClickSubmit}>Submit</button>
    </div>} */}






    {/*    *********************************************** NEW DESIGN ************************************************************ */}

    {formData && <div className='flex justify-center w-[100%] mt-10 '>

       <div className=' w-[80%]'>
        <div>
            <div className='flex bg-ui-black h-10 items-center justify-center'>
                <center className='text-white text-lg font-bold'>Pharmacy Form</center>
            </div>
        </div>
        <div className='flex' >
            <div className='flex w-[40%] px-5 py-2 border items-center'>
                Request For
            </div>

            <div className='px-5 py-2 border w-[60%]'>
            <select className='h-10 w-32 border text-center'
            onChange={onReqChange}>
                        <option>New</option>
                        <option>Existing</option>
                        </select>
            </div>
        </div>




        <div className='flex' >
            <div className='flex w-[40%] px-5 py-2 border items-center'>
                    Category
                </div>

                <div className='px-5 py-2 border w-[60%]'>
                <select className='h-10 w-32 border text-center'
                onChange={onChangeCategory}>
                            <option>Medicines</option>
                            <option>Consumables</option>
                            </select>
                </div>
            </div>




        {req === 'Existing' &&<>
        <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
                Product Code
            </div>
            <div className='px-5 py-2 border w-[60%]'>
                <input type='number' onChange={onChangeProductCode} 
                className='border h-10 w-96 px-5 rounded-md' 
                placeholder='Product Code'/>
            </div>

        </div>




        <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
                Details of existing Product
            </div>
            <div className='px-5 py-2 border w-[60%]'>
            <WordCountTextbox wordCount={60} onTextChange={(text) => setDetailsExistingProduct(text)} />
            </div>

        </div>




        <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
            Details of changes proposed in the above product
            </div>
            <div className='px-5 py-2 border w-[60%]'>
            <WordCountTextbox wordCount={60} onTextChange={(text) => setDetailsOfChanges(text)} />
            </div>

        </div>




        <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
            Specification
            </div>
            <div className='px-5 py-2 border w-[60%]'>
            <WordCountTextbox wordCount={60} onTextChange={(text) => setSpecification(text)} />
            </div>

        </div>
        </>}




        <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
            Short Name (Generic Name)
            </div>
            <div className='px-5 py-2 border w-[60%]'>
            <WordCountTextbox wordCount = {10} onTextChange={(text) => setShortName(text)}
                defaultValue={JSON.parse(localStorage.getItem("CompanyForm")).short_name} />
            </div>

        </div>




        <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
            Unit
            </div>
            <div className='px-5 py-2 border w-[60%]'>
                <WordCountTextbox wordCount = {10} onTextChange={(text) => setUnit(text)}
                        defaultValue={JSON.parse(localStorage.getItem("CompanyForm")).unit}/>
            </div>

        </div>




        <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
            Full Description and Specification
            </div>
            <div className='px-5 py-2 border w-[60%]'>
                <WordCountTextbox wordCount = {50} onTextChange={(text) => setDescAndSpec(text)}
                        defaultValue={JSON.parse(localStorage.getItem("CompanyForm")).desc_and_spec }/>
            </div>

        </div>




        <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
            Shelf Life (Months)
            </div>
            <div className='px-5 py-2 border w-[60%]'>
                <input className='border h-10 w-96 px-5 rounded-md' type='text' 
                onChange={onChangeShelfLife} value={JSON.parse(localStorage.getItem("CompanyForm")).shelf_life}></input>
            </div>

        </div>




        <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
            Product Brief Justification
            </div>
            <div className='px-5 py-2 border w-[60%]'>
            <WordCountTextbox wordCount = {60} onTextChange={(text) => setProdBriefJust(text)}
                    defaultValue={JSON.parse(localStorage.getItem("CompanyForm")).prod_brief_justif}/>
            </div>

        </div>




        <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
            Product Complete Justification
            </div>
            <div className='px-5 py-2 border w-[60%]'>
            <WordCountTextbox wordCount = {300} onTextChange={(text) => setProdCompleteJustif(text)}
                    defaultValue={JSON.parse(localStorage.getItem("CompanyForm")).prod_complete_justif}/>
            </div>

        </div>




        <div className='flex' >
            <div className='flex w-[40%] px-5 py-2 border items-center'>
            Whether the item has to be procured under “PAC”(YES/NO)
                </div>

                <div className='px-5 py-2 border w-[60%]'>
                <select className='h-10 w-32 border text-center'
                onChange={onPacChange}
                value={pac}
                >
                            <option>Yes</option>
                            <option>No</option>
                            </select>
                </div>
            </div>




            {pac === "No" &&<>
                <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
            Manufactured By: (Company 1)
            </div>
            <div className='px-5 py-2 border w-[60%]'>
            <WordCountTextbox wordCount={100} onTextChange={(text) => setManufacturedBy1(text)}
                        defaultValue={JSON.parse(localStorage.getItem("CompanyForm")).manufactured_by1}/>
            </div>

        </div>




        <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
            Manufactured By: (Company 2)
            </div>
            <div className='px-5 py-2 border w-[60%]'>
            <WordCountTextbox wordCount={100} onTextChange={(text) => setManufacturedBy2(text)}
                        defaultValue={JSON.parse(localStorage.getItem("CompanyForm")).manufactured_by2}/>
            </div>

        </div>
            </>}





           { pac === "Yes" && <>
           <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
            Manufactured By: (Name & Complete Address)
            </div>
            <div className='px-5 py-2 border w-[60%]'>
            <WordCountTextbox wordCount={100} onTextChange={(text) => setManufacturedBy(text)}
                            defaultValue={JSON.parse(localStorage.getItem("CompanyForm")).manufactured_by}/>
            </div>

        </div>




        <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
            Imported by: (Name & Complete Address)
            </div>
            <div className='px-5 py-2 border w-[60%]'>
            <WordCountTextbox wordCount={100} onTextChange={(text) => setImportedBy(text)}
                            defaultValue={JSON.parse(localStorage.getItem("CompanyForm")).imported_by}/>
            </div>

        </div>




        <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
            Supplier/Distributor Details:(Name & Complete Address)
            </div>
            <div className='px-5 py-2 border w-[60%]'>
            <WordCountTextbox wordCount={100} onTextChange={(text) => setSupplDistribDetails(text)}
                            defaultValue={JSON.parse(localStorage.getItem("CompanyForm")).suppl_distrib_details}/>
            </div>

        </div>




            </>}




            <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
            Rate per Unit
            </div>
            <div className='px-5 py-2 border w-[60%]'>
            <WordCountTextbox wordCount = {50} onTextChange={(text) => setRatePerUnit(text)}
                    defaultValue={JSON.parse(localStorage.getItem("CompanyForm")).rate_per_unit}/>
            </div>

        </div>




        <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
            Price reference if any
            </div>
            <div className='px-5 py-2 border w-[60%]'>
            <WordCountTextbox wordCount = {50} onTextChange={(text) => setPriceRef(text)}
                    defaultValue={JSON.parse(localStorage.getItem("CompanyForm")).price_ref}/>
            </div>

        </div>




        <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
            Suggested by
            </div>
            <div className='px-5 py-2 border w-[60%]'>
            { allDoctors && <select
                                className='h-10 w-96 border text-center'
                                value={suggestedBy}
                                onChange={onChangeSuggestedBy}
                            >
                                <option value="" disabled>
                                Select a Doctor
                                </option>
                                {allDoctors.map((doctor) => (
                                <option key={doctor._id} value={doctor.name}>
                                    {doctor.name} ({doctor.designation})
                                </option>
                                ))}
                            </select>}

                            <button 
                            className='bg-ui-light-blue text-white w-40 h-10 ml-5 rounded-md'
                            onClick={handleOpenPopup}> Add Doctor</button>
      {isPopupOpen && (
        <DoctorEntry onClose={handleClosePopup} onSuccess = {refreshDoctorList}/>
      )}
            </div>

            

        </div>




        <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
            Countersigned by Unit in-charge/Sores Incharge
            </div>
            <div className='px-5 py-2 border w-[60%]'>
            { allDoctors && <select
                                className='h-10 w-96 border text-center'
                                value={counterSignedBy}
                                onChange={onChangeCounterSignedBy}
                            >
                                <option value="" disabled>
                                Select a Doctor
                                </option>
                                {allDoctors.map((doctor) => (
                                <option key={doctor._id} value={doctor.name}>
                                    {doctor.name} ({doctor.designation})
                                </option>
                                ))}
                            </select>}
            </div>

        </div>




        <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
            Average Monthly Consumption :
            </div>
            <div className='px-5 py-2 border w-[60%]'>
            <WordCountTextbox wordCount = {60} onTextChange={(text) => setAvgMonthlyConsumption(text)}
                    defaultValue={JSON.parse(localStorage.getItem("CompanyForm")).avg_monthly_consumption}/>
            </div>

        </div>




        <div>
            <div className='flex bg-ui-black h-10 items-center justify-center'>
                <center className='text-white text-lg font-bold'>Upload Documents</center>
            </div>
        </div>




        <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
            Quotation/LPR
            </div>
            <div className='px-5 py-2 border w-[60%]'>
            <UploadWidget onTextChange={(link) => setQuotationLpr(link)}/> {quotationLpr === "" ? "Not Uploaded" : quotationLpr}<br/>
            {quotationLpr !== "" && <CopyToClipboardButton valueToCopy={quotationLpr}/>}
            </div>

        </div>
        



        <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
            PAC Certificate (If Any)
            </div>
            <div className='px-5 py-2 border w-[60%]'>
            <UploadWidget onTextChange={(link) => setPacCertificate(link)}/>{pacCertificate === "" ? "Not Uploaded" : pacCertificate}<br/>
            {pacCertificate !== "" && <CopyToClipboardButton valueToCopy={pacCertificate}/>}
            </div>

        </div>




        <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
            Manufacturer/ Importer/ Supplier Details
            </div>
            <div className='px-5 py-2 border w-[60%]'>
            <UploadWidget onTextChange={(link) => setManufacturerFile(link)}/>{manufacturerFile === "" ? "Not Uploaded" : manufacturerFile}<br/>
            {manufacturerFile !== "" && <CopyToClipboardButton valueToCopy={manufacturerFile}/>}
            </div>

        </div>




        <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
            Product Pack Photo
            </div>
            <div className='px-5 py-2 border w-[60%]'>
            <UploadWidget onTextChange={(link) => setProductPackPhoto(link)}/>{productPackPhoto === "" ? "Not Uploaded" : productPackPhoto}<br/>
            {productPackPhoto !== "" && <CopyToClipboardButton valueToCopy={productPackPhoto}/>}
            </div>

        </div>




        <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
            Additional Document 1
            </div>
            <div className='px-5 py-2 border w-[60%]'>
            <UploadWidget onTextChange={(link) => setAdditionalDoc1(link)}/>{additionalDoc1 === "" ? " Not Uploaded" : additionalDoc1}<br/>
            {additionalDoc1 !== "" && <CopyToClipboardButton valueToCopy={additionalDoc1}/>}
            </div>

        </div>




        <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
            Additional Document 2
            </div>
            <div className='px-5 py-2 border w-[60%]'>
            <UploadWidget onTextChange={(link) => setAdditionalDoc2(link)}/>{additionalDoc2 === "" ? " Not Uploaded" : additionalDoc2}<br/>
            {additionalDoc2 !== "" && <CopyToClipboardButton valueToCopy={additionalDoc2}/>}
            </div>

        </div>




        <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
            Additional Document 3
            </div>
            <div className='px-5 py-2 border w-[60%]'>
            <UploadWidget onTextChange={(link) => setAdditionalDoc3(link)}/>{additionalDoc3 === "" ? " Not Uploaded" : additionalDoc3}<br/>
            {additionalDoc3 !== "" && <CopyToClipboardButton valueToCopy={additionalDoc3}/>}
            </div>

        </div>




       { localStorage.getItem("navigate-from-dashboard") !== "true" && <div className='flex justify-center mb-96 mt-10'>
            <button 
            className='bg-ui-black text-white w-96 h-10 rounded-md'
            onClick={onClickSubmit}>Submit</button>
        </div>}

        { localStorage.getItem("navigate-from-dashboard") === "true" && <div className='flex justify-center mb-96 mt-10'>
            <button 
            className='bg-ui-black text-white w-96 h-10 rounded-md mx-5'
            onClick={onClickSubmit}>Update</button>

<button 
            className='bg-ui-black text-white w-96 h-10 rounded-md'
            onClick={onClickCancel}>Cancel</button>


        </div>

        




        
        
        
        
        }









        
















        </div> 
    </div>}
    </>
  )
}

export default PharmacyForm
