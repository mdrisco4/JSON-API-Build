// const express = require('../../node_modules/express')
// // const moviesController = require('../controllers/movies')

// const moviesRouter = express.Router()

// // Assign each key from my controller to a specific route
// moviesRouter.get('/', moviesController.index)

// module.exports = moviesRouter



const express = require('express')
const router = express.Router()
const Movie = require('../models/movie')

router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find()
        res.json(movies)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.post('/', async (req, res) => {
    const movie = new Movie({
        genres = req.body.genres,
        title = req.body.title,
        description = req.body.overview,
        releaseDate = req.body.release_date,
        boxOfficeReturn = req.body.revenue,
        runtime = req.body.runtime,
        tagline = req.body.tagline
      })
    
      try {
        const newMovie = await movie.save()
        res.status(201).json(newMovie)
      } catch (err) {
        res.status(400).json({ message: err.message })
      }
})


module.exports = router