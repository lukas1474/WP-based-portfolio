import React from 'react';
import styles from './Projects.scss';
import PropTypes from 'prop-types';
import logo from '../../../../src/logo.svg';

const Projects = ({id, content, date, title}) => (

  < div className={styles.root} >
    <div className='container'>
      <div>
        <p>{id}</p>
        <h2>{date}</h2>
        <p className='title'> {title.rendered}
          <img src={logo} className='App-logo' />
        </p>
      </div>
    </div>
  </div >

);

Projects.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  title: PropTypes.number,
  content: PropTypes.string,
  date: PropTypes.string,
  categories: PropTypes.array,
};

export default Projects;
