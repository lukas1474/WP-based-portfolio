import { connect } from 'react-redux';
import { getAll, apiCategory1 } from '../../../redux/categoriesRedux';
import { getAllProjects, apiProject1} from '../../../redux/projectsRedux';

import PortfolioMain from './PortfolioMain';

const mapStateToProps = state => ({
  categories: getAll(state),
  projects: getAllProjects(state),
});

const mapDispatchToProps = dispatch => ({
  apiCategory: (results) => dispatch(apiCategory1(results)),
  apiProject: (results) => dispatch(apiProject1(results)),
});
console.log(apiCategory1)

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioMain);
