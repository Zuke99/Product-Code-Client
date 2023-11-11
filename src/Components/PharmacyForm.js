import React, { useState } from 'react'
import WordCountTextbox from './WordCountTextbox';

function PharmacyForm() {
    const [productCode, setProductCode] = useState();
    const [detailsExistingProduct, setDetailsExistingProduct] = useState();
    const [detailsOfChanges, setDetailsOfChanges] = useState();
    const [specification, setSpecification] = useState();
    const [category, setCategory] = useState();
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
    const [suggestedBy, setSuggestedBy] = useState();
    const [counterSignedBy, setCounterSignedBy] = useState();
    const [avgMontlyConsumption, setAvgMonthlyCOnsumption] = useState();
    const [req, setReq] = useState("New");

    const onPacChange = (e) => {
        setPac(e.target.value);
    }
    const onReqChange = (e) => {
        setReq(e.target.value);
    }
    const onChangeProductCode = (e) => {
        setProductCode(e.target.value);
    }
    const onChanegCategory = (e) => {
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
    const onClickSubmit = () => {
        const data = {
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

        }

        
    }

  return (
    <div className='flex flex-col border'>
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
                            <td><WordCountTextbox wordCount={60} onTextChange={(text) => setDetailsExistingProduct(text)}/></td>
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
                    <td className='px-10'><select onChange={onChanegCategory}>
                        <option>Medicines</option>
                        <option>Consumables</option>
                        </select></td>
                </tr>
                <tr className='border'>
                    <td className=''>Short Name: </td>
                    <td className='px-10'><WordCountTextbox wordCount = {10} onTextChange={(text) => setShortName(text)}/></td>
                </tr>
                <tr className='border'>
                    <td className=''>Unit :</td>
                    <td className='px-10'><WordCountTextbox wordCount = {10} onTextChange={(text) => setUnit(text)}/></td>
                </tr>
                <tr className='border'>
                    <td className=''>Description and Specification :</td>
                    <td className='px-10'><WordCountTextbox wordCount = {50} onTextChange={(text) => setDescAndSpec(text)}/></td>
                </tr>
                <tr className='border'>
                    <td className=''>Shelf Life :</td>
                    <td className='px-10'><input className='border' type='text' onChange={onChangeShelfLife}></input></td>
                </tr>
                <tr className='border'>
                    <td className=''>Product Brief Justification :</td>
                    <td className='px-10'><WordCountTextbox wordCount = {60} onTextChange={(text) => setProdBriefJust(text)}/></td>
                </tr>
                </table>
                <table className='w-[50%] text-sm'>
                <tr className='border'>
                    <td className=''>Product Complete Justification :</td>
                    <td className='px-10'><WordCountTextbox wordCount = {300} onTextChange={(text) => setProdCompleteJustif(text)}/></td>
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
                    {pac === "Yes" && <div>
                    <tr>
                            <td> Manufactured By: (Name & Complete Address)</td>
                            <td><WordCountTextbox wordCount={100} onTextChange={(text) => setManufacturedBy(text)}/></td>
                        </tr>
                        <tr>
                            <td> Imported by: (Name & Complete Address) </td>
                            <td><WordCountTextbox wordCount={100} onTextChange={(text) => setImportedBy(text)}/></td>
                        </tr>
                        <tr>
                            <td> Supplier/Distributor Details:(Name & Complete Address)
</td>
                            <td><WordCountTextbox wordCount={100} onTextChange={(text) => setSupplDistribDetails(text)}/></td>
                        </tr>
                    </div>}

                   { pac === "No" && <div>
                        <tr>
                        <td>Manufactured By: (Company 1)</td>
                        <td><WordCountTextbox wordCount={100} onTextChange={(text) => setManufacturedBy1(text)}/></td>
                        </tr>

                        <tr>
                        <td>Manufactured By: (Company 2)</td>
                        <td><WordCountTextbox wordCount={100} onTextChange={(text) => setManufacturedBy2(text)}/></td>
                        </tr>
                    </div>}
                </tr>
                <tr className='border'>
                    <td className=''>Rate per Unit :</td>
                    <td className='px-10'><WordCountTextbox wordCount = {50} onTextChange={(text) => setRatePerUnit(text)}/></td>
                </tr>
                <tr className='border'>
                    <td className=''>Price reference if any :</td>
                    <td className='px-10'><WordCountTextbox wordCount = {50} onTextChange={(text) => setPriceRef(text)}/></td>
                </tr>
                <tr className='border'>
                    <td className=''>Suggested by :</td>
                    <td className='px-10'>
                        <input type="text" className='border' onChange={onChangeSuggestedBy} placeholder='Doctor Name'></input>
                        <select>
                            <option></option>
                        </select>
                        
                        </td>
                </tr>
                <tr className='border'>
                    <td className=''>Countersigned by Unit in-charge/Sores Incharge :</td>
                    <td className='px-10'><input type="text" className='border' onChange={onChangeCounterSignedBy} placeholder='Doctor Name'></input></td>
                </tr>
                <tr className='border'>
                    <td className=''>Average Monthly Consumption :</td>
                    <td className='px-10'><WordCountTextbox wordCount = {60} onTextChange={(text) => setAvgMonthlyCOnsumption(text)}/></td>
                </tr>
                <tr className='border'>
                    <td className=''>Upload documents :</td>
                    <tr className='border'><label> Quotation/LPR </label><td className='px-10'><input type='file'></input></td></tr>
                    <tr className='border'><label> PAC Certificate (If Any) </label><td className='px-10'><input type='file'></input></td></tr>
                    <tr className='border'><label> Manufacturer/ Importer/ Supplier Details </label><td className='px-10'><input type='file'></input></td></tr>
                    <tr className='border'><label>  Product Pack Photo </label><td className='px-10'><input type='file'></input></td></tr>

                    <tr className='border'><label> Additional Document 1 </label><td className='px-10'><input type='file'></input></td></tr>
                    <tr className='border'><label> Additional Document 2 </label><td className='px-10'><input type='file'></input></td></tr>
                    <tr className='border'><label> Additional Document 3 </label><td className='px-10'><input type='file'></input></td></tr>
                </tr>
            </table>
            
        </div>

        <button>Submit</button>
    </div>
  )
}

export default PharmacyForm
