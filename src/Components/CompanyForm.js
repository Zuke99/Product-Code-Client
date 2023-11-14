import React, { useState } from 'react'
import WordCountTextbox from './WordCountTextbox'
import { useDispatch } from 'react-redux';
import { addCompanyForm } from '../redux/slice/CompanyFormSlice';
import { useNavigate } from 'react-router';
import UploadWidget from './UploadWidget';


function CompanyForm() {
    const [shortName, setShortName] = useState("");
    const [unit, setUnit] = useState("");
    const [descAndSpec, setDescAndSpec] = useState("");
    const [shelfLife, setShelfLife] = useState("");
    const [prodBriefJustif, setProdBriefJust] = useState("");
    const [prodCompleteJustif, setProdCompleteJustif] = useState("");
    const [pac, setPac] = useState("Yes");
    const [ratePerUnit, setRatePerUnit] = useState("");
    const [priceRef, setPriceRef] = useState("");
    const [manufacturedBy, setManufacturedBy] = useState("");
    const [importedBy, setImportedBy] = useState("");
    const [supplDistribDetails, setSupplDistribDetails] = useState("");
    const [manufacturedBy1, setManufacturedBy1] = useState("");
    const [manufacturedBy2, setManufacturedBy2] = useState("");

    const [quotationLpr, setQuotationLpr] = useState("");
    const [pacCertificate, setPacCertificate] = useState("");
    const [manufacturerFile, setManufacturerFile] = useState("");
    const [productPackPhoto, setProductPackPhoto] = useState("");
    const [additionalDoc1, setAdditionalDoc1] = useState("");
    const [additionalDoc2, setAdditionalDoc2] = useState("");
    const [additionalDoc3, setAdditionalDoc3] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();


    
    

    const onPacChange = (e) => {
        setPac(e.target.value);
    }

    const onChangeShelfLife = (e) => {
        setShelfLife(e.target.value);
    }

    const validate = () => {
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
      
        return true;
      };
      

    const onClickSubmit = () => {
    
        const companyDetails = JSON.parse(localStorage.getItem("details"));
      if(validate() === true){
        let data = {};
        if(pac === "Yes"){
         data = {
            full_name : companyDetails.fullName,
            company_name : companyDetails.companyName,
            short_name : shortName,
            unit : unit,
            desc_and_spec : descAndSpec,
            shelf_life : shelfLife,
            prod_brief_justif : prodBriefJustif,
            prod_complete_justif : prodCompleteJustif,
            pac_yes_no : pac,
            rate_per_unit : ratePerUnit,
            price_ref : priceRef,
            manufactured_by : manufacturedBy,
            imported_by : importedBy,
            suppl_distrib_details : supplDistribDetails,
            file_quotation_lpr : quotationLpr,
            file_pac_certif : pacCertificate,
            file_manufacture_impoeter_supplier : manufacturerFile,
            file_prod_pack_photo : productPackPhoto,
            file_other_doc1 : additionalDoc1,
            file_other_doc2 : additionalDoc2,
            file_other_doc3 : additionalDoc3,
        }
    } else {
        data = {
            full_name : companyDetails.fullName,
            company_name : companyDetails.companyName,
            short_name : shortName,
            unit : unit,
            desc_and_spec : descAndSpec,
            shelf_life : shelfLife,
            prod_brief_justif : prodBriefJustif,
            prod_complete_justif : prodCompleteJustif,
            pac_yes_no : pac,
            rate_per_unit : ratePerUnit,
            price_ref : priceRef,
            manufactured_by1 : manufacturedBy1,
            manufactured_by2 : manufacturedBy2,
            file_quotation_lpr : quotationLpr,
            file_pac_certif : pacCertificate,
            file_manufacture_impoeter_supplier : manufacturerFile,
            file_prod_pack_photo : productPackPhoto,
            file_other_doc1 : additionalDoc1,
            file_other_doc2 : additionalDoc2,
            file_other_doc3 : additionalDoc3,
        }
    }
        const result = dispatch(addCompanyForm(data)).unwrap().then((result) => {
            alert(result.message);
            navigate("/")
        }).catch((error) => {
            alert(result.message);
        })
    }
     
    }
  return (
    <div className='flex flex-col border'>
        <div className='flex flex-col w-[100%]'>
            {/* <div className='flex mt-5 ml-[25%] w-[50%] h-16 bg-orange-700 justify-center items-center'>
                <h1 className='text-white font-bold'>Company Form</h1>
            </div> */}
            {/* <table className='ml-[25%] w-[50%] text-sm '>
                <tr className=''>
                    <td className=''>Short Name: (Generic Name) </td>
                    <td className='px-10'><WordCountTextbox wordCount = {10} onTextChange={(text) => setShortName(text)}/></td>
                </tr>
                <tr className=' bg-slate-100'>
                    <td className=''>Unit :</td>
                    <td className='px-10'><WordCountTextbox wordCount = {10} onTextChange={(text) => setUnit(text)}/></td>
                </tr>
                <tr className=''>
                    <td className=''>Full Description and Specification :</td>
                    <td className='px-10'><WordCountTextbox wordCount = {50} onTextChange={(text) => setDescAndSpec(text)}/></td>
                </tr>
                <tr className=' bg-slate-100'>
                    <td className=''>Shelf Life : (Months)</td>
                     <td className='px-10'><input className='border' type='text' onChange={onShelfChange}></input></td> 
                </tr>
                <tr className=''>
                    <td className=''>Product Brief Justification :</td>
                    <td className='px-10'><WordCountTextbox wordCount = {60} onTextChange={(text) => setProdBriefJust(text)}/></td>
                </tr>
             
                <tr className=' bg-slate-100'>
                    <td className=''>Product Complete Justification :</td>
                    <td className='px-10'><WordCountTextbox wordCount = {300} onTextChange={(text) => setProdCompleteJustif(text)}/></td>
                </tr>
               
                


                <tr className='border-b'>
                    <td className=''>Whether  the item has to be procured under “PAC”(YES/NO)
 :</td>
                    <td className='px-10'>
                        <select onChange={onPacChange}>
                            <option>Yes</option>
                            <option>No</option>
                        </select>

                        

                    </td>
                    
                </tr>
                {pac === "Yes" && <div className="w-[290%] ">
                    <tr className='border-b'>
                            <td> Manufactured By: (Name & Complete Address)</td>
                            <td><WordCountTextbox wordCount={100} onTextChange={(text) => setManufacturedBy(text)} /></td>
                        </tr>
                        <tr className=' bg-slate-100'>
                            <td> Imported by: (Name & Complete Address) </td>
                            <td><WordCountTextbox wordCount={100} onTextChange={(text) => setImportedBy(text)}/></td>
                        </tr>
                        <tr className='border-b'>
                            <td> Supplier/Distributor Details:(Name & Complete Address)
</td>
                            <td><WordCountTextbox wordCount={100} onTextChange={(text) => setSupplDistribDetails(text)}/></td>
                        </tr>
                        </div>
                    }

                   { pac === "No" && <div className="w-[290%]">
                        <tr className=' bg-slate-100'>
                        <td>Manufactured By: (Company 1)</td>
                        <td><WordCountTextbox wordCount={100} onTextChange={(text) => setManufacturedBy1(text)}/></td>
                        </tr>

                        <tr className=''>
                        <td>Manufactured By: (Company 2)</td>
                        <td><WordCountTextbox wordCount={100} onTextChange={(text) => setManufacturedBy2(text)}/></td>
                        </tr>
                    </div>}
                <tr className=''>
                    <td className=''>Rate per Unit :</td>
                    <td className='px-10'><WordCountTextbox wordCount = {50} onTextChange={(text) => setRatePerUnit(text)}/></td>
                </tr>
                <tr className=' bg-slate-100'>
                    <td className=''>Price reference if any :</td>
                    <td className='px-10'><WordCountTextbox wordCount = {50} onTextChange={(text) => setPriceRef(text)}/></td>
                </tr>
                <tr className=''>
                    <td className=''>Upload documents :</td>
                    <tr className='border-b'><label> Quotation/LPR </label><td className='px-10'><UploadWidget onTextChange={(link) => setQuotationLpr(link)} />{quotationLpr}</td></tr>
                    <tr className='border-b'><label> PAC Certificate (If Any) </label><td className='px-10'><UploadWidget onTextChange={(link) => setPacCertificate(link)}/>{pacCertificate}</td></tr>
                    <tr className='border-b'><label> Manufacturer/ Importer/ Supplier Details </label><td className='px-10'><UploadWidget onTextChange={(link) => setManufacturerFile(link)}/>{manufacturerFile}</td></tr>
                    <tr className='border-b'><label> Product Pack Photo </label><td className='px-10'><UploadWidget onTextChange={(link) => setProductPackPhoto(link)}/>{productPackPhoto}</td></tr>

                    <tr className='border-b'><label> Additional Document 1 </label><td className='px-10'><UploadWidget onTextChange={(link) => setAdditionalDoc1(link)}/>{additionalDoc1}</td></tr>
                    <tr className='border-b'><label> Additional Document 2 </label><td className='px-10'><UploadWidget onTextChange={(link) => setAdditionalDoc2(link)}/>{additionalDoc2}</td></tr>
                    <tr className='border-b'><label> Additional Document 3 </label><td className='px-10'><UploadWidget onTextChange={(link) => setAdditionalDoc3(link)}/>{additionalDoc3}</td></tr>
                    

                    
                </tr>
            </table> */}
            
        </div>

        {/* <button className='w-[50%] ml-[25%] h-10 bg-orange-700 text-white font-bold rounded-md'
        onClick={onClickSubmit}
        >Submit</button> */}



            {/* NEW DESIGN */}

            <div className='flex w-[100%] justify-center mt-5'>

              <div className=' w-[80%]'>
                <div className='flex bg-ui-black h-10 items-center justify-center'>
                <center className='text-white text-lg font-bold'>Company Form</center>
                </div>


                <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
                  Short Name (Generic Name)
                  </div>
                  <div className='px-5 py-2 border w-[60%]'>
                  <WordCountTextbox wordCount = {10} onTextChange={(text) => setShortName(text)}/>
                  </div>

              </div>




              <div className='flex'>
                  <div className='flex w-[40%] px-5 py-2 border items-center'>
                  Unit
                  </div>
                  <div className='px-5 py-2 border w-[60%]'>
                  <WordCountTextbox wordCount = {10} onTextChange={(text) => setUnit(text)}/>
                  </div>

              </div>




              <div className='flex'>
                  <div className='flex w-[40%] px-5 py-2 border items-center'>
                  Full Description and Specification
                  </div>
                  <div className='px-5 py-2 border w-[60%]'>
                  <WordCountTextbox wordCount = {50} onTextChange={(text) => setDescAndSpec(text)}/>
                  </div>

              </div>




              <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
            Shelf Life (Months)
            </div>
            <div className='px-5 py-2 border w-[60%]'>
                <input className='border h-10 w-96 px-5 rounded-md' type='text' 
                onChange={onChangeShelfLife} ></input>
            </div>

        </div>




        <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
            Product Brief Justification
            </div>
            <div className='px-5 py-2 border w-[60%]'>
            <WordCountTextbox wordCount = {60} onTextChange={(text) => setProdBriefJust(text)}/>
            </div>

        </div>




        <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
            Product Complete Justification
            </div>
            <div className='px-5 py-2 border w-[60%]'>
            <WordCountTextbox wordCount = {300} onTextChange={(text) => setProdCompleteJustif(text)}/>
            </div>

        </div>




        <div className='flex' >
            <div className='flex w-[40%] px-5 py-2 border items-center'>
            Whether the item has to be procured under “PAC”(YES/NO)
                </div>

                <div className='px-5 py-2 border w-[60%]'>
                <select className='h-10 w-32 border text-center'
                onChange={onPacChange}>
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
            <WordCountTextbox wordCount={100} onTextChange={(text) => setManufacturedBy1(text)}/>
            </div>

        </div>




        <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
            Manufactured By: (Company 2)
            </div>
            <div className='px-5 py-2 border w-[60%]'>
            <WordCountTextbox wordCount={100} onTextChange={(text) => setManufacturedBy2(text)}/>
            </div>

        </div>
            </>}




            { pac === "Yes" && <>
           <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
            Manufactured By: (Name & Complete Address)
            </div>
            <div className='px-5 py-2 border w-[60%]'>
            <WordCountTextbox wordCount={100} onTextChange={(text) => setManufacturedBy(text)} />
            </div>

        </div>




        <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
            Imported by: (Name & Complete Address)
            </div>
            <div className='px-5 py-2 border w-[60%]'>
            <WordCountTextbox wordCount={100} onTextChange={(text) => setImportedBy(text)}/>
            </div>

        </div>




        <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
            Supplier/Distributor Details:(Name & Complete Address)
            </div>
            <div className='px-5 py-2 border w-[60%]'>
            <WordCountTextbox wordCount={100} onTextChange={(text) => setSupplDistribDetails(text)}/>
            </div>

        </div>




            </>}




            <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
            Rate per Unit
            </div>
            <div className='px-5 py-2 border w-[60%]'>
            <WordCountTextbox wordCount = {50} onTextChange={(text) => setRatePerUnit(text)}/>
            </div>

        </div>




        <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
            Price reference if any
            </div>
            <div className='px-5 py-2 border w-[60%]'>
            <WordCountTextbox wordCount = {50} onTextChange={(text) => setPriceRef(text)}/>
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
            <UploadWidget onTextChange={(link) => setQuotationLpr(link)} />{quotationLpr}
            </div>

        </div>




        <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
            PAC Certificate (If Any)
            </div>
            <div className='px-5 py-2 border w-[60%]'>
            <UploadWidget onTextChange={(link) => setPacCertificate(link)}/>{pacCertificate}
            </div>

        </div>




        <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
            Manufacturer/ Importer/ Supplier Details
            </div>
            <div className='px-5 py-2 border w-[60%]'>
            <UploadWidget onTextChange={(link) => setManufacturerFile(link)}/>{manufacturerFile}
            </div>

        </div>




        <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
            Product Pack Photo
            </div>
            <div className='px-5 py-2 border w-[60%]'>
            <UploadWidget onTextChange={(link) => setProductPackPhoto(link)}/>{productPackPhoto}
            </div>

        </div>




        <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
            Additional Document 1
            </div>
            <div className='px-5 py-2 border w-[60%]'>
            <UploadWidget onTextChange={(link) => setAdditionalDoc1(link)}/>{additionalDoc1}
            </div>

        </div>




        <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
            Additional Document 2
            </div>
            <div className='px-5 py-2 border w-[60%]'>
            <UploadWidget onTextChange={(link) => setAdditionalDoc2(link)}/>{additionalDoc2}
            </div>

        </div>




        <div className='flex'>
            <div className='flex w-[40%] px-5 py-2 border items-center'>
            Additional Document 3
            </div>
            <div className='px-5 py-2 border w-[60%]'>
            <UploadWidget onTextChange={(link) => setAdditionalDoc3(link)}/>{additionalDoc3}
            </div>

        </div>




        <div className='flex justify-center mb-96 mt-10'>
            <button 
            className='bg-ui-black text-white w-96 h-10 rounded-md'
            onClick={onClickSubmit}>Submit</button>
        </div>


















              </div>

            </div>







    </div>
  )
}

export default CompanyForm
