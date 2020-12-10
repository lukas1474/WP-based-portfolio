import React from 'react';
import styles from './Projects.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProjectPage from '../ProjectPage/ProjectPageContainer';

class Projects extends React.Component {

  render() {
    const { id, image, date, title } = this.props
    return (
      <div className={styles.root} >
        <div className='container'>
          <div>
            <Link to={`/project/${id}`} className={styles.link}>
              <h2 className={styles.id}>{id}</h2>
              <div className={styles.projectWindow}>
                <p className={styles.title}>
                  {title.rendered}
                </p>
                <img src={image} className={styles.logo} />
              </div>
              {props => <ProjectPage {...props} key={this.props.id && this.props.category} />}
            </Link>
          </div>
        </div>
      </div >
    );
  }
}

Projects.propTypes = {
  id: PropTypes.node,
  title: PropTypes.object,
  date: PropTypes.string,
  image: PropTypes.node,
};

export default Projects;
