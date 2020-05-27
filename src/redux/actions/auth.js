import * as types from "../constants";

export const formHandler = (e) => ({
  type: types.TYPE_TO_LOGIN,
  payload: {
    [e.target.name]: e.target.value,
  },
});

export const checkAuthorization = (authorized) => ({
  type: types.LOGGED_IN,
  payload: {
    authorized,
  },
});

export const authorization = (userData) => (dispatch) => {
  return fetch("http://localhost:3001/token", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: { "Content-type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.authorization) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("login", data.login);
      }
      dispatch(checkAuthorization(data.authorization));
    });
};
