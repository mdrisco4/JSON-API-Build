const movie = require('../models/movie')

module.exports = {

    index: (req, res) => {
        movie.create().then(movie => {
            res.json(movie)
        })
    }
}