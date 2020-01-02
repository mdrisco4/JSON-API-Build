// Controller just grabs DB info


const actor = require('../models/actor')

module.exports = {

    index: (req, res) => {
        movie.find({}).then(actors => {
            res.json(actors)
        })
    }
}