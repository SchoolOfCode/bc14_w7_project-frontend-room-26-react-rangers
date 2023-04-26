
import './LessonCard.css';

import React from 'react';
export default function LessonCard ({props}) {

    let array=props.links



  return  ( 

    <div className="lesson-card">
    <h1>{props.title}</h1>
    <p>{props.content}</p>
    <h2>Useful Links</h2>
    {array.map(item => ( <a href={item.url}>{item.title}</a>) )}

    <h2>Notes</h2>
    <p>{props.note}</p>
    
    </div>
     



)};
