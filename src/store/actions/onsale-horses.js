export const GET_ONSALEHORSE = 'GET_ONSALEHORSE';
export const DELETE_HORSE = 'DELETE_HORSE'

export const fetchOnSaleHorse = () => {
    return async dispatch => {
        const response = await fetch('https://smarthorse-3b298-default-rtdb.firebaseio.com/onsalehorses.json')
        const resData = await response.json();
        console.log(resData);
        const onsaleHorse = [];
        for (const id in resData) {
            onsaleHorse.push(resData[id])
        }
        console.log(onsaleHorse)
        dispatch({type: GET_ONSALEHORSE, chevaux: onsaleHorse, horseId: resData.name})
    }
}

export const deleteHorse = id => {
  return async dispatch => {
    const response = await fetch(
      `https://smarthorse-3b298-default-rtdb.firebaseio.com/onsalehorses/${id}.json`,
      {
        method: 'DELETE'
      })
    dispatch({type: DELETE_HORSE, horseId: id})
    const resData = await response.json();
  }
}

