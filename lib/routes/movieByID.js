const express = require('express')
const router = express.Router()
// const MovieController = require('../controllers/movieByID')

router.route('/').get(function(req, res) {
    let id = req.params.id;
    Movie.findById(id, function(err, movie) {
        res.json(movie);
    });
});


module.exports = router