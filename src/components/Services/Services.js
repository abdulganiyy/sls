import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-wrapper">
      <h3>Services</h3>
      <p>
        We develop world-class custom software <br /> development services for
        startups, small- ,<br />
        to-midsize (SMB), and enterprise-size <br /> businesses.
      </p>
      <p>
        <progress id="file" max="100" value="70">
          {" "}
          70%{" "}
        </progress>
      </p>
      <div className="services">
        <div className="service">
          <div></div>
          <div>
            <h4>Software Development & Training</h4>
            <p>
              We engage in conceiving, specifying, designing, programming,
              documenting, testing, maintaining, and training on technologies
              and applications.
            </p>
          </div>
        </div>
        <div className="service">
          <div></div>
          <div>
            <h4> Data Science & Training</h4>
            <p>
              We use scientific methods, and processes, to interpret data and
              draw insights across a broad range of application and domains.
            </p>
          </div>
        </div>
        <div className="service">
          <div></div>
          <div>
            <h4> Game Development / Gamification</h4>
            <p>
              BCT Games is a game studio dedicated to creating timeless
              interactive entertainment that inspires human connection
              worldwide.
            </p>
          </div>
        </div>
        <div className="service">
          <div></div>
          <div>
            <h4>Digital Marketing & Training</h4>
            <p>
              We provide a targeted, customized digital marketing strategy. We
              deliver awareness creation for brands to becomes the first and
              only choice for your consumers, resulting in high return on
              investment yields.
            </p>
          </div>
        </div>
        <div className="service">
          <div></div>
          <div>
            <h4>2D/3D Graphics & Training</h4>
            <p>
              We are focusing on delivering a wide variety of cutting-edge 2D
              and 3D content both low-poly and high-poly 3D models of different
              complexity and assignment, which fully satisfy the requirements of
              our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
