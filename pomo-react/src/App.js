import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './styles/App.scss';

// components
import Main from "./components/Main";

function App() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/timer">Timers</Link> |{" "}
        <Link to="/pets">Pets</Link>
      </nav>
      <Main title="PomoPets" />
    </div>
  );
}

export default App;
