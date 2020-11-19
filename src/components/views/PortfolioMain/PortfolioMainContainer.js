import { connect } from 'react-redux';
import { getAll } from '../../../redux/categoriesRedux';
import { getAllProjects} from '../../../redux/projectsRedux';

import PortfolioMain from './PortfolioMain';

const mapStateToProps = state => ({
  categories: getAll(state),
  projects: getAllProjects(state),
});

export default connect(mapStateToProps)(PortfolioMain);
