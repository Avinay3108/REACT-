import React from 'react';

const contant = "Intellectual Minds That Serve the Purpose"
const paragraph = "We owe specialization in multiple areas such as Web solutions for E-commerce, Learning management, UI/UX Designing, Managed Networking Services, & Digital Marketing."
function Banner() {
  return (
    <div className="bg">

      <div className="bg-img">
        <img src="https://www.leapoffaithtech.com/wp-content/uploads/2022/01/loft-banner.jpg.webp" alt="banner" />
      </div>

      <div class="contant">
        <h1>{contant}</h1>
        <p>{paragraph}</p>
        <a href="https://leapoffaithtech.com/contact-us/" className="loft-btn" title="START WITH US"><span>START WITH US</span></a>
      </div>
    </div>
  );
}
export default Banner;


