//notes is a not so easy button with a textbox
//textbox needs to be stored somewhere. Under the textbox. 
//Delete/Edit button on saved notes. UseState for the notes. 
//Input field would contain the current value of said notes
//Pressing the save button changes the value to setState of the note.
//Pressing the delete button sets the value to an empty string.
import React, { useState } from 'react';
import './Notes.css';

function Notepad(props) {
    
  let { functionality } = props;
  const [text, setText] = useState('');
    console.log(functionality)
  const handleNew = () => {
    functionality(text)
    setText('')
  };


  const handleTextAreaChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="notepad">
      <div className="app">

      <h2>Sticky Note</h2>
        <textarea value={text} onChange={handleTextAreaChange} />
        <div className="toolbar">
          <button className="btn" onClick={handleNew}>Update Notes</button>
        </div>
      </div>
    </div>
  );
}

export default Notepad;