import React, { useState } from "react";
const data = "WordPress Speed Optimization Services";
const para =
  "We help businesses of all sizes to make their website run faster than before with our WordPress speed optimization services. Hire our professionals to boost the performance of websites.";
const Anchor = (
  <a
    href="https://leapoffaithtech.com/contact-us/"
    class="loft-btn"
    title="HIRE DEVELOPER NOW"
  >
    <span>HIRE DEVELOPER NOW</span>
  </a>
);
const imagedash1 =
  "https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/speed-banner.svg";

// SpeedOptimization Development SECTION 1 START
function speedOptimization() {
  return (
    <div>
      <div className="container">
        <h2>{data}</h2>
        <p>{para}</p>
        {Anchor}
      </div>
      <div className="container">
        <img src={imagedash1} alt="" />
      </div>
      <SpeedOptimizationDevelopment />
      <Card />
      <Java />
      <Development />
      <SpeedDevelopment />
    </div>
  );
}
//speedOptimization Development SECTION 1 END

// speedOptimization  Development SECTION 2 START

function SpeedOptimizationDevelopment() {
  const data = "We Engage Users By Improving Performance Of WordPress Sites";
  const para1 =
    "Leap of Faith Technologies takes pride in helping businesses of every segment, be it edtech government tech. eCommerce, healthcare, and so on in enhancing their site performances. Our dedicated team of WordPress professionals is well versed with everything needed to optimize the website to the next level. We ensure that the website runs at maximum speed with no hassle, from managing your site's speed, security and technical issues. .";
  const para2 =
    "By optimizing the website, we aim to increase the search engine rankings, boost performance and bring your services and products to the limelight. We have gained a brief knowledge and expanded our base to offer the best possible solutions. We know beating the competitive world is quite challenging. Therefore, this is why we are here to help practically by trying our best. By this, we want to enhance your digital presence over the search engines.";

  return (
    <div>
      <div className="container">
        <h2>{data}</h2>
      </div>
      <div className="container">
        <p>{para1}</p>
        <p>{para2}</p>
      </div>
    </div>
  );
}

// speedOptimization  Development SECTION 2 END

// speedOptimization  Development SECTION 3 START

