// This is for routing to different data libraries I can eventually have,
// ...this one only goes to movies right now



const express = require('express')
const router = express()

const moviesRouter = require('./movie')
router.use('/movies', moviesRouter)

const movieByIDRouter = require('./movieByID')
// router.use(`/movies/${movie._id}`, movieByIDRouter)
router.use('/movies/id', movieByIDRouter)

const actorsRouter = require('./actor')
router.use('/actors', actorsRouter)

module.exports = router