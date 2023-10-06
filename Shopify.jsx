import { useState } from "react";
import React  from "react";
const data = "Reasonable Shopify Developers At Your Service";
const para =
  "Hire the best Shopify developers to set up your own eCommerce store and get started to make a profit by bringing your businesses online.";
const Anchor = (
  <a
    href="https://leapoffaithtech.com/contact-us/"
    class="loft-btn"
    title="HIRE DEVELOPER NOW"
  >
    <span>HIRE DEVELOPER NOW</span>
  </a>
);
const imageshopify1 =
  "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/single-shopify-logo.png.webp";
const imageshopify2 =
  "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/shopify-banner.png.webp";

// shopify Development SECTION 1 START
function Shopify() {
  return (
    <div>
      <div className="container">
        <h2>{data}</h2>
        <p>{para}</p>
        {Anchor}
      </div>
      <div className="container">
        <img src={imageshopify1} alt="" />
        <img src={imageshopify2} alt="" />
      </div>
      <Businesses />
      <Card />
      <Java />
      <ShopifyDevelopers />
      <App />
    </div>
  );
}

// SHOPIFY Development SECTION 2 START

function Businesses() {
  const data =
    "We Build Robust and Unique Shopify Store As Per Your Businesses";
  const para1 =
    "  At Leap of Faith Technologies, we are a reliable Shopify development company to offers Shopify platforms for businesses of all sizes. Using the right technology at the right time, we offer the best platforms that are tech compatible. Shopify is one of the best eCommerce platforms to set up an online store without much hassle. But to get most of it and leverage all the functionality, there is a need to partner with the best Shopify developers. Here is where we come to the rescue..";
  const para2 =
    " We understand the need for Shopify and have come a long way in providing the same for businesses across the globe. Be it government, tech or any other sector, we have Shopify solutions for every business. We have a team of talented developers who are well versed in different technologies and offer the best Shopify store to our customers. All you need is to connect with us and share your queries to get the best results..";

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

// SHOPIFY Development SECTION 2 END

// SHOPIFY Development SECTION 3 START

const developmentOffer = [
  {
    id: 1,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Shopify-theme.png.webp",
    name: "Shopify Theme Customization",
    content:
      "Our Shopify theme developers build a customized theme to create a Shopify platform meeting modern business needs. With years of experience, we offer complete theme enhancement & customization and make it highly - responsive and user-friendly for every business..",
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
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/pst-to-shopify.png.webp",
    name: "PSD to Shopify eCommerce Development",
    content:
      "If your current Shopify platform comprises PSD designs, you can convert it to Shopify. Our experts help in easy customization conversion of PSD designs to Shopify using the best technology. Everything is done securely to make it deliver effectively.",
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
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Shopif-store.png.webp",
    name: "Shopify Store Development",
    content:
      "We understand the importance of online stores thus offering complete store development via Shopify. Our team lets you leverage all the functionality of Shopify and build an entirely - functional Shopify platform with effective theme installation and latest designs.",
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
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Shopify-add-ons.png.webp",
    name: "Migration to Shopify",
    content:
      "Migrate your current eCommerce store platform to Shopify easily with our migration services. We take a deep insight into existing platforms and migrate them to Shopify without losing any data. We ensure the google rankings remain the same during the entire migration. .",
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
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/shopify-upgrade.png.webp",
    name: "Shopify Upgradation and Maintenance",
    content:
      "We provide constant up-gradation and maintenance to keep your Shopify platforms up to date with modern tech. We add new features and functionality using the latest framework. We help businesses get the most out of Shopify..",
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
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Shopify-third.png.webp",
    name: "Third-Party Integrations",
    content:
      "We offer third-party integration with third-party applications like payment, selling apps or making the platform customer-friendly for all devices. We provide seamless support to businesses via developing the best Shopify platforms..",
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
        <h2>What Do We Offer in Shopify Development?</h2>
        <p>
          Leap of Faith Technologies brings you a highly skilled pool of
          professionals who work dedicatedly to help businesses with their
          Shopify needs. We know what it takes to develop Shopify and make it
          compatible with the business needs. We cater to the varied development
          needs of all businesses, from startups to established enterprises.
        </p>
        <p>
          Leveraging the technology-oriented frameworks and languages, we
          develop high-performing solutions that bring tangible benefits to your
          businesses. Our large pool of highly dedicated agile teams has come a
          long way in delivering the market-ready Shopify platforms with a quick
          turnaround time.
        </p>
      </div>

      {developmentOffer.map((detail, index) => (
        <div key={index} >
          <img src={detail.imgUrl} alt={detail.name} />
          <h5>{detail.name}</h5>
          <p>{detail.content}</p>
          {detail.anchor}
        </div>
      ))}
    </div>
  );
}
// SHOPIFY Development SECTION 3 END

// SHOPIFY Development SECTION 4 START

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
        <div >
          <img
            src={currentImageUrl}
            alt="Image URL"
            style={{ width: "100px", height: "100px" }}
          />
         <div>
            <p>{text[currentImage].text}</p>
           <p><span>{text[currentImage].contant}</span></p> 
          </div>
          </div>
      </div>
      <div>
        {buttons.map((button, index) => (
          <a key={index} href={button.link}>
            {button.text}
          </a>
        ))}
        <button  onClick={prevImage}>
          Previous
        </button>
        <button  onClick={nextImage}>
          Next
        </button>
      </div>
    </div>
  );
}

