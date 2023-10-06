import { useState } from "react";
import React from "react";
const data1 = "ELIMINATE THE";
const data2 = "Abundant Cart Game With The Best Practice";
const Anchor = (
  <a href="/">
    <span>LET’S GET STARTED</span>
  </a>
);
const img1 =
  "https://www.leapoffaithtech.com/wp-content/uploads/2023/04/Group-179471@2x.png.webp";
//  SECTION 1
function Solution() {
  return (
    <div>
      <h3>{data1}</h3>
      <h2>{data2}</h2>
      {Anchor}
      <div>
        <img src={img1} alt="" style={{ width: "300px" }} />
      </div>

      <Email />
      <Payment />
      <Structure />
      <Services />
      <Process />
      <Products />
      <Popups />
      <CustomFieldForm />
    </div>
  );
}
// SECTION 2
function Email() {
  const img2 =
    "https://www.leapoffaithtech.com/wp-content/uploads/2023/04/Group-179236@2x.png.webp";
  const data2 = "Go For Email Campaigns";
  const para1 =
    "Your e-commerce website's abandoned cart rate can be decreased with the help of email campaigns. You can remind customers about their shopping carts that have been abandoned and encourage them to finish their purchase by creating targeted and personalized emails.";
  return (
    <div>
      <div className="container">
        <img src={img2} alt="" style={{ width: "300px" }} />
      </div>
      <div className="container">
        <h2>{data2}</h2>
        <p>{para1}</p>
      </div>
    </div>
  );
}
//  SECTION 3
function Payment() {
  const data3 = "Offer Different Modes Of Payment";
  const para2 =
    "On your e-commerce website, providing various payment options has proven to be an excellent approach to lowering the number of abandoned carts. You can accommodate customers' preferences and make the checkout process simpler and easier.";
  const img3 =
    "https://www.leapoffaithtech.com/wp-content/uploads/2023/04/OBJECTS@2x.png.webp";

  return (
    <div>
      <h2>{data3}</h2>
      <p>{para2}</p>
      <div className="container">
        <img src={img3} alt="" style={{ width: "300px" }} />
      </div>
    </div>
  );
}
// SECTION 4
function Structure() {
  const data4 = "Optimize Your Website Structure";
  const para3 =
    "The overall user experience on your e-commerce website can be improved, by optimizing the layout of your website, which will significantly lower the number of abandoned carts.";
  const img4 =
    "https://www.leapoffaithtech.com/wp-content/uploads/2023/04/Group-179469.svg";

  return (
    <div>
      <div className="container">
        <h2>{data4}</h2>
        <p>{para3}</p>
      </div>
      <div className="container">
        <img src={img4} alt="" style={{ width: "300px" }} />
      </div>
    </div>
  );
}
// SECTION 5
function Services() {
  const img5 =
    "https://www.leapoffaithtech.com/wp-content/uploads/2023/04/Group-180679@2x.png.webp";
  const data5 = "Provide The Best Customer Services";
  const para4 =
    "A key element in lowering abandoned carts on your e-commerce website is offering excellent customer service. You can win over your customers' trust and convince them to finish their purchases by providing them with various communication channels.";
  return (
    <div>
      <div className="container">
        <img src={img5} alt="" style={{ width: "300px" }} />
      </div>
      <div className="container">
        <h2>{data5}</h2>
        <p>{para4}</p>
      </div>
    </div>
  );
}
//  section 6
function Process() {
  const data6 = "Streamline The Checkout Process";
  const para5 =
    "A complicated or lengthy checkout process can frustrate customers and lead them to abandon their carts. You can simplify the steps required to complete the purchase and provide a clear summary of the customer's order and costs.";
  const img6 =
    "https://www.leapoffaithtech.com/wp-content/uploads/2023/04/Group-180681@2x.png.webp";
  return (
    <div>
      <div className="container">
        <h2>{data6}</h2>
        <p>{para5}</p>
      </div>
      <div className="container">
        <img src={img6} alt="" style={{ width: "300px" }} />
      </div>
    </div>
  );
}

// section 7
function Products() {
  const img7 =
    "https://www.leapoffaithtech.com/wp-content/uploads/2023/04/Group-180666.svg";
  const data7 = "Well Described Products ";
  const para6 =
    "Providing proper knowledge to customers is essential for businesses to reduce cart abandonment and improve the overall shopping experience. Businesses can assist customers in making informed decisions by creating detailed product descriptions, high-quality images, and videos.";
  return (
    <div>
      <div className="container">
        <img src={img7} alt="" style={{ width: "300px" }} />
      </div>
      <div className="contanier">
        <h2>{data7}</h2>
        <p>{para6}</p>
      </div>
    </div>
  );
}
//  section 8
function Popups() {
  const data8 = "Use Exit-Intent Popups";
  const para7 =
    "Exit-Intent Popups are a popular tool for lowering e-commerce cart abandonment rates. These popups appear when a customer is about to leave a website, offering an incentive to complete the purchase.";
  const img8 =
    "https://www.leapoffaithtech.com/wp-content/uploads/2023/04/Group-180693.svg";

  return (
    <div>
      <div className="container">
        <h2>{data8}</h2>
        <p>{para7}</p>
      </div>
      <div className="container">
        <img src={img8} alt="" style={{ width: "300px" }} />
      </div>
    </div>
  );
}
//  section 8

function CustomFieldForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [inquiry, setInquiry] = useState("");
  const [message, setMessage] = useState("");
  const [subscribe, setSubscribe] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <h2>Drop A Line</h2>
      <p>
        Have a query or remark? We're prepared to assist. Please get in touch
        with us, and we'll respond as soon as we can.
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={function (e) {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={function (e) {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={function (e) {
              setPhone(e.target.value);
            }}
          />
        </div>
        <div>
          <label>inquiry:</label>
          <input
            type="detail"
            value={inquiry}
            onChange={function (e) {
              setInquiry(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            value={message}
            onChange={function (e) {
              setMessage(e.target.value);
            }}
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={subscribe}
              onChange={function (e) {
                setSubscribe(e.target.checked);
              }}
            />
          </label>
        </div>
        <div>
          <button type="submit">Send A Message</button>
        </div>
      </form>
    </div>
  );
}

export default Solution;
