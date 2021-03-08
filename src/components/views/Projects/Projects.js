import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import styles from './Projects.module.scss';

import ProjectPage from '../ProjectPage/ProjectPageContainer';

class Projects extends React.Component {
  render() {
    const { id, title, content } = this.props;

    const string = content.rendered;
    const re = string.match(/(?<=src=")(.*?)(?=")/gm);

    return (
      <div className={styles.root}>
        <div className="container">
          <div className={styles.as}>
            <Link to={`/${id}`} className={styles.link}>
              <div className={styles.projectWindow}>
                <p className={styles.title}>{title.rendered}</p>
                <ul className={styles.projectsUl}>
                  {re &&
                    re
                      // eslint-disable-next-line eqeqeq
                      .filter((item) => item == re[0])
                      .map((item) => (
                        <li key={item.id}>
                          <img
                            src={item}
                            className={styles.logo}
                            alt="zdj z projektu"
                          />
                        </li>
                      ))}
                </ul>
              </div>
              {(props) => (
                <ProjectPage
                  {...props}
                  key={this.props.id}
                  re={this.props.title}
                />
              )}
            </Link>
          </div>
        </div>
      </div>
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
  project: PropTypes.object,
  projectCategories: PropTypes.any,
  re: PropTypes.any,
};

export default Projects;
