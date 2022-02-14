import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Login from "./routes/Login";
import Pets from "./routes/Pets";
import Register from "./routes/Register";
import Statistics from "./routes/Statistics";
import Timers from "./routes/Timers";


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="timer" element={<Timers />} />
      <Route path="pets" element={<Pets />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="statistics" element={<Statistics />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);