import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// component imports
import Main from "./components/Main";
import MainNavBar from "./components/MainNavBar";
import Pomodoro from "./components/Pomodoro";

// route imports
import Login from "./routes/Login";
import Pets from "./routes/Pets";
import Register from "./routes/Register";
import Statistics from "./routes/Statistics";
import Timers from "./routes/Timers";

// styles
import './styles/App.scss';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <MainNavBar />
    <Routes>
      <Route path="/" element={<Main title="PomoPets"/>} />
      <Route path="timers" element={<Timers />} />
      <Route path="pets" element={<Pets />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="statistics" element={<Statistics />} />
    </Routes>
    {/* <Pomodoro /> */}
  </BrowserRouter>,
  rootElement
);