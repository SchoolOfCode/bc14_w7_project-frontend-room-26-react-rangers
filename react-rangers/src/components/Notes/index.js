//notes is a not so easy button with a textbox
//textbox needs to be stored somewhere. Under the textbox. 
//Delete/Edit button on saved notes. UseState for the notes. 
//Input field would contain the current value of said notes
//Pressing the save button changes the value to setState of the note.
//Pressing the delete button sets the value to an empty string.

import React from 'react';

function Notepad(props) {
  const { text, handleInputChange } = props;

  return (
    <div className="notepad">
      <textarea value={text} onChange={handleInputChange} />
    </div>
  );
}

export default Notepad;