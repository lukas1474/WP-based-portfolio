import React from 'react';
import styles from './Projects.scss';
import logo from '../../../../src/logo.svg';

class Projects extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div className='container'>
          <div>
            <p>PROJECTS COMPONENT
              <img src={logo} className='App-logo' />
            </p>
          </div>
        </div>
      </div>

    );
  }
}

export default Projects;
