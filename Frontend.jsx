import { useState } from "react";
import React from "react";
const data = "Trusted Front End Development Services";
const para =
  "Boost user engagement towards your businesses by adopting robust front-end development web and app solutions from us. We are your reliable front-end development service providers..";
const Anchor = (
  <a
    href="https://leapoffaithtech.com/contact-us/"
    class="loft-btn"
    title="HIRE DEVELOPER NOW"
  >
    <span>HIRE DEVELOPER NOW</span>
  </a>
);
const imagefrontend1 =
  "https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/juery-js.png";
const imagefrontend2 =
  "https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/boostrap-5.png";
const imagefrontend3 =
  "https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/html-5.png";
const imagefrontend4 =
  "https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/sass.png";
const imagefrontend5 =
  "https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/css-3.png";
const imagefrontend6 =
  "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/front-main.png.webp";
//  frontend Development SECTION 1 START
function frontend() {
  return (
    <div>
      <div className="container">
        <h2>{data}</h2>
        <p>{para}</p>
        {Anchor}
      </div>
      <div className="container">
        <img src={imagefrontend1} alt="" />
        <img src={imagefrontend2} alt="" />
        <img src={imagefrontend3} alt="" />
        <img src={imagefrontend4} alt="" />
        <img src={imagefrontend5} alt="" />
        <img src={imagefrontend6} alt="" />
      </div>
      <Businesses />
      <Card />
      <Java />
      <FrontDevelopers />
      <App />
    </div>
  );
}

// frontend Development SECTION 2 START

