import React, {useState} from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { SessionsContext } from './context/SessionsContext';

// component imports
import Main from "./components/Main";
import HomeNavBar from "./components/HomeNavBar";

// route imports
import Login from "./routes/Login";
import Pets from "./routes/Pets";
import Register from "./routes/Register";
import Statistics from "./routes/Statistics";
import Timers from "./routes/Timers";
import About from "./routes/About";

// styles
// import './styles/App.scss';

function App() {
  const [context, setContext] = useState();
  return (
    <BrowserRouter>
    <SessionsContext.Provider value={[context, setContext]}>
    <HomeNavBar/>
    <Routes>
      <Route path="/" element={<Main title="PomoPets"/>} />
      <Route path="timers" element={<Timers />} />
      <Route path="pets" element={<Pets />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="statistics" element={<Statistics />} />
      <Route path="about" element={<About />} />
    </Routes>
    </SessionsContext.Provider>
  </BrowserRouter>
  );
}

export default App;