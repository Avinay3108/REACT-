import React, { useState } from "react";
const data = "Professional LearnDash Development Services";
const para =
  "Get the most of your education and learning websites by enhancing their functionality with our Learndash development services. Hire us for reasonable solutions.";
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
  "https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/learn-big-sett.svg";
const imagedash2 =
  "https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/learn-small-sett.svg";
const imagedash3 =
  "https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/learn-location.svg";
const imagedash4 =
  "https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/learn-file.svg";
const imagedash5 =
  "https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/learn-page.svg";
const imagedash6 =
  "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/learn-banner.svg";

// LearnDash Development SECTION 1 START
function LearnDash() {
  return (
    <div>
      <div className="container">
        <h2>{data}</h2>
        <p>{para}</p>
        {Anchor}
      </div>
      <div className="container">
        <img src={imagedash1} alt="" />

        <img src={imagedash2} alt="" />

        <img src={imagedash3} alt="" />

        <img src={imagedash4} alt="" />

        <img src={imagedash5} alt="" />

        <img src={imagedash6} alt="" />
      </div>
      <LearnDashDevelopment />
      <Card />
      <Java />
      <Development />
      <WooDevelopment />
    </div>
  );
}
// LearnDash Development SECTION 1 END

// LearnDash Development SECTION 2 START

