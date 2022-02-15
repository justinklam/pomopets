import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// component imports
import Main from "./components/Main";
import HomeNavBar from "./components/HomeNavBar";
import Pomodoro from "./components/Pomodoro";

// route imports
import Login from "./routes/Login";
import Pets from "./routes/Pets";
import Register from "./routes/Register";
import Statistics from "./routes/Statistics";
import Timers from "./routes/Timers";
import About from "./routes/About";

// styles
import './styles/App.scss';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
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
    {/* <Pomodoro /> */}
  </BrowserRouter>,
  rootElement
);