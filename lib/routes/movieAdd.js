const express = require('express')
const router = express.Router()
const MovieController = require('../controllers/movieAdd')

router.get('/add', MovieController.create )


module.exports = router