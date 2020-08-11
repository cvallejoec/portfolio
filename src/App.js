import React from 'react';
import './assets/styles/App.scss';
import './assets/styles/css/main.css';

import Menu from './components/Menu.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import AboutMe from './components/AboutMe.jsx';
import Footer from './components/Footer.jsx';
import MySkills from './components/MySkills.jsx';

function App() {
  return (
    <div className="App antialiased text-portfolio_white">
      <Menu />
      <Hero />
      <Services />
      <AboutMe />
      <MySkills />
      <div className="h-56"></div>
      <Footer />
    </div>
  );
}

export default App;
