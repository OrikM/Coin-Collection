import { GET_COINS } from "../constants";

export const get_coins = (id) => (dispatch) => {
  fetch(`/coins/${id}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: GET_COINS, coins: data });
    });
};
export const getAllCoins = (id) => (dispatch) => {
  fetch(`/all_coins/`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dispatch({ type: GET_COINS, coins: data });
    });
};
