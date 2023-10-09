import React from 'react';
import { Container } from 'react-bootstrap';
import {Row} from 'react-bootstrap';
function AboutUS() {
 
  return (
    <>
    <div>
      <Row></Row>
    </div>
     <div className="mt-5 product-contain"> <Container  style={{ width: '300px', height: '100px',display: 'flex', alignItems: 'center', justifyContent: 'center' }} ><h2>About Us</h2></Container></div>
     <div>
      <Row></Row>
    </div>
    <Container className="mt-3">
      <p>
        GrameenCraft is an initiative to serve you the best quality food products from different regions of rural India.
        Originating from a small village in Madhya Pradesh, our roots are well connected to rural India, enabling us
        to serve you with the best products coming from their natural habitat while simultaneously empowering rural India
        through various means.
      </p>
      <p>
        Ghar se ghar tak is an initiative to serve fresh chakki aata to be savored by every household in their daily meals,
        a sight common in the pre-industrial era. Our whole wheat flour is prepared using the finest varieties of wheat,
        Sharbati and Lokwan. These are widely used for making different delicacies in various parts of the world and are known
        for their nutrients and taste. Finest-grade wheat is directly bought from the farmers.
      </p>
     
  </Container>
  </>
  );
}

export default AboutUS;