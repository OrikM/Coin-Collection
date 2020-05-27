import { coin } from "./coin";
import { coins } from "./coins";
import { combineReducers } from "redux";
import { auth } from "./auth";
import { filter } from "./filter";
const rootReducer = combineReducers({ coin, coins, auth, filter });

export default rootReducer;
