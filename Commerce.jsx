import React, { useState } from 'react'
const data ="WooCommerce Development"
const para = "We help you create a user-friendly eCommerce platform with top-notch functional features"
const Anchor =( <a href="https://leapoffaithtech.com/contact-us/" class="loft-btn" title="HIRE DEVELOPER NOW">
<span>HIRE DEVELOPER NOW</span></a>
)
const imagecommerce = "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Wooc-banner-single.svg"


// WooCommerce Development SECTION 1 START
function Commerce() {
  return (
    <div>
    <div className='container'>
    <h2>{data}</h2>
    <p>{para}</p>
   {Anchor}
    </div>
    <div className='container'>   <img src={imagecommerce} />
    </div>
 <WooCommerceDevelopment />
    <Card />
    <Java />
    <Development />
    <WooDevelopment />
  

    </div>
  )
}
// WooCommerce Development SECTION 1 END






// WooCommerce Development SECTION 2 START

function WooCommerceDevelopment() {
  const data ="Reliable WooCommerce Development Company"
  const para1 = "  There is no one in the industry that can match our expertise as a WooCommerce development company. We understand the length and breadth of complexities that revolve around an eCommerce store and thus offer reliable WooCommerce development services. From startups to big industry leaders, we have helped clients worldwide to extend features and functionalities whenever they want to."
 const para2 = " Our dedicated WooCommerce development team is well-versed with WooCommerce plugins, extensions, and features. Whether you are looking to add a call to action, blogs to sales navigation, or any customization in your eCommerce website, our experts will handle the same."
 const para3 = " We combine all our knowledge and expertise in WooCommerce to help our clients in delivering the best eCommerce experience to end-users. As a leading WooCommerce development service provider, we first understand the client’s requirement and follow the agile eCommerce development process to meet and exceed their expectations."
  return (
    <div>
    <div className='container'>
      <h2>{data}</h2>
      </div>
      <div className='container'>
      <p>
      {para1}
      </p>
      <p>
       {para2}
      </p>
      <p>
       {para3}
      </p>
    </div>
    </div>
  );
}

// WooCommerce Development SECTION 2 END




// WooCommerce Development SECTION 3 START


