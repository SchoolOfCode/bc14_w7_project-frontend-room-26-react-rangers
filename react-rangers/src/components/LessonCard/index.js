
import './LessonCard.css';

import React from 'react';
export default function LessonCard ({props, childprops}) {

    let array=props.links

  return  ( 

    <div className="lesson-card">
    <h1>{props.title}</h1>
    <p>{props.content}</p>
    <h2>Useful Links</h2>
    {array.map(item => ( <a href={item.url}>{item.title}</a>) )}

    <h2>Syntax Examples</h2>
    <p>{props.syntax}</p>
    <h2>Notes</h2>
    {props.note.map(item => 
    ( 
      <div className="comment-box">
      <p>{item.text}</p>
      <button onClick={()=> {childprops(item.id)}}>🗑️</button>
      </div>
    )
    
    )}
    
    </div>
     



)};
