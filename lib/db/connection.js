const mongoose = require('mongoose')
// const axios = require('axios')



mongoose.connect("mongodb://localhost/movieDB", { 
useNewUrlParser: true,    
useUnifiedTopology: true 
})
.then( feedback => console.log("Connected to DB") )
.catch( error => console.log("It broke, here's why ", error) )

// mongoose.Promise = Promise


module.exports = mongoose