import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavbarCom(){
  return(
    <Navbar bg="light" expand="lg" ms-auto>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/formation">Education</Nav.Link>
          <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
          <Nav.Link as={Link} to="/publication">Publications</Nav.Link>
          <Nav.Link as={Link} to="/projet">Projects</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarCom;
