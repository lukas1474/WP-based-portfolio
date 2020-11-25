import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectPage.module.scss';
import { Link } from 'react-router-dom';

class ProjectPage extends React.Component {

  render() {
    const { id, title, image, project, categories, projects, item } = this.props;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <Link to={`/`} className={styles.link}>
              <button> {'<-'} Powrót </button>
            </Link>
            <div>
            {/* {categories.filter(item => item.categories.includes(project.id))
            .map(item => (
              <p key={item.id}>
                {item.name}
              </p>
            ))} */}
            </div>
            {console.log(project.id)}
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
  id: PropTypes.string,
  title: PropTypes.number,
  image: PropTypes.node,
  project: PropTypes.any,
  projects: PropTypes.any,
  categories: PropTypes.any,
};

ProjectPage.defaultProps = {
  categories: [],
  projects: [],
};

export default ProjectPage;
