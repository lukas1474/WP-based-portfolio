import React from 'react';
import PropTypes from 'prop-types';

import styles from './PortfolioMain.module.scss';

import { API_URL } from '../../../config';
import Projects from '../Projects/ProjectsContainer';
import { Container, Row, Col } from 'react-bootstrap';

class PortfolioMain extends React.Component {
  constructor() {
    super();
    this.state = {
      activeCategory: null,
    }
  }

  componentDidMount() {
    fetch(`${API_URL}categories`)
      .then(results => {
        return results.json();
      }).then(results => {
        const { apiCategory } = this.props;
        apiCategory(results);
      })

    fetch(`${API_URL}posts?per_page=100`)
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

    const { categories, projects } = this.props;
    const { activeCategory } = this.state;

    const cat = categories.mainCategory.concat(categories.data);

    return (
      <div className={styles.root}>
        <Container className={styles.container}>
          <Row className={styles.panelBar}>
            <div className={styles.menu}>
              <ul className={styles.portfolioUl}>
                {categories.data && cat.filter(item => item.id != 1)
                .map(item => (
                  <li key={item.id} className={styles.portfolioLi}>
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
          </Row>
          <Container className={styles.container}>
            <Row>
              {projects.data && projects.data.filter(item => activeCategory === null || item.categories.includes(activeCategory))
                .map(item => (
                  <Col xs={12} md={6} lg={4} key={item.id}>
                    <Projects {...item} />
                  </Col>
                ))}
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
