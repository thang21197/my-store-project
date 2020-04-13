const axios = require('axios');
axios.get('/users').then((res) =>res.data).then(res=>console.log(res))