import React, { useState } from "react";
function ImageSlider  ({ images, text, buttons} )  {
  const [currentImage, setCurrentImage] = useState(0);



  function nextImage() {
    setCurrentImage((currentImage + 1) % images.length);
  };


  function prevImage() {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };


  return (
    <div>
    <div className="slider-container">
    <div className="container">
      <img
        className="slider-image"
        src={images[currentImage].image}
        alt="Slider"
        onClick={nextImage}
      />
      </div>
      </div>
      <div className="slider-btn">
      <button className="slider-button prev-button" onClick={prevImage}>
        Previous
      </button>
      <button className="slider-button next-button" onClick={nextImage}>
        Next
      </button>
      </div>
      <div className="slider-para">
      <div className="container">
      <p>{text[currentImage].text}</p>
      <div>
        {buttons.map((button, index) => (
          <a className="loft-btn"
          key={index} href={button.link}>{button.text}
          </a>
        ))}
        </div>
      </div>
      </div>
    </div>
  );
};
function Java  ()  {
  const slides = [
    {
      image:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/yogi-site.png.webp"
    },
    {
      image:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/woola-slider.png.webp"
    }
  ];
  const text = [
    {
      text:
        "Amongst our various clients Yogi Bands was one...who was in need of Shopify website. Our professional team sprang into action right away to deliver on our promises. We integrated modern technology to kickstart their dream Shopify website"
    },
    {
      text:
        "Hang your E-commerce business to all new heights...with a website that is optimized for an easy operation on phones, computers, and laptops. Your customer convenience will make you the best one, and this all is possible with the expert developers."
    }
  ];
  const buttons = [
    {
      text:<span>VISIT WEBSITE</span>,
      link: "https://www.woola.co.nz/"
    }
  ];
  return (
    <div className="App">
    <div className="app-sec">
    <h6 className="titles-sec">OUR FIELD OF EXPERTISE</h6>
      <h2>Development is Our Passion</h2>
      <p>We take every moment to pull the plunge and develop websites that stand out. Here's our expertise:</p>
      </div>
      <ImageSlider images={slides} text={text} buttons={buttons} />
    </div>
  );
};
export default Java;