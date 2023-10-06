import React from "react";
const data = "The trustable Web development company"
const contant = "Over the years Leap of Faith Technologies has firmly believed that quality should never be compromised. This is the reason why we stand apart from others rising tech solution providers in the locality. We know a website is the face of business in this online world and showcasing it in the right manner is our priority. We develop and design websites that are optimized for better user-experience Valuing our customer's time and money is our basic nature, and as a service provider, we take pride in being present for clients whenever required. There's no room for dissatisfaction or discomfort while working with experts from the industry."
function Project() {
  return (
    <div className="project-sec">
      <div className="container">
        <div className="project-section">
          <div className="project-left">
            <h6 className="titles-sec">Why Consider Us?</h6>
            <h2>{data}</h2>
            <div className="project-text-sec">
              <div className="project-text">
                <h3>500 +</h3>
                <p>Projects Accomplished</p>
              </div>
              <div className="project-text">
                <h3>100 +</h3>
                <p>Satisfied Clients</p>
              </div>
              <div className="project-text">
                <h3>5 +</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
          <div className="project-right">
            <p>{contant}</p>

          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;