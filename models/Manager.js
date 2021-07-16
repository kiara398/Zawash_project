const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose')
const managerSchema = new mongoose.Schema({
    fnames:{
        type: String,
        trim: true,
    },

    phonenumber:{
        type: Number,
    },

    email:{
        type: String,
        required:'please enter valid email',
        unique: true,
        trim: true,
    },

    password:{
        type: String,
    }
}

);


managerSchema.plugin(passportLocalMongoose, { usernameField: 'email' });
module.exports = mongoose.model('Manager', managerSchema);
