import { connect } from 'react-redux';
import { getAll, getMainCategory, fetchCategories } from '../../../redux/categoriesRedux';
import { getAllProjects, apiProject} from '../../../redux/projectsRedux';

import PortfolioMain from './PortfolioMain';

const mapStateToProps = (state, res) => ({
  categories: fetchCategories(res.data),
  projects: getAllProjects(state),
  mainCategory: getMainCategory(state),
});

const mapDispatchToProps = dispatch => ({
  // apiCategory: (results) => dispatch(apiCategory(results)),
  apiProject: (results) => dispatch(apiProject(results)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioMain);
