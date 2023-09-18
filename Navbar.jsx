import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  const toggleServicesDropdown = () => {
    setShowServicesDropdown(!showServicesDropdown);
  };

  return (
    <div>
      <div className='container'>
        <div className='nav-sec'>
          <Link to="/">
            <img src="https://www.leapoffaithtech.com/wp-content/uploads/2022/01/loft-logo.png.webp" alt="Logo" />
          </Link>
          <div className='nav-list'>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li className="dropdown" onClick={toggleServicesDropdown}>
                {/* Wrap the Link in a span */}
                <span>
                  <Link to="/services">Services</Link>
                </span>
                {showServicesDropdown && (
                  <ul className="dropdown-content">
                    <li>
                      <Link to="/commerce">Woo Commerce Development</Link>
                    </li>
                    <li>
                      <Link to="/shopify">  Shopify Development</Link>
                    </li>
                    <li>
                      <Link to="/wordpress"> WordPress Development</Link>
                    </li>
                    <li>
                      <Link to="/learndash">LearnDash Development</Link>
                    </li>
                    <li>
                      <Link to="/Speed">Speed Optimization </Link>
                    </li>
                    <li>
                      <Link to="/Frontend"> Front End Development</Link>
                    </li>
                    <li>
                      <Link to="/Markting"> Digital Marketing</Link>
                    </li>
                    <li>
                      <Link to="/UI"> UI/UX Design</Link>
                    </li>
                    <li>
                      <Link to="/MANAGED"> Managed Network Services</Link>
                    </li>
                    
                    
                  </ul>
                )}
              </li>
              <li>
                <Link to="/solutions">Solutions</Link>


              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/culture">Culture</Link>
              </li>
            
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
