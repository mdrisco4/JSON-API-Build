// Model for actors


const mongoose = require('mongoose')

const Schema = mongoose.Schema

const actorSchema = new Schema({
    name: String,
    also_known_as: [String],
    birthday: String,
    place_of_birth: String,
    imdb_id: Number,
    biography: Number,
    tagline: String
    });

    const Actor = mongoose.model("Movie", actorSchema);

    module.exports = Actor