// Used to connect to DB

const mongoose = require('mongoose')

mongoURL = "mongodb://localhost/movie-db"

mongoose.Promise = Promise

let mongoURI = ''

if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/movie-apis";
}

mongoose.connect(mongoURI, { 
    useNewUrlParser: true,    
    useUnifiedTopology: true 
})
.then( feedback => console.log("Connected to DB") )
.catch( error => console.log("It broke, here's why ", error) )



module.exports = mongoose