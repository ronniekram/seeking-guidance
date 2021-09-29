import { GET_CARDS } from './index';
// import axios from 'axios';

const baseUrl = 'http://localhost:3000';

export const getCards = () => dispatch => {
  return fetch(`${baseUrl}/cards`)
  .then(resp => {
    if (resp.ok) {
      return resp.json().then(cards => {
        dispatch({ type: GET_CARDS, payload: cards })
      })
    } else {
      return Promise.reject();
    };
  });
};