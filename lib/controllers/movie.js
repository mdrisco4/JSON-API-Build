const movie = require('../models/movie')

module.exports = {

    index: (req, res) => {
        movie.find({}).then(movies => {
            res.json(movies)
        })
    }
}