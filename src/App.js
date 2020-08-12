import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './assets/styles/App.scss';
import './assets/styles/css/main.css';

import Menu from './components/Menu.jsx';
import Home from './containers/home.jsx';
import Footer from './components/Footer.jsx';

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Router>
      <div className="App antialiased text-portfolio_white">
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <div className="h-56"></div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
