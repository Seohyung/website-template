import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Footer = () => (
  <footer className='bg-dark py-4 mt-auto'>
    <Container className='px-5'>
      <Row className='align-items-center justify-content-between flex-column flex-sm-row'>
        <div className='col-auto'>
          <small className='m-0 text-white'>
            Copyright &copy; Your Website {new Date().getFullYear()}
          </small>
        </div>
        <div className='col-auto'>
          <a className='link-light small' href='#!'>
            Privacy
          </a>
          <span className='text-white mx-1'>&middot;</span>
          <a className='link-light small' href='#!'>
            Terms
          </a>
          <span className='text-white mx-1'>&middot;</span>
          <a className='link-light small' href='#!'>
            Contact
          </a>
        </div>
      </Row>
    </Container>
  </footer>
);

export default Footer;
