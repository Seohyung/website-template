import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = () => {
  const logoUrl = '/logo.svg';
  return (
    <Navbar variant='dark' bg='dark' expand='lg'>
      <Container className="px-5">
        <Navbar.Brand href='/'>          
          <img
            alt='logo'
            src={logoUrl}
            width='30'
            height='30'
            className='d-inline-block align-top'
          />{' '}
          법무법인 가나다
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="ms-auto">
              <Nav.Link href="/about" className="ms-auto">About Us</Nav.Link>
              <Nav.Link href="/events" className="ms-auto">Events</Nav.Link>
              <Nav.Link href="/products" className="ms-auto">Products</Nav.Link>
              <Nav.Link href="/contact" className="ms-auto">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Container>            
    </Navbar>
  );
};

export default NavBar;
