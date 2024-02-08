import React from 'react';
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import Navbar from './Navbar';

const Service = () => {
  return (
    <>
    <Navbar/>
    <Container>
      <h1 className="mt-5 mb-4">Our eCommerce Services</h1>
      <Row>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Online Store Development</Card.Title>
              <Card.Text>
                We design and develop custom online stores tailored to your business needs.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>E-commerce Integration</Card.Title>
              <Card.Text>
                Integrate your existing platform with popular e-commerce solutions for seamless operations.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Payment Gateway Setup</Card.Title>
              <Card.Text>
                Set up secure payment gateways to facilitate transactions on your online store.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Service;
