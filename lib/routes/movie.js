const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('hello from the backend!!')
})
    
    //    try {
        //      const movies = await Movie.find()
        //    res.json(movies)
        //} catch (err) {
            //  res.status(500).json({ message: err.message })
            //}


module.exports = router


