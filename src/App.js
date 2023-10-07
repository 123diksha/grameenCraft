import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useLocation, Routes, Route, Link } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';
import Navbar from './components/Navbar';
import ECommerceForm from './components/ECommerceForm';
import MissionVision from './components/MissionVision';
import AboutUS from './components/AboutUS';
import TeamMember from './components/TeamMember'
import ProductLayout from './components/ProductLayout';
import ContactUs from './components/ContactUs';


function App() {
  const location = useLocation();
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const products = [
    {
      name: 'Lokwan Wheat Flour',
      img: '/Aata.jpeg',
      Weight: "5kg",
      MRP: 500,
      price: 360,
      description: 'Premium quality wheat flour made from Lokwan variety.',
    },
    {
      name: 'Sharbati Wheat Flour',
      img: '/Aata.jpeg',
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
    <div style={{ textAlign: 'left', marginTop: '100px' }}>
      <Button as={Link} to="/ourproducts" variant="success" style={{ color: 'black' }}>
       BUY NOW Here
      </Button>
    </div>
  ) : null;

  return (
    <>
     <div className={`App ${isHomePage ? 'home-page' : ''}`}>
  <div className="app-container mt-5" >
    
      <Navbar totalQuantity={totalQuantity}  />
      <div className="container mt-5">


</div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Container className="mt-5">
                <h1><b>Now, Fresh Chakki Aata </b></h1><h3>Deliver to your home </h3>
                <h3>Healthy facts of whole wheat fresh chakki aata:</h3>
            <p>
        Outer layer and core of wheat are very important parts of the grain as far as nutrients are concerned. They play a
        vital role in digestion and contain vitamin B, anti-oxidants, zinc, copper and other essential nutrients. In regular
        whole wheat flour made through post-processing of wheat, these things are compromised. That's why fresh chakki aata is
        the best alternative to the mass-produced batches of regular whole wheat aata. We, at Ghar se ghar tak, make sure to
        pick the best quality of fresh wheat which is then properly cleaned and dried before it is ground to make fresh chakki
        aata. The fresh chakki aata is then packed lovingly in sustainable packaging and delivered to your homes, truly Ghar
        se ghar tak.
      </p>
              </Container>
              <Container className="mt-25">
              {nextButton}
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
      
     </>
  );
}

export default App;
