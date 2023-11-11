import React, { useState } from 'react'

function WordCountTextbox(props) {
    const [text, setText] = useState('');
    const maxWordCount = props.wordCount;

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        const wordArray = inputValue.trim().split(/\s+/).filter(Boolean);

        if(wordArray.length <= maxWordCount){
            setText(inputValue);
            props.onTextChange(inputValue)
        }
    }
  return (
    <div>
       <textarea
       className='w-[100%]'
        value={text}
        onChange={handleInputChange}
        placeholder="Type your text here..."
      /><br/>
      <span className='text-[10px] font-light'>
        Words Remaining: {text.trim().split(/\s+/).filter(Boolean).length} / {maxWordCount}
      </span>
    </div>
  )
}

export default WordCountTextbox
