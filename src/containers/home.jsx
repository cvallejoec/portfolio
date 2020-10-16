import React from 'react';

import Hero from '../components/Hero.jsx';
import Services from '../components/Services.jsx';
import AboutMe from '../components/AboutMe.jsx';
import MySkills from '../components/MySkills.jsx';
import Portfolio from '../components/Portfolio.jsx';
import Testimonials from '../components/Testimonials.jsx';

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <Services />
      <AboutMe />
      <MySkills />
      <Portfolio />
      <Testimonials />
    </React.Fragment>
  );
};

export default Home;
