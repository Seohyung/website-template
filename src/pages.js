import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import NavBar from './components/NavBar';

export const Home = () => (
  <div>
    <NavBar />
    <header className='bg-dark py-5'>
      <Container className='px-5'>
        <Row className='gx-5 align-items-center justify-content-center'>
          <Col className='col-lg-8 col-xl-7 col-xxl-6'>
            <div className='my-5 text-center text-xl-start'>
              <h1 className='display-5 fw-bolder text-white mb-2'>
                A Bootstrap 5 template for modern businesses
              </h1>
              <p className='lead fw-normal text-white-50 mb-4'>
                Quickly design and customize responsive mobile-first sites with
                Bootstrap, the world’s most popular front-end open source
                toolkit!
              </p>
              <div className='d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start'>
                <Button
                  type='button'
                  variant='primary'
                  size='lg'
                  href='#features'
                  className='px-4 me-sm-3'
                >
                  Get Started
                </Button>
                <Button
                  type='button'
                  variant='outline-light'
                  size='lg'
                  href='/about'
                  className='px-4'
                >
                  Learn More
                </Button>
              </div>
            </div>
          </Col>
          <Col className='col-xl-5 col-xxl-6 d-none d-xl-block text-center'>
            <img
              className='img-fluid rounded-3 my-5'
              src='https://dummyimage.com/600x400/343a40/6c757d'
              alt='...'
            />
          </Col>
        </Row>
      </Container>
    </header>
  </div>
);

export function About() {
  return (
    <div>
      <h1>[About]</h1>
    </div>
  );
}

export function Events() {
  return (
    <div>
      <h1>[Events]</h1>
    </div>
  );
}

export function Products() {
  return (
    <div>
      <h1>[Products]</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>[Contact]</h1>
    </div>
  );
}
