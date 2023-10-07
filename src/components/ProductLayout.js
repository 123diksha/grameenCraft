// ProductLayout.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Product from './Product';

const ProductLayout = ({ products, addToCart, cart, totalQuantity }) => {
  return (
    <Container className="mt-3">
      <Row>
        {products.map((product) => (
          <Col key={product.name} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Product
              img={product.img}
              name={product.name}
              price={product.price}
              MRP={product.MRP}
              Weight={product.Weight}
              addToCart={addToCart}
              cart={cart}
              initialQuantity={
                cart.find((item) => item.name === product.name)?.quantity || 0
              }
            />
            <p>{product.description}</p>
          </Col>
        ))}
      </Row>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button as={Link} to="/cart" variant="success">
          Go to Cart ({totalQuantity})
        </Button>
      </div>
    </Container>
  );
};

export default ProductLayout;
