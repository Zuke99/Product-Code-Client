import { useEffect, useRef } from "react";


const UploadWidget = (props) => {
     const cloudinaryRef = useRef();
     const widgetRef = useRef();

     useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        try{
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'djzpvaaa4',
            uploadPreset : 'productcode'
        },function(error, result){
            if(result.event === "success"){
            console.log("Result",result.info.secure_url);
            props.onTextChange(result.info.secure_url);
            }
            
            
        })
        console.log("Current",cloudinaryRef.current);
    } catch(error){
        console.log(error);
    }
     },[]);
     return (
        <button
        className="bg-ui-light-blue text-white w-40 h-10 rounded-md"
        onClick={()=> widgetRef.current.open()}>Upload</button>
     )
}

export default UploadWidget;