const mongoose = require('mongoose')

const Schema = mongoose.Schema

const movieSchema = new Schema({
    genres: [Object],
    title: String,
    overview: String,
    release_date: String,
    revenue: Number,
    runtime: Number,
    tagline: String
    });

    const Movie = mongoose.model("Movie", movieSchema);

    module.exports = Movie