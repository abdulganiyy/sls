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
      <div className="services">
        <div className="service">
          <div></div>
          <div>
            <h4> Software Development & Training</h4>
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
            <h4>Telecommunications</h4>
            <p>
              We provide professional services in Network Design, Installation,
              Commissioning, Testing and Security. With specialty in areas of
              Radio Frequency Engineering, Transmission Engineering, BSS
              Engineering, IP Network and Fiber Optics. We provide bouquets of
              Training and Outsourcing that gives our participants a career in
              the Telecommunications industry.
            </p>
          </div>
        </div>
        <div className="service">
          <div></div>
          <div>
            <h4>Data Science & Training</h4>
            <p>
              We use scientific methods, and processes, to interpret data and
              draw insights across a broad range of application and domains.
            </p>
          </div>
        </div>
        <div className="service">
          <div></div>
          <div>
            <h4>Cyber Security</h4>
            <p>
              We provide Cyber Security Solutions and Advisory, our overall
              security solutions build strength from strategic methods and well
              organized people, effective process and technology. We also pride
              ourselves on providing the latest and solutions oriented
              technology in tandem with the vision and strategic need of our
              clients. When it comes to Cyber Security Solutions, Advisory and
              Infrastructure, we are the go to place to get value for your
              investment.
            </p>
          </div>
        </div>
        <div className="service">
          <div></div>
          <div>
            <h4> Digital Marketing & Training</h4>
            <p>
              We provide a targeted, customized digital marketing strategy. We
              deliver awareness creation for brands to becomes the first and
              only choice for your consumers, resulting in high return on
              investment yields.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
