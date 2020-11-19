import { connect } from 'react-redux';
// import { getAll } from '../../../redux/categoriesRedux';
import { getAllProjects, choseCategory } from '../../../redux/projectsRedux';

import Projects from './Projects';

const mapStateToProps = state => ({
  projects: getAllProjects(state),
});

const mapDispatchToProps = dispatch => ({
  choseCategory: activeCategory => dispatch(choseCategory({activeCategory})),
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
