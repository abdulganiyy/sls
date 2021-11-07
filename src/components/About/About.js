import React from "react";
import AboutImg from "../../assets/aboout1.jpg";

import ProgressBar from "../ProgressBar/ProgressBar";

import "./About.css";

const About = () => {
  return (
    <div className="about-component">
      <div className="about-component_left">
        <h3 className="about-component_left_heading">
          <span></span> WHAT WE DO
        </h3>
        <p className="about-component_left_heading-secondary">
          SLS Bridge Solutions specialize in providing training <br /> and
          services in IT, Telecommunications and Cyber Security <br /> to public
          and private organizations.
        </p>
        <p>
          our core value to provide a tailored bespoke services that surpasses
          our client’s expectations through an extra-mile and value oriented
          approach. We deliver superior return to our clients through our cost
          effective and value-oriented man power development. <br />
          We strive for excellence in every aspect of our business and believe
          that service is everything. We build on our industry knowledge and
          improve in areas with shortfalls in the industry as we keep CLIENT
          SATISFACTION as our goal.
        </p>
        <ProgressBar width={95} name="Software Development" />
        <ProgressBar width={90} name="Data Science" />
        <ProgressBar width={85} name="2D/3D Designs" />
        <ProgressBar width={75} name="Digital Marketing" />
      </div>
      <div className="about-component_right">
        <img src={AboutImg} alt="" />
      </div>
    </div>
  );
};

export default About;
