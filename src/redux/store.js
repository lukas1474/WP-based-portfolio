import {combineReducers, createStore} from 'redux';
import categoriesReducer from './categoriesRedux';
import projectsReducer from './projectsRedux';

const reducers ={
  categories: categoriesReducer,
  projects: projectsReducer,
};

const combinedReducers = combineReducers(reducers);

const store = createStore(
  combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
