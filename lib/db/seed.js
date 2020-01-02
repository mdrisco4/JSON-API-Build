// const mongoose = require('mongoose');
const mongoose = require('./connection')
const axios = require('axios')
const moviesData = require('./data/data.json')
const Movie = require('../models/movie')




Movie.find().then(data => {
    console.log(data)
})
// Movie.find( {runtime: { $gt: 120} } ).then(data => {
//     console.log(data)
// })










// axios.get(url + movieQuery + keyPrompt + key)
//   .then(function (res) {
//     // handle success
//     console.log(res);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });




//   Movie.deleteMany({}).then( () => {
//     Movie
//     .create(moviesData)
//     .then( movies => {
//         console.log("Created: ", movies)
//         process.exit()
//     })
//     .catch( (err) => {
//         console.log('AAAUUUUGGGGHHHHH', err)
//     })
// })



//   Movie.deleteMany({}).then( () => {
//     Movie.create(seedData).then( (movie) => {
//         console.log(movie)
//         process.exit()
//     })
// })
