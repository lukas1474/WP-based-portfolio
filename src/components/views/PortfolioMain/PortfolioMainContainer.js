import { connect } from 'react-redux';
import { getAll } from '../../../redux/categoriesRedux';
import { getAllProjects } from '../../../redux/projectsRedux';
import { choseCategory } from '../../../redux/categoriesRedux';

import PortfolioMain from './PortfolioMain';

const mapStateToProps = state => ({
  categories: getAll(state),
  projects: getAllProjects(state),
});

const mapDispatchToProps = dispatch => ({
  setState: activeCategory => dispatch(choseCategory({ activeCategory })),
});

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioMain);
