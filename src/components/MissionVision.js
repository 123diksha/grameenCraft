import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function MissionVision() {
  return (
    <>
    <div>
      <Row></Row>
    </div>
    <div className="mt-5 product-contain ">
       <Container  style={{ width: '300px', height: '100px',display: 'flex', alignItems: 'center', justifyContent: 'center' }} ><h2>Mission and Vision</h2></Container></div>
    <Container>
      <Row className="mt-5">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title><b>Mission</b></Card.Title>
              <Card.Text>
                <b>"To revive the food ecosystem of urban households."</b>
                <p class = "text-break">"We are committed towards the empowerment of rural India while catering for the needs of a healthy urban India.</p>

              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title><b>Vision</b></Card.Title>
              <Card.Text>
              <p class = "font-weight-normal"><b>"Facilitate economic freedom and provide self-reliance to farmers across India while maintaining harmony with nature."</b></p>
                <p class = "text-break">We aspire to continue the campaign of expressing harmony with nature and advancing the development of small-scale farming through rural empowerment.</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default MissionVision;
