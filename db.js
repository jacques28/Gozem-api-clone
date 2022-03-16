const mongoose = require('mongoose');
require('dotenv').config();
//const geocoder = require('geocoder');

mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true ,useUnifiedTopology: true});

const Schema = mongoose.Schema;

const GeoSchema = new Schema({
    type: {
        type: String,
        default:"Point"
    },
    coordinates:{
        type:[Number],
        index:"2dsphere"
    }

})

const PositionSchema = new Schema({
    name:{
        type: String
    },
    available:{
        type: Boolean,
        default: false
    },
    geometry: GeoSchema


});


module.exports = mongoose.model('Position', PositionSchema)
