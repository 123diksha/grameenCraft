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
                  {navItems.map((item, index) => <li key={index} className="nav-item">
                    <NavLink data-bs-dismiss="offcanvas" exact={index===0} to={item.redirectTo} className="nav-link" activeClassName="active">
                      <span data-bs-dismiss="offcanvas">{item.displayName}</span>
                    </NavLink>
                  </li>)}
                </ul>
              </div>
            </div>

            {/* Display the number of items in the basket */}
            <div className="d-flex align-items-end">
              <Link to="/cart" className="nav-link">
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
