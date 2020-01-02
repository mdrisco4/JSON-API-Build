// Starting point for backend routes



const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect("mongodb://localhost/movie-db", { 
useNewUrlParser: true,    
useUnifiedTopology: true 
})
// const db = mongoose.connection

app.use(cors())
app.use(express.json())


app.use('/', require('./routes/appRoutes'))

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
