// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from "react-router-dom"
// import App from '../src/App';
// import './index.css';

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect("mongodb://localhost/movieDB", { 
useNewUrlParser: true,    
useUnifiedTopology: true 
})
const db = mongoose.connection
// db.on('error', (error) => console.error(error))
// db.once('open', () => console.log('connected to database'))

app.use(cors())
app.use(express.json())


app.use('/', require('./routes/appRoutes'))

app.listen(8080, () => console.log('Port 8080, it works!') )

// app.use('/', charactersRoutes)
// app.use('/', housesRoutes)



// ReactDOM.render(
//     <Router>
//       <App />
//     </Router>,
//     document.getElementById('root')
//   );