import { useState } from "react";

import React from "react";

function Portfolio() {
  const slides = [
    {
      image:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/woola-slider-1.png.webp",
      imageUrl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/03/woola-logo1.jpg.webp"
    },
    {
      image:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/yogi-site.png.webp",
      imageUrl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/03/yogi-logo-1.jpg.webp"
    },
    {
      image:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/03/Group-14834.png.webp",
      imageUrl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/03/flower-express.png.webp"
    }
  ];

  const text = [
    {
      text:
        "Woola is one of the leading businesses who were looking to create their Ecommerce websites. The client wants to leverage the online platform and attract customers online. Our experts work closely with the client requirements. We assured the client that we would provide our services because we specialize in developing everything related to Ecommerce. We used cutting-edge methods and trends to create a feature-rich website. Our developers put advanced technology into action and enabled the desired features.",
      contant: (
        <>
          E COMMERCE WEBSITE <span>Woola</span>
        </>
      )
    },

    {
      text:
        "Amongst our various clients Yogi Bands was one who was in need of Shopify website. Our professional team sprang into action right away to deliver on our promises. We integrated modern technology to kickstart their dream Shopify website. Our role as a strategic partner began with major decisions that extended far beyond developing Shopify websites that offer the highest possible returns to our clients..",
      contant: (
        <>
          SHOPIFY WEBSITE <span> Yogi Bands</span>
        </>
      )
    },

    {
      text:
        "An Ecommerce website or store to shop flowers with easy navigation with user friendly interface.      .",
      contant: (
        <>
          WEBSITE MOCKUP<span> Flower Express</span>
        </>
      )
    }
  ];

  const [currentImageUrl, setCurrentImageUrl] = useState(slides[0].imageUrl);
  const [selectedContentIndex, setSelectedContentIndex] = useState(0);

  function displayCommerceWebsite() {
    setSelectedContentIndex(0);
    setCurrentImageUrl(slides[0].imageUrl);
  }
  function displayShopify() {
    setSelectedContentIndex(1);
    setCurrentImageUrl(slides[1].imageUrl);
  }

  function displayUIWebsite() {
    setSelectedContentIndex(2);
    setCurrentImageUrl(slides[2].imageUrl);
  }

  return (
    <div>
      <div>
        <h6>LATEST PROJECTS</h6>
        <h2>
          We have worked on several projects and successfully delivered around
          2k+ projects worldwide. Here are our recent portfolio and case
          studies.
        </h2>
      </div>
      <div>
        <button onClick={displayCommerceWebsite}>E-Commerce</button>
        <button onClick={displayShopify}>Shopify</button>
        <button onClick={displayUIWebsite}>UI/UX</button>
      </div>
      <div>
        <div>
          <img src={slides[selectedContentIndex].image} alt="Slider" />
          <a href="https://www.woola.co.nz/">
            <span>VISIT WEBSITE </span>
          </a>
        </div>
      </div>
      <div>
        <div>
          <img
            src={currentImageUrl}
            alt=""
            style={{ width: "100px", height: "100px" }}
          />
          <div className="slider-text">
            <p>{text[selectedContentIndex].text}</p>
            <p>{text[selectedContentIndex].contant}</p>
          </div>
        </div>
      </div>
      <Growth />
    </div>
  );
}

function Growth() {
  const data =
    "Elevate Your Business Growth and Stir Up Profits With Our Extensive Web Development Solutions.";

  const anchor = (
    <a href="/contact-us/" className="loft-btn-no2" title="GET STARTED">
      <span>let's begin</span>
    </a>
  );

  return (
    <div>
      <h3>{data}</h3>
      {anchor}
    </div>
  );
}

export default Portfolio;
