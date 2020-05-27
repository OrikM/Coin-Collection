import * as types from '../constants';

const initialState = {coin: {}, query: true};

export const coin = (state = initialState, action) => {
    switch(action.type){
        case types.SHOW_COIN:
            return {
                ...state,
                coin: action.payload.coin
            }
        case types.CLOSE_EDITOR:
            return {
                ...state,
                query: false,
            }
        case types.CLEAR_COIN_CACHE:
            return {
                query: true,
                coin: {}
            }
        case types.EDIT_FORM:
            return {
                ...state,
                coin: {
                    ...state.coin,
                    ...action.payload
                }
            }
            default:
                return state;
    }
}