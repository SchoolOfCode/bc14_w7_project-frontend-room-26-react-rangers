import React from './react'




const LessonCard = (props) => {

    let array=props.links

  return  ( 
    <div>
    <h1>{props.title}</h1>
    <p>{props.content}</p>
    {array.map(item => ( <a src={item.url}>{item.title}</a>) )}
    </div>
)}
