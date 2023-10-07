import React, { PureComponent } from 'react';
import logo from '../logo-removebg-preview.png';
import cartIcon from '../Cart.png';
import { Link, NavLink } from 'react-router-dom';

export default class Navbar extends PureComponent {
  render() {
    const navbarStyle = {
      backgroundColor: '#198754',
    };
    const { totalQuantity } = this.props;

    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top mb-3">
          <div className="container-fluid" style={navbarStyle}>
            {/* Move the button to the left */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* Place the login option on the right */}
            <div
              className="offcanvas offcanvas-start"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              
              <div className="offcanvas-header">
                
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  Our Services
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">

                <ul className="navbar-nav justify-content-start flex-grow-1 ps-3">
                   {/* Logo in the center */}
            <a className="navbar-brand d-flex align-items-left" href="/">
            <img src={logo} alt="Logo" style={{ height: '30px', width: '30px' }} />

            </a>
                  <li className="nav-item">
                    <NavLink exact to="/" className="nav-link" activeClassName="active">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/ourproducts" className="nav-link" activeClassName="active">
                      Products
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/about" className="nav-link" activeClassName="active">
                      About Us
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/mission-vision" className="nav-link" activeClassName="active">
                      Mission & Vision
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/team-member" className="nav-link" activeClassName="active">
                      Our Story
                    </NavLink>
                  </li>
                
                  <li className="nav-item">
                    <NavLink to="/contact-us" className="nav-link" activeClassName="active">
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
           
            {/* Display the number of items in the basket */}
            <div className="d-flex align-items-end">
              <Link to="/cart" className="nav-link">
                <img src={cartIcon} alt="Cart" height="40"  />
                ({totalQuantity})
              </Link>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
