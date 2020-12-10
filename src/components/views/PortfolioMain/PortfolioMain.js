import React from 'react';
import styles from './PortfolioMain.module.scss';
import PropTypes from 'prop-types';
import Projects from '../Projects/ProjectsContainer';
import { Container, Row, Col } from 'react-bootstrap';

class PortfolioMain extends React.Component {
  constructor() {
    super();
    this.state = {
      activeCategory: 37,
    }
  }

  componentDidMount() {
    fetch('https://duraj-wnetrza.pl/wp-json/wp/v2/categories')
      .then(results => {
        console.log(results)
        return results.json();
      }).then(results => {
          let { apiCategory } = this.props;
          apiCategory(results);
          console.log(results)
        this.setState({ categories: [] });
        console.log(this.setState)
      })

    fetch('https://duraj-wnetrza.pl/wp-json/wp/v2/posts?per_page=100')
      .then(results => {
        return results.json();
      }).then(results => {
        let { apiProject } = this.props;
        apiProject(results);
        console.log(results)
        this.setState({ projects: []});
        console.log({ projects: []})
      })
  }

  handleCategoryChange(newCategory, event) {
    if (event !== undefined);
    this.setState({ activeCategory: newCategory });
  }

  render() {

    const { categories, projects } = this.props;
    const { activeCategory } = this.state;

    return (
      <div className={styles.root}>
        <Container className={styles.container}>
          <Row className={styles.panelBar}>
            <div className={styles.menu}>
              <ul>
                {categories.data && categories.data.map(item => (
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
          </Row>
          <Container className={styles.container}>
          <Row>
            {projects.data && projects.data.filter(item => item.categories.includes(activeCategory))
              .map(item => (
                <Col xs={6} md={4} lg={3} key={item.id}>
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
      categories: PropTypes.array,
    })
  ),
};

export default PortfolioMain;