function Businesses() {
  const data =
    "We Do High End, User-Oriented Front end Development For Businesses.";
  const para1 =
    " At Leap of Faith Technologies, we have a team of dedicated front-end developers who are never behind in offering top-notch front-end development services keeping the businesses in mind. The digital era and companies are turning online by mobile and websites. Such mediums help them to attract a potential audience and make profits. The front end should be adequate to make the platforms run smoothly and swiftly. Here is where we come for the best help. ";
  const para2 =
    "We are amongst the leading front-end development services providers helping businesses reach their goals. Our developers utilize the best tools and technologies to provide you with an outstanding finished solution. Our team of dedicated developers leaves no stone unturned in solving the business needs with the frontend development. Our front-end development keeps the business, user, market and competition needs in mind..";

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

// frontend Development SECTION 2 END

// frontend Development SECTION 3 START

const developmentOffer = [
  {
    id: 1,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/UIUX-Design-Expertise.svg",
    name: "Full Stack Custom Development",
    content:
      "We provide the full-fledged development where right from managing the front end, we also make sure it is well fit with the backend. In this, we take care of web structure, frontend and UI-UX designing within the market and curate it interactive for result-driven outcomes. .",
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
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/PSD-to-HTML.svg",
    name: "PSD to HTML",
    content:
      "To make a website and app fully functional, we adopt easy PSD to HTML design to code process. All the photoshop documents we prepared are converted to HTML files to create coding and start easy development. This is an essential aspect of a good-looking platform..",
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
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Custom-HTML5CSS3.svg",
    name: "Custom HTML5/CSS3 Development",
    content:
      "We unleash the power of interactive elements within our solutions to make them more robust than before. Within this, we ensure that our HTML5 & CSS3 development is W3C validated and offer cross-browser compatibility standards to meet your desired business needs..",
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
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Singal-page-application.svg",
    name: "Frontend Optimization",
    content:
      "We work closely with your existing websites and optimize them in the best way. Our team maximizes everything right from content, themes, coding, frameworks to increase the usability and functionality of the website. We aim to boost user engagement and revenue to the website..",
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
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Mobile-First-Approach.svg",
    name: "Mobile-First Approach",
    content:
      "When starting with frontend development, our team makes sure it is mobile-friendly. We took up a mobile approach and created websites and apps that are easy to run over mobile phones and do not take time to load. Everything is fast and bug-free..",
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
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Cross-Browser-Development.svg",
    name: "Cross-Browser Development",
    content:
      "We do not want your platform to stay limited to devices. Therefore, when we do frontend development, we ensure it is cross-platform. Our websites and apps developed are easy to use and run on multiple devices offering seamless user experiences to clients..",
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
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Landing-Pages.svg",
    name: "Landing Pages",
    content:
      "Our front-end developers let you know the trending themes, designs and type of CMS to make the website's landing pages more attractive than before. We leave no aspect behind to offer a seamless user experience. All landing pages are designed keeping the frontend development in mind..",
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
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Funnel-Development.svg",
    name: "Funnel Development",
    content:
      "The funnel page plays a vital role in bringing profits for businesses. We ensure that it is user-friendly, creative, interactive and engaging enough to turn your visitors into customers. We use interactive development elements together to bring innovative results..",
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
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Singal-page-application.svg",
    name: "Single Page Website",
    content:
      "If you are out to create modern, responsive single-page websites and apps, we will help you. Our single-page frontend development is done with the same dedication and covers everything needed for a page to develop in the best possible way..",
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
        <h2>What Do We Offer Within Our Front End Development?</h2>
        <p>
          Leap of Faith Technologies is leading at its best to offer the best
          frontend development services. We use the recent technology stacks,
          languages, codings, frameworks to set up the best front end for your
          websites and apps. Our team uses the power of skills, knowledge and
          hard work to showcase your brand in the best possible way.
        </p>
        <p>
          We tackle all the challenges with technical experience in development
          to ensure that your application runs smoothly and consistently
          everywhere. We use emerging technologies to build dynamic, responsive
          and custom frontend solutions that challenge the competitive market
          and help you stand amongst the competitors.
        </p>
      </div>

      {developmentOffer.map((detail, index) => (
        <div key={index}>
          <img src={detail.imgUrl} alt={detail.name} />
          <h5>{detail.name}</h5>
          <p>{detail.content}</p>
          {detail.anchor}
        </div>
      ))}
    </div>
  );
}
// frontend Development SECTION 3 END

// frontend Development SECTION 4 START

function Java() {
  const slides = [
    {
      image:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/04/Club-Soda.png.webp",
      imageUrl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/04/Club-Soda-logo.png.webp"
    },
    {
      image:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/woola-slider-1.png.webp",
      imageUrl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/03/woola-logo1.jpg.webp"
    },
    {
      image:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/04/Sprayshop.png.webp",
      imageUrl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/04/sprayshop-logo.png.webp"
    }
  ];

  const text = [
    {
      text:
        "We prepared a complete WordPress solution, optimized the content and provided the necessary developments needed. We stayed in touch with them for constant support and provided a bug-free solution to them at the end as per their business needs.",
      contant: (
        <>
          WORDPRESS WEBSITE <span>Club Soda</span>
        </>
      )
    },
    {
      text:
        "Woola is amongst our best clients for which we did the WordPress development. We prepared a complete WordPress solution, optimized the content and provided the necessary developments needed. We stayed in touch with them for constant support and provided a bug-free solution to them at the end as per their business needs.",
      contant: (
        <>
          WORDPRESS WEBSITE <span>Woola</span>
        </>
      )
    },
    {
      text:
        "The business was online and was ahead to set up its presence online. They needed an eCommerce store to sell their products to the customers. We provided them with a Shopify development and built a store that Shopify can easily customize. We did it delicately and offered a complete store setup with the help of our Shopify developers.",
      contant: (
        <>
          SHOPIFY <span>Spray Shop</span>
        </>
      )
    }
  ];

  const [currentImageUrl, setCurrentImageUrl] = useState(slides[0].imageUrl);
  const [selectedContentIndex, setSelectedContentIndex] = useState(0);

  function displayInformationalWebsite() {
    setSelectedContentIndex(0);
    setCurrentImageUrl(slides[0].imageUrl);
  }

  function displayWordPressWebsite() {
    setSelectedContentIndex(1);
    setCurrentImageUrl(slides[1].imageUrl);
  }

  function displayShopify() {
    setSelectedContentIndex(2);
    setCurrentImageUrl(slides[2].imageUrl);
  }

  return (
    <div>
      <div>
        <h2>Building Business is our passion</h2>
      </div>
      <div>
        <button onClick={displayInformationalWebsite}>
          Informational Website
        </button>
        <button onClick={displayWordPressWebsite}>WordPress Website</button>
        <button onClick={displayShopify}>Shopify</button>
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
    </div>
  );
}

// frontend Development SECTION 4 END

// frontend Development SECTION 5 START

function FrontDevelopers() {
  const data = "Why Choose Our Front End Developers For Best Services?";
  const para1 =
    "Leap of Faith Technologies is your one-stop destination to hire frontend developers at the best pricing. With flexible engagement models and budget-friendly pricing, we know to make the services best fit for all businesses. We comprise a large pool of developers who work on every learning phase to offer desired platforms.";
  const para2 =
    "Our experiences, learnings, skills and knowledge are focused on adding value to your business and making it better than before. We have good experience and are looking forward to gathering more experience in expanding our domain to total-spectrum service providers. Every day we try our best to come up with more knowledge and newest technology to grow with our clients. We ensure to use the best technology, tools, languages and frameworks to offer user-friendly frontend solutions..";
  const para3 =
    "Our professionals always think of growth when providing the best services to our clients. We are trying our best to come at the top thus, offer transparent services to our clients. All our resources are proficient in frontend frameworks like HTML, CSS, Javascript to provide robust platforms. Right from design, implementation and optimization, we do everything when we offer frontend development.";

  const card = [
    {
      id: 1,
      imgUrl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/dedication-per.png.webp",
      contant: "Full-Spectrum Services      "
    },
    {
      id: 2,
      imgUrl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/customer-setisfection.png.webp",
      contant: "Result-oriented Approach  "
    },
    {
      id: 3,
      imgUrl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/on-time.png.webp",
      contant: "Scalability & Productivity      "
    },

    {
      id: 4,
      imgUrl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/security.png.webp",
      contant: "Latest Technologies      "
    }
  ];

  return (
    <div>
      <div className="container">
        <h2>{data}</h2>
        <p>{para1}</p>
        <p>{para2}</p>
      </div>

      {card.map((item, index) => (
        <div key={index} className="container">
          <img src={item.imgUrl} alt={item.name} />
          <h4>{item.contant}</h4>
          <p>{para3}</p>
        </div>
      ))}
    </div>
  );
}

// frontend Development SECTION 5 END

// frontend Development SECTION 6 START
function App() {
  const data = "Hire Our Frontend Developer at Affordable Price.";
  const para =
    "At Leap of Faith Technologies, we take pride in rendering result-oriented development solutions to our businesses. We work on every aspect and keep learning in mind to provide the best results to our clients. Please discuss your requirements with us, Hire Front end developers from us and get things started to turn your dreams into reality..";
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
// frontend Development SECTION 6 END

export default frontend;
