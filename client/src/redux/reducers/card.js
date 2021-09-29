import { GET_CARDS } from '../actions';

const cardReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CARDS:
      return {
        cards: action.payload
      }
    default:
      return state;
  };
};

export default cardReducer;