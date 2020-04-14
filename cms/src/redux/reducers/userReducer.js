import dataUsers from '../../Data/users';
const axios = require('axios');

const usersInitialState = {
    users:'ABc'
}
axios.get('/users')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });


const userReducer = (state = usersInitialState, action) => {
    switch (action.type) {
        case "DO_ST":
            return state
        default:
            return state
    }
}

export default userReducer