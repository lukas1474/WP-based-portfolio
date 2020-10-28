import React from 'react';
import styles from './PortfolioMain.scss';
import PropTypes from 'prop-types';

class PortfolioMain extends React.Component {
  render() {
    return (
      <div className="App">
        <div className='container'>
          <div className={styles.panelBar}>
            <div className={styles.menu}>
              <ul>
                <li>
                  <p>
                    Wszystkie
                  </p>
                </li>
                <li>
                  <p>
                    Elewacja
                  </p>
                </li>
                <li>
                  <p>
                    Salon
                  </p>
                </li>
                <li>
                  <p>
                    kuchnia
                  </p>
                </li>
                <li>
                  <p>
                    Łazienka
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <h2>Lista projektów z kategoriami</h2>
        <div>
          <p>projekty</p>
          <p>miejsce na linki projektów</p>
        </div>
      </div>
    );
  }
}

PortfolioMain.propTypes = {
  children: PropTypes.node,
};

export default PortfolioMain;
