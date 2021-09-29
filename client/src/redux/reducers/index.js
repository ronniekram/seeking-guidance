import { combineReducers } from 'redux';
import cardReducer from './card';
import drawReducer from './draw';

export default combineReducers({
  cards: cardReducer,
  draws: drawReducer
});