import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectPage.module.scss';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

class ProjectPage extends React.Component {

  render() {
    const { project, projectCategories } = this.props;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <Link to={`/`} className={styles.link}>
              <button> &lt; Powrót </button>
            </Link>
            <div className={styles.projectCategories}>
              <ul>
                {projectCategories.filter(item => item.id != [69])
                  .map(item => (
                    <li key={item.id}>
                      {item.name}
                    </li>
                  ))}
              </ul>
            </div>
            {/* <h2>{project.id}</h2> */}
            <h2>{project.title.rendered}</h2>
          </div>
          <Row className='row'>
            <Col xs={6} md={4} lg={6} className={styles.col}>
              <img src={project.image} className={styles.logo} />
              <img src={project.image} className={styles.logo} />
              <img src={project.image} className={styles.logo} />
              <img src={project.image} className={styles.logo} />
              <img src={project.image} className={styles.logo} />
              <img src={project.image} className={styles.logo} />
              <img src={project.image} className={styles.logo} />
              <img src={project.image} className={styles.logo} />
              <img src={project.image} className={styles.logo} />
              <img src={project.image} className={styles.logo} />
            </Col>
          </Row>
        </div>
      </div>
    );
  };
};

ProjectPage.propTypes = {
  project: PropTypes.object,
  projectCategories: PropTypes.any,
};

export default ProjectPage;
