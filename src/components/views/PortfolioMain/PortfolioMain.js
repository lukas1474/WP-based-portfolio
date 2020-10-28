import React from 'react';
import styles from './PortfolioMain.scss';
import PropTypes from 'prop-types';
import Projects from '../Projects/Projects';

class PortfolioMain extends React.Component {
  state = {
    activeCategory: 'wszystkie'
  };

  render() {

    const {
      categories,
    } = this.props;

    const { activeCategory } = this.state;

    return (
      <div className='App'>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className={styles.menu}>
              <ul>
                {categories.map(item => (
                  <li key={item.id}>
                    <a
                      href='/#'
                      className={
                        item.id === activeCategory ? styles.active : undefined
                      }>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='row'>
            <div className=' col-lg-3 col-md-4 col-6'>
              <Projects />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PortfolioMain.propTypes = {
  children: PropTypes.node,
};

export default PortfolioMain;
