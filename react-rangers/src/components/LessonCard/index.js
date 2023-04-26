
import './LessonCard.css';
import Notepad from '../Notes';
import React, { useState } from 'react';
export default function LessonCard ({props}) {

    let array=props.links


    const [text, setText] = useState('');

  const handleNew = () => {
    setText('');
  };

  const handleSave = () => {
    // Handle save functionality here
  };

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return  ( 
    
    <div className="lesson-card">
    <h1>{props.title}</h1>
    <p>{props.content}</p>
    <h2>Useful Links</h2>
    {array.map(item => ( <a href={item.url}>{item.title}</a>) )}
    
    <div className="notepad">
    <div className="app">
      <div className="toolbar">
        <button className="btn" onClick={handleNew}>New</button>
        <button className="btn" onClick={handleSave}>Save</button>
      </div>
      <Notepad text={text} handleInputChange={handleInputChange} />
    </div>
    </div>
    </div>
     



)};
