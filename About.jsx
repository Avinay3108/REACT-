import React, { useState } from 'react';
import { motion } from "framer-motion";


// about banner section //

const aboutHeading = "Our Story";
const aboutContent = "Creating Robust, User-Friendly, Responsive Platforms To Elevate Growth of All Size Businesses Since 2016.";
const aboutImage = "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/counter_after-min-scaled.jpg.webp";
const aboutHeading2 = "We Are A Development Agency";
const aboutContent2 = "At Leap of Faith Technologies, we are amongst the leading web development, designing, and digital marketing companies to render cutting-edge services across the globe.  We hold core expertise in e-commerce and web developments, helping businesses leverage the online world. Be it B2C, B2B, Marketplaces, dropshipping, or other companies, we offer development services for every sort of business. Our team of expert developers is highly skilled dedicated to elevating business growth by innovating different platforms.";
const about = "We have come a long way in guiding businesses in choosing the best online platforms to expand their user base and generate profits. We know what is needed for the company to drive growth. This is why our talent pool of developers, experts, designers, and testers came at the forefront to deliver business with sustained growth via result-driven developments. We believe in delivering cutting-edge and user-oriented solutions to a global clientele as per their specific business needs.";



function About() {
  return (
    <div className='about-sec'>
      <div className='about-section'>
        <div className='about-img'>
          <img src={aboutImage} alt="About Us" />
        </div>
        <div className='about-contant'>
          <div className='about-text'>
            <h3>{aboutHeading}</h3>
            <p>{aboutContent}</p>
          </div>
        </div>
      </div>

      <div className='about-sec2'>
        <div className='container'>
          <div className='about-contant2'>
            <h2>{aboutHeading2}</h2>
            <div>
              <p>{aboutContent2}</p>
              <p>{about}</p>
            </div>
          </div>
        </div>
      </div>

      <Button />
      <Experience />
      <Team />


    </div>
  );
}

// ABOUT TABS SECTION   //

function Button() {
  const history = (

    <div>

      <p>

        Leap of Faith Technologies owns a demonstrated history of offering exceptional work to our customers. We have the right experience to deliver the work and develop the websites that you dream for. Over all these years, we have precisely worked on multiple projects and all of them were delivered successfully. We have served clients internationally with our tech solution services with complete convenience.
      </p>
      <p>
        Along with the time, Leap of Faith Technologies has expanded its niche to development and marketing. Our major focus was towards helping businesses around the globe attain a presence that leaves marks. We further dwell on Shopify, WordPress, woo-commerce and other platforms development. We dive into the best coding practices and work on the marketing niche to become the best in our work.
      </p>
    </div>
  );

  const vision = (
    <div>
      <p>
        Leap of Faith Technologies works closely with the client, understands the business requirements, comes up with the best solutions, and uses robust technology to drive results beyond expectations. Our vision is to help businesses lead the competitive edge with impact-driven strategies and development processes. We are here to set the bright future of the business and open the door for them to relish high-profit margins.
      </p>
      <p>
        We always strive to maintain a long-term relationship with our clients. We work beyond our efforts and guarantee 100% customer satisfaction at the end. Our broad range of services meets the ever-changing technology needs of businesses in various industry verticals. To strategize true business innovation, we use a research-driven approach. Whatever the job, we are confident that we can contribute to the success of your solution. works on numerous technologies to satisfy the demands or expectations of our customers.
      </p>
    </div>
  );

  const mission = (
    <div>
      <p>As a top-notch company, we always feel happy with the success of our clients. Our ultimate objective is to make our client businesses intelligent, distinctive, and direct in the internet world, resulting in a high return on investment (ROI). We have been dedicated to the service of website building, development, eCommerce platform development and marketing for years. We have successfully created websites, web apps, and mobile applications for small and large businesses in various sectors throughout the years.</p>
      <p>Our experience has also given us an important lesson about how we view our business. And it is because our clients are searching for more than simply a platform. Instead, they are searching for a platform that can help them increase their interaction with their clientele, resulting in increased company profitability. Our efforts were directed in that direction. We deliver modern and futuristic development and mobile software solutions to organizations ranging from startups to corporations with affordability and satisfaction.</p>
    </div>
  );
  const [content, setContent] = useState(history);
  const [activeButton, setActiveButton] = useState("history");

  function handleHistoryClick() {
    setContent(history);
    setActiveButton("history");
  }

  function handleVisionClick() {
    setContent(vision);
    setActiveButton("vision");
  }



  function handleMissionClick() {
    setContent(mission);
    setActiveButton("mission");
  }

  return (
    <div className='about-btns'>
      <div className='container'>
        <div className='about-line'>

          <button
            onClick={handleHistoryClick}
            className={activeButton === "history" ? "active" : ""}

          >
            Our History

          </button>

          <button
            onClick={handleVisionClick}
            className={activeButton === "vision" ? "active" : ""}
          >
            Our Vision
          </button>
          <button
            onClick={handleMissionClick}
            className={activeButton === "mission" ? "active" : ""}
          >
            Our Mission
          </button>
        </div>
        <div>{content}</div>
      </div>
    </div>
  );
}

