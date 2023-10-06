import React, { useState } from "react";

function Testimonials(){
  const slides = [
    {
      image:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/client1.png.webp"
    },
    {
      image:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/vassilis.png.webp"
    },
    {
      image:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/korset.png.webp"
    }
  ];
  const text = [
    {
      text:
        "Leap of faith Tech & team responded very quickly to our requests and consistently delivered above and beyond our expectations. We've had him help us with various front end and back end development on our Shopify and WooCommerce sites. I highly recommend his services!"
    },
    {
      text:
        "Give him a detailed description of the job to be done, and he will follow it precisely till the end of the job. We had to modify and complete a Word press theme and also to migrate its content to another domain. Everything was done at a good pace, and very promptly. I would happily give a 5/5 Star to Atul (associated with Leap of faith Tech) and will definitely hire him again on the next project."
    },
    {
      text:
        "Give him a detailed description of the job to be done, and he will follow it precisely till the end of the job. We had to modify and complete a Word press theme and also to migrate its content to another domain. Everything was done at a good pace, and very promptly. I would happily give a 5/5 Star to Atul (associated with Leap of faith Tech) and will definitely hire him again on the next project."
    }
  ];
  const names = [
    {
      name: "Sean O'Leary"
    },
    {
      name: "Vassilis Paraskevopoulos"
    },
    {
      name: "Sven Korset"
    }
  ];
  return (
    <div className="test">
      <div className="test-sec">
        <h6 className="titles-sec">Testimonials</h6>
        <h2>Peep what our existing and past clients have to say about our quality</h2>
      </div>
      <div>
        <ImageSlider images={slides} text={text} names={names} />
      </div>
    </div>
  );
};

function ImageSlider  ({ images, text, names })  {
  const [currentSlide, setCurrentSlide] = useState(0);
  function nextSlide  ()  {
    setCurrentSlide((currentSlide + 1) % images.length);
  };
  function prevSlide () {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };
  function slides () {
    setCurrentSlide((currentSlide + 1 + images.length) % images.length);
  };

  const prevButtonClass = currentSlide === 0 ? "slider-button prev-button inactive" : "slider-button prev-button active";
  const nextButtonClass = currentSlide === images.length - 1 ? "slider-button next-button inactive" : "slider-button next-button active";


  
  return (
    <div className="testimonial_text">
      <div className="test-container">
        <div className="container">
          <div className="test-img">
            <img
              className="test-image"
              src={images[currentSlide].image}
         alt="Slider"
              onClick={nextSlide}
            />
          </div>
        </div>


        <div className="container">
          <p>{text[currentSlide].text}</p>
        </div>
        <div>


          <h5>
            {names[currentSlide].name}
          </h5>
          <h6><span>CLIENT</span></h6>
        </div>


        
        <div className="test-btn">
          <button className={prevButtonClass} onClick={prevSlide}>
            Previous
          </button>
          <button className={nextButtonClass} onClick={nextSlide}>
            Next
          </button>
          <button className="slider-button next-button active" onClick={slides}>
            Nextp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;