const developmentOffer = [
  {
    id: 1,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/website_coching.svg",
    name: "Website Caching Setup",
    content:
      "Our experts simplify the installation and configuration process by setting up the browser caching to the website. With this, we ensure the quick loading of the website on user browsers and improve the user experience at the end.  .",
    anchor: (
      <a href="YOUR_ESTIMATE_URL">
        Get Estimate
        <img
          src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png"
          alt="right arrow"
          title="services"
        />
      </a>
    )
  },
  {
    id: 2,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/Content_Delivery_Network.svg",
    name: "Setting Content Delivery Network",
    content:
      "Website will lot of media work best for the users. And for the same, our experts offer a highly creative look to the website by setting up a content delivery network. The network keeps users engaged on different browsers and devices. .",
    anchor: (
      <a href="YOUR_ESTIMATE_URL">
        Get Estimate
        <img
          src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png"
          alt="right arrow"
          title="services"
        />
      </a>
    )
  },

  {
    id: 3,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/Database_Optimization.svg",
    name: "Database Optimization",
    content:
      " Our professional makes sure all the site data is optimized to peak to make it perform well. We switch the website to a new host and ensure no information is lost during the entire process. .",
    anchor: (
      <a href="YOUR_ESTIMATE_URL">
        Get Estimate
        <img
          src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png"
          alt="right arrow"
          title="services"
        />
      </a>
    )
  },

  {
    id: 4,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/Reduce_Number_JavaScript_CSS.svg",
    name: "Reduction of JavaScript and CSS Files",
    content:
      " We go through all the JavaScript and CSS files related to the websites, look for the ones not needed, and reduce them to minimal, aiding in the website's proper functioning. All things are done while the website is functional..",
    anchor: (
      <a href="YOUR_ESTIMATE_URL">
        Get Estimate
        <img
          src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png"
          alt="right arrow"
          title="services"
        />
      </a>
    )
  },

  {
    id: 5,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/Optimize_Size_Images.svg",
    name: "Optimizing Images",
    content:
      " Media play an important role in creating the first impression of websites. This is why we develop an advanced mechanism to optimize the images and make sure the resolution and size are the best fit as per your business website. .",
    anchor: (
      <a href="YOUR_ESTIMATE_URL">
        Get Estimate
        <img
          src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png"
          alt="right arrow"
          title="services"
        />
      </a>
    )
  },

  {
    id: 6,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/Reduce_Number.svg",
    name: "Reduction of Plugins",
    content:
      "To enhance the functionality of the WordPress website, we go through all the plugins associated with it. Our experts check all plugins and eliminate all the unused plugins that create issues and enhance the site's speed.  .",
    anchor: (
      <a href="YOUR_ESTIMATE_URL">
        Get Estimate
        <img
          src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png"
          alt="right arrow"
          title="services"
        />
      </a>
    )
  },

  {
    id: 7,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/Prefetching_Techniques.svg",
    name: "Prefetching Techniques",
    content:
      " Boost performance execution of your site by prefetching techniques. Our team opts for prefetching, where the data and information from slower memory are shifted to a faster memory; with this, the storage increases, and the site's speed increases..",
    anchor: (
      <a href="YOUR_ESTIMATE_URL">
        Get Estimate
        <img
          src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png"
          alt="right arrow"
          title="services"
        />
      </a>
    )
  },

  {
    id: 8,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/Reduce-the-Number-of-Redirects-1.svg",
    name: "Reduce the Number of Redirects",
    content:
      "Redirecting issues caused by bad plugins, broken links, etc., can make the site run slower. But not anymore. We are here to fix all the errors in broken links. We go through every plugin and database to eliminate all the redirect issues on site.  .",
    anchor: (
      <a href="YOUR_ESTIMATE_URL">
        Get Estimate
        <img
          src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png"
          alt="right arrow"
          title="services"
        />
      </a>
    )
  },

  {
    id: 9,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/Choose_the_Right_Hosting.svg",
    name: "Choose the Right Hosting",
    content:
      " We also assist businesses with hosting migrations, upgrading servers, and settings the right host. If your hosting provider is not balancing the server response time, we shift the website to a fully managed WordPress hosting environment..",
    anchor: (
      <a href="YOUR_ESTIMATE_URL">
        Get Estimate
        <img
          src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png"
          alt="right arrow"
          title="services"
        />
      </a>
    )
  }
];

function Card() {
  return (
    <div>
      <div className="container">
        <h2>What Speed Optimization Has to Offer For Businesses?</h2>
        <p>
          WordPress is one of the well-known, accessible and open-source Content
          Management systems businesses use to manage their website content and
          empower them on the web. Be it WordPress contains blogs, product
          information, applications, everything and this is possible just
          because WordPress comes with a variety of plugins to enhance its
          functionality. But there are times the things are stuck and loading of
          the website become slow. Here is where we come as your savior
        </p>
        <p>
          By offering WordPress optimization services, we let businesses use
          every functionality of WordPress and provide the best user experience
          at the same time. We optimize the WordPress sites improve plugin
          functionality making the website more engaging than before. Doing this
          will keep your customer enticed towards your businesses and help them
          enjoy a seamless experience. Having a faster website saves your money
          time, improves website ranking, lowers hosting costs and maximizes
          sales for your businesses.
        </p>
      </div>

      {developmentOffer.map((detail, index) => (
        <div key={index} className="container">
          <img src={detail.imgUrl} alt={detail.name} />
          <h5>{detail.name}</h5>
          <p>{detail.content}</p>
          {detail.anchor}
        </div>
      ))}
    </div>
  );
}

// speedOptimization  Development SECTION 3 END

// speedOptimization  Development SECTION 4 START

