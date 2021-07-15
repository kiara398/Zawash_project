const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    item:{
        type: String,
        trim: true,
    },
    quantity:{
        type: Number,
    },
    amount:{
        type: Number,
    },

    doi:{
        type: Date,
    },

    unitPrice:{
        type:Number,
    },
    inventoryPrices:{
        type:Number,
    }
})

module.exports = mongoose.model('Inventory', inventorySchema);