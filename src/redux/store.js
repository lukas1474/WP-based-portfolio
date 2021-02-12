import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import categoriesReducer from './categoriesRedux';
import projectsReducer from './projectsRedux';

const reducers ={
  categories: categoriesReducer,
  projects: projectsReducer,
};

const combinedReducers = combineReducers(reducers);

const store = createStore(
  combinedReducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  ),
);

export default store;
