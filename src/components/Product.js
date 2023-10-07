import React, { useState, useEffect } from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';

function Product({ img, name, price,MRP,Weight, addToCart, cart, initialQuantity }) {
  const [quantityInCart, setQuantityInCart] = useState(initialQuantity);

  useEffect(() => {
    // Update the quantity in cart whenever initialQuantity changes
    setQuantityInCart(initialQuantity);
  }, [initialQuantity]);

  const handleIncrement = () => {
    const updatedQuantity = quantityInCart + 1;
    setQuantityInCart(updatedQuantity);
    const totalAmount = updatedQuantity * price;

    // Update the local state and send data to the cart
    addToCart({ img, name, price, quantity: updatedQuantity, totalAmount });
  };

  const handleDecrement = () => {
    if (quantityInCart > 0) {
      const updatedQuantity = quantityInCart - 1;
      setQuantityInCart(updatedQuantity);
      const totalAmount = updatedQuantity * price;

      // Update the local state and send data to the cart
      addToCart({ img, name, price, quantity: updatedQuantity, totalAmount });
    }
  };

  return (
    <Card className="custom-card" style={{ maxWidth: '215px', border: 'none'}}>
      <Card.Img src={img} alt={name} style={{ height: '215px', width: '215px' }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Weight: {Weight}</Card.Text>
        <Card.Text>MRP: ₹<s>{MRP}</s></Card.Text>
        <Card.Text>Price: ₹{price}</Card.Text>
        <Row>
  <Col xs={1} className="px-0">
  <Button
    variant="outline-success"
    onClick={handleDecrement}
    style={{
      background: 'transparent',
      color: 'black',
      width: '100%',
      padding: '0.25rem 0.5rem', // Adjust the padding to reduce the button size
      fontSize: '0.75rem', // Adjust the font size to make the button smaller
    }}
  >
    -
  </Button>
  </Col>
  <Col xs={2} className="px-0 text-center">
    <span>{quantityInCart}</span>
  </Col>
  <Col xs={1} className="px-0">
  <Button
    variant="outline-success"
    onClick={handleIncrement}
    style={{
      background: 'transparent',
      color: 'black',
      width: '100%',
      padding: '0.25rem 0.5rem', // Adjust the padding to reduce the button size
      fontSize: '0.75rem', // Adjust the font size to make the button smaller
    }}
  >
    +
  </Button>
  </Col>
</Row>

      </Card.Body>
    </Card>
  );
}

export default Product;
