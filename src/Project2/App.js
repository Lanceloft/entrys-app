import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GlobalCom from "../Global/Global";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>project2</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <GlobalCom />
        </a>
      </header>
    </div>
  );
}

export default App;
