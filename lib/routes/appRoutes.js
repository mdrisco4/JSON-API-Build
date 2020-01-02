// This is for routing to different data libraries I can eventually have,
// ...this one only goes to movies right now



const express = require('express')
const router = express()
const moviesRouter = require('./movie')

router.use('/', moviesRouter)

module.exports = router