// ABOUT  DETAILS SECTION   //



function Experience() {
  const projects = "500+";
  const span1 = "Successful Project Delivered";
  const para1 =
    "We assisted worldwide customers from varied sectors by delivering projects";

  const clients = "100+";
  const span2 = "International Clients";
  const para2 =
    "From the original plan to the final delivery, our approach is client-centric.";

  const experience = "5+";
  const span3 = "Years of Experience";
  const para3 = "Our main priority is to make our customers happy.";

  return (
    <div className="experience-sec">
      <div className="container">
        <div className="exp-main">
          <motion.div
            className="experience-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
          >
            <h2>{projects}</h2>
            <span>{span1}</span>
            <p>{para1}</p>
          </motion.div>

          <motion.div
            className="experience-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, delay: 0.4 }}
          >
            <h2>{clients}</h2>
            <span>{span2}</span>
            <p>{para2}</p>
          </motion.div>

          <motion.div
            className="experience-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, delay: 0.6 }}
          >
            <h2>{experience}</h2>
            <span>{span3}</span>
            <p>{para3}</p>
          </motion.div>

          <motion.div
            className="experience-item exp-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 3, delay: 0.8
            }}
          >
            <img className='exp-img'
              src="https://www.leapoffaithtech.com/wp-content/uploads/2022/02/IMG20220113164949-min.jpg.webp"
              alt="Experience"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

//  ABOUT TEAM MEMBERS SECTION  //

const teamMembers = [
  {
    id: 1,
    name: "Amar Deep",
    imageSrc:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/06/Amar-sir.jpg.webp",
    position: "Founder & Managing Director"
  },
  {
    id: 2,
    name: "Ravi Kant Sankhyan",
    imageSrc:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/06/Ravi-sir-1.jpg.webp",
    position: "Co-Founder & Network Consultant"
  },
  {
    id: 3,
    name: "Megh Singh",
    imageSrc:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/megh-singh.jpg.webp",
    position: "Operation & Execution Manager"
  },
  {
    id: 4,
    name: "Sandeep Minhas",
    imageSrc:
      "https://www.leapoffaithtech.com/wp-content/uploads/2023/06/sandeep_minhas.jpg.webp",
    position: "Project Manager"
  },
  {
    id: 5,
    name: "Neelam Singh",
    imageSrc:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/07/neelam-singh.jpg.webp",
    position: "Human Resource Manager"
  },
  {
    id: 5,
    name: "Sheetal Rani",
    imageSrc:
      "https://www.leapoffaithtech.com/wp-content/uploads/2023/03/sheetal_rani.jpg.webp",
    position: "Human Resource Executive"
  },
  {
    id: 6,
    name: "Amita Kunjar",
    imageSrc:
      "https://www.leapoffaithtech.com/wp-content/uploads/2023/03/amita.jpg.webp",
    position: "Human Resource Recruiter"
  },


];

const businessTeam = [
  {
    id: 7,
    name: "Kajal Tiwari",
    imageSrc:
      "https://ca.slack-edge.com/TGSLLGS9H-U057V4LCY6Q-770b01ed88e2-192",
    position: "Business Development Executive"
  },
  {
    id: 8,
    name: "Avantika",
    imageSrc:
      "https://www.leapoffaithtech.com/wp-content/uploads/2023/06/avantika.jpg.webp",
    position: "Business Development Executive"
  }
];

