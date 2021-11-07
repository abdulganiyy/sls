import React from "react";
import { FaListUl, FaSearch } from "react-icons/fa";

import { Link } from "react-router-dom";

import "./Menubar.css";

const Menubar = () => {
  return (
    <div className="menubar">
      <div className="logo-box">SLS</div>
      <div className="navigation-items">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/">ABOUT US</Link>
          </li>
          <li>
            <Link to="/">SERVICES</Link>
          </li>
          <li>
            <Link to="/">CONTACT US</Link>
          </li>
        </ul>
      </div>
      <div className="icons">
        <span>
          <FaListUl />
        </span>
        <span>
          <FaSearch />
        </span>
      </div>
    </div>
  );
};

export default Menubar;
