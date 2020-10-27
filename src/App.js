import React from 'react';
import PropTypes from 'prop-types';
import './App.scss';

import PortfolioMain from './components/views/PortfolioMain/PortfolioMain';

const App = () => (
  <div className="App">
    <header className="App-header">
      <p>
        PORTFOLIO/ miejsce na nagłówek i logo
      </p>
      <a
        className="App-link"
        href="https://www.duraj-wnetrza.pl/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Strona główna
      </a>
    </header>
    <div className="App-body">
      <PortfolioMain />
    </div>
    <footer className="App-footer">
      2020
    </footer>
  </div>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
