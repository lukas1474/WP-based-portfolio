import { connect } from 'react-redux';
import { getCategory } from '../../../redux/categoriesRedux';
import { getProjectById, getAllProjects } from '../../../redux/projectsRedux';

import ProjectPage from './ProjectPage';

const mapStateToProps = (state, props) => {
  const projects = getAllProjects(state);
  const project = getProjectById(state, props.match.params.projectId);
  const projectCategories = project
    ? project.categories.map((categoryId) => getCategory(state, categoryId))
    : [];
  return {
    projects,
    project,
    projectCategories,
  };
};

export default connect(mapStateToProps)(ProjectPage);
