import React from 'react';
import styles from './PortfolioMain.scss';
import PropTypes from 'prop-types';
import Projects from '../Projects/ProjectsContainer';

class PortfolioMain extends React.Component {
  state = {
    activeCategory: 'wszystkie'
  };

  render() {

    const {
      categories,
      projects
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
            {projects.map(item => (
              <div key={item.id} className=' col-lg-3 col-md-4 col-6'>
                <Projects {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

PortfolioMain.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      content: PropTypes.string,
      date: PropTypes.string,
      categories: PropTypes.array,
    })
  ),
};

PortfolioMain.defaultProps = {
  categories: [],
  projects: [],
};

export default PortfolioMain;
