import * as types from "../constants";

export const filter = (filters) => ({
  type: types.SET_FILTER,
  payload: filters,
});

export const filters = (filters) => (dispatch, getState) => {
  dispatch(filter(filters));
  let reduxFilter = getState().filter;
  fetch(`/filter/`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(reduxFilter),
  })
    .then((res) => res.json())
    .then((data) => dispatch({ type: types.GET_COINS, coins: data.coins }));
};
