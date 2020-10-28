import { connect } from 'react-redux';
import { getAll } from '../../../redux/categoriesRedux';

import PortfolioMain from './PortfolioMain';

const mapStateToProps = state => ({
  categories: getAll(state),
});

export default connect(mapStateToProps)(PortfolioMain);
