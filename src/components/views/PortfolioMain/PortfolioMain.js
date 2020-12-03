import React from 'react';
import styles from './PortfolioMain.module.scss';
import PropTypes from 'prop-types';
import Projects from '../Projects/ProjectsContainer';
// import axios from 'axios';

class PortfolioMain extends React.Component {
  state = {
    activeCategory: 69,
    loading: true,
  };

  // componentDidMount = () => {
  //   fetch('https://duraj-wnetrza.pl/wp-json/wp/v2/categories')
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         this.setState({
  //           isLoaded: true,
  //           items: result.items
  //         });
  //         publishedProjects();
  //         // console.log()
  //       }
  //     )
  // }

  // async componentDidMount() {
  //   const url = 'https://duraj-wnetrza.pl/wp-json/wp/v2/categories';
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   this.setState({id: data.results[0]})
  //   console.log(data);
  // }

  // componentDidMount() {
  //   const { loadProjects } = this.props;
  //   loadProjects();
  // };


  handleCategoryChange(newCategory, event) {
    if (event !== undefined);
    this.setState({ activeCategory: newCategory });
  }

  render() {

    const { categories, projects } = this.props;
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
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ),
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.object,
      content: PropTypes.object,
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
