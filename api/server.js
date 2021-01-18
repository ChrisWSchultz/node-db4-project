// module imports
const express = require('express')

// middleware imports

// route imports
const recipes = require('./routes/recipes')

// app
const app = express()

// modules
app.use(express.json())

// middleware


// routes
app.use('/api', recipes)

module.exports = app
