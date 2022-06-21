import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <>
    <footer id="footer" className="footer">
    <div className="footer-content">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-12 footer-info">
            <NavLink to="/" className="logo d-flex align-items-center">
              <span>Nova</span>
            </NavLink>
            <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
            <div className="social-links d-flex  mt-3">
              <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
              <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
              <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bi bi-dash"></i> <NavLink to="/">Home</NavLink></li>
              <li><i className="bi bi-dash"></i> <NavLink to="/about">About us</NavLink></li>
              <li><i className="bi bi-dash"></i> <NavLink to="/services">Services</NavLink></li>
              <li><i className="bi bi-dash"></i> <NavLink to="/">Terms of service</NavLink></li>
              <li><i className="bi bi-dash"></i> <NavLink to="/">Privacy policy</NavLink></li>
            </ul>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bi bi-dash"></i> <NavLink to="/">Web Design</NavLink></li>
              <li><i className="bi bi-dash"></i> <NavLink to="/">Web Development</NavLink></li>
              <li><i className="bi bi-dash"></i> <NavLink to="/">Product Management</NavLink></li>
              <li><i className="bi bi-dash"></i> <NavLink to="/">Marketing</NavLink></li>
              <li><i className="bi bi-dash"></i> <NavLink to="/">Graphic Design</NavLink></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>
              A108 Adam Street <br/>
              New York, NY 535022<br/>
              United States <br/><br/>
              <strong>Phone:</strong> +1 5589 55488 55<br/>
              <strong>Email:</strong> info@example.com<br/>
            </p>

          </div>

        </div>
      </div>
    </div>

    <div className="footer-legal">
      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong><span>Nova</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
    
          Designed by <a href="https://bootstrapmade.com/" target="_blank">BootstrapMade</a>
        </div>
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer