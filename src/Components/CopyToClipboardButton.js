import React from 'react';

const CopyToClipboardButton = ({ valueToCopy }) => {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(valueToCopy);
      alert('Copied to clipboard!');
    } catch (err) {
      console.error('Unable to copy to clipboard', err);
    }
  };

  return (
    <button onClick={copyToClipboard}>
      <h1 className='text-sm'>Copy link</h1>
    </button>
  );
};

export default CopyToClipboardButton;
