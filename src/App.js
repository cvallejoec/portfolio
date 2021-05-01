import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './assets/styles/App.scss';
import './assets/styles/css/main.css';

import Menu from './components/Menu.jsx';
import Home from './containers/home.jsx';
import Portfolio from './containers/Portfolio.jsx';
import NotFound from './containers/NotFound.jsx';
import Footer from './components/Footer.jsx';

//Projects
import Semaforizacion from './projects/Semaforizacion.jsx';
import Blog from './projects/Blog.jsx';
import CiaDeclassified from './projects/CiaDeclassified.jsx';
import TuCarroFast from './projects/TuCarroFast.jsx';

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
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/semaforizacion" component={Semaforizacion} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/cia-declassified" component={CiaDeclassified} />
          <Route exact path="/tucarrofast" component={TuCarroFast} />
          <Route component={NotFound} />
        </Switch>
        <div className="h-56"></div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
