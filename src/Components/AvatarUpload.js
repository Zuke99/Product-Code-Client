import { createRef, useState } from "react"

const AvatarUpload = (props) => {
    const [image, _setImage] = useState();
    const inputFileRef = createRef();
    const cleanup = () => {
        URL.revokeObjectURL(image && props.image);
        inputFileRef.current.value = null;
    };
    const setImage = (newImage) => {
        if(image) {
            cleanup();
        }
        _setImage(newImage);
    };

    const handleOnChange = (event) => {
        const newImage = event.target.files[0];
        if(newImage){
            setImage(URL.createObjectURL(newImage));
        }
        props.imageUpload(event);
    }

    return (
        <>
        Upload!: 
        <input type="file" onChange={handleOnChange}></input>
        </>
    )
}

export default AvatarUpload;