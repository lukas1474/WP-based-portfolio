import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectPage.module.scss';
import { Link } from 'react-router-dom';

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
            <h2>{project.id}</h2>
            <h2>{project.title.rendered}</h2>
          </div>
          <div className='row'>
            <div className='row col-lg-3 col-md-4 col-6'>
              <img src={project.image} className={styles.logo} />
              <img src={project.image} className={styles.logo} />
              <img src={project.image} className={styles.logo} />
            </div>
          </div>
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
