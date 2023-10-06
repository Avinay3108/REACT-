import { useState } from "react";
import React from "react";
const data = "Hire Best WordPress Developers";
const para =
  "We are a top-notch WordPress development service provider carving solutions for every size of eCommerce business to offer them better business results.";
const Anchor = (
  <a href="https://leapoffaithtech.com/contact-us/">
    <span>HIRE DEVELOPER TODAY</span>
  </a>
);
const imagewordpress1 =
  "https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/wordpress-file.svg";
const imagewordpress2 =
  " https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/wordpress-page.svg";
const imagewordpress3 =
  "https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/wordpress-bigsett.svg";
const imagewordpress4 =
  "https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/wordpress-small-sett.svg";
const imagewordpress5 =
  "https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/Wordpress_Blue_logo.png";
const imagewordpress6 =
  "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/wordpress-banner-img-1.svg";
// wordpress Development SECTION 1 START
function WORDPRESS() {
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
        <img src={imagewordpress6} alt="" />
      </div>
      <WordPressSolution />
      <Card />
      <Java />
      <WordDevelopers />
      <WordPressApp />
    </div>
  );
}

// wordpress Development SECTION 2 START

function WordPressSolution() {
  const data = "We Build Interactive WordPress Solution For Better Results";
  const para1 =
    "At Leap of Faith Technologies, we have come a long way in providing creative WordPress solutions for customers. Our team is leading in using the best WordPress frameworks and technologies. Our WordPress website and applications are built keeping the needs of businesses and customers in mind. We know what it takes to develop the best WordPress websites that hold everything for the customers.";
  const para2 =
    "We work from scratch and know how to develop the platforms that bring success to the businesses. Our WordPress solutions are developed after a deep analysis of the market, client needs, current trends and effectiveness. We know what it takes to develop things round the clock. Our team helps in every possible way to help businesses in offering the best results. ";
  const para3 =
    "WordPress is amongst the user-friendly and powerful content management systems with a plethora of options to make your experience enjoyable and appealing. It has a wide range of plugins to help businesses in managing their website content effectively. ";
  return (
    <div>
      <div className="container">
        <h2>{data}</h2>
      </div>
      <div className="container">
        <p>{para1}</p>
        <p>{para2}</p>
        <p>{para3}</p>
      </div>
    </div>
  );
}

// wordpress Development SECTION 2 END

// wordpress Development SECTION 3 START

