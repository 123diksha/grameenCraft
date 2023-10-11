// Navbar.js

import React, { PureComponent } from 'react';
import logo from '../logoimage.jpg';
import cartIcon from '../Cart.png';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOffcanvasOpen: false, // Initially, offcanvas is closed
    };
  }

  handleOffcanvasToggle = () => {
    this.setState((prevState) => ({
      isOffcanvasOpen: !prevState.isOffcanvasOpen,
    }));
  };

  handleNavItemClick = () => {
    // Close the offcanvas when a navigation item is clicked
    this.setState({ isOffcanvasOpen: false });
  };

  render() {
    const { totalQuantity } = this.props;
    const { isOffcanvasOpen } = this.state;

    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top mb-3">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
              onClick={this.handleOffcanvasToggle}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`offcanvas offcanvas-start ${isOffcanvasOpen ? 'show' : ''}`}
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              {/* Offcanvas content */}
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  <b>Our Services</b>
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  onClick={this.handleOffcanvasToggle}
                ></button>
              </div>
              <div className="offcanvas-body">
                <a className="navbar-brand d-flex align-items-left" href="/">
                  <img src={logo} alt="Logo" style={{ height: '30px', width: '100px' }} />
                </a>
                <ul className="navbar-nav justify-content-start flex-grow-1 ps-3">
                  <li className="nav-item">
                    <NavLink to="/" className="nav-link" onClick={this.handleNavItemClick}>
                      <b>HOME</b>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/ourproducts" className="nav-link" onClick={this.handleNavItemClick}>
                      <b>PRODUCTS</b>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/about" className="nav-link" onClick={this.handleNavItemClick}>
                      <b>ABOUT US</b>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/mission-vision" className="nav-link" onClick={this.handleNavItemClick}>
                      <b>MISSION & VISION</b>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/contact-us" className="nav-link" onClick={this.handleNavItemClick}>
                      <b>CONTACT US</b>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex align-items-end">
              <Link to="/cart" className="nav-link cart-link" onClick={this.handleNavItemClick}>
                <img src={cartIcon} alt="Cart" height="40" />
                ({totalQuantity})
              </Link>
            </div>
          </div>
        </nav>
      </>
    );
  }
}