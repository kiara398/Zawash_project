//require mongoose into our file. 
const mongoose = require('mongoose');

//create a schema
const cartrackSchema = new mongoose.Schema({
    numberPlate:{
        type: String,
        trim: true,
    },

    today:{
        type: Date,
    },

    datetimeArrival: {
        type: Date,
        },

    carType:{
        type: String,
        trim: true,
    },

    washer:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Washer',
    },
    
    color:{
        type: String,
        trim: true,
    },

    package:{
        type: String,
        trim: true,
    },

    packagePrice:{
        type: Number,
    },

    washerFee:{
        type: Number,
    }
})
//export the schema
module.exports = mongoose.model('Cartrack', cartrackSchema);