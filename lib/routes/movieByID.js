const express = require('express')
const router = express.Router()
const MovieController = require('../controllers/movieByID')

router.get('/', MovieController.index )


module.exports = router