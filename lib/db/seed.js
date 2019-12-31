// const mongoose = require('mongoose');
const axios = require('axios')

key = "b1eee7739244c5dc35ac8dec324d6529"
url = "https://api.themoviedb.org"
movieQuery = "/3/movie/35"
keyPrompt = "?api_key="


axios.get(url + movieQuery + keyPrompt + key)
  .then(function (res) {
    // handle success
    // console.log(res);
    console.log(res.data.original_title)
    console.log(res.data.overview)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });