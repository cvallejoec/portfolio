import React from 'react';
import './assets/styles/App.scss';
import './assets/styles/css/main.css';

import Menu from './components/Menu.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import AboutMe from './components/AboutMe.jsx';

function App() {
  return (
    <div className="App antialiased text-portfolio_white">
      <Menu />
      <Hero />
      <Services />
      <AboutMe />
    </div>
  );
}

export default App;
