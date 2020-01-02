const express = require('express')
const router = express()
const moviesRouter = require('./movie')

router.use('/', moviesRouter)

module.exports = router