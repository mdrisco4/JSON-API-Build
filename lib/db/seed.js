// Backend seeding done here



// const mongoose = require('mongoose');
const mongoose = require('./connection')
const axios = require('axios')
const moviesData = require('./data/data.json')
const Movie = require('../models/movie')




// Movie.find().then(data => {
//     console.log(data)
// })
// Movie.find( {runtime: { $gt: 120} } ).then(data => {
//     console.log(data)
// })
