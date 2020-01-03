// This is for routing to different data libraries I can eventually have,
// ...this one only goes to movies right now



const express = require('express')
const router = express()

const moviesRouter = require('./movie')
router.use('/movies', moviesRouter)

// Need to set up the rest of this route, I THINK frontend is set
const movieByIDRouter = require('./movieByID')
router.use('/movies/id', movieByIDRouter)

// Need to set up the rest of this route, frontend is set

const movieAdd = require('./movieAdd')
router.use('/movies/add', movieAdd)

const actorsRouter = require('./actor')
router.use('/actors', actorsRouter)

module.exports = router