import { BASE_URL, GET_CARDS } from './index';
// import axios from 'axios';

export const getCards = () => dispatch => {
  fetch(`${BASE_URL}/cards`)
  .then(resp => {
    if (resp.ok) {
      return resp.json().then(cards => dispatch({ type: GET_CARDS, payload: cards.data }))
    } else {
      return Promise.reject();
    };
  });
};