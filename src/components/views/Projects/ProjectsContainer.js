import { connect } from 'react-redux';
import { getAllProjects } from '../../../redux/projectsRedux';
import { getAll } from '../../../redux/categoriesRedux';

import Projects from './Projects';

const mapStateToProps = state => ({
  projects: getAllProjects(state),
  categories: getAll(state),
});

export default connect(mapStateToProps)(Projects);
