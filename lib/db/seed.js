const mongoose = require('mongoose');
const axios = require('axios')

key = b1eee7739244c5dc35ac8dec324d6529

axios.get('/user?ID=12345')
  .then(function (res) {
    // handle success
    console.log(res);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });