const mongoose = require('mongoose')

const Schema = mongoose.Schema

const movieSchema = new Schema({
    genres = [Object],
    title = String,
    description = String,
    releaseDate = String,
    boxOfficeReturn = Number,
    runtime = Number,
    tagline = String
    });

    const Movie = mongoose.model("Movie", movieSchema);

    module.exports = Movie