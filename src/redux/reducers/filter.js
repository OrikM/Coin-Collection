import * as types from "../constants";

const initialState = {
  country: "",
  yearFrom: "",
  yearTo: "",
  quality: "",
  metal: "",
  search: "",
  priceFrom: "",
  priceTo: "",
  limit: 4,
  offset: 0,
};

export const filter = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_FILTER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
