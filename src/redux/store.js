import {combineReducers, createStore} from 'redux';
import categoriesRedux from './categoriesRedux';

const reducers ={
  categories: categoriesRedux,
};

const combinedReducers = combineReducers(reducers);

const store = createStore(
  combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
