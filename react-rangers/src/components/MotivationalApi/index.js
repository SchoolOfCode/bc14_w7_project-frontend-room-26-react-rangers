import {useState, useEffect} from 'react';
import React from 'react';
import './MotivationalApi.css';


function QuoteDisplay() {
  
  useEffect(() => {
    getMotivationalQuote();
  }, []);
  
  const [quote, setQuote] = useState(null);

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

  return (
      <div className="motivational-quotes">
          <h1>Motivational Quote of the Day</h1>
          {quote ? (
            <p>{quote.text} - {quote.author}</p>
          ) : (
            <p>Loading...</p>
          )}
          <button onClick={getMotivationalQuote}>New Quote</button>
    </div>
  );
}

export default QuoteDisplay;