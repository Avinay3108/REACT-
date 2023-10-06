import React, { useState } from "react";

const data = "Trusted Digital Marketing Service Providers";
const para =
  "Boost business presence, target potential customers and increase profits with data-driven and user-oriented digital marketing solutions. Hire our digital marketing experts for the best help!";
const Anchor = (
  <a href="https://leapoffaithtech.com/contact-us/">
    <span>HIRE DEVELOPER TODAY</span>
  </a>
);
const imagewordpress1 =
  "https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/digital-right.svg";
const imagewordpress2 =
  "https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/digital-star.svg";
const imagewordpress3 =
  "https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/digital-img-icon.svg";
const imagewordpress4 =
  "https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/digital-avtar.png";
const imagewordpress5 =
  "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/single-banner-bg.png.webp";

function Marketing() {
  return (
    <div>
      <div className="container">
        <h2>{data}</h2>
        <p>{para}</p>
        {Anchor}
      </div>
      <div className="container">
        <img src={imagewordpress1} alt="" />
        <img src={imagewordpress2} alt="" />
        <img src={imagewordpress3} alt="" />
        <img src={imagewordpress4} alt="" />
        <img src={imagewordpress5} alt="" />
      </div>
      <MarktingSolution />
      <Card />
      <Java />
      <MarktingDevelopers />
      <MarktingApp />
    </div>
  );
}
//  section 2
function MarktingSolution() {
  const data = "We Lift Business Online Presence With Our Robust Marketing";
  const para1 =
    "Leap of Faith Technologies is amongst the leading digital marketing service providers that have come a long way in increasing businesses' online presence. We work on every aspect of marketing, helping every segment overcome the stiff competition. Our robust methodologies and marketing ideas help shine brands among challenging competitors. We know what modern users look for thus, we design the service according to business, market and user needs. Our team of digital marketers work dedicatedly on every aspect of internet marketing to help our clients get the most out of the online world.";
  const para2 =
    "We completely understand every business has its own needs and requirements for marketing. We consider every aspect, work closely with our client's requirements and develop a marketing plan that works best for our client's business requirements. We are a top digital marketing agency that provides a wide range of services to assist your business is growing.";

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
// section 3
const developmentOffer = [
  {
    id: 1,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/seo.svg",
    name: "SEO",
    content:
      "We have a team of SEO professionals who are well versed with the latest tools like Ahref and Semrush. We ensure that our client business comes at the top of the search engines by creating a robust keyword search and backlink strategy for websites.",
    anchor: (
      <a href="/">
        Get Estimate
        <img
          src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png"
          alt="Right Arrow"
        />
      </a>
    )
  },
  {
    id: 2,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Paid-Campaigns.svg",
    name: "Paid Campaigns",
    content:
      "We are doing our best in paid advertising as well. We prepare an engaging strategy for businesses to turn their visitors into customers. We regularly analyze the campaigns and make sure they offer the desired results to our clients.",
    anchor: (
      <a href="/">
        Get Estimate
        <img
          src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png"
          alt="Right Arrow"
        />
      </a>
    )
  },
  {
    id: 3,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Email-Marketing.svg",
    name: "Email Marketing",
    content:
      "We also prepare attractive and engaging emails for our clients to target their potential customers and retain them for a long time. Our team prepares an interactive, user-centric email that your users can't take their eyes off. With this, we aim to boost sales for businesses.",
    anchor: (
      <a href="/">
        Get Estimate
        <img
          src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png"
          alt="Right Arrow"
        />
      </a>
    )
  },
  {
    id: 4,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/content-marketing.svg",
    name: "Content Marketing",
    content:
      "We are known to create high-quality content that is informative and engaging. We prepare a content strategy as per the business, marketing and user needs. We ensure our content is plagiarism-free and is optimized as per the Google algorithms.",
    anchor: (
      <a href="/">
        Get Estimate
        <img
          src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png"
          alt="Right Arrow"
        />
      </a>
    )
  },
  {
    id: 5,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Social-Media-Marketing.svg",
    name: "Social Media Marketing",
    content:
      "We help businesses to get the most in the online world by boosting their presence on social media platforms. Right from Facebook, Instagram, Pinterest, Linkedin, YouTube and Twitter. We work on every platform leaving nothing behind to generate conversions.",
    anchor: (
      <a href="/">
        Get Estimate
        <img
          src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png"
          alt="Right Arrow"
        />
      </a>
    )
  }
];
// section4
function Card() {
  return (
    <div>
      <div className="container">
        <h2>What Do We Offer Within Digital Marketing?</h2>
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

const slides = [
  {
    image:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/05/Icare-NZ.png.webp",
    imageUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/05/Icare-Logo.png.webp"
  },
  {
    image:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/woola-slider-1.png.webp",
    imageUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/woola-1.png.webp"
  }
];

const buttons = [
  {
    text: <span>VISIT WEBSITE</span>,
    link: "https://www.woola.co.nz/"
  }
];

function ImageSlider({
  images,
  buttons,
  currentImageUrl,
  setCurrentImageUrl
}) {
  const [currentImage, setCurrentImage] = useState(0);

  function nextImage() {
    const nextIndex = (currentImage + 1) % images.length;
    setCurrentImage(nextIndex);
    setCurrentImageUrl(images[nextIndex].imageUrl);
  }

  function prevImage() {
    const prevIndex = (currentImage - 1 + images.length) % images.length;
    setCurrentImage(prevIndex);
    setCurrentImageUrl(images[prevIndex].imageUrl);
  }

  return (
    <div>
      <div className="slider-container">
        <div>
          <img
            src={images[currentImage].image}
            alt="Slider"
            onClick={nextImage}
          />
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
            {/* Render content with a single pair of <span> tags */}
          </div>
        </div>
      </div>
      <div>
        {buttons.map((button, index) => (
          <a key={index} href={button.link}>
            {button.text}
          </a>
        ))}
        <button onClick={prevImage}>Previous</button>
        <button onClick={nextImage}>Next</button>
      </div>
    </div>
  );
}
function MyTable() {
  const tableData = [
    { Keywords: "Woola Eco Friendly", Ranking: 1 },
    { Keywords: "Purewool Pillow", Ranking: 1 },
    { Keywords: "Natural Mattress NZ", Ranking: 3 },
    { Keywords: "Organic Mattress nz", Ranking: 4 },
    { Keywords: "Natural Mattresses NZ", Ranking: 3 }
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Keywords</th>
          <th>Ranking</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => (
          <tr key={index}>
            <td>{item.Keywords}</td>
            <td>{item.Ranking}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
const Java = () => {
  const [currentImageUrl, setCurrentImageUrl] = useState(slides[0].imageUrl);

  return (
    <div>
      <div>
        <h2>Skyrocketing Business Success Is What We Do</h2>
      </div>
      <ImageSlider
        images={slides}
        currentImageUrl={currentImageUrl}
        setCurrentImageUrl={setCurrentImageUrl}
        buttons={buttons}
      />
      <div className="container">
        <h2>Table Example</h2>
        <MyTable />
      </div>
    </div>
  );
};

// Add more sections/components as needed

// section 5
function MarktingDevelopers() {
  const data = "What Makes Us Best for Your Digital Marketing Needs?  ";
  const para1 =
    "We have a team of skilled digital marketers who can assist you with anything from A to Z of internet marketing. We provide a comprehensive range of digital marketing services to ensure that your company's website rises to the top and remains there despite market competition..";
  const para2 =
    "We assist you in overcoming obstacles and resolving issues linked to increasing your web visibility. We provide a comprehensive bundle of digital marketing solutions to assist your company in expanding its worldwide reach. We have swift communication channels and connect clients easily on every phase during the entire service to make things work effectively..";
  const para3 =
    "We keep on working on the latest tools, technologies, strategies and processes that can help businesses bring their services to the forefront of online users. All our solutions are user-friendly and are targeted to meet their needs to the peak. We understand that to beat the market satisfying users is a must. Therefore, we do not leave anything behind to personalize the business websites as per the same.";
  const para4 =
    "Our round the clock support to our customers in their most critical times is what helps us to build long term relationships. We communicate directly with you throughout the process and you'll never be in the dark about what will happen next. You will be assigned a personal consultant to ensure that your trip is both successful and memorable. We are invested in the success of any firm with which we deal, regardless of our services. We focus on bringing transparency to our customers so that our clients feel trusted about our services. Everything is taken into consideration to turn dreams into reality.";
  const card = [
    {
      id: 1,
      imgUrl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/dedication-per.png.webp",
      content: "High-End Professionals      "
    },
    {
      id: 2,
      imgUrl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/customer-setisfection.png.webp",
      content: "Guaranteed Customer Satisfaction      "
    },
    {
      id: 3,
      imgUrl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/on-time.png.webp",
      content: "Prompt Delivery & Response      "
    },
    {
      id: 4,
      imgUrl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/security.png.webp",
      content: "Round the Clock Availability      "
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
          <h4>{item.content}</h4>
          <p>{para3}</p>
          <p>{para4}</p>
        </div>
      ))}
    </div>
  );
}
//  section 6
function MarktingApp() {
  const data = "Hire Our Digital Marketing Expert";
  const para =
    "At Leap of Faith Technologies, we have everything to get your businesses at the forefront. Our digital marketing experts are well versed in modern and effective ways of marketing your businesses. Since we have a large pool of professionals, we let our clients hire our digital marketing experts and enjoy the benefits. Believe us, our team will ensure to deliver results in the end.  ";
  const button = (
    <a
      href="https://leapoffaithtech.com/contact-us/"
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

export default Marketing;
