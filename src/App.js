import React from 'react';
import PropTypes from 'prop-types';
import store from './redux/store'
import { Provider } from 'react-redux';

import './styles/global.scss';
import './styles/bootstrap.scss';

import PortfolioMain from './components/views/PortfolioMain/PortfolioMainContainer';
import MainLayout from './components/layout/MainLayout/MainLayout';

const App = () => (
  <Provider store={store}>
    <MainLayout>
      <PortfolioMain />
    </MainLayout>
  </Provider>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
