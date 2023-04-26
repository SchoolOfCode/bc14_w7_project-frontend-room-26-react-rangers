
import React, { useState, useEffect } from 'react';

function App() {
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

  useEffect(() => {
    getMotivationalQuote();
  }, []);

  return (
    <div>
      {quote && <h1>Motivational Quote of the Day</h1>}
      {quote ? (
        <p>{quote.text} - {quote.author}</p>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={getMotivationalQuote}>New Quote</button>
    </div>
  );
}

export default App;