const developmentOffer = [
  {
    id:1,
    imgUrl: "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/WooCommerce-Store-Integration-and-Setup.svg",
    name: "WooCommerce Theme Development",
    content: "Our experienced WooCommerce developers help create an SEO-optimized & mobile-friendly WooCommerce store with attractive themes. We make the installation and configuration hassle-free for our clients.",
    anchor: (
      <a href="YOUR_ESTIMATE_URL">
        Get Estimate
        <img src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png" alt="right arrow" title="services" />
      </a>
    )
  },



  {
    id: 2, 
    imgUrl: "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/WooCommerce-Customization.svg",
    name: "WooCommerce Customization",
    content: "With our expertise in wooCommerce, we set a benchmark of perfection for our customer’s eCommerce platform worldwide. Whether you are looking to add new features, functionalities, customize themes or plugins, we handle it for you..",
    anchor: (
      <a href="YOUR_ESTIMATE_URL">
        Get Estimate
        <img src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png" alt="right arrow" title="services" />
      </a>
    )
  },




  {
    id:3,
    imgUrl: "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/WooCommerce-Plugin-Development.svg",
    name: "WooCommerce Plugin Development",
    content: "We offer plug-in support and development services to give attractiveness to our client’s wooCommerce store. For our clients, we configure and install plug-ins and even provide post-launch support..",
    anchor: (
      <a href="YOUR_ESTIMATE_URL">
        Get Estimate
        <img src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png" alt="right arrow" title="services" />
      </a>
    )
  },



  {
    id:4,
    imgUrl: "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/PSD-to-WooCommerce-Development.svg",
    name: "PSD To Woocommerce Conversion",
    content: "With our in-depth knowledge and expertise in wooCommerce, we have helped our client with PSD to WooCommerce conversion. We understand the complexities and offer scalable solutions without compromising the code quality..",
    anchor: (
      <a href="YOUR_ESTIMATE_URL">
        Get Estimate
        <img src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png" alt="right arrow" title="services" />
      </a>
    )
  },



  {
    id:5,
    imgUrl: "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/WooCommerce-Migrations.svg",
    name: "WooCommerce Custom Development",
    content: "When it comes to wooCommerce customization, we are a trusted name among the eCommerce development community worldwide. Whatever your eCommerce platform needs and goads are, our development team will handle it for you..",
    anchor: (
      <a href="YOUR_ESTIMATE_URL">
        Get Estimate
        <img src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png" alt="right arrow" title="services" />
      </a>
    )
  },
  {
    id:6,
    imgUrl: "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Maintenance-and-Support.svg",
    name: "Maintenance And Support",
    content: "With our reliable 24*7 wooCommerce maintenance and support, we ensure that our clients won’t have to face any downtime. Our development and support team ensures that your store is up and running as always..",
    anchor: (
      <a href="YOUR_ESTIMATE_URL">
        Get Estimate
        <img src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png" alt="right arrow" title="services" />
      </a>
    )
  },
  {
    id:7,
    imgUrl: "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Shipping-Customization.svg",
    name: "WooCommerce Migration Services",
    content: "Our wooCommerce development team ensures a smooth and hassle-free migration of your existing Shopify or Magento eCommerce store to WooCommerce. With our wooCommerce migration services, we make it a frown-free process..",
    anchor: (
      <a href="YOUR_ESTIMATE_URL">
        Get Estimate
        <img src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png" alt="right arrow" title="services" />
      </a>
    )
  },
  {
    id:8,
    imgUrl: "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Plugin-Site-Updates.svg",
    name: "WooCommerce Template Development",
    content: "With our forte in designing templates for our worldwide clients' eCommerce platforms, we can create unique wooCommerce templates as per your needs. We design templates that are SEO-friendly and user-friendly..",
    anchor: (
      <a href="YOUR_ESTIMATE_URL">
        Get Estimate
        <img src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png" alt="right arrow" title="services" />
      </a>
    )
  },
  {
    id:9,
    imgUrl: "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Security-Monitoring.svg",
    name: "WooCommerce Security",
    content: "With our quality services, we have earned the reputation of a trustable wooCommerce development company. We add advanced security features to your wooCommerce platform and make it secure from cyber attacks..",
    anchor: (
      <a href="YOUR_ESTIMATE_URL">
        Get Estimate
        <img src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png" alt="right arrow" title="services" />
      </a>
    )
  },
  {
    id:10,
    imgUrl: "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Speed-Optimization.svg",
    name: "WooCommerce Extension Development",
    content: "With our wooCommerce extension development services, we can help you customize your customers' shopping experience. We help our customers rank better, improve RIO, enhance customer satisfaction and increase sales..",
    anchor: (
      <a href="YOUR_ESTIMATE_URL">
        Get Estimate
        <img src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png" alt="right arrow" title="services" />
      </a>
    )
  },
  {
    id:11,
    imgUrl: "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Migration-Services.svg",
    name: "WooCommerce Integration",
    content: "We provide numerous wooCommerce integration services for our customers around the world which include shopping cart integration, payment gateway integration, API integration and eCommerce plugin integration..",
    anchor: (
      <a href="YOUR_ESTIMATE_URL">
        Get Estimate
        <img src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png" alt="right arrow" title="services" />
      </a>
    )
  },
  {
    id:12,
    imgUrl: "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/B2B-Development.svg",
    name: "WooCommerce International Services",
    content: "We engineer the best wooCommerce solution to help our client breaks the boundaries barriers and sell their products internationally. With special features like flexi-language, Flexi-currency and taxation we help our clients sell internationally..",
    anchor: (
      <a href="YOUR_ESTIMATE_URL">
        Get Estimate
        <img src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png" alt="right arrow" title="services" />
      </a>
    )
  },
  {
    id:13,
    imgUrl: "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Third-Party-Vendor-Integration.svg",
    name: "WooCommerce Native and 3rd party Integrations",
    content: "We help our client’s eCommerce business stand apart from others with our native and 3rd party integrations. Whether you are looking for a payment gateway or CRM integration, we can handle the same for you..",
    anchor: (
      <a href="YOUR_ESTIMATE_URL">
        Get Estimate
        <img src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png" alt="right arrow" title="services" />
      </a>
    )
  },
  {
    id:14,
    imgUrl: "https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Product-Builder-Development.svg",
    name: "Search Engine Friendly",
    content: "With our expertise in WooCommerce development, we understand that simply creating an attractive eCommerce store is not enough. To help our client get better ROI and sales, we focus on creating a search engine-friendly store..",
    anchor: (
      <a href="YOUR_ESTIMATE_URL">
        Get Estimate
        <img src="https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/right-arrows.png" alt="right arrow" title="services" />
      </a>
    )
  },
];

