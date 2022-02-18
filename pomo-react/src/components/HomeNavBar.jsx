import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import { SessionsContext } from "../context/SessionsContext";

export default function HomeNavBar() {

  const [session, setSession] = useContext(SessionsContext)
  
  // useEffect(() => {
  //   console.log('session', session);    
  // },[session?.state.email]);

  return (
    <Navbar className="main-navbar" bg="light" expand="lg">
      <Container>
        <Link className="nav-link nav-main-link" to="/">PomoPets</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About Pomodoro</Link>
            <Link className="nav-link" to="/pets">Pets</Link>
            <Link className="nav-link" to="/timers">Timers</Link>
            <NavDropdown title="My Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              {!session?.state.email ? '' : <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>}
            </NavDropdown>
            <div className="button-div">
              {session?.state.email ? '' : <Link className="login-button" to="/login" >&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;</Link>}
              {session?.state.email ? '' : <Link className="register-button" id="regisiter-nav" to="/register">&nbsp;&nbsp;&nbsp;Register&nbsp;&nbsp;&nbsp;</Link>}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};