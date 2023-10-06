import React from "react";
import Kickstart from "./Kickstart";

function Service() {
  const images = [
    {
      imgurl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Group-14818.png.webp"
    },
    {
      imgurl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Group-14822.png.webp"
    },
    {
      imgurl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Group-14817.png.webp"
    },
    {
      imgurl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Group-14821.png.webp"
    },
    {
      imgurl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Group-14820.png.webp"
    },
    {
      imgurl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Group-14819.png.webp"
    },
    {
      imgurl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Group-14823.png.webp"
    },
    {
      imgurl:
        "https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/services-hand.png"
    },
    {
      imgurl:
        "https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/setting-big.png"
    },
    {
      imgurl:
        "https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/setting-small.png"
    },
  
  ];
  const h2 = "Elevate Your Customer Base With Our Top-Notch Digital Solutions";

  const Anchor = (
    <a href="https://leapoffaithtech.com/contact-us/" className="loft-btn" alt="CREATE A PROJECT">
      <span>Kickstart a Project</span>
    </a>
  );

  return (
    <div>
    <div>
    
    <div className="container">
    <div className="service-section">
    <div className="service-container">
    
      <div className="service-sec">
        <h2>{h2}</h2>
        </div>
        <div className="services-btn">
      {Anchor}
      </div>
      </div>
      <div className="image-container">
        {images.map(function (image, index) {
          return (
            <div>
            <div key={index} >
              <div className="image">
                <img src={image.imgurl} alt="IMAGES" />
              
              </div>
             
            </div>
            </div>
          
        
          );
        })}
        <div className="service-icon">
        <img src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/loft-ani-service.png" alt="the"/>
        </div>
        </div>
        </div>
      </div>
      </div>
     

      <Card />
      <Kickstart />
   
    </div>
  );
}



const loftDesign = [
  {
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Group-13641.svg",
    name: "WooCommerce Development",
    paragraph:
      "We bring in years of expertise in WooCommerce Development to serve our customers with everything they wish for. Our experience makes us the best rising star in the industry.",
    anchor: (
      <a
        href="https://leapoffaithtech.com/woocommerce-development/"
        title="PHP Development "
      >
        Read More
        <img
          src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png"
          alt="right arrow"
          title="services"
        />
      </a>
    )
  },
  {
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Group-13640.svg",
    name: "Shopify Development",
    paragraph:
      "Get your Shopify Store Developed with customized themes and the right design with Leap of Faith Technologies. To get a better view, click on",
    anchor: (
      <a href="https://leapoffaithtech.com/shopify-development/">
        Read More
        
          <img
            src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png"
            alt="right arrow"
          />
        
      </a>
    )
  },
  {
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Group-13641.svg",
    name: "WordPress Development",
    paragraph:
      "Having an optimized website for your online business is a dream. You don’t have to worry anymore as we offer top-notch WordPress development services.",
    anchor: (
      <a href="https://leapoffaithtech.com/wordpress-development/">
        Read More
        
          <img
            src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png"
            alt="right arrow"
          />
        
      </a>
    )
  },
  {
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Group-13642.svg",
    name: "Learn Dash Development",
    paragraph:
      "Our one kind of Learn Dash Development services is the right pick for you to get the instant launching of LMS. For more, tap on",
    anchor: (
      <a href="https://leapoffaithtech.com/learndash-development//">
        Read More
        
          <img
            src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png"
            alt="right arrow"
          />
        
      </a>
    )
  },
  {
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Group-13585.svg",
    name: "Speed Optimization",
    paragraph:
      "Does your website open late? No more hassle as we provide Speed Optimization for our client websites to offer their visitors a great experience!",
    anchor: (
      <a href="https://leapoffaithtech.com/speed-optimization//">
        Read More
        
          <img
            src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png"
            alt="right arrow"
          />
        
      </a>
    )
  },
  {
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/web-programming-1.svg",
    name: "Front End Development",
    paragraph:
      "Give your existing website a fruitful look with a trendy design that works well. Hire our front-end developers for the best services, click on! ",
    anchor: (
      <a href="https://leapoffaithtech.com/frontend-development//">
        Read More
        
          <img
            src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png"
            alt="right arrow"
          />
        
      </a>
    )
  },
  {
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/digital-marketing-1.svg",
    name: "Digital Marketing",
    paragraph:
      "Build your Online Presence With the Best in Industry Digital Marketing services. We offer the services as per our client demand.",
    anchor: (
      <a href="https://leapoffaithtech.com/digital-marketing-seo/.">
        Read More
        
          <img
            src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png"
            alt="right arrow"
          />
        
      </a>
    )
  },
  {
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Group-13578.svg",
    name: "UI/UX Design",
    paragraph:
      "Are you wondering about the best company to get the UI/UX design services? Your search comes to an end with Leap of Faith Technologies.",
    anchor: (
      <a href="https://leapoffaithtech.com/ui-ux-design//">
        Read More
        
          <img
            src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png"
            alt="right arrow"
          />
        
      </a>
    )
  },
  {
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Group-13584.svg",
    name: "Managed Network Services",
    paragraph:
      "Streamline your remote business operation with our high-end managed network services. For more, visit our page now!",
    anchor: (
      <a
        href="https://leapoffaithtech.com/managed-network-services//"
        title="PHP Development"
      >
        Read More
        
          <img
            src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png"
            alt="right arrow"
          />
        
      </a>
    )
  }
];

function Card() {
  return (
    <div>
    <div className="container">
      <h6 className="titles-sec">SERVICES</h6>
      <h2>Bringing Designs That Fit User Needs</h2>
      </div>

      {loftDesign.map(function (design, index) {
        return (
          <div key={index}>
          <div className="container">
            <img src={design.imgUrl} alt={design.name} />
            </div>
            <div className="container">
            <h3>{design.name}</h3>
            </div>
            <div className="container">
            <p>{design.paragraph}</p>
            </div>
            <div className="container">
            {design.anchor}
            </div>
            
          </div>
        )
      })}
    </div>
  );
}




export default Service;
