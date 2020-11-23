import { connect } from 'react-redux';
import { getAllProjects } from '../../../redux/projectsRedux';

import Projects from './Projects';

const mapStateToProps = state => ({
  projects: getAllProjects(state),
});

export default connect(mapStateToProps)(Projects);
