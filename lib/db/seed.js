// Backend seeding done here



// const mongoose = require('mongoose');


// const mongoose = require('./connection')
// const axios = require('axios')
// const moviesData = require('./data/data.json')
// const Movie = require('../models/movie')




const mongoose = require('./connection')


const data = require('./data/actorData.json')
const Actor = require('../models/actor')

// write our seed file
// Delete our original content first
Actor.deleteMany({}).then( () => {
    // console.log(bookmarks)})
    Actor
    .create(data)
    .then( actors => {
        console.log("Created: ", actors)
        process.exit()
    })
    .catch( (err) => {
        console.log('AAAUUUUGGGGHHHHH', err)
    })
})



// const data = require('./data/movieData.json')
// const Movie = require('../models/movie')

// // write our seed file
// // Delete our original content first
// Movie.deleteMany({}).then( () => {
//     // console.log(bookmarks)})
//     Movie
//     .create(data)
//     .then( movies => {
//         console.log("Created: ", movies)
//         process.exit()
//     })
//     .catch( (err) => {
//         console.log('AAAUUUUGGGGHHHHH', err)
//     })
// })
// Extra note for commit
