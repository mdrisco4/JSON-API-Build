// Controller just grabs DB info


const movie = require('../models/actor')

module.exports = {

    index: (req, res) => {
        movie.find({}).then(actors => {
            res.json(actors)
        })
    }
}