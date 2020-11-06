import React from 'react';
import styles from './Projects.module.scss';
import PropTypes from 'prop-types';
import logo from '../../../../src/logo.svg';
import { Link } from 'react-router-dom';

const Projects = ({ id, content, date, title }) => (

  < div className={styles.root} >
    <div className='container'>
      <div>
        <Link to={`/project/${id}`}>
          <p>{id}</p>
          <h2>{date}</h2>

          <p className={styles.title}>

            {title.rendered}
            <img href={`/project/${id}`} src={logo} className={styles.App - logo} />
          </p>
          <button href={`/project/${id}`}>
            kliknij
          </button>
        </Link>
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
