import React from 'react';

function ContactUs() {
  return (
    <section id="contact-us" className="bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2>Contact Us</h2>
            <p>
              If you have any questions or need assistance, feel free to get in touch with us. We're here to help!
            </p>
            <ul className="list-unstyled">
              <li>
                <strong>Phone:</strong> +1 (123) 456-7890
              </li>
              <li>
                <strong>Email:</strong> info@example.com
              </li>
              <li>
                <strong>Address:</strong> 1234 Main St, City, Country
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
