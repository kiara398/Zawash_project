//require mongoose into our file. 
const mongoose = require('mongoose');

//create a schema
const cartrackSchema = new mongoose.Schema({
    numberPlate:{
        type: String,
        trim: true,
    },

    datetimeArrival: {
        type: Date,
        trim: true,
        },

    carType:{
        type: String,
        trim: true,
    },

    washer:{
        type: String,
        trim: true,
    },
    
    color:{
        type: String,
        trim: true,
    },

    package:{
        type: String,
        trim: true,
    }
})
//export the schema
module.exports = mongoose.model('Cartrack', cartrackSchema);