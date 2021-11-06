import React from "react";

import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Solutions.css";

import SolutionImg from "../../assets/solution1.jpg";

const Solutions = () => {
  return (
    <div className="solutions">
      <div className="solutions_left">
        <h3 className="solutions_left_heading">
          <span></span> CUSTOM SOFTWARE SOLUTIONS
        </h3>
        <p className="solutions_left_heading-secondary">
          Trusted by 120+ <br />
          Happy Customers
        </p>
        <p>
          We develop custom Enterprise Software Solutions by revamping existing
          solutions or developing Enterprise Software Solutions systems from
          scratch, designed to cover core business functions, including
          inventory & distribution management, production, accounting, and more.
        </p>
        <p className="checklist">
          <span>
            <FaCheck />
          </span>{" "}
          100% Client Satisfaction
        </p>
        <p className="checklist">
          <span>
            <FaCheck />
          </span>{" "}
          World Class Developers
        </p>
        <div>
          <Link to="/">START A PROJECT WITH US</Link>
        </div>
      </div>
      <div className="solutions_right">
        <img src={SolutionImg} alt="" />
      </div>
    </div>
  );
};

export default Solutions;
