// appRoutes going to movies library comes here
// to get and manipulate data, path routed to movie controller


const express = require('express')
const router = express.Router()
const MovieController = require('../controllers/movie')

router.get('/', MovieController.index )
    
    //    try {
        //      const movies = await Movie.find()
        //    res.json(movies)
        //} catch (err) {
            //  res.status(500).json({ message: err.message })
            //}


module.exports = router


