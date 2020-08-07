import React, { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container, MyContext } from "./Contexts/MyContext";
import Button from "./components/Button";

function App() {
  const value = useContext(MyContext);
  return (
    <Container>
      <div
        className="App"
        style={{ backgroundColor: value.dark.backgroundColor }}
      >
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
            Learn React, {value.dark.color}
          </a>
          <Button name="Syahrul" />
        </header>
      </div>
    </Container>
  );
}

export default App;
