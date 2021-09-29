import { combineReducers } from 'redux';
import cardReducer from './card';
import drawReducer from './draw';

export default combineReducers({
  card: state => "testing cards",
  draw: state => "testing draws"
});