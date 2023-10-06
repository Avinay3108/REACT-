import { useState } from "react"
import React from 'react'
const data ="Blogs"
const img ='https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/blog-main.jpg'
function Blogs() {
  return (
    <div>
    <div className='container'>
    <h1>{data}</h1>
    </div>
    <div className='container'>
      <img src={img} alt='' />
    </div>
    < Card />
    </div>
  )
}
const loftDesign = [
  {
    id: 1,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2023/03/Impact-of-Shopify-CRO-on-Your-Brand-Image-%E2%80%93-1-1.jpg",
    name: "Know The Impact of Shopify CRO on Your Brand Image and Reputation",
    paragraph:
      "In today’s highly competitive e-commerce landscape, having a Shopify store is not enough to guarantee success. You need to continuously work on improving your store’s conversion rate optimization (CRO) to ensure that you’re not only attracting visitors but also converting them into paying customers. But did you know that Shopify CRO can also have a […].",
    anchor: (
      <a
        href="https://www.leapoffaithtech.com/know-the-impact-of-shopify-cro-on-your-brand-image-and-reputation/"
        title=""
      >
        Read More
        <img
          src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png"
          alt="right arrow"
          style={{ width: "100px" }}
        />
      </a>
    )
  },
  {
    id: 2,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2023/02/CRO-Strategies-for-Shopify-Store-768x403.jpg.webp",
    name:
      "Maximizing Your Sales With Shopify CRO Strategies: Tips From Shopify Experts",
    paragraph:
      "If you’re a merchant on Shopify, you’re probably already aware of how important it is to have a well-optimized store to increase conversions and maximize sales. After all, the success of your online store relies heavily on your ability to turn visitors into customers, and CRO (conversion rate optimization) strategies are essential to achieving that. […].",
    anchor: (
      <a href="https://www.leapoffaithtech.com/know-the-impact-of-shopify-cro-on-your-brand-image-and-reputation/">
        Read More
        <img
          src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png"
          alt="right arrow"
          style={{ width: "100px" }}
        />
      </a>
    )
  },
  {
    id: 3,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2023/02/Power-of-Shopifys-Blockchain-Commerce-Tools-768x403.jpg.webp",
    name:
      "Unleashing the Power of Shopify’s Blockchain Commerce Tools for Merchants",
    paragraph:
      "As Shopify developers or experts, it is crucial for us to stay updated with the latest technologies to provide the best services to our clients. Shopify, a leading e-commerce platform, has recently introduced a suite of blockchain commerce tools that has the potential to change the game for merchants. In this blog, we will delve […].",
    anchor: (
      <a href="https://www.leapoffaithtech.com/know-the-impact-of-shopify-cro-on-your-brand-image-and-reputation/">
        Read More
        <img
          src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png"
          alt="right arrow"
          style={{ width: "100px" }}
        />
      </a>
    )
  },
  {
    id: 4,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/09/how-to-change-image-size-in-responsive-web-design-new1-768x403.jpg.webp",
    name: "Needs To Upgrade Your PHP Version From 7.4 to 8…",
    paragraph:
      "IT’s Time To Say BYE-BYE To Php-7.4 Before we proceed to the main concept lets have an introduction on what PHP is. It stands for Php Hypertext Preprocessor. But do you know what was its name before it got recursive initialism name. It was Personal Home Page. It was originally created by Rasmus Lerdorf in […].",
    anchor: (
      <a href="https://www.leapoffaithtech.com/know-the-impact-of-shopify-cro-on-your-brand-image-and-reputation/">
        Read More
        <img
          src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png"
          alt="right arrow"
          style={{ width: "100px" }}
        />
      </a>
    )
  },
  {
    id: 5,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/09/how-to-change-image-size-in-responsive-web-design-768x403.jpg.webp",
    name: "How To Change Image Size In Responsive Web design?",
    paragraph:
      "Mobile phones and many other hand-held devices are coming towards world domination. Hence, web technology and designing are rushing to meet the ever-increasing demands of different screen sizes. However, the emergence of methods and solutions to meet the demands of this trend introduces a whole new set of issues, and one of the most recent […].",
    anchor: (
      <a href="https://www.leapoffaithtech.com/know-the-impact-of-shopify-cro-on-your-brand-image-and-reputation/">
        Read More
        <img
          src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png"
          alt="right arrow"
          style={{ width: "100px" }}
        />
      </a>
    )
  },
  {
    id: 6,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/09/How-to-achieve-responsive-web-design-768x403.jpg.webp",
    name: "How To Achieve Responsive Web Design?",
    paragraph:
      "A lot of you must have heard commercials where the sellers say that their products are responsive. It is so because their products work as per our needs and requirements. Also, we prefer spending money or time on products that suit our preferences. The same applies to your website. Why would anyone spend time on […].",
    anchor: (
      <a href="https://www.leapoffaithtech.com/know-the-impact-of-shopify-cro-on-your-brand-image-and-reputation/">
        Read More
        <img
          src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png"
          alt="right arrow"
          style={{ width: "100px" }}
        />
      </a>
    )
  },
  {
    id: 7,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/09/How-important-responsive-web-design-768x403.jpg.webp",
    name: "How Important is Responsive Web Design?",
    paragraph:
      "For the past few years, it has been seen that having a responsive web design has become very important for many websites over the years. It has transformed the ways all companies were trying to build their online presence. A website with a responsive design can be used or surfed easily on any device, irrespective […].",
    anchor: (
      <a href="https://www.leapoffaithtech.com/know-the-impact-of-shopify-cro-on-your-brand-image-and-reputation/.">
        Read More
        <img
          src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png"
          alt="right arrow"
          style={{ width: "100px" }}
        />
      </a>
    )
  },
  {
    id: 8,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/09/Creative-designer-vs-graphic-designer-768x403.jpg.webp",
    name:
      "What is the difference between a graphic designer and a creative designer?",
    paragraph:
      "For many people, there is nothing different between the term graphic designer and creative designer. These are often used interchangeably, and this is more common in other industries. While there are many similarities between both the graphic designer and creative designer, there are also some dissimilarities that you need to be aware of. Hence, in […].",
    anchor: (
      <a href="https://www.leapoffaithtech.com/know-the-impact-of-shopify-cro-on-your-brand-image-and-reputation/">
        Read More
        <img
          src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png"
          alt="right arrow"
          style={{ width: "100px" }}
        />
      </a>
    )
  },
  {
    id: 9,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/09/Why-Responsive-Web-Design-Matters-More-Than-Ever-768x403.jpg.webp",
    name: "Why Responsive Web Design Matters More Than Ever?",
    paragraph:
      "How many times have you just logged off a website on your smartphone due to its inability of being able to adjust according to the phone screen? It must have been a lot of times, right! However, today this has become a story of old times. As, since 2015, Google has been focusing on the importance […].",
    anchor: (
      <a
        href="https://www.leapoffaithtech.com/know-the-impact-of-shopify-cro-on-your-brand-image-and-reputation/"
        title="PHP Development"
      >
        Read More
        <img
          src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png"
          alt="right arrow"
          style={{ width: "100px" }}
        />
      </a>
    )
  },
  {
    id: 10,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/09/What-is-the-importance-of-web-design-for-your-audience-768x403.jpg.webp",
    name: "What Is The Importance Of Web Design For Your Audience?",
    paragraph:
      "To make yourself recognizable and acquainted amongst the users, you must have a web design that showcases your organization. With the help of a nice and user-friendly website, you can identify the target audience. Since your website will be one of the most important, it is of great importance for you to ensure that the […].",
    anchor: (
      <a
        href="https://www.leapoffaithtech.com/know-the-impact-of-shopify-cro-on-your-brand-image-and-reputation/"
        title="PHP Development"
      >
        Read More
        <img
          src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png"
          alt="right arrow"
          style={{ width: "100px" }}
        />
      </a>
    )
  },
  {
    id: 11,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/09/Why-Responsive-Design-is-Important-and-Google-Approved-768x403.jpg.webp",
    name: "Why Responsive Design is Important and Google Approved?",
    paragraph:
      "There is constant development of technology, which in turn has resulted in the popularity of smartphones. Many companies these days worldwide are investing in the manufacturing of mobile phones due to their increasing demands. All of this has made it important for businesses to invest some capital to fund web development and designing. However, this is not […].",
    anchor: (
      <a
        href="https://www.leapoffaithtech.com/know-the-impact-of-shopify-cro-on-your-brand-image-and-reputation/"
        title="PHP Development"
      >
        Read More
        <img
          src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png"
          alt="right arrow"
          style={{ width: "100px" }}
        />
      </a>
    )
  },
  {
    id: 12,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/09/how-to-create-media-queries-in-responsive-web-design-768x403.jpg.webp",
    name: "How To Create Media Queries In Responsive Web Design?",
    paragraph:
      "As the usage of hand-held electronic appliances is increasing day-by-day, it became mandatory for online businesses to make their websites compatible with different devices. We all know how important it is for us to create sites that can work on numerous interfaces. The procedure of a website to adapt to the user’s design is called the […].",
    anchor: (
      <a
        href="https://www.leapoffaithtech.com/know-the-impact-of-shopify-cro-on-your-brand-image-and-reputation/"
        title="PHP Development"
      >
        Read More
        <img
          src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png"
          alt="right arrow"
          style={{ width: "100px" }}
        />
      </a>
    )
  },
  {
    id: 13,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/09/Web-Design-Service-768x402.png.webp",
    name: "Things to Enquire for the Best Web Design Service Provider",
    paragraph:
      "Things to Enquire for the Best Web Design Service Provider In an era of growing digitization, website designing services are absolutely crucial. No matter it’s a small business or a large corporation, having a web presence is quite essential these days. In fact, ordinary web designs are not enough anymore; one needs a thoroughly optimized […].",
    anchor: (
      <a
        href="https://www.leapoffaithtech.com/know-the-impact-of-shopify-cro-on-your-brand-image-and-reputation/"
        title="PHP Development"
      >
        Read More
        <img
          src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png"
          alt="right arrow"
          style={{ width: "100px" }}
        />
      </a>
    )
  },
  {
    id: 14,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/09/Content-management-system-768x402.png.webp",
    name:
      "Things to Keep in Mind while Hiring Content Management System Services",
    paragraph:
      "Content management systems indeed hold a lot of significance in the modern era of digital marketing. However, it is unfortunate to see that people commit a lot of mistakes while selecting the content management system. The prominent mistake that the users commit is regarding the customization of the tool. Don’t go for Cheap Open-Source Software […].",
    anchor: (
      <a
        href="https://www.leapoffaithtech.com/know-the-impact-of-shopify-cro-on-your-brand-image-and-reputation/"
        title="PHP Development"
      >
        Read More
        <img
          src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png"
          alt="right arrow"
          style={{ width: "100px" }}
        />
      </a>
    )
  },
  {
    id: 15,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/09/website-designing-development-company--768x402.png.webp",
    name: "Best Web Design Service Provider",
    paragraph:
      "Things to enquire for the Best Web Design Service Provider In an era of growing digitization, website designing services are absolutely crucial. No matter it’s a small business or a large corporation, having a web presence is quite essential these days. In fact, ordinary web designs are not enough anymore; one needs a thoroughly optimized […].",
    anchor: (
      <a
        href="https://www.leapoffaithtech.com/know-the-impact-of-shopify-cro-on-your-brand-image-and-reputation//"
        title="PHP Development"
      >
        Read More
        <img
          src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png"
          alt="right arrow"
          style={{ width: "100px" }}
        />
      </a>
    )
  },
  {
    id: 16,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/09/eCommerce-solutions-company-in-Chandigarh--768x402.png.webp",
    name: "eCommerce Design Tips",
    paragraph:
      "Handy eCommerce design tips for better experience and ROI Ecommerce is one of the lucrative options at present over a digital platform. There are various advantages of it that make it highly effective for people those looking for a low budget business option over the web. However, to be successful as an eCommerce owner, it […].",
    anchor: (
      <a
        href="https://www.leapoffaithtech.com/know-the-impact-of-shopify-cro-on-your-brand-image-and-reputation/"
        title="PHP Development"
      >
        Read More
        <img
          src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png"
          alt="right arrow"
          style={{ width: "100px" }}
        />
      </a>
    )
  },
  {
    id: 17,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/09/importance-of-IT-Services-loft-1024x537-1-768x403.png.webp",
    name: "Importance of various IT Services",
    paragraph:
      "In this digital world, online marketing becomes an essential part of every business. The business practice is changing over time with the advancement of technology and the innovation of smart devices. So, firms must strengthen their online marketing game. Since marketing is the soul of every business, you have to emphasize on the effective marketing […].",
    anchor: (
      <a
        href="https://www.leapoffaithtech.com/know-the-impact-of-shopify-cro-on-your-brand-image-and-reputation/"
        title="PHP Development"
      >
        Read More
        <img
          src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png"
          alt="right arrow"
          style={{ width: "100px" }}
        />
      </a>
    )
  },
  {
    id: 18,
    imgUrl:
      "https://www.leapoffaithtech.com/wp-content/uploads/2022/09/Digital-Marketing-768x402.jpg.webp",
    name: "Transforming Scenario of Digital Marketing Strategies",
    paragraph:
      "Digital marketing is the hottest way of promoting a brand and expecting a significant return from the same. However, the challenge is that there is no copybook method available for the same. Through technical advancements, it is getting much more transformative than ever. In this context, discussed below are some of the trending digital marketing strategies in Chandigarh that […].",
    anchor: (
      <a
        href="https://www.leapoffaithtech.com/know-the-impact-of-shopify-cro-on-your-brand-image-and-reputation/"
        title="PHP Development"
      >
        Read More
        <img
          src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png"
          alt="right arrow"
          style={{ width: "100px" }}
        />
      </a>
    )
  }
];

function Card() {
  const [showCount, setShowCount] = useState(3);

  // Function to increase the number of shown components
  function loadMore()  {
    setShowCount(showCount + 3);
  };

  return (
    <div>
      <div className="container">
        <h6 className="titles-sec">SERVICES</h6>
        <h2>Bringing Designs That Fit User Needs</h2>
      </div>

      {loftDesign.slice(0, showCount).map(function (design, index) {
        return (
          <div key={index}>
            <div className="container">
              <img src={design.imgUrl} alt={design.name} />
            </div>
            <div className="container">
              <h3>{design.name}</h3>
            </div>
            <div className="container">
              <p>{design.paragraph}</p>
            </div>
            <div className="container">{design.anchor}</div>
          </div>
        );
      })}

      {showCount < loftDesign.length && (
        <div className="container">
          <button onClick={loadMore}>View More</button>
        </div>
      )}
    </div>
  );
}




export default Blogs