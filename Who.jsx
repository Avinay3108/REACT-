import React from "react";
import { motion } from "framer-motion";

function Who() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 3 } },
  };

  const imgVariants = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.5, duration: 3 } },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { delay: .5, duration: 3 } },
  };

  return (
    <motion.div
      className="who-section" 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container">
        <motion.div className="row" variants={contentVariants}>
          <div className="who-img">
            <motion.img
              src="https://www.leapoffaithtech.com/wp-content/uploads/2022/02/Group-14830.png.webp"
              alt="Who"
              variants={imgVariants}
            />
          </div>
          <div className="who-contant">
            <h6 className="titles-sec">ABOUT</h6>
            <h2>Who Are We?</h2>
            <p>
              Leap of Faith Technologies has been in the Information Technology
              field for years. Our prime focus is to bring out a box approach
              and tune it into something useful. Our customer satisfaction is
              what we are primarily looking for, and making them go awe is our
              strong point. Show up with an idea, and we will help you create a
              full-proof plan for highlighting your business's online presence.
              Isn't that something great and more relevant? So, why not plan an
              upcoming change with the leaders of the industry.
            </p>
            <a
              href="http://localhost:3000/about"
              title="Explore More"
            >
              Know More About Us
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Who;
