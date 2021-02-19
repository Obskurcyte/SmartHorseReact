export const CREATE_USER = 'CREATE_USER';
export const GET_USER = 'GET_USER';
export const GET_HORSES_BY_USER = 'GET_HORSES_BY_USER'


export const createUser = (email, name, firstname, phone, activity, denomination, adress, postalcode, city, id) => {
    return async dispatch => {
      const response =  await fetch(`https://smarthorse-3b298-default-rtdb.firebaseio.com/users.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: email,
          name,
          email,
          firstname,
          phone,
          activity,
          denomination,
          adress,
          postalcode,
          city,
          chevaux: ['Gloranie des Noes', 'LoveGame'],
        })
      });

        const resData = await response.json();

        const id = resData.name
        console.log(resData.name)

        dispatch({
            type: CREATE_USER,
            name: id
        })
    }
}

export const getUser = (idToken) => {
  return async dispatch => {
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDH1AN6NL7ISd5iZbANXjQLHzfHf9nCrJA', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      idToken
    })
  });

    const resData = await response.json();
    console.log(resData)
    console.log(resData.users[0].email)

   const userEmail = resData.users[0].email
   const userId = resData.users[0].localId

    dispatch({
      type: GET_USER,
      email: userEmail,
      id: userId
    })
}
}

export const getHorsesByUser = (email) => {
  return async dispatch => {
    const response = await fetch(`https://smarthorse-3b298-default-rtdb.firebaseio.com/users.json`)
    const resData = await response.json();
    let horses = []
    for (let res in resData) {
      console.log(resData[res].chevaux)
      if (email === resData[res].email) {
        horses = [resData[res].chevaux]
      }
      console.log(horses)
    }
    dispatch({
      type: GET_HORSES_BY_USER,
      ownedHorses: horses
    })
  }
}



