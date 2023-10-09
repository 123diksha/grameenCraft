import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Product from './Product';
import './Productlayout.css';

const ProductLayout = ({ products, addToCart, cart, totalQuantity }) => {
  return (
    <>
    <div>
      <Row></Row>
    </div>
    <Container className="product-container">
      <Row className="justify-content-center align-items-center">
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
            <p><b>{product.description}</b></p>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-4">
        <Button as={Link} to="/cart" variant="success">
          Go to Cart ({totalQuantity})
        </Button>
      </div>
    </Container>
    <div>
      <Row></Row>
    </div>
    </>
  );
};

export default ProductLayout;
