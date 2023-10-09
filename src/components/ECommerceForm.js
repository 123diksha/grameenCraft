// ECommerceForm.js
import React, { useState } from 'react';
import { Form, Button, Row } from 'react-bootstrap';

function ECommerceForm({ totalAmount ,name}) {
  const [formData, setFormData] = useState({
    username: '',
    phoneNumber: '',
    city: '',
    pinCode: '',
    address: '',
    latitude: null,
    longitude: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setFormData({
          ...formData,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct your WhatsApp message with the form data
    const message = `
      Username: ${formData.username}
      Phone Number: ${formData.phoneNumber}
      City: ${formData.city}
      Pin Code: ${formData.pinCode}
      Address: ${formData.address}
      Latitude: ${formData.latitude}
      Longitude: ${formData.longitude}
      Total Amount:  ₹${totalAmount}
      name:${name}
    `;

    // Encode the message for the WhatsApp URL
    const encodedMessage = encodeURIComponent(message);

    // Open WhatsApp with the message to a specific number (replace with your number)
    window.open(`https://wa.me/918959242024/?text=${encodedMessage}`, '_blank');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="username">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="phoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="city">
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="pinCode">
        <Form.Label>Pin Code</Form.Label>
        <Form.Control
          type="text"
          name="pinCode"
          value={formData.pinCode}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Button variant="success" type="button" onClick={handleLocationClick}>
        Get Current Location
      </Button>
      <Button variant="success" type="submit">
        Send Details via WhatsApp
      </Button>
      <div>
        <Row>
          <p><b>!! Thanks to visit us !!</b></p>
        
        </Row>
      </div>
    </Form>
  );
}

export default ECommerceForm;
