import { connect } from 'react-redux';
import {
  getAll,
  apiCategory,
  getMainCategory,
} from '../../../redux/categoriesRedux';
import { getAllProjects, apiProject } from '../../../redux/projectsRedux';

import PortfolioMain from './PortfolioMain';

const mapStateToProps = (state) => ({
  categories: getAll(state),
  projects: getAllProjects(state),
  mainCategory: getMainCategory(state),
});

const mapDispatchToProps = (dispatch) => ({
  apiCategory: (results) => dispatch(apiCategory(results)),
  apiProject: (results) => dispatch(apiProject(results)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioMain);
