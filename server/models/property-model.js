const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Property = new Schema(
    {
        location: { type: String, required: false },
        suburb: { type: String, required: false },
        price: { type: Number, required: false },
        bedroom: { type: Number, required: false },
        bathroom: { type: Number, required: false },
        available: { type: String, required: false },
        type: { type: String, required: false },
        description: { type: String, required: false },
        tags: { type: [String], required: false },
        images: { type: [String], required: false },
        agent: { 
            name: { type: String },
            photo: { type: String },
            email: { type: String },
         },
         cordinates: { 
            lat: { type: Number },
            lng: { type: Number },
         },
        
    }
)

module.exports = mongoose.model('property', Property)