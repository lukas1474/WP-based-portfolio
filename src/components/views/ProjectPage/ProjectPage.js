import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectPage.module.scss';
import logo from '../../../../src/logo.svg';
import { Link } from 'react-router-dom';

class ProjectPage extends React.Component {

  componentDidMount(){};

  render() {

    const { id, title, image, children, project } = this.props;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <Link to={`/`} className={styles.link}>
              <button> {'<-'} Powrót </button>
            </Link>
            <h2>{project.id}</h2>
            <h2>{project.title.rendered}</h2>
            {console.log(project.image)}
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
  children: PropTypes.node,
  id: PropTypes.string,
  title: PropTypes.number,
  image: PropTypes.node,
  project: PropTypes.any,
};

export default ProjectPage;
