import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function MainNavBar() {

  let location = useLocation();
  
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">PomoPets</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/pets">Pets</Nav.Link>
            <Nav.Link href="/timers">Timers</Nav.Link>
            <NavDropdown title="My Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/login">{location.state?.email ? 'Logout':'Login'}
            </Nav.Link>
            {location.state?.email ? null: <Nav.Link href="/register">Register</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};