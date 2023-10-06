import { useState } from "react";
import React from "react";
const data = "Customized Managed Network Services";
const para =
  "Our comprehensive managed networking services will streamline your business operations and cost efficiencies like never before.";
const Anchor = (
  <a
    href="https://leapoffaithtech.com/contact-us/"
    class="loft-btn"
    title="HIRE DEVELOPER NOW"
  >
    <span>HIRE DEVELOPER NOW</span>
  </a>
);
const imageManaged =
  "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/managment-banner.svg";
//  Managed Development SECTION 1 START

function Managed() {
  return (
    <div>
      <div className="container">
        <h2>{data}</h2>
        <p>{para}</p>
        {Anchor}
      </div>
      <div className="container">
        <img src={imageManaged} alt="" />
      </div>
      <Businesses />
      <Card />
      <Services />
      <ManagedDevelopers />

      <App />
    </div>
  );
}

// Managed Development SECTION 2 START

function Businesses() {
  const data = "We Manage Your Business Network For Smooth Functionality";
  const para1 =
    "Networking is a crucial aspect playing an essential role in boosting the security of businesses and streamlining the operations in the best way. At Leap of Faith Technologies, we understand the importance of network services for businesses thus offer full-fledged networking services for our customers. We have come a long way in helping businesses of all types and sizes provide a wide range of networking services.. ";
  const para2 =
    "We are available round the clock to help businesses solve their networking issues and contribute to their success. We make use of high-tech equipment and tools to help businesses in providing the best assistance. Our team of professionals leaves no loophole behind when it comes to providing the best services to their clients. We know what it takes to take businesses to a new level with effective management. This is the reason we have brought forward streamlined and robust services.";

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

// Managed  Development SECTION 2 END

// Managed  Development SECTION 3 START

const developmentOffer = [
  {
    id: 1,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/IT-Infrastructure-Solutions.svg",
    name: "IT Infrastructure Solutions",
    content:
      "We hold experience in offering full-fledged IT services to help businesses in coping with all the challenges that come in their way while adopting the IT tools within their process perfectly. We provide complete assistance for easy installation and configurations.",
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
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Cloud-Solutions.svg",
    name: "Cloud Solutions",
    content:
      "We help businesses to leverage cloud computing, storage and other solutions in order to keep their data safe and secure. By adopting cloud computing, we let businesses track and manage everything in real-time without much fuss.",
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
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Networking-Solutions.svg",
    name: "Networking Solutions",
    content:
      "Our team ensures all the network devices are working smoothly and need no fixing. Be it internet connectivity, SIM card networks, Bluetooth or any other smart device integrations everything is taken care of when offering complete networking solutions.",
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
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Security-Solutions.svg",
    name: "Security Solutions    ",
    content:
      "With our robust, secure, and storage strategies, we help the business-like government and education segment to keep their important data security. We make sure to avoid data breaching and hacking-like problems within our platforms.",
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
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Education-Solutions.svg",
    name: "Education Solutions    ",
    content:
      "We worked closely with a number of education institutions providing them comprehensive architecture so as to build secure, safe and advanced digital learning within their systems. With this we aim to improve the education experience and make it more accessible for modern world needs.",
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
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Infrastructure-Managed-Services.svg",
    name: "Infrastructure Managed Services    ",
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
  }
];

function Card() {
  const data = "What All We Offer Within Our Networking Services?";
  return (
    <div>
      <div className="container">
        <h2>{data}</h2>
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
// Managed  Development SECTION 3 END

// Managed  Development SECTION 4 START

function Services() {
  const data = "Our Partners";
  const para =
    "Being the leading managed network service providers, we combine the business and technical expertise together to smoothen the process of businesses. We have partnered with well-known organizations to provide our customers with a full-suite of networking services. From small to large businesses, our partners and we together come out with innovative approaches to assist every size and type of business..";

  const service = [
    {
      id: 1,
      imgurl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Juniper.png.webp"
    },
    {
      id: 2,
      imgurl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/engage.png.webp"
    },

    {
      id: 3,
      imgurl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/cisco.png.webp"
    },
    {
      id: 4,
      imgurl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/03/go-daddy-pro.png.webp"
    },
    {
      id: 5,
      imgurl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/05/hp-partner.png.webp"
    }
  ];
  return (
    <div>
      <h2>{data}</h2>
      <p>{para}</p>
      {service.map((items) => (
        <div key={items.id}>
          <img src={items.imgurl} alt={items.name} />
        </div>
      ))}
    </div>
  );
}

// Managed  Development SECTION 4 END

// Managed  Development SECTION 5 START

function ManagedDevelopers() {
  const data = "Why Us for your Managed Networking Services?";
  const para1 =
    "At Leap of Faith Technologies, we utilized the immense technology, expertise, and knowledge together to bring robust solutions for our businesses. With our managed network services, we aim to maximize productivity, reduce business operation costs, increase profits and management within the business environment. We know managing networks at times becomes quite challenging thus, we work on every aspect to offer full-fledged services. We ensure everything works perfectly during the day to day operations of the businesses..";
  const para2 =
    "Our team of professionals has good knowledge in networking and keeps on enhancing their skills to help businesses succeed. Moreover, the constant dedication during the entire service is what helps us to deliver quality service to our clients. We believe in transparency thus, maintain clear communication when we partner with our clients for their help. What we believe is to provide complete satisfaction to our clients. We look for building long-term relationships and want clients to keep coming to us for any business needs. In this way, we are trying our best to match our client's expectations.";
  const para3 =
    "We are expanding our domain of services and looking forward to assisting businesses in every way we can. Our team is working every day on learning new technologies tools to become more proficient than before to address the needs of our clients. We understand every business needs constant support in order to maintain its presence at the top. Thus, with a wide plethora of networking services, we remove the barrier to reaching the goals. In case of any query, assistance we are available round the clock to help our customers.";
  const para4 =
    "For every business having well-managed network services is important for complete growth and security. By alliancing with top market partners, we want our clients to get everything they need to come to the top. Our partners help us in delivering the best services and reaching the top. Furthermore, our management focuses on rendering solutions that, right from installing, deploying, procuring, and configuring, work on every aspect in setting a complete network free of bugs and defaults.";

  const card = [
    {
      id: 1,
      imgUrl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/dedication-per.png.webp",
      contant: "Experienced Professionals      "
    },
    {
      id: 2,
      imgUrl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/customer-setisfection.png.webp",
      contant: "Guaranteed Customer Satisfaction      "
    },
    {
      id: 3,
      imgUrl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/on-time.png.webp",
      contant: "Prompt Solutions      "
    },

    {
      id: 4,
      imgUrl:
        "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/security.png.webp",
      contant: "High-end Security      "
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

// Managed  Development SECTION 5 END

// Managed  Development SECTION 6 START
function App() {
  const data = "Hire Our Networking Experts.";
  const para =
    "Now, if you are known for our networking services and our approach towards it, don't lag behind to leverage the same. Hire our networking experts for all your business networking needs and leave the stress of management and security on us. Our experts will help you in every way you want. No more waits! Connect with us to secure your businesses like never before.";
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
// Managed  Development SECTION 6 END

export default Managed;
