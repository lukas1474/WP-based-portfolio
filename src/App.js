import React from 'react';
import PropTypes from 'prop-types';

import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './redux/store'

import './styles/global.scss';
import './styles/bootstrap.scss';

import PortfolioMain from './components/views/PortfolioMain/PortfolioMainContainer';
import MainLayout from './components/layout/MainLayout/MainLayout';
import ProjectPage from './components/views/ProjectPage/ProjectPageContainer';


const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path='/' component={PortfolioMain} />
          <Route exact path='/:projectId' component={ProjectPage} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
