import React from 'react';
import PropTypes from 'prop-types';

import styles from './Projects.module.scss';

import ProjectPage from '../ProjectPage/ProjectPageContainer';
import { Link } from 'react-router-dom';

class Projects extends React.Component {

  render() {
    const { id, title } = this.props;
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
                <img src={"https://www.duraj-wnetrza.pl/wp-content/uploads/2019/09/5-2-1024x768.jpg"} className={styles.logo} alt='zdj projektu' />
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
  children: PropTypes.node,
  id: PropTypes.node,
  title: PropTypes.object,
  date: PropTypes.string,
  image: PropTypes.node,
  category: PropTypes.object,
};

export default Projects;
