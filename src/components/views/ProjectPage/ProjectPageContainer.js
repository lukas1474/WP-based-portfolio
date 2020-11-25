import { connect } from 'react-redux';
import { getCategory, getAll } from '../../../redux/categoriesRedux';
import { getAllProjects, getProjectById } from '../../../redux/projectsRedux';

import ProjectPage from './ProjectPage';

const mapStateToProps = (state, props) => {
 const projects = getAllProjects(state);
 const project = getProjectById(state, props.match.params);
 const category = getCategory(state, props.match.params);
 const categories = getAll(state);
  return {
    projects,
    project,
    category,
    categories,
  }
};

export default connect(mapStateToProps)(ProjectPage);
