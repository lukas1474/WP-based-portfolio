import React from 'react';
import styles from './Projects.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProjectPage from '../ProjectPage/ProjectPageContainer';

class Projects extends React.Component {

  render() {
    const { id, image, date, title, choseCategory, children} = this.props
    return (
      <div className={styles.root} >
        <div className='container'>
          <div>
            <Link to={`/project/${id}`}  className={styles.link}>
              <h2 className={styles.id}>{id}</h2>
              <p className={styles.date}>{date}</p>
              <p className={styles.title}>
                {title.rendered}
                <img src={image} className={styles.logo} />
              </p>
              {props => <ProjectPage {...props} key={this.props.id} />}
              {/* {children} */}
            </Link>
            <p>{choseCategory}</p>
          </div>
        </div>
      </div >
    );
  }
}

Projects.propTypes = {
  children: PropTypes.node,
  id: PropTypes.node,
  title: PropTypes.number,
  content: PropTypes.string,
  date: PropTypes.string,
  categories: PropTypes.array,
  image: PropTypes.node,
  initialState: PropTypes.node,
  children: PropTypes.array,
};

export default Projects;
