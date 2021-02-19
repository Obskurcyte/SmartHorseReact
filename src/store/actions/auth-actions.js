import {GET_ONSALEHORSE} from "./onsale-horses";


export const LOGIN = 'LOGIN';
export const SIGN_UP = 'SIGN_UP';



export const login = (email, password) => {
  return async (dispatch, getState) => {
    console.log(getState)
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDH1AN6NL7ISd5iZbANXjQLHzfHf9nCrJA', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      })
    })
    const resData = await response.json();
    console.log(resData)
    let token = ''
    let message1 = 'Oups ! Une erreur est survenue';
    let message2 = 'Oups ! Une erreur est survenue';
    console.log(message2)
    if (!response.ok) {
      // const errorId = await response.json();
      console.log(resData.error);
      if (resData.error.message === 'EMAIL_NOT_FOUND') {
        message1 = "Cet email n'a pas été trouvé"
      } else if (resData.error.message === 'INVALID_PASSWORD') {
        message2 = "Ce mot de passe n'est pas valide"
        console.log(message2)
      }
    }

    token = (resData.idToken)
    console.log(token.toString())
    console.log(message1)

    dispatch({type: LOGIN, token: token, message1: message1, message2: message2} )
  }
}

export const signup = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDH1AN6NL7ISd5iZbANXjQLHzfHf9nCrJA',
      {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
      })
    })
    const resData = await response.json();
    const errors = [];
    let message = 'Oups ! Une erreur est survenue'
    if (!response.ok) {
      const errorId = await response.json();
      console.log(errorId.error.message);
      if (errorId.error.message === 'EMAIL_EXISTS') {
        message = "Cet email existe déjà"
        errors.push(message)
      } else if (resData.error.message === 'INVALID_PASSWORD') {
        message = "Ce mot de passe n'est pas valide"
        errors.push(message)
      }
      throw new Error(message);
    }
    dispatch({type: SIGN_UP, message: message})
  }
}

