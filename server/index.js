const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv').config()
const app = express()

// const Property = require('./models/property-model')
const db = require('./db')
const propertyRouter = require('./routes/property-router')
const port = process.env.SERVER_PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', propertyRouter)

app.listen(port, () => console.log(`Server running on port ${port}`))