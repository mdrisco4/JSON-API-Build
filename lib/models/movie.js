const mongoose = require("../db/connection")

const Schema = mongoose.Schema

const movieSchema = new Schema({
    // firstName: {
    //     type: String,
    //     trim: true,
    //     minlength: 2,
    //     maxlength: 30
    //     },
    //     lastName: {
    //     type: String,
    //     trim: true,
    //     minlength: 2,
    //     maxlength: 36
    //     },
    //     cookbooks: [cookbookSchema]
    });

    const Movie = mongoose.model("Movie", movieSchema);

    module.exports = Movie