import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [ test, setTest] = useState("")


  useEffect(() => {
    fetch("/test").then(res => res.json()).then(data => {
      setTest(data.message);
    })
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <p>This is a test: {test}</p>
      </header>
    </div>
  );
}

export default App;
