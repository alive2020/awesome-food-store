import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

function store() {
  return (
    <div className="main">
      <h2>Our Stores</h2>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src='holder.js/171x180' rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src='holder.js/171x180' roundedCircle />
          </Col>
          <Col xs={6} md={4}>
            <Image src='holder.js/171x180' thumbnail />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default store;
