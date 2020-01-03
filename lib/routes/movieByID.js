const express = require('express')
const router = express.Router()
const MovieController = require('../controllers/movie')

router.get('/:id', MovieController.index )


module.exports = router