import React, { PureComponent } from 'react';
import logo from '../logoimage.jpg';
import cartIcon from '../Cart.png';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'; // Make sure this path is accurate


export default class Navbar extends PureComponent {
  render() {
    const { totalQuantity } = this.props;

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
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-start"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  <b>Our Services</b>
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <a className="navbar-brand d-flex align-items-left" href="/">
                  <img src={logo} alt="Logo" style={{ height: '30px', width: '100px' }} />
                </a>
                <ul className="navbar-nav justify-content-start flex-grow-1 ps-3">
                  <li className="nav-item">
                    <NavLink to="/" className="nav-link">
                      <b>HOME</b>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/ourproducts" className="nav-link">
                      <b>PRODUCTS</b>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/about" className="nav-link">
                      <b>ABOUT US</b>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink  exact to="/mission-vision" className="nav-link">
                      <b>MISSION & VISION</b>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/contact-us" className="nav-link">
                      <b>CONTACT US</b>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex align-items-end">
              <Link to="/cart" className="nav-link cart-link">
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
