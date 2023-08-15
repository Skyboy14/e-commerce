import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../Redux/Reducer/Reducer';

// creating Store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
