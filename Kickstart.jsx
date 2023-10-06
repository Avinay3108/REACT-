import React from "react";
const paragraph = "Give Your Online Business a Kickstart With Finely Developed Websites";
const anchor = (
  <a href="https://www.leapoffaithtech.com/contact-us/" className="loft-btn-no2" title="GET STARTED">
    <span>Contact Us Now</span>
  </a>
);
function Kickstart() {
  return (
    <div className="kick-sec">
     <div className="container">
     <div className="kick-section">
      <div className="kick_left">
        <h3>{paragraph}</h3>
      </div>
      <div className="kick_right">
        {anchor}
      </div>
    </div>
    </div>
    </div>
  );
}
export default Kickstart;







