import { GET_COINS, DELETE_COIN } from "../constants";
const initialState = [];
export const coins = (state = initialState, action) => {
  switch (action.type) {
    case GET_COINS:
      return action.coins;
    case DELETE_COIN:
      return state.filter(coin => coin.id !== action.payload.id);
    default:
      return state;
  }
};
