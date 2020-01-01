const axios = require('axios')

key = "a97f5a3b1d48f9145cee77dea3f53c61"
url = "https://api.themoviedb.org"
// nowPlayingQuery = "/3/movie/now_playing"
movieQuery = "/3/movie/"
keyPrompt = "?api_key="
language = "&language=en-US"

// for (i = 1; 1 < 5; i++) {
axios.get(url + movieQuery + "6" + keyPrompt + key + language)
  .then(function (res) {
    // handle success
    console.log(res);
    // console.log(res.data.original_title)
    // console.log(res.data.overview)
    // console.log(res.data.genres);
    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
// }