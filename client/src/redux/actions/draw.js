import { GET_DRAWS, POST_DRAW } from './index';
const baseUrl = 'http://localhost:3000';

export const getDraws = () => dispatch => {
  return fetch(`${baseUrl}/draws`)
  .then(resp => {
    if (resp.ok) {
      return resp.json().then(draws => {
        dispatch({ type: GET_DRAWS, payload: draws })
      })
    } else {
      return Promise.reject();
    };
  });
};

export const postDraw = (drawObj, history) => dispatch => {
  return fetch(`${baseUrl}/draws`, {
    method: 'POST',
    headers: {
      'Accept': "application/json",
      'Content-Type': "application/json"
    },
    body: JSON.stringify(drawObj)
  })
  .then(resp => {
    if (resp.ok) {
      return resp.json().then(draw => {
        dispatch({ type: POST_DRAW, payload: draw });
        history.push(`/draws/${draw.id}`)
      })
    } else {
      return Promise.reject();
    }
  });
};