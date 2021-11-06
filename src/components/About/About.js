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
          We design, develop and deploy custom <br />
          software solutions for companies that want <br />
          to make an impact through technology
        </p>
        <p>
          We are a software consulting firm that work to create a deep
          understanding of our client's needs, market and technologies because
          this gives us the power to discover hidden improvement opportunities.{" "}
          <br />
          Our highly experienced software developers have a deep understanding
          of how to leverage top programming languages, frameworks, and other
          software development tools to create the ideal solution for your
          business.
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
