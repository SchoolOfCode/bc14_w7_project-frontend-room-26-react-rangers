
import React from 'react';

function QuoteDisplay(props) {
  const { quotes } = props;

  return (
    <div>
      {/* render the quotes passed down from the parent component */}
      {quotes ? (
        quotes.map((quote, index) => (
          <p key={index}>
            {quote.text} - {quote.author}
          </p>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default QuoteDisplay;