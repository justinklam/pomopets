import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from '../../node_modules/react-bootstrap/Navbar'

export default function MainNavBar() {
  return (
  <div className="navbar">
    <p className="logo-header">PomoPets |{" "}</p>
    <Link to="/timer">Timers</Link> |{" "}
    <Link to="/pets">Pets</Link> |{" "}
    <Link to="/register">Register</Link> |{" "}
    <Link to="/login">Login</Link>
  </div>
  );
};
