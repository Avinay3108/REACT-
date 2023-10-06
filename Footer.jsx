import React from "react";
import { Link } from "react-router-dom"; 

function Footer() {
  const company = [
    { title: <Link to="/about">About</Link> },
    { title: <a>Privacy Policy</a> },
    { title: <a>Terms and Conditions</a> },
    { title: <a>Career</a> }
  ];
  const quickAccess = [
    { title: <Link to="/services">Services</Link> },
    { title: <a>Contact Us</a> },
    { title: <Link to="/culture">Culture</Link> }
  ];
  const keepInTouch = [
    {
      title: (
        <div className="footer-p">
          <p>NEW SUBSCRIBERS</p>
          <div className="footer_email">
            <input type="text" placeholder="ENTER EMAIL ADDRESS" />
            <button type="button">JOIN US!</button>
          </div>
        </div>
      )
    },
  ];
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-sec">
          <div className="footer-text">
            <h4>Loved what you watch? Let’s have a discussion</h4>
            <div className="kick_right">
              <a  className="loft-btn-no2" title="GET IN TOUCH">
                <span>Connect with us!</span>
              </a>
            </div>
          </div>
          <About
            company={company}
            quickAccess={quickAccess}
            keepInTouch={keepInTouch}
          />
        </div>
      </div>
    </div>
  );
}

function About(props) {
  const company = props.company;
  const quickAccess = props.quickAccess;
  const keepInTouch = props.keepInTouch;
  return (
    <div className="footer_main">
      <div className="footer-items">
        <h2>Company</h2>
        <ul>
          {company.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      </div>
      <div className="footer-items">
        <h2>Quick Access</h2>
        <ul>
          {quickAccess.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      </div>
      <div className="footer-itemss">
        <h2>Keep In Touch</h2>
        <p>Subscribe to our newsletter and stay connected by reading our updates.</p>
        {keepInTouch.map((item, index) => (
          <div>
          <div className="footer_email">
            <input type="text" placeholder="ENTER EMAIL ADDRESS" />
            <button type="button">JOIN US!</button>
          </div>
          <h2>     Visit Us At</h2>
          <p>   Office No. -302 (3rd Floor), Plot No. F-301 Industrial Area, Sector 74, SAS Nagar, Punjab 160055</p></div>
        ))}
      </div>
    </div>
 );

}
export default Footer;