import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import accountReducer from './account';

const reducer = combineReducers({
  accountReducer,
  form: reduxFormReducer, // mounted under "form"
});
//const store = (window.devToolsExtension
//  ? window.devToolsExtension()(createStore)
//  : createStore)(reducer);

const store = createStore(reducer);

export default store;