function Java() {
  const slides = [
    {
      image:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/04/Sprayshop.png.webp",
      imageUrl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/04/sprayshop-logo.png.webp"
    },
    {
      image:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/yogi-site.png.webp",
      imageUrl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/03/yogi-logo-1.jpg.webp"
    }
  ];
  const text = [
    {
      text:
        "Amongst our various clients Yogi Bands was one...who was in need of a Shopify website. Our professional team sprang into action right away to deliver on our promises. We integrated modern technology to kickstart their dream Shopify website",
      contant:( 
      <>
      SHOPIFY WEBSITE 
       <span>  Spray Shop </span></>
       )
    },
    {
      text:
        "Hang your E-commerce business to all new heights...with a website that is optimized for easy operation on phones, computers, and laptops. Your customer convenience will make you the best one, and this all is possible with expert developers.",
      contant: (
        <>
        SHOPIFY WEBSITE <span>Yogi Bands</span>
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
        <h2>Bringing Businesses Online Is What Our Passion</h2>
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

// SHOPIFY Development SECTION 4 END


// SHOPIFY Development SECTION 5 START




function ShopifyDevelopers() {
  const data = "What Makes Us Unique As Shopify Developers?";
  const para1 =
    "Leap of Faith Technologies understands eCommerce platforms' importance in this highly competitive world. Platforms like Shopify are ruling the market and are gaining popularity for merchants to make profits. This is the reason our team of qualified professionals have come forward to help businesses in offering the same. We take trades online and boost their sales with a customized Shopify platform. Our platforms are developed using the latest methodologies and have everything to help your businesses to bring online..";
  const para2 =
    "When you connect with us for Shopify development needs, we analyze the requirement, carry a full-proof plan, create the strategies, lookout the designing and development processes, build the mockup and develop the platform. Not only this, after development, we test and support the entire platform to ensure it runs smoothly. Our team offers complete support and maintenance for all the Shopify platforms we deliver to our customers.";
  const para3 =
    "We provide our clients with dependable and comprehensive assistance in managing and maintaining Shopify Platforms. Everything is upgraded regularly to keep the firm up to date with the latest trends. Our team provides continuous service and daily tasks and thorough reporting to clients via various communication channels. This allows us to keep clients informed while fostering trust and long-term relationships..";
  const para4 =
    "We are always available to hear our client’s comments, ideas, strategies and plans and implement them into our work. With this, we provide comprehensive client-oriented work to help our clients stay ahead of the competition. Because of our agile and intelligent approach to our work, we learn new things and develop fantastic ideas every time.";
  const card = [
    {
      id: 1,
      imgUrl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/dedication-per.png.webp",
      contant: "Qualified Professionals"
    },
    {
      id: 2,
      imgUrl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/customer-setisfection.png.webp",
      contant: "Highly Cost-Effective"
    },
    {
      id: 3,
      imgUrl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/on-time.png.webp",
      contant: "Innovative Approach"
    },

    {
      id: 4,
      imgUrl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/security.png.webp",
      contant: "Effective Knowledge"
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
        </div>
      ))}
    </div>
  );
}

// SHOPIFY Development SECTION 5 END

// SHOPIFY Development SECTION 6 START
function App() {
  const data = "Hire Best Shopify Developers.";
  const para =
    "Now, if you know about Shopify development and all other services that you will get into, don't wait to get started. Hire from our team of Shopify developers, discuss your projects and get a complete-fledged, unique, robust and seamless Shopify platform. We know what your business needs thus, we offer the same. Try once and fetch the desired results.";
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
// SHOPIFY Development SECTION 6 END


export default Shopify;
