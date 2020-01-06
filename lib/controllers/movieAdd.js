const movie = require('../models/movie')

module.exports = {

    create: (req, res) => {
        movie.create({
            title: req.body.title,
            release_date: req.body.release_date,
            tagline: req.body.tagline,
            runtime: req.body.runtime,
            overview: req.body.overview,
            revenue: req.body.revenue
        }).then(movie => {
            res.json(newMovie)
        })
    }
}