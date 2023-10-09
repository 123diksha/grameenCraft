// Footer.js
import React from "react";
import "./footer.css";

import { Row ,Col} from 'react-bootstrap';

import {Link} from "react-router-dom";
import { Container } from "react-bootstrap";


const Footer = () => {
    return (
         <>
        <footer className = "footerStyl" >
       <Container>
        <Row>
            <Col>
        <div className = "Fcontact">
        <div className = "contactItem" >
        < h3 > Contact Info </h3>
         <p> Bamanpuri village <br></br>Khargoan, Madhya Pradesh, India<br></br> Pin Code: 451115 
         <br></br>Contact: +91-8959242024
         </p>
         </div>
         </div>
         </Col>
         <Col>
         <div className = "QuickLinks" >
        <h3> QuickLinks </h3>


        <li>
        <Link to = "/" > Home </Link>
        </li>
        <li >
        <Link to = "/about" > About Us </Link> </li>
        <li >
        <Link to = "/contact-us" > Contact Us </Link>
        </li>
        </div>
        </Col>
        <Col>
        <div className = "Ourservices" >
        <h3 > Our Services </h3>
        <li > All India Delivery </li>
        < li > Case On Delivery </li>
        <li > Return Policy </li>
        </div>
        </Col>
        </Row>
        <Row>
         <div className = "Webname" >
        <h3 > < b > GrameenCraft </b>
        </h3 >  </div>
        </Row>
        </Container>
        </footer>
         <div className = "contentStyl" >
        < p >
        Grameencraft All rights reserved.
        </p>
     
        </div>

       
         </>
    );
};


export default Footer;
