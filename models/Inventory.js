//require mongoose dependency into our file
const mongoose = require('mongoose');

//create a new schema
const inventorySchema = new mongoose.Schema({
    item:{
        type: String,
        trim: true,
    },

    price:{
        type: Number,
    },

    doi:{
        type: Date,
    }
})

module.exports = mongoose.model('Inventory', inventorySchema);