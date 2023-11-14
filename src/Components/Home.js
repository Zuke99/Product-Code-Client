import React, { useState } from 'react';
import { useNavigate } from 'react-router';

function Home() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [isButtonDisabled, setButtonDisabled] = useState(true);

  

  const onChangeFullName = (e) => {
    const value = e.target.value;
    setFullName(value);
    updateButtonState(value, companyName);
  };

  const onChangeCompanyName = (e) => {
    const value = e.target.value;
    setCompanyName(value);
    updateButtonState(fullName, value);
  };

  const updateButtonState = (fullName, companyName) => {
    // Enable the button only if both fullName and companyName are not empty
    setButtonDisabled(!(fullName && companyName));
  };

  const onClickNext = () => {
    const data = {
      fullName: fullName,
      companyName: companyName
    };
    localStorage.setItem("details", JSON.stringify(data));
    navigate("/company-form");
  };

  return (
    <div className=''>
      <div className='ml-[35%] mt-[10%] w-[40%] border rounded-md'>
        <div className='flex justify-center items-center h-16 bg-ui-black rounded-t-md'>
          <span className='text-white'>Enter Details</span>
        </div>
        <div className='flex justify-center'>
          <input
            type='text'
            onChange={onChangeFullName}
            placeholder='Enter Your Full Name'
            className='w-60 h-10 my-5 mx-5 border rounded-sm px-5'
            required
          /><br />
          <input
            type='text'
            onChange={onChangeCompanyName}
            placeholder='Enter Your Company Name'
            className='w-60 h-10 my-5 mx-5 border rounded-sm px-5'
            required
          />
        </div>

        <div className='flex justify-center'>
          <button
            onClick={onClickNext}
            className={`h-10 w-32 my-5 bg-ui-light-blue text-white rounded-lg ${isButtonDisabled && 'cursor-not-allowed opacity-50'}`}
            disabled={isButtonDisabled}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
