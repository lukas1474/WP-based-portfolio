import React from 'react';
import styles from './PortfolioMain.module.scss';
import PropTypes from 'prop-types';
import Projects from '../Projects/ProjectsContainer';
import { Container, Row, Col } from 'react-bootstrap';

class PortfolioMain extends React.Component {
  constructor() {
    super();
    this.state = {
      activeCategory: 'Wszystkie',
    }
  }

  componentDidMount() {
    fetch('https://duraj-wnetrza.pl/wp-json/wp/v2/categories')
      .then(results => {
        return results.json();
      }).then(results => {
        let { apiCategory } = this.props;
        apiCategory(results);
        this.setState({ categories: [] });
      })

    fetch('https://duraj-wnetrza.pl/wp-json/wp/v2/posts?per_page=100')
      .then(results => {
        return results.json();
      }).then(results => {
        let { apiProject } = this.props;
        apiProject(results);
        this.setState({ projects: [] });
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
  mainCategory: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ),
};

export default PortfolioMain;
