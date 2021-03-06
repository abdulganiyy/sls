import React from "react";

import "./Hero.css";

import HeroBg from "../../assets/svg.png";
import HeroTop from "../../assets/herotopimg.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <img src={HeroBg} alt="hero-background" className="hero-bg" />
      <img src={HeroTop} alt="hero-topimg" className="hero-topimg" />
      <div className="hero-content">
        <h2>IT</h2>
        <h2>Telecommunication</h2>
        <h2>Institute</h2>
        <div>
          <Link to="/about">Start Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
