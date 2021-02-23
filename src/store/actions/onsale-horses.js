export const GET_ONSALEHORSE = 'GET_ONSALEHORSE';
export const DELETE_HORSE = 'DELETE_HORSE'

export const fetchOnSaleHorse = () => {
    return async dispatch => {
        const response = await fetch('https://smarthorse-3b298-default-rtdb.firebaseio.com/onsalehorses.json')
        const resData = await response.json();
        const onsaleHorse = [];
        for (const id in resData) {
            onsaleHorse.push(resData[id])
        }
        dispatch({type: GET_ONSALEHORSE, chevaux: onsaleHorse, horseId: resData.name})
    }
}