function LearnDashDevelopment() {
  const data = "We Build Innovative, Creative and User-Friendly Solutions";
  const para1 =
    "At Leap of Faith Technologies, we believe in learning in every aspect. Our budding developers and experts team try best to come up with robust solutions. We are well versed with the LearnDash development and work more in detail. Till the time we are creating websites integrated with the same. Our capable team takes a deep insight into several applications developed using LearnDash, understands the technology and frameworks added and works accordingly. .";
  const para2 =
    "We have been working to build intelligent e-learning stages for clients across the globe and come to know about new things every day. Moreover, when clients come to us for requirements, we work closely with requirements, provide the necessary ideas, and get started to work in the best possible way. Our team never stays behind to learn new technology and adapt it within the solutions to benefit our clients in the best way. You will get the best service for your following LearnDash related developments by hiring us..";

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

// LearnDash Development SECTION 2 END

// LearnDash Development SECTION 3 START

const developmentOffer = [
  {
    id: 1,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/LearnDash-LMS-Development-and-setup.svg",
    name: "LearnDash LMS Development",
    content:
      "We work with the latest Edtech trends and standards needed in effective LMS development and set up on LearnDash. We aim to build a quality learning and training environment for your customers. We take a deep study of LMS and then incorporate it to avoid any buzz at the end..",
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
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/LearnDash-Customization.svg",
    name: "LearnDash Custom Development",
    content:
      "At Loft, we develop tailor-made solutions that are designed, and developers keep your business needs in mind. Our custom solutions are inspired by your business requirements, custom themes, designs and plugins to make it as per our client's taste. We let clients share their ideas and implement the same within the development..",
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
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Migrate-WordPress-LMS-Content-to-LearnDash.svg",
    name: "Migration LMS to LearnDash",
    content:
      "Are you looking to migrate your LMS to LearnDash? We will help you. From migrating, courses, content, users, and other important information, we migrate everything to offer complete LearnDash oriented platforms. We ensure migration is as per your user needs and no data is lost during the entire process of migration to LearnDash..",
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
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/LearnDash-Maintenance-and-Support.svg",
    name: "LearnDash Support And Maintenance",
    content:
      "Bugs and errors are unannounced. This is why our team of LearnDash developers stays in touch with clients and offers complete support. We fix all the issues that arise within the website and if needed, also upgrade so it performs at its best. We want you to have smooth-running solutions for businesses..",
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
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/LearnDash-Responsive-Theme-Development.svg",
    name: "LearnDash Theme Development    ",
    content:
      "We strive to develop advanced and trendy websites featuring engaging and user-friendly themes. Our developers take a deep insight to customize themes in LearnDash that enhance the website's look and attract more users. Also, we ensure to align the themes as per the business goals, target customers and competitive market. .",
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
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/LearnDash-Third-Party-Integration.svg",
    name: "LearnDash Third-Party Integrations",
    content:
      "Do you want to integrate any of your favorite tools? We do it. We offer third-party apps integrations within the platform to make it more functional. Whether payment, chatbots, integration of LearnDash to the current platform, our experts do everything. We are doing this aids in better business operations management and work efficiency. .",
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
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/LearnDash-Payment-Gateway-Integration.svg",
    name: "LearnDash Extension Development",
    content:
      "Enhance the presentation and functionality of your site by integrating the LearnDash extensions. LearnDash is a perfect thing to implement the extension to make you use it in the best way. There are several custom plugins and extensions provided in it to increase the website's usability as per the specific business needs. .",
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
        <h2>LearnDash Development Services We Offer</h2>
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

// LearnDash Development SECTION 3 END

// LeranDASH Development SECTION 4 START

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
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/03/learndash_portfolio.png.webp"
    }
  ];
  const text = [
    {
      text:
        "               This is one of our recent clients working with us looking for learndash development from us. We worked closely with the requirements, took a brief analysis, gathered data and came across an outline that helped us to develop a platform meeting our client needs. We know what it takes to build a robust platform that offers desired results.            "
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
        <h2>We are Passionate In Building Our Client Businesses!</h2>
        <div>
          <h6>LEARNDASH WEBSITE</h6>
          <span>Hirsh Marketing </span>
        </div>
        <div className="container">
          <img
            src="https://www.leapoffaithtech.com/wp-content/uploads/2022/03/learndash_portfolio_logo.png.webp"
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
  const data = "Why Hire Us for All Your LearnDash Development Needs?";
  const para1 =
    "At Leap of Faith Technologies, we have come a long way in helping different businesses with their varied needs. We teamwork purposefully with our clients and provide them with clean, structured solutions. We pride ourselves that we keep learning about innovations and integrating with the client's current solutions. Our solutions are developed and created keeping the businesses and today's user needs in mind. Since the world is competitive, we do everything tailored to your specific requirements..";
  const para2 =
    "Furthermore, all our services are entirely customizable to help our customers do customizations as per the business needs. Talking about LearnDash developers, our dedicated team carries extensive knowledge, is well versed with the latest tool, and is capable of building businesses using it. We know it is an ed-tech-based development. Thus, we help the educational segment to grow via it. We want our clients to win the competitive edge to the peak. .";
  const para3 =
    "Rest, what makes us best is our constant support to our clients. We are available round the clock to offer a solution to customer queries. With effective communication channels, we keep our clients in the loop right from the start of the project to its delivery.";

  const para4 =
    "Also, we understand cost is a major factor in any case. Thus, for this, we come up with affordable pricing of our solutions so that no one is left behind to enjoy the services. All our websites, developments, platforms, design, and others are secured. There is no chance of information breaching about your business and you when you work with us.";
  const para5 =
    "At Loft, we take pride in using the robust technologies, latest tools, the right knowledge to help businesses set the benchmark. We are not limited and expanding ourselves day by day to service businesses of every size and type. We know what it takes to bring businesses to the forefront in this tech-oriented world.";
  const para6 =
    "The better your site performs in terms of page loading, simplicity of navigation, and clear calls to action that push the visitor to take the next step, the better it performs for your business. We understand what it takes to connect with your target demographic. You'll win the game if you make the experience enjoyable. We have the goods – let us assist you.";

  const card = [
    {
      id: 1,
      imgUrl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/dedication-per.png.webp",
      contant: "Advance Technologie      "
    },
    {
      id: 2,
      imgUrl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/customer-setisfection.png.webp",
      contant: "Affordable Pricing      "
    },
    {
      id: 3,
      imgUrl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/on-time.png.webp",
      contant: "24/7 Availability      "
    },

    {
      id: 4,
      imgUrl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/security.png.webp",
      contant: "Security at Peak      "
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
          <p>{para4}</p>
          <p>{para5}</p>
          <p>{para6}</p>
        </div>
      ))}
    </div>
  );
}

//LearnDash Development SECTION 5  END

//LearnDash Development SECTION 6  START

function WooDevelopment() {
  const data = "Don't Wait? Hire Our LearnDash Developer For Best Help";
  const para =
    "At Loft, we have a large team of developers who are knowledgeable experienced, working for years to offer robust solutions. You can hire any of our developers via flexible engagement models and get the desired service that meets your business needs. Believe us, you will win the race if you make the experience enjoyable. Come, let our experts assist you in the best way..";
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

//LearnDash Development SECTION 6  END

export default LearnDash;
