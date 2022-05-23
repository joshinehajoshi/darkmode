import React, { useState } from 'react';
import {Button, Navbar, Nav, Container, NavDropdown, Form, FormControl} from 'react-bootstrap';
import './App.css';

function App() {
  const [mode, setMode] = useState(false);
  const modeHandler = () => {
    setMode(!mode);
  }
  return (
    <div className={mode ? "App-header" : "App-header-light"}>
     

      <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
     <Button onClick={modeHandler}>Dark Node</Button>
    </Navbar.Collapse>
  </Container>
</Navbar>
<h1>Hello</h1>
    </div>
  );
}

export default App;
