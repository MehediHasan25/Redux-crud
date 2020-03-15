import { combineReducers } from 'redux';
import addReducer from './addReducer';



const rootReducer = combineReducers({
  add: addReducer
});

export default rootReducer;