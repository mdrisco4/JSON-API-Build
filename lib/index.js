// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from "react-router-dom"
// import App from '../src/App';
// import './index.css';

const express = require('express')
const app = express()
const mongoose = require('mongoose')


app.listen(8080, () => console.log('Port 8080, it works!') )

// app.use('/', charactersRoutes)
// app.use('/', housesRoutes)



// ReactDOM.render(
//     <Router>
//       <App />
//     </Router>,
//     document.getElementById('root')
//   );