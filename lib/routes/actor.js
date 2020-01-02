// appRoutes going to actors library comes here
// to get and manipulate data, path routed to movie controller


const express = require('express')
const router = express.Router()
const ActorController = require('../controllers/actor')

router.get('/', ActorController.index )
    
    //    try {
        //      const movies = await Movie.find()
        //    res.json(movies)
        //} catch (err) {
            //  res.status(500).json({ message: err.message })
            //}


module.exports = router