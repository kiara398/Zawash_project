const mongoose = require('mongoose');

const washerSchema = new mongoose.Schema({
    fullnames:{
        type: String,
        trim: true,
    },
    Gender:{
        type: String,
        trim: true,
    },
    dob:{
        type: Date,
    },
    res:{
        type: String,
        trim: true,
    },
    nin:{
        type: String,
        trim: true,
    },
    zwash:{
        type: String,
        trim:true,
    }

})

module.exports = mongoose.model('Washer', washerSchema);