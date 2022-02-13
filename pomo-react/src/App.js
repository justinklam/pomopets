import React from "react";
//import { Link } from "react-router-dom";
//import axios from "axios";
import './styles/App.scss';
import Pomodoro from "./Pomodoro";

// components
import Main from "./components/Main";
import MainNavBar from "./components/MainNavBar";

function App() {
  return (
    <div>
      <MainNavBar />
      <Main title="PomoPets" />
      <Pomodoro />
    </div>
  );
}

export default App;
