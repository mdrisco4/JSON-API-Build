const movie = require('../models/movie')

module.exports = {

    index: (req, res) => {
        movie.findById(req.params.id).then(movie => {
            res.json(movie)
        })
    }
}