function ImageSlider({ images, text, buttons }) {
  const [currentImage, setCurrentImage] = useState(0);

  function nextImage() {
    setCurrentImage((currentImage + 1) % images.length);
  }

  function prevImage() {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  }

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
      <div>
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
              <a className="loft-btn" key={index} href={button.link}>
                {button.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
function Java() {
  const slides = [
    {
      image:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/woola-slider-1.png.webp"
    }
  ];
  const text = [
    {
      text:
        " Woola is one of our clients with whom we worked for eCommerce development solutions. We analyze the business deeply, provide the necessary solutions, and develop a strategy that aids in the company's growth. With our WordPress optimization services, we focus on improving the site performance and increasing ranking on the search engines. Our client was quite happy with the results ."
    }
  ];
  const buttons = [
    {
      text: <span>VISIT WEBSITE</span>,
      link: "https://www.woola.co.nz/"
    }
  ];
  return (
    <div className="App">
      <div className="app-sec">
        <h2>Helping Businesses To Gain a Competitive Edge is We Aim For</h2>
        <div>
          <h6>E Commerce Website</h6>
          <span> Woola</span>
        </div>
        <div className="container">
          <img
            src="https://www.leapoffaithtech.com/wp-content/uploads/2022/01/woola-1.png.webp"
            alt=""
          />
        </div>
      </div>
      <ImageSlider images={slides} text={text} buttons={buttons} />
    </div>
  );
}

//LearnDash Development SECTION 5  START

function Development() {
  const data =
    "Why Makes Us Best As WordPress Speed Optimization Service Providers?";
  const para1 =
    "At Loft, we understand the importance of having fast-running websites that do not stick anywhere. Therefore, we work for the same and provide the next-gen services to help out. Our dedicated professionals work round the clock to help the customers without delay. We know what our clients look for, thus analyzing their needs and offering them scalable solutions to work out. With constant hard work, using the agile approach, we tackle your website speed and bring it on the best score..";
  const para2 =
    " We analyze the website in an hour and leave no loophole behind in offering the best experience to our customers. No matter the size of your business or how complex the website is, our staff handles it smoothly and provides the exact solutions. Not only are we limited to just showing the service, but we are in connection further helping clients combat all the issues in the future. .";
  const para3 =
    "We are out to gain more experience every time we work with our clients. Our team is ready to cope with the challenges of innovative ideas for businesses to grow. Our cutting-edge technology and tools usage make our solutions more scalable and effective.";
  const para4 =
    "We believe in growing with the client's growth and building long-term relationships. This is why we always come ahead to satisfy them at any cost. Moreover, our budget-friendly packages and pricing are enough to keep our clients enticed with our services. We adhere to offering 100% customizable solutions so that our clients want to make changes to their websites in the future. Our team, with round-the-clock support, helps our clients solve their queries without much fuss. We try every possible effort to keep our clients happy through our varied services.";

  const card = [
    {
      id: 1,
      imgUrl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/03/Experienced-Team.png.webp",
      contant: "   Experienced Team      "
    },
    {
      id: 2,
      imgUrl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/03/Swift-Communication.png.webp",
      contant: "    Swift Communication      "
    },
    {
      id: 3,
      imgUrl: "Swift Communication      ",
      contant: "  Agile Solutions      "
    },

    {
      id: 4,
      imgUrl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/03/Comprehensive-Results.png.webp",
      contant: " Comprehensive Results      "
    }
  ];

  return (
    <div>
      <div className="container">
        <h2>{data}</h2>
        <p>{para1}</p>
        <p>{para2}</p>\
      </div>

      {card.map((item, index) => (
        <div key={index} className="container">
          <img src={item.imgUrl} alt={item.name} />
          <h4>{item.contant}</h4>
          <p>{para3}</p>
          <p>{para4}</p>
        </div>
      ))}
    </div>
  );
}

//speedOptimization  Development SECTION 5  END

//speedOptimization  Development SECTION 6  START

function SpeedDevelopment() {
  const data = "Hire Best Speed Optimization Developer From Us";
  const para =
    "Now, if you are known for our services and planning to get most of your websites, don't wait! Hire our speed optimization developer to fetch the best services. Our never-ending learning and dedication will surely help your business rock the competitive edge. Believe us; we are your trusted partners. ..";
  const button = (
    <a
      href="https://leapoffaithtech.com/contact-us/"
      class="loft-btn"
      alt="HIRE NOW"
      title="HIRE NOW"
    >
      <span>HIRE NOW</span>
    </a>
  );
  const image =
    "https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/single-hire-us-ux.jpg";
  return (
    <div>
      <div className="container">
        <h2>{data}</h2>
        <p>{para}</p>
        {button}
        <div className="container">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
}

//speedOptimization  Development SECTION 6  END

export default speedOptimization;
