const movie = require('../models/movie')

module.exports = {

    index: (req, res) => {
        let id = req.params.id;
        movie.find({"_id": ObjectId(`${id}`)}).then(movie => {
            res.json(movie)
        })
    }
}