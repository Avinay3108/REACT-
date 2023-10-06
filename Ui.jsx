import { useState } from "react";
import React from "react";
const data = "Professional UI/UX Design Service Providers";
const para =
  "We are a team of dedicated designers to offer robust designing solutions enhancing the digital appearance of government tech and other segments.";
const Anchor = (
  <a
    href="https://leapoffaithtech.com/contact-us/"
    class="loft-btn"
    title="HIRE DEVELOPER NOW"
  >
    <span>HIRE DEVELOPER NOW</span>
  </a>
);
const imageUI =
  "https://www.leapoffaithtech.com/wp-content/uploads/2022/03/ui-ux.svg";
//  UI Development SECTION 1 START

function UI() {
  return (
    <div>
      <div className="container">
        <h2>{data}</h2>
        <p>{para}</p>
        {Anchor}
      </div>
      <div className="container">
        <img src={imageUI} alt="" />
      </div>
      <Businesses />
      <Card />
      <Java />
      <UIDevelopers />
      <DesigningServices />
      <App />
    </div>
  );
}

// UI Development SECTION 2 START

function Businesses() {
  const data = "We Craft Innovative, Advanced and User-Friendly Designs";
  const para1 =
    "Leap of Faith Technologies is one of the leading UI/UX design companies helping businesses of all sizes with our smart solutions. Be it startups, mid, minor or large size businesses. We provide the best design elements catering to the needs of every business. By incorporating the latest frameworks and technologies, we offer high-end designing that is smooth and creative. With the stepwise procedure, we ideate the ideas, schedule a discussion, prepare the outline, go through the technology that needs to be used, analyze all the frameworks, go ahead with designing procedures, and after taking time, come up with a complete designing of the websites. . ";
  const para2 =
    "Also, once we prepare the design, we do several testing to ensure everything is running smoothly. In case of any bug, we work again and fix the issue. We aim to deliver the bug - free designing solutions to our clients. Also, all our designs are prepared to keep the market, businesses, and user needs in mind..";

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

// UI Development SECTION 2 END

// UI Development SECTION 3 START

const developmentOffer = [
  {
    id: 1,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Human-Factor-Analysis.svg",
    name: "Human Ideas Analysis",
    content:
      "We always look to build designs that meet the expectations of our clients. We discuss with them, work on their ideas, value their input, integrate it within our methodologies and develop innovative designs at the end.",
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
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Wireframing.svg",
    name: "Wireframing",
    content:
      "We work with the latest frameworks to develop the designs that help businesses stand out amongst their competitors. All our designs bring together high-end functionality and feature richness for enterprises to stay ahead.",
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
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/03/resecrch-analysis.svg",
    name: "UI/UX Research & Analysis",
    content:
      "We carry out an in-depth analysis and research before going ahead with UI/UX development as per your business. We get into every aspect to develop unique design elements that meet the businesses and user goals together.",
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
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/User-Experience-Design.svg",
    name: "User Experience Design",
    content:
      "We offer everything in our design by incorporating features like navigation, user mapping, themes, media and architecture. With this, we focus on creating user-friendly experiences within our platforms. Everything is designed keeping the user's needs in mind. ",
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
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/User-Experience-Evaluation.svg",
    name: "",
    content: "",
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
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/User-Experience-Evaluation.svg",
    name: "Testing and Evaluation",
    content:
      "We ensure everything is fit and fine within our solution before delivering it to you. Hence, we test the solution several times, check out for the bugs, usability and after fixing everything, we provide it to our clients.",
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
        <h2>What We Has To Offer Within UI/UX?</h2>
        <p>
          What We Has To Offer Within UI/UX? A good website generates good
          revenue and for businesses, it is an essential factor to the lookout.
          The need to invest in UI/UX designing comes for companies to boost
          customer engagement, increase brand visibility and enhance traffic. We
          understand the rising need thus offer UI/UX designing services. The
          complete designing services will satisfy your clients, offer them a
          seamless experience, and make them feel good while exploring your
          business.
        </p>
        <p>
          Apart from this, interactive UI/UX design boosts customer retention,
          raising the rate of return on investment (ROI). A superb UI/UX always
          keeps users coming back. If these users like the UI/UX and find what
          they're looking for, they'll stay for a few minutes or even hours. As
          a result, your business grows by the engagement of customers. We
          consider the benefits thus, offer a wide range of services to make you
          enter the digital world with a great design.
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
// UI Development SECTION 3 END

// UI Development SECTION 4 START

function Java() {
  const slides = [
    {
      image:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/03/Group-14834.png.webp",
      imageUrl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/03/flower-express.png.webp"
    },
    {
      image:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/woola-slider-1.png.webp",
      imageUrl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/03/woola-logo1.jpg.webp"
    },
    {
      image:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/03/Group-14833.png.webp",
      imageUrl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/03/nityanta-solution.png.webp"
    }
  ];

  const text = [
    {
      text:
        "A whole package of branding (including letter head, business card, logo), website design (including wireframing, interface and prototyping).",
      contant: (
        <>
          BRANDING <span>Nityanta Solutions</span>
        </>
      )
    },
    {
      text:
        "Woola is one of the eCommerce platforms where UI/UX designing is high. We get in touch with the owners of Woola, know their expectations, conditions, and business ideas. We got into their existing platform and did everything from scratch to come up with something unique. And everything was done successfully with the support of our team.",
      contant: (
        <>
          E COMMERCE WEBSITE <span>Woola</span>
        </>
      )
    },
    {
      text:
        "A whole package of branding (including letter head, business card, logo), website design (including wireframing, interface and prototyping)",
      contant: (
        <>
          BRANDING <span>Nityanta Solutions</span>
        </>
      )
    }
  ];

  const [currentImageUrl, setCurrentImageUrl] = useState(slides[0].imageUrl);
  const [selectedContentIndex, setSelectedContentIndex] = useState(0);

  function displayWebsiteMockup() {
    setSelectedContentIndex(0);
    setCurrentImageUrl(slides[0].imageUrl);
  }

  function displayECommerce() {
    setSelectedContentIndex(1);
    setCurrentImageUrl(slides[1].imageUrl);
  }

  function displayBranding() {
    setSelectedContentIndex(2);
    setCurrentImageUrl(slides[2].imageUrl);
  }

  return (
    <div>
      <div>
        <h2>Building Business is our passion</h2>
      </div>
      <div>
        <button onClick={displayWebsiteMockup}> Website Mockup</button>
        <button onClick={displayECommerce}>E-Commerce</button>
        <button onClick={displayBranding}>Branding</button>
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

// UI Development SECTION 4 END

// UI Development SECTION 5 START

function UIDevelopers() {
  const data = "What Makes Us Best In UI/UX Solutions Provider?";
  const para1 =
    "We provide best-in-class solutions to ensure a future application's high-quality user experience at Loft. We believe in maintaining clear-cut communication with our customers when maintaining long-term relationships with them. Our team of experts leaves no stone unturned in bringing forward the designs that meet the customer's expectations. Moreover, we believe in using the agile approach to develop the solution that helps you stand out amongst the competitors. Next, we focus on building a smooth process so that our clients do not stress connecting with us. Once you come to us, we take all your stress on our shoulders and get started for work. Our extensive experience and learning attitude help us build a trusted relationship with our clients. We understand that client comfort is one of the most significant ways to know what they want.";
  const para2 = "";

  const card = [
    {
      id: 1,
      imgUrl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/03/Dedicated-Team.png.webp",
      contant: "Dedicated Team"
    },
    {
      id: 2,
      imgUrl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/03/Agile-Methodology.png.webp",
      contant: "Agile Methodology"
    },
    {
      id: 3,
      imgUrl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/03/Smooth-Process.png.webp",
      contant: "Smooth Process      "
    },

    {
      id: 4,
      imgUrl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/03/Result-Driven-Outcomes.png.webp",
      contant: "Result -Driven Outcomes"
    }
  ];

  return (
    <div>
      <div className="container">
        <h2>{data}</h2>
        <p>{para1}</p>
      </div>

      {card.map((item, index) => (
        <div key={index} className="container">
          <img src={item.imgUrl} alt={item.name} />
          <h4>{item.contant}</h4>
          <p>{para2}</p>
        </div>
      ))}
    </div>
  );
}

// UI Development SECTION 5 END

// UI development Section 6 Start

function DesigningServices() {
  const data = "Technologies We Use In UI/UX Designing Services";
  const para =
    "We bring together advanced technology and tools to build unique designs to offer businesses remarkable success.";

  const service = [
    {
      id: 1,
      imgurl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/ai.png.webp",
      name: "Adobe Illustrator"
    },
    {
      id: 2,
      imgurl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/ps.png.webp",
      name: "Adobe Photoshop"
    },

    {
      id: 3,
      imgurl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/xd.png.webp",
      name: "Adobe Xd"
    },
    {
      id: 4,
      imgurl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/figma.png.webp",
      name: "Figma"
    },
    {
      id: 5,
      imgurl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/ae.png.webp",
      name: "After Effects"
    },
    {
      id: 6,
      imgurl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/03/Group-14038.png.webp",
      name: "Premier Pro"
    },
    {
      id: 7,
      imgurl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/in.png.webp",
      name: "Invision"
    }
  ];
  return (
    <div>
      <h2>{data}</h2>
      <p>{para}</p>
      {service.map((items) => (
        <div key={items.id}>
          <img src={items.imgurl} alt={items.name} />
          <p>{items.name}</p>
        </div>
      ))}
    </div>
  );
}

// UI Development SECTION 7 START
function App() {
  const data = "Hire Our UI/UX Designer Today.";
  const para =
    "UI/UX designing is even better when you connect with us. Hire UI/UX designer from us and start your journey to build a compelling business website. Our professionals will understand your needs and offer you flexible services beyond your expectations. What's next! Connect us for the best help.";
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
// UI Development SECTION 7 END

export default UI;
