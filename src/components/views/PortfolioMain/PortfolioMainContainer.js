import { connect } from 'react-redux';
import { getAll } from '../../../redux/categoriesRedux';
import { getAllProjects} from '../../../redux/projectsRedux';

import PortfolioMain from './PortfolioMain';

const mapStateToProps = state => ({
  categories: getAll(state),
  projects: getAllProjects(state),
});

// const mapDispatchToProps = dispatch => ({
//   publishedProjects: () => dispatch(fetchPublishedProjects()),
// });

export default connect(mapStateToProps)(PortfolioMain);
