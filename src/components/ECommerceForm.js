import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Row, Alert, Container } from 'react-bootstrap';

function ECommerceForm({ totalAmount, selectedProductNames}) {
  const [formData, setFormData] = useState({
    username: '',
    phoneNumber: '',
    city: '',
    pinCode: '',
    address: '',
    area: null,
    latitude: null,
    longitude: null,
  });

  const [error, setError] = useState('');
  const [areaList, setAreaList] = useState([]);

 const validBangalorePins = [
    "560063", "560030", "560034", "560007", "560007", "560092", "560024", "562106", "562106", "560045", "560003",
    "560050", "562107", "560064", "560047", "560026", "560086", "560002", "560070", "560064", "560073", "562149",
    "560053", "560050", "560085", "560043", "562149", "560017", "560001", "560002", "560002", "560009", "560002",
    "560025", "560001", "560083", "560076", "560026", "560004", "560002", "560079", "560086", "560103", "560046",
    "562106", "562157", "560010", "560049", "562107", "560049", "560056", "560068", "560001", "560026", "560093",
    "560025", "560064", "560002", "560018", "560018", "560040", "560053", "560097", "562157", "560061", "562130",
    "562130", "560001", "560050", "560026", "560067", "560045", "560036", "560029", "562149", "562157", "560062",
    "560037", "560071", "562125", "560016", "560001", "560100", "560005", "560065", "560019", "560019", "560021",
    "560085", "560022", "560026", "560026", "560013", "560087", "560013", "560024", "560008", "560051", "560102",
    "560104", "562125", "562106", "560024", "562106", "560001", "560068", "560048", "560043", "560085", "560030",
    "562106", "560076", "560008", "562157", "560094", "560066", "562106", "560038", "560038", "560010", "560085",
    "560078", "560006", "560064", "560013", "560014", "560013", "560015", "560043", "560041", "560070", "560069",
    "560011", "560005", "560066", "562106", "560078", "560079", "560009", "560020", "560084", "562130", "560067",
    "560067", "560043", "560015", "560079", "560067", "562149", "560096", "560085", "560098", "560034", "560064",
    "560092", "560062", "560034", "560034", "560095", "560077", "560036", "560016", "562125", "560078", "560074",
    "560037", "560004", "560001", "560084", "560054", "560011", "560068", "560023", "560048", "560086", "560001",
    "560033", "560056", "560003", "560055", "560033", "560037", "562106", "560033", "560054", "560004", "562107",
    "560049", "560067", "560076", "560055", "560076", "560054", "560049", "560025", "560099", "560087", "560017",
    "560067", "560072", "560073", "560045", "560096", "560019", "560002", "560001", "560039", "562107", "560002",
    "560075", "560021", "560032", "560070", "560003", "560087", "560004", "560058", "560058", "560058", "560032",
    "560094", "560010", "560010", "560010", "560064", "560098", "560001", "560021", "560066", "560045", "560016",
    "560037", "560025", "560059", "560080", "560092", "562106", "560067", "560027", "562125", "560012", "560020",
    "560004", "560027", "562106", "560064", "560042", "560008", "560002", "560021", "560034", "560084", "560050",
    "560009", "560061", "560003", "562157", "562130", "560029", "560049", "562106", "560041", "560006", "560028",
    "560056", "562106", "560087", "560052", "560003", "560045", "560001", "562157", "560097", "560040", "560040",
    "560078", "560017", "560049", "560004", "560091", "560018", "560047", "560003", "560064", "560066", "560027",
    "562107", "560070", "560078", "560064", "560064", "560037", "560022", "560022"
  ];
   // Replace with valid PIN codes

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
    console.log(formData);
    e.preventDefault();
    
    if (!validBangalorePins.includes(formData.pinCode)) {
      setError('Sorry, we currently deliver only to Bangalore. Please enter a Bangalore PIN code.');
    } else {
      setError('!! Thanks for visiting us !!');
      // Construct your WhatsApp message with the form data
      const message = `
        Message from GrammenCraft's: "Pay on URL - diksha.muchhala6@okhdfcbank"
        Username: ${formData.username}
        Phone Number: ${formData.phoneNumber}
        City: ${formData.city}
        Pin Code: ${formData.pinCode}
        Address: ${formData.address}
        Area: ${formData.area}
        Latitude: ${formData.latitude}
        Longitude: ${formData.longitude}
        Total Amount: ₹${totalAmount}
        Name: ${selectedProductNames.join(', ')}
      `;

      // Encode the message for the WhatsApp URL
      const encodedMessage = encodeURIComponent(message);

      // Open WhatsApp with the message to a specific number (replace with your number)
      window.open(`https://wa.me/918959242024/?text=${encodedMessage}`, '_blank');
    }
  };

  const getAreaByPinCode = (event) => {
    axios.get(`https://api.postalpincode.in/pincode/${event.target.value}`).then((response) => {
      setAreaList(response.data ? response.data[0].PostOffice : []);
      setFormData({
        ...formData,
        area: areaList && areaList.length > 0 ? areaList[0].Name : '',
        city: response.data && response.data[0].PostOffice && response.data[0].PostOffice.length > 0 ? response.data[0].PostOffice[0].District : ''
      })
    })
  }

  return (
    <Container mt-5>
    <Form style={{ width: '60%', margin: '0 auto' }} onSubmit={handleSubmit}>
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
      <Form.Group controlId="pinCode">
        <Form.Label>Pin Code</Form.Label>
        <Form.Control
          type="number"
          name="pinCode"
          value={formData.pinCode}
          onChange={handleInputChange}
          onBlur={getAreaByPinCode}
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
          disabled
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="area">
        <Form.Label>Area</Form.Label>
        <Form.Select
          type="text"
          name="area"
          value={formData.area}
          onChange={handleInputChange}
          required
        >
          {areaList && areaList.map((area, index) =>  <option value={area.name} key={index}>{area.Name}</option>)}
        </Form.Select>
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
        Place Order
      </Button>
      {error && <Alert variant="danger">{error}</Alert>}
      <div>
        <Row>
          <p><b>Pay on URL - diksha.muchhala6@okhdfcbank</b></p>
        </Row>
      </div>
    </Form>
    </Container>
  );
}

export default ECommerceForm;
