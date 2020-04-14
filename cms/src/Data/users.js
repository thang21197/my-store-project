const axios = require('axios');
const dataUsers=axios.get('/users').then((res) =>res.data).then(res=>res);
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
 
export default dataUsers;

