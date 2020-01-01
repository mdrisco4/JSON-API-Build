const express = require('express')
const movieController = require('../controllers/movie')
// const Movie = require('../models/movie')

const movieRouter = express.router()

movieRouter.get('/', movieController.index)








// router.get('/', (req, res) => {
//     res.send('hello from the backend!!')

//    try {
  //      const movies = await Movie.find()
    //    res.json(movies)
    //} catch (err) {
      //  res.status(500).json({ message: err.message })
    //}
// })

// router.post('/', async (req, res) => {
//     const movie = new Movie({
//         genres = req.body.genres,
//         title = req.body.title,
//         description = req.body.overview,
//         releaseDate = req.body.release_date,
//         boxOfficeReturn = req.body.revenue,
//         runtime = req.body.runtime,
//         tagline = req.body.tagline
//       })
    
//       try {
//         const newMovie = await movie.save()
//         res.status(201).json(newMovie)
//       } catch (err) {
//         res.status(400).json({ message: err.message })
//       }
// })


module.exports = movieRouter