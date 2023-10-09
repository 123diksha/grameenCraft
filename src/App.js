import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useLocation, Routes, Route, Link } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';
import Navbar from './components/Navbar';
import AboutUS from './components/AboutUS';
import ECommerceForm from './components/ECommerceForm';
import MissionVision from './components/MissionVision';
import TeamMember from './components/TeamMember'
import ProductLayout from './components/ProductLayout';
import ContactUs from './components/ContactUs';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageSlider from './components/ImageSlider';
import { Row } from 'react-bootstrap';

function App() {
 
  const location = useLocation();
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const products = [
    {
      name: 'Lokwan Wheat Flour',
      img: '/lokwan (2).png',
      Weight: "5kg",
      MRP: 500,
      price: 360,
      description: 'Premium quality wheat flour made from Lokwan variety.',
    },
    {
      name: 'Sharbati Wheat Flour',
      img: '/SARBATI.jpeg',
      Weight: "5kg",
      MRP: 600,
      price: 400,
      description: 'Finely ground wheat flour made from Sharbati variety.',
    },
    // Add more products here
  ];

  const addToCart = (product) => {
    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex((item) => item.name === product.name);

    if (existingProductIndex !== -1) {
      updatedCart[existingProductIndex].quantity = product.quantity;
      updatedCart[existingProductIndex].totalAmount = product.totalAmount;
    } else {
      updatedCart.push(product);
    }

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  const totalQuantity = cart.reduce((total, product) => total + product.quantity, 0);
  const totalAmount = cart.reduce((total, product) => total + product.price * product.quantity, 0);
 
  const isHomePage = location.pathname === '/';
  const nextButton = isHomePage ? (
    <div style={{ textAlign: 'center', marginTop: '80px' }}>
      <Button as={Link} to="/ourproducts" variant="success" style={{ color: 'black' }}>
       BUY NOW 
      </Button>
    </div>
  ) : null;

  return (
    <>
     <div className={`App ${isHomePage ? 'home-page' : ''}`}>
  <div className="app-container text-center mt-5" >
    
      <Navbar totalQuantity={totalQuantity}  />
      <Container className=" mt-5">
</Container>
      <Routes>
        <Route
          path="/"
          element={
            <>
             <Container className="mt-5">
              <Container className="mt-5"> <Row> <ImageSlider /></Row></Container>
            
              <Container className="mt-5">
              {nextButton}
               </Container>
                </Container>
              <Container className="mt-5">
                <h1><b>Hey! Bengaluru</b></h1> <h3> Now, Fresh Chakki Aata Delivered to your home </h3>
                <h3> Why Ghar se Ghar Tak fresh chakki aata</h3>
                <div className="d-flex justify-content-center">
                <ul className="list-unstyled list-square">
                <li>Finest quality wheat are selected from fields of Madhya Pradesh (Lokwan and Sharbati).</li>
                 <li> Cleaned and dried in village homes making it hand and village crafted.</li>
               <li> Grounded in Namma Bengaluru to serve you fresh.</li>
               <li> More digestive fiber</li>
               <li>No preservatives</li>
               <li> Delicious and Healthy</li>
            </ul>
         </div>
              </Container>
            
             
              
            </>
          }
        />
        
         <Route
          path="/ourproducts"
          element={<ProductLayout products={products} addToCart={addToCart} cart={cart} totalQuantity={totalQuantity} />}
        />
        <Route path="/cart" element={<ShoppingCart cart={cart} clearCart={clearCart} />} />
        <Route path="/form" element={<ECommerceForm totalAmount={totalAmount} />} />
        <Route path="/mission-vision" element={<MissionVision />} />
         <Route path="/about" element={<AboutUS />}/>
         <Route path="/team-member" element={<TeamMember />}/>
         <Route path="/contact-us" element={<ContactUs />}/>
         
      </Routes>
      </div>
      </div>
      <container>
        <Row>

        </Row>
      </container>

      <Footer/>
     </>
  );
}

export default App;
