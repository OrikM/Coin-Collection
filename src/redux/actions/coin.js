import * as types from "../constants";

// запись в store данных монеты
const showCoin = coin => ({
    type: types.SHOW_COIN,
    payload: {coin}
})

// обработчик полей ввода формы
export const changeHandler = e => ({
    type: types.EDIT_FORM,
    payload: {
        [e.target.name]: e.target.value
    }
});

// завершение редактирования / редактирования монеты
export const clearFields = () => ({
    type: types.CLOSE_EDITOR
})

export const clearCoinInfo = () => ({
    type: types.CLEAR_COIN_CACHE
})


export const addCoin = coin => dispatch => {
    const token = localStorage.getItem('token');

    return fetch('/coins/add/', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({...coin, token})
    })
        .then(res => res.json())
        .then(res => {
            if(res.added){
                dispatch(clearFields());
                dispatch({
                    type: types.ADD_COIN,
                    payload: {coin: res.coin}
                })
            }
        })
}

export const editCoin = editedCoin => dispatch => {
    const token = localStorage.getItem('token');

    return fetch('/coins/' + editedCoin.id, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({...editedCoin, token})
    })
        .then(res => res.json())
        .then(res => {
            if(res.edited){
                dispatch(clearFields());
                dispatch({
                    type: types.EDIT_COIN,
                    payload: {coin: res.coin}
                })
            }
        })
}

export const deleteCoin = id => dispatch => {
    const token = localStorage.getItem('token');

    return fetch('/coins/' + id, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({token})
    })
        .then(res => res.json())
        .then(res => {
            if(res.deleted){
                dispatch({
                    type: types.DELETE_COIN,
                    payload: {id}
                })
            }
        })
}

export const getCoinInfo = (id) => dispatch => {
    return fetch('/coinbyid/' + id,)
        .then(res => res.json())
        .then(coin => dispatch(showCoin(coin)))
}