const dotenv = require('dotenv').config()
const mongoose = require('mongoose')

const mongoUrl = process.env.MONGODB_SERVER_URL

mongoose
    .connect(mongoUrl, { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    });
    console.log('Database connected successfully');


const db = mongoose.connection

module.exports = db