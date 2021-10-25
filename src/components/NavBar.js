import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const NavBar = () => {
  const logoUrl = '/logo.svg';
  return (
    <Navbar bg='dark' expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>
          <img
            alt='logo'
            src={logoUrl}
            width='30'
            height='30'
            className='d-inline-block align-top'
          />{' '}
          법무법인 가나다
        </Navbar.Brand>
      </Container>
      <Container>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
      </Container>
    </Navbar>
  );
};

export default NavBar;
