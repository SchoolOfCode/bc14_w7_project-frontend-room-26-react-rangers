import React, { useState, useEffect } from 'react';
import './App.css';
import LessonCard from '../LessonCard';
import Notepad from '../Notes';

let testObject = {
  title: "CSS - Cascading Style Sheets",
  content: "CSS, or Cascading Style Sheets, is a language used for styling and formatting web documents. It allows developers to separate the content of a webpage from its presentation, making it easier to maintain and modify the site's appearance. CSS works by selecting HTML elements and applying specific styles to them. These styles can include colors, fonts, margins, borders, and more. CSS can be written inline within the HTML file, in a separate file that's linked to the HTML file, or within the head section of an HTML file. CSS uses a cascading model, where styles applied to a parent element will affect all of its child elements unless they are overridden. Specificity is used to determine which styles take precedence when there are conflicting styles applied to an element. CSS also includes a variety of selectors that allow developers to target specific elements on a page. Some common selectors include element selectors, class selectors, ID selectors, and pseudo-selectors. In addition to basic styling, CSS also includes advanced features like responsive design, which allows developers to create webpages that adjust to different screen sizes, and animations, which add movement and interactivity to a webpage. Frameworks like Bootstrap and Foundation provide pre-written CSS and HTML code for developers to use, making it easier to create responsive and attractive websites. However, it's important to have a strong understanding of CSS in order to customize these frameworks and create unique designs. CSS is constantly evolving, with new features and updates being added regularly. Keeping up with the latest changes and best practices is important for any web developer looking to create modern, responsive, and visually appealing websites.",
  links: [{url: "https://www.w3schools.com/css/", title: "w3schools"}, {url:"https://www.w3schools.com/css/css_intro.asp", title: "w3schools2"}],
  questionprompt: "",
  question: "what is css?",
  answer: "dunno",
};

function App() {
  const [quote, setQuote] = useState(null);
  // return to motivational Quotes and refactor to use the 
  async function getMotivationalQuote() {
    try {
      const response = await fetch('https://type.fit/api/quotes');
      const data = await response.json();
      const randomQuote = data[Math.floor(Math.random() * data.length)];
      setQuote(randomQuote);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMotivationalQuote();
  }, []);

  return (

    <div className="App">
       
      <LessonCard props={testObject}/>

      <Notepad />
      
      <div id="motivational-quotes">
          {quote && <h1>Motivational Quote of the Day</h1>}
          {quote ? (
            <p>{quote.text} - {quote.author}</p>
          ) : (
            <p>Loading...</p>
          )}
          <button onClick={getMotivationalQuote}>New Quote</button>
        </div>
    </div>
    </>
  );
}

export default App;