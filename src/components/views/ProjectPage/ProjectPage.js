import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectPage.module.scss';
import logo from '../../../../src/logo.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import Projects from '../Projects/Projects';

class ProjectPage extends React.Component {

  // state = {
  //   activeCategory: 251,
  // };

  render() {

    const { id, title, image, choseCategory } = this.props;
    // const {activeCategory} = this.state;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <Link to={`/`} className={styles.link}>
              <button> {'<-'} Powrót </button>
            </Link>
            <p>{choseCategory}</p>
            {/* <p>{activeCategory}</p> */}
            <h2>{id}</h2>
            <p>{title}</p>
          </div>
          <div className='row'>
            <div className='row col-lg-3 col-md-4 col-6'>
              <img src={image} className={styles.App - logo} />
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
  activeCategory: PropTypes.string,
};




export default ProjectPage;
