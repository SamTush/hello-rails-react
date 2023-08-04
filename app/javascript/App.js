import React, { useState, useEffect } from 'react';

const App = () => {
  const [randomGreeting, setRandomGreeting] = useState('');

  useEffect(() => {
    fetch('/random_greeting')
      .then(response => response.json())
      .then(data => setRandomGreeting(data.message))
      .catch(error => console.error('Error fetching greeting:', error));
  }, []);

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