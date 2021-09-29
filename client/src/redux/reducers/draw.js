import { GET_DRAWS, POST_DRAW } from '../actions';

const drawReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_DRAWS:
      return {
        draws: action.payload
      }
    case POST_DRAW:
      return {
        draws: [...state, action.payload]
      }
    default:
      return state;
  };
};

export default drawReducer;