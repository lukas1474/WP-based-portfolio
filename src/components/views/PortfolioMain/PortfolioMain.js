import React from 'react';
import styles from './PortfolioMain.module.scss';
import PropTypes from 'prop-types';
import Projects from '../Projects/ProjectsContainer';
import { Link } from 'react-router-dom';


class PortfolioMain extends React.Component {
  selectedProject(payload) {
    const { sendActiveProject } = this.props;
    console.log(payload.target);

  }
  state = {
    activeCategory: 69,
  };

  handleCategoryChange(newCategory, event) {
    if (event !== undefined);
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
                    <button
                      className={
                        item.id === activeCategory ? styles.active : undefined
                      }
                      onClick={() => this.handleCategoryChange(item.id)}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='row'>
            {projects.filter(item => item.categories.includes(activeCategory))
            .map(item => (
              <Link key={item.id} to={`/project/${item.id}`} className=' col-lg-3 col-md-4 col-6'>
                <Projects {...item} />
              </Link>
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
      sendActiveProject: PropTypes.func,
    })
  ),
};

PortfolioMain.defaultProps = {
  categories: [],
  projects: [],
};

export default PortfolioMain;
