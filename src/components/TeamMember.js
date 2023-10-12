import React from 'react';
import { Container, Row, Col,  Image } from 'react-bootstrap';

function TeamMember() {
  const circleStyle = {
    width: '400px', // Set the width and height to create a circular container
    height: '400px',
    borderRadius: '10%', // Make it a circle
    overflow: 'hidden', // Hide the overflow to maintain the circular shape
  };

  const imageStyle = {
    width: '90%', // Make sure the image covers the circular container
    height: '90%',
    objectFit: 'cover', // Cover the entire circle
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col className="d-flex justify-content-center align-items-center">
          <div style={circleStyle}>
            <Image src='/photo_with_chakki.jpg' alt="Mission Vision" style={imageStyle} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default TeamMember;
