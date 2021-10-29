import React from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Badge,
  Image,
} from 'react-bootstrap';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => (
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
    <section id='features' className='py-5'>
      <Container className='px-5 my-5'>
        <Row className='gx-3'>
          <div className='col-lg-4 mb-5 mb-lg-0'>
            <h2 className='fw-bolder mb-0'>a better way to start building</h2>
          </div>
          <div className='col-lg-8'>
            <Row className='gx-5 row-cols-1 row-cols-md-2'>
              <Col className='mb-5 h-100'>
                <div className='feature bg-primary bg-gradient text-white rounded-3 mb-3'>
                  <i className='bi bi-collection' />
                </div>
                <h2 className='h5'>Featured Title</h2>
                <p className='mb-0'>
                  Paragraph of text beneath the heading to explain the heading.
                  Here is just a bit more text.
                </p>
              </Col>
              <Col className='mb-5 h-100'>
                <div className='feature bg-primary bg-gradient text-white rounded-3 mb-3'>
                  <i className='bi bi-building' />
                </div>
                <h2 className='h5'>Featured Title</h2>
                <p className='mb-0'>
                  Paragraph of text beneath the heading to explain the heading.
                  Here is just a bit more text.
                </p>
              </Col>
              <Col className='mb-5 h-100'>
                <div className='feature bg-primary bg-gradient text-white rounded-3 mb-3'>
                  <i className='bi bi-toggles2' />
                </div>
                <h2 className='h5'>Featured Title</h2>
                <p className='mb-0'>
                  Paragraph of text beneath the heading to explain the heading.
                  Here is just a bit more text.
                </p>
              </Col>
              <Col className='mb-5 h-100'>
                <div className='feature bg-primary bg-gradient text-white rounded-3 mb-3'>
                  <i className='bi bi-toggles2' />
                </div>
                <h2 className='h5'>Featured Title</h2>
                <p className='mb-0'>
                  Paragraph of text beneath the heading to explain the heading.
                  Here is just a bit more text.
                </p>
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
    </section>
    <section id='testimonial' className='py-5 bg-light'>
      <Container className='px-5 my-5'>
        <Row className='gx-5 justify-content-center'>
          <div className='col-lg-10 col-xl-7'>
            <div className='text-center'>
              <div className='fs-4 mb-4 fst-italic'>
                &quot;Working with Start Bootstrap templates has saved me tons
                of development time when building new projects! Starting with a
                Bootstrap template just makes things easier!&quot;
              </div>
              <div className='d-flex align-items-center justify-content-center'>
                <img
                  className='rounded-circle me-3'
                  src='https://dummyimage.com/40x40/ced4da/6c757d'
                  alt='Tom Ato'
                />
                <div className='fw-bold'>
                  Tom Ato
                  <span className='fw-bold text-primary mx-1'>/</span>
                  CEO, Pomodoro
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
    <section id='blog' className='py-5'>
      <Container className='px-5 my-5'>
        <Row className='gx-5 justify-content-center'>
          <div className='col-lg-8 col-xl-6'>
            <div className='text-center'>
              <h2 className='fw-bolder'>From our blog</h2>
              <p className='lead fw-normal text-muted mb-5'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                fugit ratione dicta mollitia. Officiis ad.
              </p>
            </div>
          </div>
        </Row>
        <Row className='gx-5'>
          <div className='col-lg-4 mb-5'>
            <Card className='h-100 shadow border-0'>
              <Card.Img
                className='card-img-top'
                src='https://dummyimage.com/600x350/ced4da/6c757d'
                alt='blog top'
              />
              <Card.Body className='card-body p-4'>
                <Badge className='bg-primary bg-gradient rounded-pill mb-2'>
                  News
                </Badge>
                <a
                  className='text-decoration-none link-dark stretched-link'
                  href='https://blog.naver.com/seohyung_whang'
                >
                  <Card.Title className='card-title mb-3'>
                    Blog post title
                  </Card.Title>
                </a>
                <Card.Text className='mb-0'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </Card.Text>
              </Card.Body>
              <Card.Footer className='p-4 pt-0 bg-transparent border-top-0'>
                <div className='d-flex align-items-end justify-content-between'>
                  <div className='d-flex align-items-center'>
                    <Image
                      rounded-circle
                      src='https://dummyimage.com/40x40/ced4da/6c757d'
                      className='me-3'
                    />
                    <small>
                      <div className='fw-bold'>Kelly Rowan</div>
                      <div className='text-muted'>
                        March 12, 2021 &middot; 6 min read
                      </div>
                    </small>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </div>
          <div className='col-lg-4 mb-5'>
            <Card className='h-100 shadow border-0'>
              <Card.Img
                className='card-img-top'
                src='https://dummyimage.com/600x350/adb5bd/495057'
                alt='blog top'
              />
              <Card.Body className='card-body p-4'>
                <Badge className='bg-primary bg-gradient rounded-pill mb-2'>
                  Media
                </Badge>
                <a
                  className='text-decoration-none link-dark stretched-link'
                  href='https://blog.naver.com/seohyung_whang'
                >
                  <Card.Title className='card-title mb-3'>
                    Another blog post title
                  </Card.Title>
                </a>
                <Card.Text className='mb-0'>
                  This text is a bit longer to illustrate the adaptive height of
                  each card. Some quick example text to build on the card title
                  and make up the bulk of the card&apos;s content.
                </Card.Text>
              </Card.Body>
              <Card.Footer className='p-4 pt-0 bg-transparent border-top-0'>
                <div className='d-flex align-items-end justify-content-between'>
                  <div className='d-flex align-items-center'>
                    <Image
                      rounded-circle
                      src='https://dummyimage.com/40x40/ced4da/6c757d'
                      className='me-3'
                    />
                    <small>
                      <div className='fw-bold'>Josiah Barclay</div>
                      <div className='text-muted'>
                        March 23, 2021 &middot; 4 min read
                      </div>
                    </small>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </div>
          <div className='col-lg-4 mb-5'>
            <Card className='h-100 shadow border-0'>
              <Card.Img
                className='card-img-top'
                src='https://dummyimage.com/600x350/6c757d/343a40'
                alt='blog top'
              />
              <Card.Body className='card-body p-4'>
                <Badge className='bg-primary bg-gradient rounded-pill mb-2'>
                  News
                </Badge>
                <a
                  className='text-decoration-none link-dark stretched-link'
                  href='https://blog.naver.com/seohyung_whang'
                >
                  <Card.Title className='card-title mb-3'>
                    The last blog post title is a little bit longer than the
                    others
                  </Card.Title>
                </a>
                <Card.Text className='mb-0'>
                  Some more quick example text to build on the card title and
                  make up the bulk of the card&apos;s content.
                </Card.Text>
              </Card.Body>
              <Card.Footer className='p-4 pt-0 bg-transparent border-top-0'>
                <div className='d-flex align-items-end justify-content-between'>
                  <div className='d-flex align-items-center'>
                    <Image
                      rounded-circle
                      src='https://dummyimage.com/40x40/ced4da/6c757d'
                      className='me-3'
                    />
                    <small>
                      <div className='fw-bold'>Evelyn Martinez</div>
                      <div className='text-muted'>
                        April 2, 2021 &middot; 10 min read
                      </div>
                    </small>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </div>
        </Row>
      </Container>
    </section>
    <Footer />
  </div>
);

export default Home;
