import React from "react";

import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div>
          <h4>SLS</h4>
          <div>
            Helping businesses succeed through excellent <br /> digital
            services, focused on results.
          </div>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li>Data Science Training </li>
            <li>Digital Marketing Training</li>
          </ul>
        </div>
        <div>
          <h4>Solutions</h4>
          <ul>
            <li>Software Development</li>
            <li>Data Science</li>
            <li>Telecommunications</li>
            <li>Digital Marketing </li>
            <li>Cyber Security</li>
          </ul>
        </div>
        <div>
          <h4>Contact Info</h4>
          <ul>
            <li>
              <span>
                {" "}
                <FaMapMarkerAlt />
              </span>{" "}
              30 Besides Kiddies Hospital, Olorunsogo, Ilorin, Kwara State.
            </li>
            <li>
              <span>
                <FaEnvelope />
              </span>
              info@slsbridgesolutions.com
            </li>
            <li>
              <span>
                <FaPhone />
              </span>
              +234 816 7963 525
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
