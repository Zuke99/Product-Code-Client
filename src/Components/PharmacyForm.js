import React, { useState } from 'react'
import WordCountTextbox from './WordCountTextbox';

function PharmacyForm() {
    const [pac, setPac] = useState("Yes");
    const [req, setReq] = useState("New");

    const onPacChange = (e) => {
        setPac(e.target.value);
    }
    const onReqChange = (e) => {
        setReq(e.target.value);
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
                            <td><input type='number' className='border' placeholder='Product Code'/></td>
                        </tr>
                        <tr>
                            <td>Details of existing Product</td>
                            <td><WordCountTextbox wordCount={60}/></td>
                        </tr>
                        <tr>
                            <td>Product Code</td>
                            <td><WordCountTextbox wordCount={60}/></td>
                        </tr>
                        <tr>
                            <td>Product Code</td>
                            <td><WordCountTextbox wordCount={100}/></td>
                        </tr>
                        </div>}
                       
                </tr>
                <tr className='border'>
                    <td className=''>Category: </td>
                    <td className='px-10'><select>
                        <option>Medicines</option>
                        <option>Consumables</option>
                        </select></td>
                </tr>
                <tr className='border'>
                    <td className=''>Short Name: </td>
                    <td className='px-10'><WordCountTextbox wordCount = {10}/></td>
                </tr>
                <tr className='border'>
                    <td className=''>Unit :</td>
                    <td className='px-10'><WordCountTextbox wordCount = {10}/></td>
                </tr>
                <tr className='border'>
                    <td className=''>Description and Specification :</td>
                    <td className='px-10'><WordCountTextbox wordCount = {50}/></td>
                </tr>
                <tr className='border'>
                    <td className=''>Shelf Life :</td>
                    <td className='px-10'><input className='border' type='text'></input></td>
                </tr>
                <tr className='border'>
                    <td className=''>Product Brief Justification :</td>
                    <td className='px-10'><WordCountTextbox wordCount = {60}/></td>
                </tr>
                </table>
                <table className='w-[50%] text-sm'>
                <tr className='border'>
                    <td className=''>Product Complete Justification :</td>
                    <td className='px-10'><WordCountTextbox wordCount = {300}/></td>
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
                            <td><WordCountTextbox wordCount={100}/></td>
                        </tr>
                        <tr>
                            <td> Imported by: (Name & Complete Address) </td>
                            <td><WordCountTextbox wordCount={100}/></td>
                        </tr>
                        <tr>
                            <td> Supplier/Distributor Details:(Name & Complete Address)
</td>
                            <td><WordCountTextbox wordCount={100}/></td>
                        </tr>
                    </div>}

                   { pac === "No" && <div>
                        <tr>
                        <td>Manufactured By: (Company 1)</td>
                        <td><WordCountTextbox wordCount={100}/></td>
                        </tr>

                        <tr>
                        <td>Manufactured By: (Company 2)</td>
                        <td><WordCountTextbox wordCount={100}/></td>
                        </tr>
                    </div>}
                </tr>
                <tr className='border'>
                    <td className=''>Rate per Unit :</td>
                    <td className='px-10'><WordCountTextbox wordCount = {50}/></td>
                </tr>
                <tr className='border'>
                    <td className=''>Price reference if any :</td>
                    <td className='px-10'><WordCountTextbox wordCount = {50}/></td>
                </tr>
                <tr className='border'>
                    <td className=''>Suggested by :</td>
                    <td className='px-10'><input type="text" className='border' placeholder='Doctor Name'></input></td>
                </tr>
                <tr className='border'>
                    <td className=''>Countersigned by Unit in-charge/Sores Incharge :</td>
                    <td className='px-10'><input type="text" className='border' placeholder='Doctor Name'></input></td>
                </tr>
                <tr className='border'>
                    <td className=''>.Average Monthly Consumption :</td>
                    <td className='px-10'><WordCountTextbox wordCount = {60}/></td>
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
