import { connect } from 'react-redux';
import { getAllProjects, getProjectById } from '../../../redux/projectsRedux';

import ProjectPage from './ProjectPage';

const mapStateToProps = (state, props) => {
 const projects = getAllProjects(state);
 const project = getProjectById(state, props.match.params);
  return {
    projects,
    project,
  }
};

export default connect(mapStateToProps)(ProjectPage);
