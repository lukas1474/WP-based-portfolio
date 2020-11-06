import { connect } from 'react-redux';
import { getAllProjects } from '../../../redux/projectsRedux';

import ProjectPage from './ProjectPage';

const mapStateToProps = state => ({
  projects: getAllProjects(state),
});

export default connect(mapStateToProps)(ProjectPage);
