const mongoose = require('mongoose')

mongoURL = "mongodb://localhost/movie-db"

mongoose.Promise = Promise

mongoose.connect(mongoURL, { 
    useNewUrlParser: true,    
    useUnifiedTopology: true 
})
.then( feedback => console.log("Connected to DB") )
.catch( error => console.log("It broke, here's why ", error) )



module.exports = mongoose