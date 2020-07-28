import React from 'react';
import './assets/styles/App.scss'
import './assets/styles/css/main.css';

import Menu from './components/Menu.jsx';

function App() {
  return (
    <div className="App antialiased">
      <header className="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
        <Menu />
      </header>
    </div>
  );
}

export default App;
