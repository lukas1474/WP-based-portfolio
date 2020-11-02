import React from 'react';
import styles from './PortfolioMain.module.scss';
import PropTypes from 'prop-types';
import Projects from '../Projects/ProjectsContainer';

class PortfolioMain extends React.Component {
  state = {
    activeCategory: 'wszystkie',
  };

  addClass(domElement, className) {
    domElement.current.classList.add(className);
  }

  removeClass(domElement, className) {
    domElement.current.classList.remove(className);
  }

  handleCategoryChange(newCategory, event) {
    if (event !== undefined) event.preventDefault();
    this.setState({ activeCategory: newCategory });
  }

  render() {

    const {categories, projects} = this.props;
    const { activeCategory } = this.state;

    return (
      <div className={styles.root}>
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
                      }
                      onClick={event => this.handleCategoryChange(item.id, event)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='row' ref={this.props.categoryListRef}>
            {projects.filter(item => [item.categories] === activeCategory)
            .map(item => (
              <div key={item.id} className=' col-lg-3 col-md-4 col-6'>
                <Projects {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

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
  categoryListRef: PropTypes.object,
};

PortfolioMain.defaultProps = {
  categories: [],
  projects: [],
  categoryListRef: React.createRef(),
};

export default PortfolioMain;