const processDevelopment = [
  {
    id: 9,
    name: "C.L. Dhiman",
    imageSrc:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/chaman-dhiman.jpg.webp",
    position: "Team Lead (Web Development)"
  },
  {
    id: 10,
    name: "Govind Singh",
    imageSrc:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/govind-singh.jpg.webp",
    position: "Team Lead (Web Designing)"
  },
  {
    id: 11,
    name: "Jatinder",
    imageSrc:
      "https://www.leapoffaithtech.com/wp-content/uploads/2023/07/jatinder.jpg.webp",
    position: "Sr. UI/UX Designer"
  },
  {
    id: 12,
    name: "Karanbir Singh",
    imageSrc:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/06/Karan.jpg.webp",
    position: "Quality Analyst"
  },
  {
    id: 13,
    name: "Nitish Modgil",
    imageSrc:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/06/nitish-modgil.jpg.webp",
    position: "PHP Developer"
  },
  {
    id: 14,
    name: "Poonam Sankhyan",
    imageSrc:
      "https://www.leapoffaithtech.com/wp-content/uploads/2023/08/poonam.jpg.webp",
    position: "Shopify Developer"
  },
  {
    id: 15,
    name: "Munish Kumar",
    imageSrc:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/06/munish.jpg.webp",
    position: "Web Designer"
  },
  {
    id: 16,
    name: "Vinay Pathania",
    imageSrc:
      "https://ca.slack-edge.com/TGSLLGS9H-U05M8TYMDAL-6df985e78c8e-192",
    position: "Jr. Frontend Developer "
  },
  {
    id: 17,
    name: "Nidhi",
    imageSrc:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/06/Nidhi.jpg.webp",
    position: "Web Designer"
  },
  {
    id: 18,
    name: "Rekha Rani",
    imageSrc:
      "https://www.leapoffaithtech.com/wp-content/uploads/2023/07/rekha_rani.jpg.webp",
    position: "Wordpress and Shopify Developer "
  },
  {
    id: 19,
    name: "Mamta Kumari",
    imageSrc:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/06/Mamta.jpg.webp",
    position: "UI/UX Designer "
  },
  {
    id: 20,
    name: "Sandeep Kumar",
    imageSrc:
      "https://www.leapoffaithtech.com/wp-content/uploads/2023/07/sandeep_kumar.jpg.webp",
    position: "PHP Developer"
  },
  {
    id: 21,
    name: "Priyanka",
    imageSrc:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/09/priyanka.jpg.webp",
    position: "PHP Developer "
  },
  {
    id: 22,
    name: "Navni Sharma",
    imageSrc:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/10/navni.jpg.webp",
    position: "QA Intern "
  },
  {
    id: 23,
    name: "Shubham Sharma",
    imageSrc:
      "https://www.leapoffaithtech.com/wp-content/uploads/2023/03/shubham_sharma.jpg.webp",
    position: "Jr. PHP Developer "
  },
  {
    id: 24,
    name: "Lucky",
    imageSrc:
      "https://www.leapoffaithtech.com/wp-content/uploads/2023/03/lucky.jpg.webp",
    position: " Jr. PHP Developer "
  },
  {
    id: 25,
    name: "Rajneesh",
    imageSrc:
      "https://www.leapoffaithtech.com/wp-content/uploads/2023/07/rajneesh.jpg.webp",
    position: "PHP Developer Intern"
  },
  {
    id: 26,
    name: "Bikram Singh",
    imageSrc:
      "https://www.leapoffaithtech.com/wp-content/uploads/2023/07/bikram.jpg.webp",
    position: "Shopify Developer Intern "
  },
  {
    id: 27,
    name: "Ajay Kumar",
    imageSrc:
      "https://www.leapoffaithtech.com/wp-content/uploads/2023/06/ajay.jpg.webp",
    position: "Jr. Graphic Designer"
  }
];

const digitalMarketing = [
  {
    id: 28,
    name: "Roshan Kumar",
    imageSrc:
      "https://www.leapoffaithtech.com/wp-content/uploads/2023/07/roshan_kumar.jpg.webp",
    position: "SEO Executive"
  },
  {
    id: 29,
    name: "Preeti",
    imageSrc:
      "https://www.leapoffaithtech.com/wp-content/uploads/2023/06/preeti.jpg.webp",
    position: "SEO Executive"
  },
  {
    id: 30,
    name: "Amit Kumar",
    imageSrc:
      "https://www.leapoffaithtech.com/wp-content/uploads/2023/06/amit.jpg.webp",
    position: "SEO Executive"
  }
];


function Team() {
  const [currentCategory, setCurrentCategory] = useState("teamMembers");

  function handleButtonClick(category) {
    setCurrentCategory(category);
  }
  //variablename =  condition ? exprIfTrue : exprIfFalse  (Ternary) operator

  const displayedMembers =
    currentCategory === "teamMembers"
      ? teamMembers
      : currentCategory === "business"
        ? businessTeam
        : currentCategory === "process"
          ? processDevelopment
          : digitalMarketing;

  return (
    <div>
      <div className='container'>
        <div className='cst_dedicated'>
          <h2>Our Dedicated Team Members are always ready to serve you</h2>
        </div>
      </div>
      <div className='cst_tabs'>
        <div className='container'>
          <button
            onClick={function () { handleButtonClick("teamMembers") }}
            className={currentCategory === "teamMembers" ? "active" : ""}
          >
            Administration & Management
          </button>
          <button
            onClick={function () { handleButtonClick("business") }}
            className={currentCategory === "business" ? "active" : ""}
          >
            Business Development
          </button>
          <button
            onClick={function () { handleButtonClick("process") }}
            className={currentCategory === "process" ? "active" : ""}
          >
            Process Development
          </button>
          <button
            onClick={() => handleButtonClick("digitalMarketing")}
            className={currentCategory === "digitalMarketing" ? "active" : ""}
          >
            Digital Marketing
          </button>
        </div>
      </div>
      <div className="team-member-container">
        <div className='container'>
          <div className='cst_tabs_sec'>
            {displayedMembers.map(

              function (member, index) {
                return (
                  <div key={index.id} className="team-member">
                    <img src={member.imageSrc} alt={member.name} />
                    <h3>{member.name}</h3>
                    <p>{member.position}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}






export default About;
