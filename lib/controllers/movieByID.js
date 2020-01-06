const movie = require('../models/movie')

module.exports = {

    id: (req, res) => {
        let id = req.params.id;
        movie.find({"_id": req.params.id}).then(movie => {
            res.json(movie)
        })
    }
}