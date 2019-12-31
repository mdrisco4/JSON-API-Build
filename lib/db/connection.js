const mongoose = require('mongoose')
const axios = require('axios')


mongoose.connect("mongodb://localhost/", { 
useNewUrlParser: true,    
useUnifiedTopology: true 
})


mongoose.Promise = Promise


module.exports = mongoose