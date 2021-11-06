import React from "react";

import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import About from "../../components//About/About";
import Solutions from "../../components/Solutions/Solutions";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Solutions />
    </div>
  );
};

export default Home;
