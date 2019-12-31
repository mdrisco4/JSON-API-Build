const express = require('../../node_modules/express')
// const moviesController = require('../controllers/movies')

const moviesRouter = express.Router()

// Assign each key from my controller to a specific route
moviesRouter.get('/', moviesController.index)

module.exports = moviesRouter