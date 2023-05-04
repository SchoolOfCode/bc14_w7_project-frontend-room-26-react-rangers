import React from "react";
import "./Quiz.css";
function Quiz({props}) {

    let {question, answer} = props;

    return (
        <div className="Quiz">
            <h1>Test your knowledge</h1>
            <h3>{question}</h3>
            <label>Hover to Reveal Solution</label>
            <div className="solution">
                <p>{answer}</p>
            </div>
        </div>
    
    )}

export default Quiz;
