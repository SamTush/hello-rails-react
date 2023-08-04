import React, { useState, useEffect } from 'react';

const App = () => {
  const [randomGreeting, setRandomGreeting] = useState('');

  useEffect(() => {
    // Fetch random greeting from the API
    fetch('/random_greeting')
      .then(response => response.json())
      .then(data => setRandomGreeting(data.message))
      .catch(error => console.error('Error fetching greeting:', error));
  }, []); // Empty dependency array to ensure this effect runs only once on component mount

  return (
    <div>
      <h1>Hello, World!</h1>
      <div id="randomGreeting">
        <p>{randomGreeting}</p>
      </div>
    </div>
  );
};

export default App