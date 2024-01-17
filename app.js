const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const starRoutes = require('./routes/stars')
const planetRoutes = require('./routes/planets')
const userRoutes = require('./routes/users')
const fetch = require('node-fetch')

require('dotenv').config()

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())


// Connect to MongoDB
mongoose.connect(process.env.DBURL)
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error)
  });

app.use('/stars', starRoutes)
app.use('/planets', planetRoutes)
app.use('/users', userRoutes)

// Start server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});