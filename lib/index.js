const express = require('express')
const app = express()
// const charactersRoutes = require('./lib/routes/characters.js')
const housesRoutes = require('./lib/routes/houses.js')

app.listen(8080, () => console.log('Port 8080, it works!') )

// app.use('/', charactersRoutes)
app.use('/', housesRoutes)