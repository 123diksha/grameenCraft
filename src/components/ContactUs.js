import React from 'react';
import { Container } from 'react-bootstrap';
import {Row} from 'react-bootstrap';

function ContactUs() {
  return (
    <>
    <div>
      <Row></Row>
    </div>
     <div className="mt-5 product-contain"> <Container  style={{ width: '300px', height: '100px',display: 'flex', alignItems: 'center', justifyContent: 'center' }} ><h2>Contact Us</h2></Container></div>
     <div>
      <Row></Row>
    </div>
    <Container className="mt-3">
    <p>
              If you have any questions or need assistance, feel free to get in touch with us. We're here to help!

    </p>
            <ul className="list-unstyled">
              <li>
                <strong>Phone:</strong> +91 0000000
              </li>
              <li>
                <strong>Email:</strong> info@example.com
              </li>
              <li>
                <strong>Address:</strong> <h10>Bamanpuri village , Barawaha </h10>
              <li> 
                <h10> Khargoan</h10> Madhya Pradesh, India - Pin Code: 451115 
              </li>
                
              </li>
            </ul>

     
  </Container>
  </>
  );
}
    
      
export default ContactUs;
