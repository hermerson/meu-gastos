import {combineReducers} from 'redux';
import {reducer as account} from './accounts';
const reducers = combineReducers({
  account,
});

export default reducers;
