import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Pets from "./routes/Pets";
import Timers from "./routes/Timers";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="timer" element={<Timers />} />
      <Route path="pets" element={<Pets />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);