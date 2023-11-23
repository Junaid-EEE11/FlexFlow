import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

// Improved App component with more informative content
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to My React App</h1>
        <p>
          This is a simple React application for a new-bie.
        </p>
        <a
          className="App-link"
          href="https://github.com/Junaid-EEE11"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore my projects me at github.com
        </a>
      </header>
    </div>
  );
}

// Improved MyApp component with an interactive button
function MyApp() {
  const [buttonClicks, setButtonClicks] = useState(0);

  const handleButtonClick = () => {
    setButtonClicks(prevClicks => prevClicks + 1);
  };

  return (
    <div className="myApp">
      <h2>My Application</h2>
      <p>Click the button below to interact:</p>
      <button onClick={handleButtonClick}>
        Click Me! ({buttonClicks} clicks)
      </button>
    </div>
  );
}

export default App;
export { MyApp };
