// Controller just grabs DB info


const movie = require('../models/movie')

module.exports = {

    index: (req, res) => {
        movie.find({}).then(movies => {
            res.json(movies)
        })
    }
}