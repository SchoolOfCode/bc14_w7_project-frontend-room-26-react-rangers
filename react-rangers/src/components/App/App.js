import React, { useState, useEffect } from 'react';
import './App.css';
import LessonCard from '../LessonCard';
import NavBar from '../NavBar';
import { SOCdata } from '../../SOCdata';

function App() {
  const [quote, setQuote] = useState(null);

  const [activeButton, setActiveButton] = useState(1);
  
  function handleClick(id) {
    setActiveButton(id);
  };

  const renderComponent = () => {
    const component = SOCdata.find(item => item.id === activeButton);
    return (
      <LessonCard props={component} />
    );
  };

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
      <NavBar functionality={handleClick}/>
        <div id="motivational-quotes">
          {quote && <h1>Motivational Quote of the Day</h1>}
          {quote ? (
            <p>{quote.text} - {quote.author}</p>
          ) : (
            <p>Loading...</p>
          )}
          <button onClick={getMotivationalQuote}>New Quote</button>
        </div>
        {renderComponent()}
    </div>
  );
}

export default App;