import React from 'react';
function Partner() {
  return (
    <div className="partner-sec">
      <div className="partner">
        <h6 className="titles-sec">PARTNERS</h6>
        <h2 className="partner-title">Our Partners</h2>
        <div className="project-img">
          <img src="https://www.leapoffaithtech.com/wp-content/uploads/2022/03/go-daddy-pro.png.webp" alt="Partner 1" />
          <img src="https://www.leapoffaithtech.com/wp-content/uploads/2022/01/Juniper.png.webp" alt="Partner 2" />
          <img src="https://www.leapoffaithtech.com/wp-content/uploads/2022/01/engage.png.webp" alt="Partner 3" />
          <img src="https://www.leapoffaithtech.com/wp-content/uploads/2022/01/cisco.png.webp" alt="Partner 4" />
          <img src="https://www.leapoffaithtech.com/wp-content/uploads/2022/05/hp-partner.png.webp" alt="Partner 5" />
        </div>
      </div>
      <div className='project-sec2'>
        <div className="container">
          <h6 className="titles-sec">TOKEN OF RECOGNITION</h6>
          <h2>Our values taught us to take customer feedback and incorporate it to improve. Here's what our customer rating has to say:</h2>
          <div className='project-imgage'>
            <div className='project-img1 project_img'>
              <a target="_blank" rel="noopener noreferrer" href="https://payment.leapoffaithtech.com/">
                <img src="https://www.leapoffaithtech.com/wp-content/uploads/2022/03/go-daddy-pro.png.webp" alt="GoDaddy Logo" title="GoDaddy" />
              </a>
              <div className='project-para'>
                <p> Go Daddy</p>
                <p>
                  <span>4.8/5</span>
                  Rating
                </p>
              </div>
            </div>
            <div className='project-img2 project_img'>
              <a target="_blank" href="https://leapoffaithtech.com/contact-us/">
                <img src="https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Layer-2.svg" alt="" title="" />
              </a>
              <div className='project-para'>
                <p> Google Adwords</p> <p><span>4.8/5</span> Rating  </p>
              </div>
            </div>
            <div className='project-img3 project_img'>
              <a target="_blank" href="https://leapoffaithtech.com/contact-us/">
                <img src="https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Layer-1.svg" alt="" title="" />
              </a>
              <div className='project-para'>
                <p> Hubspot</p>
                <p> <span>4.8/5</span>
                  Rating </p>
              </div>
            </div>
            <div className='project-img4 project_img'>
              <a target="_blank" href="https://leapoffaithtech.com/contact-us/">
                <img src="https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Layer-2-1.svg" alt="" title="" />
              </a>
              <div className='project-para'>
                <p> Shopify App Developers</p>
                <p><span>4.8/5</span> Rating </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Partner;