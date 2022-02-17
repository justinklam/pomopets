import { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import { SessionsContext } from "../context/SessionsContext";

export default function HomeNavBar() {

  const [session, setSession] = useContext(SessionsContext)
  console.log('session', session);

  return (
    <Navbar className="main-navbar" bg="light" expand="lg">
      <Container>
        <Link to="/">PomoPets</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/about">About Pomodoro</Link>
            <Link to="/pets">Pets</Link>
            <Link to="/timers">Timers</Link>
            <NavDropdown title="My Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              {!session?.state.email ? '' : <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>}
            </NavDropdown>
            <div className="button-div">
              {session?.state.email ? '' : <Link className="login-button" to="/login" variant="primary">Login</Link>}{' '}
              {session?.state.email ? '' : <Link className="register-button" to="/register" variant="outline-primary">Register</Link>}{' '}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};