function Card() {
  return (
    <div>
    <div className='container'>
      <h2>What WooCommerce Development Offers</h2>
      </div>
     
      {developmentOffer.map((detail, index) => (
        <div key={index} className='container'>
          <img src={detail.imgUrl} alt={detail.name} />
          <h5>{detail.name}</h5>
          <p>{detail.content}</p>
          {detail.anchor}
        
        </div>

       
      ))}
    </div>
  );
}



    


   // WooCommerce Development SECTION 3 END




    // WooCommerce Development SECTION 4 START
   

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
         <div className="slider-btn">
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
           "https://www.leapoffaithtech.com/wp-content/uploads/2022/01/woola-slider.png.webp"
       }
     ];
     const text = [
       {
         text:
           "We bring in years of expertise in WooCommerce Development to serve our customers with everything they wish for. Our experience makes us the best rising star in the industry"
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
           <h2>eCommerce Transformation Begins Here!</h2>
           <div>
             <h6>WOOCOMMERCE WEBSITE</h6>
             <span>Woola </span>
           </div>
           <img
             src="https://www.leapoffaithtech.com/wp-content/uploads/2022/01/woola-1.png.webp"
             alt=""
           />
         </div>
         <ImageSlider images={slides} text={text} buttons={buttons} />
       </div>
     );
   }
   
   

//WooCommerce Development SECTION 5  START

function Development(){
  const data = "Why Choose Loft for Your WooCommerce Development Solutions?"
  const para1 = "We are the market leaders in wooCommerce development services. With our expertise and experience in eCommerce platform development, we offer you scalable and outstanding solutions to meet and exceed our client’s requirements. We are a trusted wooCommerce development company, capable to address all your eCommerce development needs."
  const para2 =" Expert development team."
  const para3 ="  Agile development approach."
  const para4 ="End-to-end solutions."
  const para5 ="  Round-the-clock support."
  const para6 = "   Reliable WooCommerce development services."
  const para7 = " Budget-friendly services."
 const para8 = "When it comes to creating an eCommerce store, Woocomerce is the best eCommerce building platform worldwide. We help our customers leverage this powerful eCommerce platform and launch a feature-rich, user-friendly, and one of its kind shopping website. We have a successful record of delivering excellent eCommerce web and mobile compatible websites for our clients worldwide. Our development team ensures that your platform offers top-notch features and functionalities to provide a smooth shopping experience to end-user. With our broad range of reliable wooCommerce development services, we cater to our client’s business needs at the lowest price possible."

    const card = [
{
id:1,
imgUrl:"https://www.leapoffaithtech.com/wp-content/uploads/2022/03/83-Returning-Clients.png.webp",
contant:"83% Returning Clients"

},
{
  id:2,
  imgUrl:"https://www.leapoffaithtech.com/wp-content/uploads/2022/03/100-Project-Transparency.png.webp",
  contant:"100% Project Transparency"
  
  },
  {
    id:3,
    imgUrl:"https://www.leapoffaithtech.com/wp-content/uploads/2022/03/100-Project-Delivered.png.webp",
    contant:"100+ Project Delivered"
    
    },
    
  {
    id:4,
    imgUrl:"https://www.leapoffaithtech.com/wp-content/uploads/2022/03/150-Clients-Worldwide.png.webp",
    contant:"150+ Clients Worldwide"

    
    },



    ]
  
  return(
    <div>
    <div className='container'>
    <h2>{data}</h2>
    <p>{para1}</p>
    <p>{para2}</p>
      <p>{para3}</p> 
      <p>{para4}</p>
      <p>{para5}</p>
      <p>{para6}</p>
      <p>{para7}</p>

      </div>

      {card.map((item, index) => (

<div key={index} className='container'>
<img src={item.imgUrl} alt={item.name} />
<h4>{item.contant}</h4>
<p>{para8}</p>
</div>


     ))}
       
      
    </div>
  
  )}
  
 //WooCommerce Development SECTION 5  END 






 //WooCommerce Development SECTION 6  START
  
  function WooDevelopment(){
    const data = "Don't Wait? Hire Our LearnDash Developer For Best Help"
    const para = "At Loft, we have a large team of developers who are knowledgeable experienced, working for years to offer robust solutions. You can hire any of our developers via flexible engagement models and get the desired service that meets your business needs. Believe us, you will win the race if you make the experience enjoyable. Come, let our experts assist you in the best way."
    const button =(<a href="https://leapoffaithtech.com/contact-us/" class="loft-btn" alt="HIRE NOW" title="HIRE NOW">
    <span>HIRE NOW</span></a>)
const image = "https://www.leapoffaithtech.com/wp-content/themes/leapoffaithtech/assets/images/single-hire-us-ux.jpg"
return(
<div>
<div className='container'> 
  <h2>{data}</h2>
<p>{para}</p>
{button}
<div className='container'> 
  <img src={image} />
</div>
</div>
</div>
)
  }
  
  
//WooCommerce Development SECTION 6  END


export default Commerce