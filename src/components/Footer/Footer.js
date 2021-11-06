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
            <li>Data Analysis Training </li>
            <li>Digital Marketing Training</li>
          </ul>
        </div>
        <div>
          <h4>Solutions</h4>
          <ul>
            <li>Software Development</li>
            <li>Data Science</li>
            <li>Game Development / Gamification</li>
            <li>Digital Marketing </li>
            <li>2D/3D Graphics</li>
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
              10 Olusoji Idowu St, Ilupeju 100261, Lagos{" "}
            </li>
            <li>
              <span>
                <FaEnvelope />
              </span>
              Info@bcodestech.com support@bcodestech.com
            </li>
            <li>
              <span>
                <FaPhone />
              </span>
              +234 809 020 2326
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
