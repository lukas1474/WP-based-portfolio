import React from 'react';
import PropTypes from 'prop-types';

import styles from './PortfolioMain.module.scss';

import Projects from '../Projects/ProjectsContainer';
import { Container, Row, Col } from 'react-bootstrap';

class PortfolioMain extends React.Component {
  constructor() {
    super();
    this.state = {
      activeCategory: 1000 ,
    }
  }

  componentDidMount() {
    fetch(`https://duraj-wnetrza.pl/wp-json/wp/v2/categories`)
      .then(results => {
        return results.json();
      }).then(results => {
        const { apiCategory } = this.props;
        apiCategory(results);
        console.log(results)
      })

    fetch('https://duraj-wnetrza.pl/wp-json/wp/v2/posts?per_page=100')
      .then(results => {
        return results.json();
      }).then(results => {
        const { apiProject } = this.props;
        apiProject(results);
      })
  }

  handleCategoryChange(newCategory, event) {
    if (event !== undefined);
    this.setState({ activeCategory: newCategory });
  }

  render() {

    const { categories, projects, mainCategory, id, name } = this.props;
    const { activeCategory } = this.state;

    return (
      <div className={styles.root}>
        <Container className={styles.container}>
          <Row className={styles.panelBar}>
            <div className={styles.menu}>
              <ul>
                {/* TODO wszystkie kategorie ma ustawiac aktywna kategorie na null
                 */}
                {/* {mainCategory && mainCategory.map(item => (
                  <button
                    // onClick={() => this.handleCategoryChange(item.id)}
                  >
                    asdas
                  </button>
                ))}
                {console.log(mainCategory)} */}
                {/* {activeCategory} */}
                {categories.data && categories.data.filter(item => item.id > 1)
                .map(item => (
                  <li key={item.id}>
                    <button
                      className={
                        item.id === activeCategory ? styles.active : undefined
                      }
                      onClick={() => this.handleCategoryChange(item.id)}
                    >
                      {item.name}
                      {console.log(item)}
                    </button>
                  </li>

                ))}

              </ul>
            </div>
          </Row>
          <Container className={styles.container}>
            <Row>
              {projects.data && projects.data.filter(item => item.categories.includes(activeCategory))
                .map(item => (
                  <Col xs={6} md={4} lg={3} key={item.id}>
                    <Projects {...item} />
                  </Col>

                ))}
                 {console.log(activeCategory)}
            </Row>
          </Container>
        </Container>
      </div>
    );
  }
};

PortfolioMain.propTypes = {
  children: PropTypes.node,
  apiCategory: PropTypes.func,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.object,
      content: PropTypes.object,
      date: PropTypes.string,
      categories: PropTypes.array,
    })
  ),
  mainCategory: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ),
};

export default PortfolioMain;
