import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';

import ECommerceForm from './ECommerceForm';

function ShoppingCart({ cart, addToCart, clearCart }) {
  const [showForm, setShowForm] = useState(false);


  // Calculate the initial total quantity based on the items in the cart
  const initialTotalQuantity = cart.reduce((total, product) => total + product.quantity, 0);
  const [totalQuantity, setTotalQuantity] = useState(initialTotalQuantity);


  useEffect(() => {
    // Update the total quantity whenever the cart changes
    const newTotalQuantity = cart.reduce((total, product) => total + product.quantity, 0);
    setTotalQuantity(newTotalQuantity);
  }, [cart]);


  // Calculate the total amount for all products in the cart
  const totalAmount = cart.reduce((total, product) => total + product.price * product.quantity, 0);
  const name = cart.reduce((total, product) => product.name); 


  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Card style={{ width: '80%', maxWidth: '600px', border: 'none', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
        <Card.Body>
          <Card.Title style={{ fontSize: '24px', fontWeight: 'bold' }}>Shopping Cart</Card.Title>
          <Card.Text></Card.Text>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {cart.map((product, index) => (
              <li key={index} style={{ marginBottom: '16px', borderBottom: '1px solid #ddd', paddingBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={product.img} alt={product.name} height="80" width="80" style={{ marginRight: '16px' }} />
                  <div>
                    <h5 style={{ marginBottom: '4px' }}>{product.name}</h5>
                    <p style={{ color: '#777' }}>Price: ₹{product.price}/ 5kg</p>
                    <p>Quantity: {product.quantity}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Total Quantity: {totalQuantity}</p>
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Total Amount: ₹{totalAmount.toFixed(2)}</p>
          <div className="text-center mt-4" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button className="btn btn-success" onClick={() => setShowForm(!showForm)}>
              Buy Now
            </Button>
            <Button variant="danger" onClick={clearCart}>
              Clear Cart
            </Button>
          </div>
        </Card.Body>
      </Card>
      {showForm && <ECommerceForm totalAmount={totalAmount} name={name} style={{ marginTop: '20px' }} />}
    </div>
  );
}

export default ShoppingCart;
