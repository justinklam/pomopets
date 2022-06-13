import React, { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { SessionsContext } from './context/SessionsContext';

// component imports
import Main from "./components/Main";
import HomeNavBar from "./components/HomeNavBar";
// import PieChart from "./components/PieChart";
// import LineChart from "./components/LineChart";

// route imports
import About from "./routes/About";
import Login from "./routes/Login";
import Pets from "./routes/Pets";
import Register from "./routes/Register";
import Timers from "./routes/Timers";
import EditUser from "./routes/EditUser";
import Statistics from "./routes/Statistics";

function App() {

  const [ user, setUser ] = useState({
    email: "",
    password: ""
  });

  const [ context, setContext ] = useState({ state: {} });
  return (
    <BrowserRouter>
      <SessionsContext.Provider value={[ context, setContext ]}>
        <HomeNavBar user={user} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="timers" element={<Timers />} />
          <Route path="pets" element={<Pets />} />
          <Route path="login" element={<Login user={user} setUser={setUser} />} />
          <Route path="register" element={<Register />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="about" element={<About />} />
          <Route path="logout" element={<Main />} />
          <Route path="editUser" element={<EditUser />} />
        </Routes>
      </SessionsContext.Provider>
    </BrowserRouter>
  );
}

export default App;