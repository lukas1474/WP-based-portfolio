import React from 'react';
import styles from './Projects.scss';
import PropTypes from 'prop-types';
import logo from '../../../../src/logo.svg';

class Projects extends React.Component {

  render() {
    const {projects} = this.props;
    return (
      < div className={styles.root} >
        <div className='container'>
          <div>
            <p>{projects.id}</p>
            <h2>{projects.content}</h2>
            <p>{projects.date}</p>
            <p>PROJECTS COMPONENT  {projects.title}
              <img src={logo} className='App-logo' />
            </p>
          </div>
        </div>
      </div >
    )
  }
}

Projects.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  title: PropTypes.number,
  content: PropTypes.string,
  date: PropTypes.string,
  categories: PropTypes.array,
};

export default Projects;
