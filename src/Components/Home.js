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
    <div className='min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8 bg-white shadow-2xl rounded-lg'>
        <div className='bg-ui-black p-6 rounded-t-lg'>
          <h2 className='text-center text-2xl font-bold text-white'>
            Welcome
          </h2>
          <p className='mt-2 text-center text-sm text-gray-300'>
            Please enter your details to continue
          </p>
        </div>

        <div className='p-8 space-y-6'>
          <div className='space-y-4'>
            <div>
              <label htmlFor='fullName' className='block text-sm font-medium text-gray-700'>
                Full Name
              </label>
              <input
                id='fullName'
                type='text'
                onChange={onChangeFullName}
                placeholder='John Doe'
                className='mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 
                focus:outline-none focus:ring-2 focus:ring-ui-light-blue focus:border-transparent'
                required
              />
            </div>

            <div>
              <label htmlFor='companyName' className='block text-sm font-medium text-gray-700'>
                Company Name
              </label>
              <input
                id='companyName'
                type='text'
                onChange={onChangeCompanyName}
                placeholder='Acme Inc.'
                className='mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 
                focus:outline-none focus:ring-2 focus:ring-ui-light-blue focus:border-transparent'
                required
              />
            </div>
          </div>

          <div>
            <button
              onClick={onClickNext}
              disabled={isButtonDisabled}
              className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
              bg-ui-light-blue hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ui-light-blue
              ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : 'transform transition hover:scale-[1.02]'}`}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
