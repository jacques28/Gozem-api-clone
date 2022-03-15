const mongoose = require('mongoose');
const geocoder = require('geocoder');

mongoose.connect(DB_CONNECTION,{ useNewUrlParser: true ,useUnifiedTopology: true});

let Schema = mongoose.Schema;

let PositionSchema = new Schema({
    name: {         //Our location
        type: String,
        require: true
    },
    // geometry: [{
    //     radius: 75,
    //     type: "Point",
    //     shapeType: "Circle",

    type: String,           //Feature
        coordinates: {         //latitude and longitude
            lat: String,
            log: String
        }
})


module.exports = mongoose.model('Position', PositionSchema)