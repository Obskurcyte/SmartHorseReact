import {CREATE_USER, GET_HORSES_BY_USER} from '../actions/users-actions.js';
import {GET_USER} from "../actions/users-actions.js";
import {LOGIN} from "../actions/auth-actions";
import {SIGN_UP} from "../actions/auth-actions";
import {act} from "@testing-library/react";


const initialState = {
    users: [],
    token: '',
    email: '',
    horse_email: [],
    name: '',
    message1: '',
    message2: '',
    id: '',
    ownedHorses: []
}

const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case CREATE_USER :
          return {
            name: action.name
          }
      case LOGIN:
        return {
          token: action.token,
          message1: action.message1,
          message2: action.message2
      }
      case SIGN_UP:
        return {
          message: action.message
        }
      case GET_USER:
        return {
          email: action.email,
          id: action.id
        }
      case GET_HORSES_BY_USER: {
        return {
          horse_email: action.email,
          ownedHorses: action.ownedHorses
        }
      }
    }
    return state
}

export default userReducer;
