// Navbar.js

import React, { PureComponent } from 'react';
import logo from '../logoimage.jpg';
import cartIcon from '../Cart.png';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  navItems = [{
    displayName: '',

  }];

  render() {
    const { totalQuantity } = this.props;
    const navItems = [{
      displayName: 'Home',
      redirectTo: '/',
    }, {
      displayName: 'Products',
      redirectTo: '/ourproducts',
    }, {
      displayName: 'About Us',
      redirectTo: '/about',
    }, {
      displayName: 'Mission & Vision',
      redirectTo: '/mission-vision',
    }, {
      displayName: 'Our Story',
      redirectTo: '/team-member',
    }, {
      displayName: 'Contact Us',
      redirectTo: '/contact-us',
    }];


    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top mb-3 pt-0">
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
              className={`offcanvas offcanvas-start`}
              style={{width: '60%'}}
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
                  {navItems.map((item, index) => <li data-bs-dismiss="offcanvas" className="nav-item">
                    <NavLink to={item.redirectTo} className="nav-link" exact>
                      <b>{item.displayName}</b>
                    </NavLink>
                  </li>)}
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