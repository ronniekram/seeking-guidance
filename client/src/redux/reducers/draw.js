import { GET_DRAWS, POST_DRAW } from '../actions';

const drawReducer = (state = {draws: []}, action) => {
  switch (action.type) {
    case GET_DRAWS:
      return {
        ...state,
        draws: action.payload
      }
    case POST_DRAW:
      return {
        ...state,
        draws: [...state.draws, action.payload]
      }
    default:
      return state;
  };
};

export default drawReducer;