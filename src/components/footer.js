// Footer.js
import React from "react";
import './footer.css';

import { Row ,Col} from 'react-bootstrap';

import {Link} from "react-router-dom";
import { Container } from "react-bootstrap";

const Footer = () => {
    return (
      <>
        <footer className="footerStyl">
          <Container>
            <Row>
              <Col>
                <div className="Fcontact">
                  <div className="contactItem">
                    <h3>Contact Info</h3>
                    <p>
                      Village - Bamanpuri <br />
                      Khargone, Madhya Pradesh, India<br />
                      Pin Code: 451115
                      <br />
                      Contact: +91-8959242024
                    </p>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="QuickLinks">
                  <h3>Quick Links</h3>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/contact-us">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col>
                <div className="Ourservices">
                  <h3>Our Services</h3>
                  <ul>
                    <li>Delivery: We are currently serving at Bengaluru only and plan to expand soon</li>
                    <li>Cash On Delivery</li>
                    <li>Return Policy</li>
                  </ul>
                </div>
              </Col>
            </Row>
            <Row>
              <div className="Webname">
              <h3 > < b > GrameenCraft </b>
        </h3 > 
        </div>
            </Row>
          </Container>
        </footer>
        <div className="contentStyl">
          <p>&copy; 2023 Your E-Commerce Site. All rights reserved.</p>
        </div>
      </>
    );
  };
  
  export default Footer;
  