const developmentOffer = [
  {
    id: 1,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Theme-Development-and.svg",
    name: "WordPress Theme Development",
    content:
      "With our experienced team, we ensure to build highly responsive websites for your websites. We provide all the trendy themes that are W3C validated and are bug-free, offering highly responsive functionality for the websites. The aim is to create user-oriented experiences within websites.",
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
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Plugin-Development-and.svg",
    name: "Plugin Development and Customization",
    content:
      "In order to enhance the functionality of the WordPress websites, we provide several plugin integrations within them. These plugins make it easy for websites to work flawlessly and also convenient for the users to customize it as per the business needs and increase the effectiveness of the platform. ",
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
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Website-Development.svg",
    name: "Website Development",
    content:
      "At Loft, we offer you a user-friendly website developed as per your business goals. The website is packed with all the SEO features, upgrades, functionality and is easy to navigate. Also, it is completely optimized to offer the desired results to our businesses.",
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
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Maintenance-And-Support.svg",
    name: "WordPress CMS Development",
    content:
      "We want your WordPress websites to be complete as per the user demand. Therefore, we offer CMS development where we make content creation simpler and easier via plugins. You can easily craft content, optimize it and make it reach a wide audience through good SEO rankings on the search engines. ",
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
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/PSD-To-WordPress.svg",
    name: "PSD To WordPress",
    content:
      "Next, we provide everything that can make our platform better than before. With a team of designers, we offer businesses with PSD to WordPress website development as well. Everything is done, keeping the full compatibility of platforms to all the major devices for better results at the end. ",
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
    id: 6,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Third-Party-Integration.svg",
    name: "Third-Party Integrations",
    content:
      "We make content creation easier and quicker by leveraging the features of WP CMS. ",
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
    id: 7,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Blogging-Solutions.svg",
    name: "Blog Development Solutions",
    content:
      "When we offer the WordPress solution, we directly help clients to integrate the creative, scalable and engaging blog within it. With ample blog themes and design, we help audiences to bring to the blog section and increase the credibility of the websites within the search engines.",
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
    id: 8,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/WordPress-Upgrading.svg",
    name: "WordPress Upgradation",
    content:
      "We integrate third-party applications within WordPress to make them scalable for your businesses. Be it payments, customizations, designing, Geolocations, every kind of third-party app is integrated to make the platforms used a wide range. Everything is integrated securely without breaching business information. ",
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
    id: 9,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Web-Services-API-Development.svg",
    name: "WordPress API Integration",
    content:
      "We offer API integration services within WordPress websites. By this, we focus on extending the capabilities of the solution and ensuring everything is seamless. With this, we sync data and every information of the website, enhancing the functionality of the website during the entire API development. ",
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
    id: 10,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/AutomationZapier.svg",
    name: "Support and Maintenance",
    content:
      "We provide round-the-clock support and constant maintenance to our client's websites and platforms that we develop. Within this, we fix all the bugs and issues that arise within the solutions we deliver. We make sure everything runs smoothly and stays optimized to the peak. ",
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
    id: 11,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Website-Migrations.svg",
    name: "Migration to WordPress",
    content:
      "Do you want to migrate your existing platform to WordPress? We offer the same. Our team works closely with your existing platform and migrates it to WordPress. We ensure everything is done swiftly and there is no loss of data within it. Even the rankings of the website are maintained. ",
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

function Card() {
  return (
    <div>
      <div className="container">
        <h2>What Do We Offer in WordPress Development?</h2>
        <p>
          Leap of Faith Technologies work on every aspect of WordPress and offer
          ample services. Our expert team has a number of steps included within
          WordPress development for businesses to get started. There are a
          plethora of WordPress services we will offer you.
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
// wordpress Development SECTION 3 END

// wordpress Development SECTION 4 START



function ImageSlider({
  images,
  text,
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
            <p>{text[currentImage].text}</p>
            {/* Render content with a single pair of <span> tags */}

            <p><span>{text[currentImage].content}</span></p>
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
    }
  ];
  const text = [
    {
      text:
        "We prepared a complete WordPress solution, optimized the content and provided the necessary developments needed. We stayed in touch with them for constant support and provided a bug-free solution to them at the end as per their business needs.",
      content: (
        <>
          WORDPRESS WEBSITE  <span>Club Soda</span>
        </>
      )
    },
    {
      text:
        "Woola is amongst our best clients for which we did the WordPress development. We prepared a complete WordPress solution, optimized the content and provided the necessary developments needed. We stayed in touch with them for constant support and provided a bug-free solution to them at the end as per their business needs.",
      content: (
        <>
          WORDPRESS WEBSITE <span>Woola</span>
        </>
      )
    }
  ];
  const buttons = [
    {
      text: <span>VISIT WEBSITE</span>,
      link: "https://www.woola.co.nz/"
    }
  ];

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
        text={text}
        buttons={buttons}
      />
    </div>
  );
}








// wordpress Development SECTION 4 END

// wordpress Development SECTION 5 START

function WordDevelopers() {
  const data = "What Makes Us Best In Our WordPress Development Services?";
  const para1 =
    "At Loft, we bring you a proficient team of WordPress developers who use bespoke ideas, smart technologies, latest methodologies to provide technologically oriented WordPress development solutions to the customers. We are trusted organizations that are working deeply with clients to offer them transparent solutions. Right from connecting with clients to delivering the services, we keep everything transparent and clear for best results...";
  const para2 =
    "Be it businesses, government organizations, Tech organizations or any segment. We offer WordPress websites and solutions for everyone. We do not want anyone to stay behind in leveraging WordPress technologies to stay ahead of the competitive world..";

  const card = [
    {
      id: 1,
      imgUrl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/dedication-per.png.webp",
      contant: "Unlimited Customization      "
    },
    {
      id: 2,
      imgUrl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/customer-setisfection.png.webp",
      contant: "Prompt Assistance      "
    },
    {
      id: 3,
      imgUrl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/on-time.png.webp",
      contant: "Newest Methodology      "
    },

    {
      id: 4,
      imgUrl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/security.png.webp",
      contant: "Transparency at Peak      "
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
        </div>
      ))}
    </div>
  );
}

// wordpress Development SECTION 5 END

// wordpress Development SECTION 6 START
function WordPressApp() {
  const data = "Hire Our Trusted WordPress Developers";
  const para =
    "Hiring WordPress developers can help you to get most of the businesses by adopting WordPress solutions. So what are you thinking of? Hire our reliable WordPress developers and fetch the best services and platforms that you need to take your businesses to another level. Believe us, we are your trusted partners in everything.  .";
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
// wordpress Development SECTION 6 END

export default WORDPRESS;
