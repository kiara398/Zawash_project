const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose')
const managerSchema = new mongoose.Schema({
    fnames:{
        type: String,
        trim: true,
    },

    username:{
        type: String,
        trim: true,
    },

    email:{
        type: String,
        trim: true,
    },

    psw:{
        type: String,
        trim: true,
    }
}

);

managerSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('Manager', managerSchema);
