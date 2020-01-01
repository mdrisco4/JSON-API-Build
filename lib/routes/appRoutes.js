const express = require('express')
const router = express()
const moviesRouter = require('./movie')

router.use('/movies', moviesRouter)

module.exports = router