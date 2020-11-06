import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectPage.module.scss';
import logo from '../../../../src/logo.svg';

class ProjectPage extends React.Component {

  render() {

    const {id, title} = this.props;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <h2>{id}</h2>
            <p>{title}</p>
          </div>
          <div className='row'>
            <div className='row col-lg-3 col-md-4 col-6'>
              <img src={logo} className={styles.App - logo} />
              <img src={logo} className={styles.App - logo} />
              <img src={logo} className={styles.App - logo} />
              <img src={logo} className={styles.App - logo} />
              <img src={logo} className={styles.App - logo} />
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
};




export default ProjectPage;
