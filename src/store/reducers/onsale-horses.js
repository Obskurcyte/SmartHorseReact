import {GET_ONSALEHORSE} from '../actions/onsale-horses';
import {DELETE_HORSE} from "../actions/onsale-horses";

const initialState = {
    onSaleHorses: [],
    horseId: ''
}

const onSaleHorseReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_ONSALEHORSE :
            return {
                onSaleHorses: action.chevaux,
                horseId: action.horseId
            }
      case DELETE_HORSE:
        return {
          ...state,
          onSaleHorses: state.onSaleHorses.filter(horse => horse.id !== action.horseId)
        }
    }
    return state
}

export default onSaleHorseReducer;
