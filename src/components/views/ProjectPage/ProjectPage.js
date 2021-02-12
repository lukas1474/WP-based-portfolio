import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProjectPage.module.scss';

import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

class ProjectPage extends React.Component {

  render() {

    const { project, projectCategories, re } = this.props;

    const string = project.content.rendered;

    let reProject = string.match(/(?<=src=")(.*?)(?=")/gm);

    return (
      <div className={styles.root}>
        <div className={styles.container}>
          <div className={styles.panelBar}>
            <Link to={`/`} className={styles.link}>
              <button> &lt; Powrót </button>
            </Link>
            <div className={styles.projectCategories}>
              <ul >
                {projectCategories.filter(item => item.id != [69])
                  .map(item => (
                    <li key={item.id} className={styles.categoryTitle}>
                      {item.name}
                    </li>
                  ))}
              </ul>
            </div>
            <h2 className={styles.title}>{project.title.rendered}</h2>
          </div>
          <Row className='row'>
            <Col xs={6} md={4} lg={6} className={styles.col}>
              <ul >
                {reProject && reProject.map(item => (
                    <li key={item.id}>
                      <img src={item} className={styles.logo} alt='zdj z projektu' />
                    </li>
                  ))}
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    );
  };
};

ProjectPage.propTypes = {
  children: PropTypes.node,
  project: PropTypes.object,
  projectCategories: PropTypes.any,
  re: PropTypes.any,
};

export default ProjectPage;
