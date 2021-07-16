const mongoose = require('mongoose');

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